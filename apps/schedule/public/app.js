// The cleaner's Today screen. Plain JS, no build step.
// Every change goes to the API; moves and cancels get an Undo bar.

const TZ = "America/Chicago"
const app = document.getElementById("app")
let day = todayIn(TZ)
let undoTimer = 0

if ("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js").catch(() => {})

// ---------- small helpers ----------

function todayIn(timeZone) {
  return new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date())
}
function addDays(d, n) {
  const x = new Date(`${d}T12:00:00Z`)
  x.setUTCDate(x.getUTCDate() + n)
  return x.toISOString().slice(0, 10)
}
function dayTitle(d) {
  const label = new Date(`${d}T12:00:00Z`).toLocaleDateString("en-US", { timeZone: "UTC", weekday: "short", month: "short", day: "numeric" })
  const today = todayIn(TZ)
  if (d === today) return `Today · ${label}`
  if (d === addDays(today, 1)) return `Tomorrow · ${label}`
  return label
}
function shortDay(d) {
  return new Date(`${d}T12:00:00Z`).toLocaleDateString("en-US", { timeZone: "UTC", weekday: "short", month: "short", day: "numeric" })
}
function time(min) {
  const h = Math.floor(min / 60), m = min % 60
  return `${h % 12 === 0 ? 12 : h % 12}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`
}
function range(a, b) {
  const [ta, tb] = [time(a), time(b)]
  return ta.slice(-2) === tb.slice(-2) ? `${ta.slice(0, -3)} – ${tb}` : `${ta} – ${tb}`
}
function duration(min) {
  const h = Math.floor(min / 60), m = min % 60
  return !h ? `${m} min` : m ? `${h} hr ${m} min` : `${h} hr`
}
function plural(n, word) {
  return `${n} ${word}${n === 1 ? "" : "s"}`
}
function hhmm(min) {
  return `${String(Math.floor(min / 60)).padStart(2, "0")}:${String(min % 60).padStart(2, "0")}`
}
function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c])
}

async function api(method, path, body) {
  const res = await fetch(path, {
    method,
    headers: body ? { "Content-Type": "application/json" } : {},
    body: body ? JSON.stringify(body) : undefined,
    credentials: "same-origin",
  })
  const data = await res.json().catch(() => ({}))
  if (res.status === 401) {
    showLogin()
    throw Object.assign(new Error(data.error || "Sign in first."), { status: 401 })
  }
  if (!res.ok) throw Object.assign(new Error(data.error || "Something went wrong."), { status: res.status, data })
  return data
}

function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)) } catch {}
}
function load(key) {
  try { return JSON.parse(localStorage.getItem(key) || "null") } catch { return null }
}

// ---------- sign in ----------

function showLogin() {
  app.replaceChildren(document.getElementById("login-tpl").content.cloneNode(true))
  const form = document.getElementById("login")
  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const err = form.querySelector(".err")
    err.hidden = true
    try {
      await api("POST", "/api/login", Object.fromEntries(new FormData(form)))
      showToday()
    } catch (error) {
      if (error.status === 401 && !form.isConnected) return
      err.textContent = error.message
      err.hidden = false
    }
  })
}

// ---------- today ----------

function showToday() {
  app.replaceChildren(document.getElementById("today-tpl").content.cloneNode(true))
  app.querySelectorAll("[data-go]").forEach((b) =>
    b.addEventListener("click", () => {
      day = addDays(day, Number(b.dataset.go))
      refresh()
    }),
  )
  const quick = document.getElementById("quick")
  quick.addEventListener("submit", (e) => {
    e.preventDefault()
    addQuick(quick.quick.value, false)
  })
  document.getElementById("undo-btn").addEventListener("click", runUndo)
  refresh()
}

async function refresh() {
  const offline = document.getElementById("offline")
  try {
    const view = await api("GET", `/api/day?date=${day}`)
    save(`day:${day}`, view)
    if (offline) offline.hidden = true
    render(view)
  } catch (error) {
    if (error.status === 401) return
    const saved = load(`day:${day}`)
    if (offline) offline.hidden = false
    render(saved || { day, jobs: [], legs: [], totals: null, workDay: true })
  }
}

