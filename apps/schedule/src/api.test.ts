import { Database } from "bun:sqlite"
import { beforeEach, describe, expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { sha256Hex } from "./auth"
import { addDays, nowIn, weekday } from "./dates"
import worker, { type Env } from "./index"

// A small stand-in for D1 over bun:sqlite: enough of prepare/bind/first/all/run.
function fakeD1(db: Database): D1Database {
  const statement = (sql: string, params: unknown[] = []) => ({
    bind: (...p: unknown[]) => statement(sql, p),
    first: async () => db.query(sql).get(...(params as never[])) ?? null,
    all: async () => ({ results: db.query(sql).all(...(params as never[])), success: true, meta: {} }),
    run: async () => {
      db.query(sql).run(...(params as never[]))
      return { success: true, meta: {} }
    },
  })
  return { prepare: (sql: string) => statement(sql) } as unknown as D1Database
}

const TZ = "America/Chicago"
let env: Env
let cookie = ""

// A work day at least two days out, so minimum notice never gets in the way.
function nextWorkDay(): string {
  let day = addDays(nowIn(TZ).day, 2)
  while (weekday(day) === 0) day = addDays(day, 1)
  return day
}

async function call(method: string, path: string, body?: unknown, headers: Record<string, string> = {}) {
  const res = await worker.fetch(
    new Request(`https://schedule.test${path}`, {
      method,
      headers: { "Content-Type": "application/json", Cookie: cookie, ...headers },
      body: body === undefined ? undefined : JSON.stringify(body),
    }),
    env,
  )
  return { status: res.status, body: (await res.json()) as any, headers: res.headers }
}

beforeEach(async () => {
  const db = new Database(":memory:")
  db.exec(readFileSync(new URL("../migrations/0001_init.sql", import.meta.url), "utf8"))
  db.query("INSERT INTO cleaners (id, name, email, code_hash, home_zip) VALUES (?, ?, ?, ?, ?)").run(
    "c1", "Sam's Carpet Care", "sam@example.com", await sha256Hex("482913"), "77301",
  )
  db.query("INSERT INTO cleaners (id, name, email, code_hash) VALUES (?, ?, ?, ?)").run(
    "c2", "Other", "other@example.com", await sha256Hex("111111"),
  )
  env = {
    DB: fakeD1(db),
    ASSETS: { fetch: async () => new Response("asset") } as unknown as Fetcher,
    TIME_ZONE: TZ,
    SESSION_SECRET: "test-secret",
  }
  cookie = ""
  const res = await call("POST", "/api/login", { email: "Sam@Example.com ", code: "482913" })
  cookie = (res.headers.get("Set-Cookie") ?? "").split(";")[0] ?? ""
})

describe("sign-in", () => {
  test("wrong code, no cookie, forged cookie", async () => {
    expect((await call("POST", "/api/login", { email: "sam@example.com", code: "000000" })).status).toBe(401)
    const saved = cookie
    cookie = ""
    expect((await call("GET", "/api/me")).status).toBe(401)
    cookie = saved.replace("c1.", "c2.")
    expect((await call("GET", "/api/me")).status).toBe(401)
    cookie = saved
    expect((await call("GET", "/api/me")).body.name).toBe("Sam's Carpet Care")
  })
  test("writes from another site are refused", async () => {
    const res = await call("POST", "/api/jobs", { quick: "Lee 2 rooms 9am" }, { Origin: "https://evil.test" })
    expect(res.status).toBe(403)
  })
  test("non-API paths go to static files", async () => {
    const res = await worker.fetch(new Request("https://schedule.test/"), env)
    expect(await res.text()).toBe("asset")
  })
})

describe("jobs", () => {
  test("quick add, day view with drives and totals", async () => {
    const day = nextWorkDay()
    const [mm, dd] = [Number(day.slice(5, 7)), Number(day.slice(8, 10))]
    const a = await call("POST", "/api/jobs", { quick: `Lee 4 rooms pets ${mm}/${dd} 9am 77304` })
    expect(a.status).toBe(201)
    expect(a.body).toMatchObject({ name: "Lee", rooms: 4, pets: true, start: 540, minutes: 170, status: "confirmed" })
    const b = await call("POST", "/api/jobs", { name: "Brooks", rooms: 2, day, start: 14 * 60, zip: "77301" })
    expect(b.status).toBe(201)

    const view = await call("GET", `/api/day?date=${day}`)
    expect(view.body.jobs.map((j: any) => j.name)).toEqual(["Lee", "Brooks"])
    expect(view.body.totals).toMatchObject({ jobs: 2, rooms: 6, minutes: 170 + 80 })
    expect(view.body.legs).toHaveLength(2)
  })

  test("a conflict returns 409 with the reason, and force books anyway", async () => {
    const day = nextWorkDay()
    await call("POST", "/api/jobs", { name: "Lee", rooms: 3, day, start: 9 * 60 })
    const clash = await call("POST", "/api/jobs", { name: "Ann", rooms: 2, day, start: 9 * 60 + 30 })
    expect(clash.status).toBe(409)
    expect(clash.body.conflict.kind).toBe("overlap")
    const forced = await call("POST", "/api/jobs", { name: "Ann", rooms: 2, day, start: 9 * 60 + 30, force: true })
    expect(forced.status).toBe(201)
  })

  test("move with conflict check, Undo by moving back, confirm, cancel", async () => {
    const day = nextWorkDay()
    const lee = (await call("POST", "/api/jobs", { name: "Lee", rooms: 3, day, start: 9 * 60 })).body
    const ann = (await call("POST", "/api/jobs", { name: "Ann", rooms: 2, day, start: 14 * 60 })).body

    expect((await call("PATCH", `/api/jobs/${ann.id}`, { start: 9 * 60 + 30 })).status).toBe(409)
    const moved = await call("PATCH", `/api/jobs/${ann.id}`, { start: 15 * 60 })
    expect(moved.body.start).toBe(15 * 60)
    const undone = await call("PATCH", `/api/jobs/${ann.id}`, { start: 14 * 60 })
    expect(undone.body.start).toBe(14 * 60)

    // A requested job (as from a city site) gets confirmed.
    await call("PATCH", `/api/jobs/${lee.id}`, { status: "requested" })
    expect((await call("POST", `/api/jobs/${lee.id}/confirm`)).body.status).toBe("confirmed")

    // Canceling frees the time.
    await call("PATCH", `/api/jobs/${lee.id}`, { status: "canceled" })
    expect((await call("PATCH", `/api/jobs/${ann.id}`, { start: 9 * 60 })).status).toBe(200)
  })

  test("open windows skip booked time", async () => {
    const day = nextWorkDay()
    await call("POST", "/api/jobs", { name: "Lee", rooms: 3, day, start: 9 * 60, zip: "77301" })
    const res = await call("GET", `/api/windows?date=${day}&rooms=2&zip=77301`)
    const starts = res.body.windows.map((w: any) => w.start)
    expect(starts).not.toContain(9 * 60)
    expect(starts).toContain(13 * 60)
  })

  test("a cleaner can't see or change another cleaner's jobs", async () => {
    const day = nextWorkDay()
    const lee = (await call("POST", "/api/jobs", { name: "Lee", rooms: 3, day, start: 9 * 60 })).body
    const res = await call("POST", "/api/login", { email: "other@example.com", code: "111111" })
    cookie = (res.headers.get("Set-Cookie") ?? "").split(";")[0] ?? ""
    expect((await call("GET", `/api/jobs/${lee.id}`)).status).toBe(404)
    expect((await call("PATCH", `/api/jobs/${lee.id}`, { status: "canceled" })).status).toBe(404)
    expect((await call("GET", `/api/day?date=${day}`)).body.jobs).toEqual([])
  })

  test("bad input is a 400, not a crash", async () => {
    expect((await call("GET", "/api/day?date=2026-13-40")).status).toBe(400)
    expect((await call("POST", "/api/jobs", { quick: "Lee 3 rooms" })).status).toBe(400) // no time
    expect((await call("PUT", "/api/settings", { settings: { dayEnd: 60 } })).status).toBe(400)
    expect((await call("PUT", "/api/settings", { settings: { minutesPerRoom: 20 } })).body.settings.minutesPerRoom).toBe(20)
  })
})
