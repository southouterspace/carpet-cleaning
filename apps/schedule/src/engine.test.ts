import { describe, expect, test } from "bun:test"
import {
  type BookedJob,
  DEFAULT_SETTINGS as S,
  conflictFor,
  driveMinutes,
  formatDuration,
  formatTime,
  jobMinutes,
  legs,
  openWindows,
  resolveSettings,
} from "./engine"

const h = (hh: number, mm = 0) => hh * 60 + mm
const THU = 4
const SUN = 0

describe("jobMinutes", () => {
  test("setup plus rooms, stairs and pets, rounded to 5", () => {
    expect(jobMinutes({ rooms: 3, stairs: 0, pets: false })).toBe(30 + 75)
    expect(jobMinutes({ rooms: 4, stairs: 1, pets: true })).toBe(30 + 100 + 20 + 40)
    expect(jobMinutes({ rooms: 0, stairs: 0, pets: false })).toBe(30)
  })
  test("uses the cleaner's own pace", () => {
    const s = resolveSettings({ minutesPerRoom: 18, setupMinutes: 20 })
    expect(jobMinutes({ rooms: 3, stairs: 0, pets: false }, s)).toBe(75) // 74 rounds up
  })
})

describe("driveMinutes", () => {
  test("falls back when a ZIP is missing or unknown", () => {
    expect(driveMinutes(null, "77301")).toBe(20)
    expect(driveMinutes("77301", "90210")).toBe(20)
  })
  test("same ZIP is a short hop, and farther is longer", () => {
    expect(driveMinutes("77301", "77301")).toBe(10)
    const near = driveMinutes("77380", "77381")
    const far = driveMinutes("77380", "77356")
    expect(near).toBeLessThan(far)
    expect(far).toBeGreaterThan(30)
    expect(far % 5).toBe(0)
  })
})

describe("conflictFor", () => {
  const jobs: BookedJob[] = [
    { id: "a", start: h(9), minutes: 105, zip: "77301", status: "confirmed" },
    { id: "x", start: h(13), minutes: 60, zip: "77301", status: "canceled" },
  ]
  test("an open slot after the drive fits", () => {
    expect(conflictFor({ start: h(13), minutes: 120, zip: "77304" }, jobs, THU)).toBeNull()
  })
  test("days off, hours and lunch", () => {
    expect(conflictFor({ start: h(13), minutes: 60 }, jobs, SUN)?.kind).toBe("day-off")
    expect(conflictFor({ start: h(16, 30), minutes: 60 }, jobs, THU)?.kind).toBe("outside-hours")
    expect(conflictFor({ start: h(11, 45), minutes: 30 }, jobs, THU)?.kind).toBe("lunch")
  })
  test("overlap and too little drive time", () => {
    expect(conflictFor({ start: h(10), minutes: 60 }, jobs, THU)).toEqual({ kind: "overlap", withId: "a" })
    // a ends 10:45; a cross-town drive plus buffer doesn't fit by 11:00.
    const c = conflictFor({ start: h(11), minutes: 30, zip: "77356" }, jobs, THU, null, resolveSettings({ lunch: null }))
    expect(c?.kind).toBe("drive")
  })
  test("a job being moved doesn't conflict with itself", () => {
    expect(conflictFor({ start: h(9, 30), minutes: 105, zip: "77301", ignoreId: "a" }, jobs, THU)).toBeNull()
  })
  test("a full day takes no more", () => {
    const s = resolveSettings({ maxJobsPerDay: 1 })
    expect(conflictFor({ start: h(14), minutes: 60 }, jobs, THU, null, s)?.kind).toBe("full")
  })
})

describe("openWindows", () => {
  const base = { minutes: 105, zip: "77301", jobs: [] as BookedJob[], weekday: THU, daysAhead: 3, nowMinutes: h(10) }
  test("an empty day offers windows from open to close, skipping lunch", () => {
    const w = openWindows(base)
    expect(w[0]).toEqual({ start: h(8), end: h(9), jobStart: h(8) })
    expect(w.at(-1)?.start).toBe(h(15, 0)) // 15:00 + 1:45 = 16:45 fits; 15:30 doesn't
    expect(w.some((x) => x.start === h(11))).toBe(false) // would run into lunch
  })
  test("booked jobs and their drives block windows", () => {
    const jobs: BookedJob[] = [{ id: "a", start: h(13), minutes: 120, zip: "77301", status: "requested" }]
    const starts = openWindows({ ...base, jobs }).map((x) => x.start)
    expect(starts).not.toContain(h(13))
    expect(starts).not.toContain(h(15)) // a ends 15:00
  })
  test("minimum notice and how far out customers can book", () => {
    // Tomorrow at 10 AM now: 18 hours' notice means nothing before 4 AM... so 8 AM is fine.
    expect(openWindows({ ...base, daysAhead: 1 }).length).toBeGreaterThan(0)
    // Today: nothing.
    expect(openWindows({ ...base, daysAhead: 0 })).toEqual([])
    // Tomorrow at 8 PM now: nothing before 2 PM tomorrow.
    const late = openWindows({ ...base, daysAhead: 1, nowMinutes: h(20) })
    expect(late[0]?.start).toBe(h(14))
    expect(openWindows({ ...base, daysAhead: S.maxDaysAhead + 1 })).toEqual([])
  })
})

describe("legs", () => {
  test("drive and slack before each job, from home", () => {
    const jobs: BookedJob[] = [
      { id: "b", start: h(11), minutes: 60, zip: "77301", status: "confirmed" },
      { id: "a", start: h(9), minutes: 105, zip: "77301", status: "confirmed" },
    ]
    const out = legs(jobs, "77301")
    expect(out.map((l) => l.toId)).toEqual(["a", "b"])
    expect(out[1]).toEqual({ toId: "b", minutes: 10, slack: h(11) - (h(10, 45) + 10 + 10) })
  })
})

test("formatting", () => {
  expect(formatTime(h(8, 5))).toBe("8:05 AM")
  expect(formatTime(h(12))).toBe("12:00 PM")
  expect(formatTime(h(13, 30))).toBe("1:30 PM")
  expect(formatDuration(50)).toBe("50 min")
  expect(formatDuration(120)).toBe("2 hr")
  expect(formatDuration(440)).toBe("7 hr 20 min")
})