function render(view) {
  if (!document.getElementById("jobs")) return
  document.getElementById("day-title").textContent = dayTitle(view.day)
  const t = view.totals
  document.getElementById("totals").textContent = !t
    ? ""
    : t.jobs === 0
      ? view.workDay ? "Nothing booked yet." : "Day off."
      : [
          plural(t.jobs, "job"),
          plural(t.rooms, "room"),
          `${duration(t.minutes)} booked`,
          t.driveMinutes ? `${duration(t.driveMinutes)} driving` : "",
          t.requested ? plural(t.requested, "request") : "",
        ].filter(Boolean).join(" · ")

  const list = document.getElementById("jobs")
  const legs = new Map((view.legs || []).map((l) => [l.toId, l]))
  const jobs = view.jobs.filter((j) => j.status !== "canceled")
  if (!jobs.length) {
    list.innerHTML = `<li class="empty">${view.workDay ? "No jobs. Type one above to add it." : "Day off."}</li>`
    return
  }
  list.innerHTML = jobs
    .map((j, i) => {
      const leg = legs.get(j.id)
      const drive = leg && i > 0
        ? `<li class="drive${leg.slack < 0 ? " late" : ""}">Drive about ${duration(leg.minutes)}${leg.slack < 0 ? ` · ${duration(-leg.slack)} short` : ""}</li>`
        : ""
      return drive + jobCard(j)
    })
    .join("")
  list.querySelectorAll("[data-act]").forEach((b) => b.addEventListener("click", () => act(b.dataset.act, b.dataset.id, view)))
}

function jobCard(j) {
  const size = [
    j.rooms ? plural(j.rooms, "room") : "",
    j.stairs ? (j.stairs === 1 ? "stairs" : `${j.stairs} staircases`) : "",
    j.pets ? "pets" : "",
  ].filter(Boolean).join(", ")
  const state = j.status === "requested"
    ? `<span class="pill">Request</span>`
    : `<span class="state">${j.status === "done" ? "Done" : "Confirmed"}</span>`
  const mapUrl = j.address ? `https://maps.google.com/?q=${encodeURIComponent(j.address + (j.zip ? ` ${j.zip}` : ""))}` : ""
  const acts = [
    j.status === "requested" ? `<button class="btn primary" data-act="confirm" data-id="${j.id}">Confirm</button>` : "",
    mapUrl ? `<a class="btn" href="${esc(mapUrl)}" target="_blank" rel="noopener">Navigate</a>` : "",
    j.phone ? `<a class="btn" href="tel:${esc(j.phone)}">Call</a><a class="btn" href="sms:${esc(j.phone)}">Text</a>` : "",
    j.status === "confirmed" ? `<button class="btn" data-act="done" data-id="${j.id}">Done</button>` : "",
    j.status !== "done" ? `<button class="btn" data-act="move" data-id="${j.id}">Move</button>` : "",
    j.status !== "done" ? `<button class="btn" data-act="cancel" data-id="${j.id}">Cancel</button>` : "",
  ].join("")
  return `<li class="job ${j.status}" id="job-${j.id}">
    <div class="row"><span class="when">${range(j.start, j.start + j.minutes)}</span>${state}</div>
    <div class="name">${esc(j.name)}${size ? ` · ${esc(size)}` : ""}</div>
    ${j.address || j.zip ? `<div class="where">${esc(j.address || j.zip)}</div>` : ""}
    ${j.window ? `<div class="where">Customer was told ${range(j.window.start, j.window.end)}</div>` : ""}
    ${j.notes ? `<div class="note">${esc(j.notes)}</div>` : ""}
    ${j.source.startsWith("site:") ? `<div class="where">From ${esc(j.source.slice(5))}</div>` : ""}
    <div class="acts">${acts}</div>
  </li>`
}

