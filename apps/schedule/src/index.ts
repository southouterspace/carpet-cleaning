// The scheduling app's Worker. Static files (the Today screen) come from
// public/; this handles /api/*. Everything is scoped to the signed-in cleaner.

import { readSession, sessionCookie, sha256Hex, signOutCookie } from "./auth"
import { daysBetween, isDay, nowIn, weekday } from "./dates"
import {
  type BookedJob,
  type Conflict,
  type Settings,
  conflictFor,
  jobMinutes,
  legs,
  openWindows,
  resolveSettings,
} from "./engine"
import { parseQuickAdd } from "./quickadd"

export interface Env {
  DB: D1Database
  ASSETS: Fetcher
  TIME_ZONE: string
  SESSION_SECRET: string
}

type Status = BookedJob["status"]
const STATUSES: Status[] = ["requested", "confirmed", "done", "canceled"]

interface CleanerRow {
  id: string
  name: string
  email: string
  code_hash: string
  home_zip: string | null
  settings: string
}

export interface JobRow {
  id: string
  cleaner_id: string
  status: Status
  day: string
  start_min: number
  minutes: number
  window_start: number | null
  window_end: number | null
  name: string
  phone: string | null
  email: string | null
  address: string | null
  zip: string | null
  rooms: number
  stairs: number
  pets: number
  notes: string | null
  source: string
  lead_id: string | null
  created_at: string
  updated_at: string
}

interface Cleaner {
  id: string
  name: string
  homeZip: string | null
  settings: Settings
}

const json = (data: unknown, status = 200, headers: HeadersInit = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...headers },
  })

const error = (status: number, message: string, extra: Record<string, unknown> = {}) =>
  json({ error: message, ...extra }, status)

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    if (!url.pathname.startsWith("/api/")) return env.ASSETS.fetch(request)
    try {
      return await route(request, url, env)
    } catch (err) {
      console.error("schedule api error", err)
      return error(500, "Something went wrong. Try again.")
    }
  },
} satisfies ExportedHandler<Env>

async function route(request: Request, url: URL, env: Env): Promise<Response> {
  const { pathname } = url
  const method = request.method

  if (method !== "GET" && method !== "HEAD") {
    // Same-origin only for writes. SameSite=Strict covers the cookie; this covers the rest.
    const origin = request.headers.get("Origin")
    if (origin && origin !== url.origin) return error(403, "Wrong origin.")
  }

  if (pathname === "/api/login" && method === "POST") return login(request, env)
  if (pathname === "/api/logout" && method === "POST") return json({ ok: true }, 200, { "Set-Cookie": signOutCookie() })

  if (!env.SESSION_SECRET) return error(503, "Sign-in isn't set up yet.")
  const cleanerId = await readSession(request, env.SESSION_SECRET)
  if (!cleanerId) return error(401, "Sign in first.")
  const cleaner = await loadCleaner(env.DB, cleanerId)
  if (!cleaner) return error(401, "Sign in first.", {})

  if (pathname === "/api/me" && method === "GET") {
    return json({ name: cleaner.name, homeZip: cleaner.homeZip, settings: cleaner.settings, timeZone: env.TIME_ZONE })
  }
  if (pathname === "/api/settings" && method === "PUT") return saveSettings(request, env, cleaner)
  if (pathname === "/api/day" && method === "GET") return dayView(url, env, cleaner)
  if (pathname === "/api/windows" && method === "GET") return windows(url, env, cleaner)
  if (pathname === "/api/jobs" && method === "POST") return addJob(request, env, cleaner)

  const m = pathname.match(/^\/api\/jobs\/([\w-]+)(\/confirm)?$/)
  if (m?.[1]) {
    if (m[2] && method === "POST") return updateJob(env, cleaner, m[1], { status: "confirmed" })
    if (!m[2] && method === "PATCH") return updateJob(env, cleaner, m[1], await readJson(request))
    if (!m[2] && method === "GET") {
      const job = await loadJob(env.DB, cleaner.id, m[1])
      return job ? json(publicJob(job)) : error(404, "No such job.")
    }
  }
  return error(404, "Not found.")
}

async function readJson(request: Request): Promise<Record<string, unknown>> {
  try {
    const body = await request.json()
    return body && typeof body === "object" ? (body as Record<string, unknown>) : {}
  } catch {
    return {}
  }
}

async function login(request: Request, env: Env): Promise<Response> {
  if (!env.SESSION_SECRET) return error(503, "Sign-in isn't set up yet.")
  const body = await readJson(request)
  const email = String(body.email ?? "").trim().toLowerCase()
  const code = String(body.code ?? "").trim()
  if (!email || !code) return error(400, "Enter your email and code.")
  const row = await env.DB.prepare("SELECT * FROM cleaners WHERE email = ?").bind(email).first<CleanerRow>()
  const hash = await sha256Hex(code)
  if (!row || row.code_hash !== hash) return error(401, "That email and code don't match.")
  return json({ ok: true, name: row.name }, 200, { "Set-Cookie": await sessionCookie(env.SESSION_SECRET, row.id) })
}

async function loadCleaner(db: D1Database, id: string): Promise<Cleaner | null> {
  const row = await db.prepare("SELECT * FROM cleaners WHERE id = ?").bind(id).first<CleanerRow>()
  if (!row) return null
  let saved: unknown = {}
  try {
    saved = JSON.parse(row.settings)
  } catch {}
  return { id: row.id, name: row.name, homeZip: row.home_zip, settings: resolveSettings(saved) }
}

async function saveSettings(request: Request, env: Env, cleaner: Cleaner): Promise<Response> {
  const body = await readJson(request)
  const next = resolveSettings({ ...cleaner.settings, ...(body.settings as object) })
  const problem = checkSettings(next)
  if (problem) return error(400, problem)
  const homeZip = typeof body.homeZip === "string" ? body.homeZip.trim() || null : cleaner.homeZip
  if (homeZip && !/^\d{5}$/.test(homeZip)) return error(400, "Home ZIP should be 5 digits.")
  await env.DB.prepare("UPDATE cleaners SET settings = ?, home_zip = ? WHERE id = ?")
    .bind(JSON.stringify(next), homeZip, cleaner.id)
    .run()
  return json({ settings: next, homeZip })
}

function checkSettings(s: Settings): string | null {
  const mins = (n: unknown) => typeof n === "number" && Number.isInteger(n) && n >= 0 && n <= 24 * 60
  const keys: (keyof Settings)[] = [
    "dayStart", "dayEnd", "minutesPerRoom", "minutesPerStairs", "petMinutesPerRoom", "setupMinutes",
    "bufferMinutes", "windowMinutes", "minNoticeHours", "maxDaysAhead", "maxJobsPerDay",
  ]
  for (const k of keys) if (!mins(s[k])) return `${k} should be a whole number.`
  if (!mins(s.windowStep) || s.windowStep < 15) return "windowStep should be at least 15 minutes."
  if (s.dayEnd <= s.dayStart) return "The work day has to end after it starts."
  if (!Array.isArray(s.workDays) || s.workDays.some((d) => !Number.isInteger(d) || d < 0 || d > 6))
    return "workDays should be days 0 (Sunday) to 6."
  if (s.lunch !== null && (typeof s.lunch !== "object" || !mins(s.lunch.start) || !mins(s.lunch.minutes)))
    return "lunch should have a start and minutes, or be null."
  return null
}

async function jobsOn(db: D1Database, cleanerId: string, day: string): Promise<JobRow[]> {
  const { results } = await db
    .prepare("SELECT * FROM jobs WHERE cleaner_id = ? AND day = ? ORDER BY start_min")
    .bind(cleanerId, day)
    .all<JobRow>()
  return results
}

async function loadJob(db: D1Database, cleanerId: string, id: string): Promise<JobRow | null> {
  return db.prepare("SELECT * FROM jobs WHERE cleaner_id = ? AND id = ?").bind(cleanerId, id).first<JobRow>()
}

const booked = (r: JobRow): BookedJob => ({ id: r.id, start: r.start_min, minutes: r.minutes, zip: r.zip, status: r.status })

function publicJob(r: JobRow) {
  return {
    id: r.id,
    status: r.status,
    day: r.day,
    start: r.start_min,
    minutes: r.minutes,
    window: r.window_start === null ? null : { start: r.window_start, end: r.window_end },
    name: r.name,
    phone: r.phone,
    email: r.email,
    address: r.address,
    zip: r.zip,
    rooms: r.rooms,
    stairs: r.stairs,
    pets: !!r.pets,
    notes: r.notes,
    source: r.source,
    updatedAt: r.updated_at,
  }
}