async function act(kind, id, view) {
  const job = view.jobs.find((j) => j.id === id)
  if (!job) return
  if (kind === "move") return openMove(job)
  try {
    if (kind === "confirm") {
      await api("POST", `/api/jobs/${id}/confirm`)
      offerUndo(`Confirmed ${job.name}`, { id, body: { status: job.status } })
    } else if (kind === "done") {
      await api("PATCH", `/api/jobs/${id}`, { status: "done" })
      offerUndo(`Marked ${job.name} done`, { id, body: { status: job.status } })
    } else if (kind === "cancel") {
      await api("PATCH", `/api/jobs/${id}`, { status: "canceled" })
      offerUndo(`Canceled ${job.name}`, { id, body: { status: job.status, force: true } })
    }
    refresh()
  } catch (error) {
    flash(error.message)
  }
}

function openMove(job) {
  const card = document.getElementById(`job-${job.id}`)
  if (!card || card.querySelector(".move")) return
  const form = document.createElement("form")
  form.className = "move"
  form.innerHTML = `<label class="sr" for="mv-d-${job.id}">Day</label><input id="mv-d-${job.id}" type="date" name="day" value="${job.day}" required>
    <label class="sr" for="mv-t-${job.id}">Start</label><input id="mv-t-${job.id}" type="time" name="time" value="${hhmm(job.start)}" required>
    <button class="btn primary">Move</button>`
  card.append(form)
  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const [h, m] = form.time.value.split(":").map(Number)
    const next = { day: form.day.value, start: h * 60 + m }
    try {
      await moveJob(job, next, false)
    } catch (error) {
      if (error.status === 409 && confirmForce(error.message)) await moveJob(job, next, true).catch((e2) => flash(e2.message))
      else if (error.status !== 409) flash(error.message)
    }
  })
}

async function moveJob(job, next, force) {
  await api("PATCH", `/api/jobs/${job.id}`, { ...next, force })
  offerUndo(`Moved ${job.name} to ${next.day === job.day ? "" : `${shortDay(next.day)}, `}${time(next.start)}`, {
    id: job.id,
    body: { day: job.day, start: job.start, force: true },
  })
  if (next.day !== day) day = next.day
  refresh()
}

// A native confirm is the simplest honest "book it anyway?" on a phone.
function confirmForce(reason) {
  return window.confirm(`${reason}\n\nBook it anyway?`)
}

async function addQuick(text, force) {
  const form = document.getElementById("quick")
  const err = form.querySelector(".err")
  err.hidden = true
  if (!text.trim()) return
  try {
    const job = await api("POST", "/api/jobs", { quick: text, force })
    form.quick.value = ""
    offerUndo(`Added ${job.name} ${job.day === day ? "" : `on ${shortDay(job.day)} `}at ${time(job.start)}`, {
      id: job.id,
      body: { status: "canceled" },
    })
    if (job.day !== day) day = job.day
    refresh()
  } catch (error) {
    if (error.status === 409 && confirmForce(error.message)) return addQuick(text, true)
    if (error.status !== 401) {
      err.textContent = error.message
      err.hidden = false
    }
  }
}

// ---------- undo ----------

let pendingUndo = null

function offerUndo(text, undo) {
  pendingUndo = undo
  const bar = document.getElementById("undo")
  if (!bar) return
  document.getElementById("undo-text").textContent = text
  document.getElementById("undo-btn").hidden = !undo
  bar.hidden = false
  clearTimeout(undoTimer)
  undoTimer = setTimeout(() => {
    bar.hidden = true
    pendingUndo = null
  }, 8000)
}

function flash(text) {
  offerUndo(text, null)
}

async function runUndo() {
  const undo = pendingUndo
  pendingUndo = null
  document.getElementById("undo").hidden = true
  if (!undo) return
  try {
    const job = await api("PATCH", `/api/jobs/${undo.id}`, undo.body)
    if (job.day !== day) day = job.day
  } catch (error) {
    flash(error.message)
  }
  refresh()
}

// ---------- start ----------

api("GET", "/api/me").then(showToday).catch((error) => {
  if (error.status !== 401) {
    // Offline on open: show the saved day if there is one.
    showToday()
  }
})