async function dayView(url: URL, env: Env, cleaner: Cleaner): Promise<Response> {
  const day = url.searchParams.get("date") ?? nowIn(env.TIME_ZONE).day
  if (!isDay(day)) return error(400, "date should be YYYY-MM-DD.")
  const rows = await jobsOn(env.DB, cleaner.id, day)
  const active = rows.filter((r) => r.status !== "canceled")
  const drive = legs(rows.map(booked), cleaner.homeZip, cleaner.settings)
  return json({
    day,
    weekday: weekday(day),
    workDay: cleaner.settings.workDays.includes(weekday(day)),
    settings: { dayStart: cleaner.settings.dayStart, dayEnd: cleaner.settings.dayEnd, lunch: cleaner.settings.lunch },
    totals: {
      jobs: active.length,
      rooms: active.reduce((n, r) => n + r.rooms, 0),
      minutes: active.reduce((n, r) => n + r.minutes, 0),
      driveMinutes: drive.reduce((n, l) => n + l.minutes, 0),
      requested: active.filter((r) => r.status === "requested").length,
    },
    jobs: rows.map(publicJob),
    legs: drive,
  })
}

async function windows(url: URL, env: Env, cleaner: Cleaner): Promise<Response> {
  const day = url.searchParams.get("date") ?? ""
  if (!isDay(day)) return error(400, "date should be YYYY-MM-DD.")
  const size = {
    rooms: intParam(url.searchParams.get("rooms")),
    stairs: intParam(url.searchParams.get("stairs")),
    pets: url.searchParams.get("pets") === "true",
  }
  const minutes = jobMinutes(size, cleaner.settings)
  const now = nowIn(env.TIME_ZONE)
  const rows = await jobsOn(env.DB, cleaner.id, day)
  return json({
    day,
    minutes,
    windows: openWindows(
      {
        minutes,
        zip: url.searchParams.get("zip"),
        jobs: rows.map(booked),
        weekday: weekday(day),
        daysAhead: daysBetween(now.day, day),
        nowMinutes: now.minutes,
        homeZip: cleaner.homeZip,
      },
      cleaner.settings,
    ),
  })
}

function intParam(v: unknown): number {
  const n = Number(v ?? 0)
  return Number.isFinite(n) && n > 0 ? Math.min(Math.floor(n), 50) : 0
}

const str = (v: unknown, max = 200): string | null => {
  if (typeof v !== "string") return null
  const t = v.trim().slice(0, max)
  return t || null
}

function describeConflict(c: Conflict): string {
  switch (c.kind) {
    case "day-off":
      return "That's a day off."
    case "outside-hours":
      return "That runs outside your work hours."
    case "lunch":
      return "That runs into lunch."
    case "full":
      return "That day already has your max number of jobs."
    case "overlap":
      return "That overlaps another job."
    case "drive":
      return `Not enough time to drive between jobs (needs ${c.needMinutes} min).`
  }
}

/**
 * Add a job. Send `quick` for a quick-add line, or the fields. Jobs the
 * cleaner adds are confirmed. A conflict returns 409 unless `force` is true.
 */
async function addJob(request: Request, env: Env, cleaner: Cleaner): Promise<Response> {
  const body = await readJson(request)
  const today = nowIn(env.TIME_ZONE).day
  const quick = typeof body.quick === "string" ? parseQuickAdd(body.quick, today) : null

  const name = str(body.name, 120) ?? quick?.name ?? null
  if (!name) return error(400, "Add a name.")
  const day = (body.day as string | undefined) ?? quick?.day ?? today
  if (!isDay(day)) return error(400, "day should be YYYY-MM-DD.")
  const start = typeof body.start === "number" ? body.start : (quick?.start ?? null)
  if (start === null || !Number.isInteger(start) || start < 0 || start >= 24 * 60)
    return error(400, "Add a start time.", { draft: quick })
  const size = {
    rooms: body.rooms !== undefined ? intParam(body.rooms) : (quick?.rooms ?? 0),
    stairs: body.stairs !== undefined ? intParam(body.stairs) : (quick?.stairs ?? 0),
    pets: body.pets !== undefined ? body.pets === true : (quick?.pets ?? false),
  }
  const minutes =
    typeof body.minutes === "number" && Number.isInteger(body.minutes) && body.minutes > 0 && body.minutes <= 720
      ? body.minutes
      : jobMinutes(size, cleaner.settings)
  const zip = str(body.zip, 5) ?? quick?.zip ?? null
  if (zip && !/^\d{5}$/.test(zip)) return error(400, "ZIP should be 5 digits.")

  const existing = await jobsOn(env.DB, cleaner.id, day)
  const conflict = conflictFor({ start, minutes, zip }, existing.map(booked), weekday(day), cleaner.homeZip, cleaner.settings)
  if (conflict && body.force !== true)
    return error(409, describeConflict(conflict), { conflict, draft: { name, day, start, minutes, zip, ...size } })

  const id = crypto.randomUUID()
  await env.DB.prepare(
    `INSERT INTO jobs (id, cleaner_id, status, day, start_min, minutes, name, phone, email, address, zip,
       rooms, stairs, pets, notes, source)
     VALUES (?, ?, 'confirmed', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  )
    .bind(
      id, cleaner.id, day, start, minutes, name,
      str(body.phone, 30) ?? quick?.phone ?? null,
      str(body.email, 200),
      str(body.address, 200),
      zip,
      size.rooms, size.stairs, size.pets ? 1 : 0,
      str(body.notes, 1000) ?? (quick?.notes || null),
      quick ? "quick-add" : "app",
    )
    .run()
  const job = await loadJob(env.DB, cleaner.id, id)
  return json(publicJob(job as JobRow), 201)
}

/**
 * Change a job: move it (day/start), resize it, change status or details.
 * A move is checked for conflicts (409 unless `force`); the client keeps the
 * old values for Undo. Confirming or canceling never conflicts.
 */
async function updateJob(env: Env, cleaner: Cleaner, id: string, body: Record<string, unknown>): Promise<Response> {
  const job = await loadJob(env.DB, cleaner.id, id)
  if (!job) return error(404, "No such job.")

  const day = body.day !== undefined ? body.day : job.day
  if (!isDay(day)) return error(400, "day should be YYYY-MM-DD.")
  const start = body.start !== undefined ? body.start : job.start_min
  if (typeof start !== "number" || !Number.isInteger(start) || start < 0 || start >= 24 * 60)
    return error(400, "start should be minutes after midnight.")
  const minutes = body.minutes !== undefined ? body.minutes : job.minutes
  if (typeof minutes !== "number" || !Number.isInteger(minutes) || minutes <= 0 || minutes > 720)
    return error(400, "minutes should be 1 to 720.")
  const status = body.status !== undefined ? body.status : job.status
  if (!STATUSES.includes(status as Status)) return error(400, "Unknown status.")
  const zip = body.zip !== undefined ? str(body.zip, 5) : job.zip
  if (zip && !/^\d{5}$/.test(zip)) return error(400, "ZIP should be 5 digits.")

  const moved = day !== job.day || start !== job.start_min || minutes !== job.minutes || zip !== job.zip
  const revived = job.status === "canceled" && status !== "canceled"
  if ((moved || revived) && status !== "canceled" && body.force !== true) {
    const others = await jobsOn(env.DB, cleaner.id, day)
    const conflict = conflictFor(
      { start, minutes, zip, ignoreId: job.id },
      others.map(booked),
      weekday(day),
      cleaner.homeZip,
      cleaner.settings,
    )
    if (conflict) return error(409, describeConflict(conflict), { conflict })
  }

  const text = (key: string, max: number, current: string | null) =>
    body[key] !== undefined ? str(body[key], max) : current
  const name = text("name", 120, job.name)
  if (!name) return error(400, "Add a name.")

  await env.DB.prepare(
    `UPDATE jobs SET day = ?, start_min = ?, minutes = ?, status = ?, zip = ?, name = ?, phone = ?, email = ?,
       address = ?, notes = ?, rooms = ?, stairs = ?, pets = ?, updated_at = datetime('now')
     WHERE id = ? AND cleaner_id = ?`,
  )
    .bind(
      day, start, minutes, status, zip, name,
      text("phone", 30, job.phone),
      text("email", 200, job.email),
      text("address", 200, job.address),
      text("notes", 1000, job.notes),
      body.rooms !== undefined ? intParam(body.rooms) : job.rooms,
      body.stairs !== undefined ? intParam(body.stairs) : job.stairs,
      body.pets !== undefined ? (body.pets === true ? 1 : 0) : job.pets,
      job.id, cleaner.id,
    )
    .run()
  const updated = await loadJob(env.DB, cleaner.id, job.id)
  return json(publicJob(updated as JobRow))
}
