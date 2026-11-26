// The scheduling engine: how long a job takes, how long the drive is, and
// which arrival windows are still open on a day. Pure functions, no I/O.
// Times are minutes after local midnight in the cleaner's time zone.

export interface Settings {
  /** Work day, minutes after midnight. Default 8:00 to 17:00. */
  dayStart: number
  dayEnd: number
  /** Days of the week the cleaner works, 0 = Sunday. Default Mon to Sat. */
  workDays: number[]
  /** Lunch block, or null for none. Default 12:00 to 12:30. */
  lunch: { start: number; minutes: number } | null
  /** Minutes per room, per staircase, extra per room with pets, setup + teardown. */
  minutesPerRoom: number
  minutesPerStairs: number
  petMinutesPerRoom: number
  setupMinutes: number
  /** Gap kept after every job on top of the drive. */
  bufferMinutes: number
  /** Customer windows: how wide an arrival window is, and how far apart they start. */
  windowMinutes: number
  windowStep: number
  /** Customers can't book sooner than this many hours ahead, or more than this many days out. */
  minNoticeHours: number
  maxDaysAhead: number
  maxJobsPerDay: number
}

export const DEFAULT_SETTINGS: Settings = {
  dayStart: 8 * 60,
  dayEnd: 17 * 60,
  workDays: [1, 2, 3, 4, 5, 6],
  lunch: { start: 12 * 60, minutes: 30 },
  minutesPerRoom: 25,
  minutesPerStairs: 20,
  petMinutesPerRoom: 10,
  setupMinutes: 30,
  bufferMinutes: 10,
  windowMinutes: 60,
  windowStep: 30,
  minNoticeHours: 18,
  maxDaysAhead: 21,
  maxJobsPerDay: 5,
}

/** Merge saved settings over the defaults, ignoring keys we don't know. */
export function resolveSettings(saved: unknown): Settings {
  const out: Settings = { ...DEFAULT_SETTINGS }
  if (saved && typeof saved === "object") {
    for (const key of Object.keys(DEFAULT_SETTINGS) as (keyof Settings)[]) {
      const value = (saved as Record<string, unknown>)[key]
      if (value !== undefined) (out as unknown as Record<string, unknown>)[key] = value
    }
  }
  return out
}

export interface JobSize {
  rooms: number
  stairs: number
  pets: boolean
}

/** How long a job takes on site, rounded up to 5 minutes. */
export function jobMinutes(size: JobSize, s: Settings = DEFAULT_SETTINGS): number {
  const rooms = Math.max(0, size.rooms)
  const raw =
    s.setupMinutes +
    rooms * s.minutesPerRoom +
    Math.max(0, size.stairs) * s.minutesPerStairs +
    (size.pets ? rooms * s.petMinutesPerRoom : 0)
  return Math.ceil(raw / 5) * 5
}

// Approximate ZIP centers for the cities we serve (lat, lon). Close enough to
// guess a drive; we don't call a maps API, so this stays on Cloudflare only.
const ZIP_CENTERS: Record<string, [number, number]> = {
  "77301": [30.31, -95.45], "77302": [30.23, -95.37], "77303": [30.38, -95.38],
  "77304": [30.33, -95.52], "77306": [30.29, -95.3], "77316": [30.36, -95.68],
  "77318": [30.43, -95.55], "77354": [30.21, -95.66], "77355": [30.16, -95.75],
  "77356": [30.44, -95.67], "77373": [30.06, -95.38], "77375": [30.08, -95.62],
  "77377": [30.06, -95.69], "77378": [30.44, -95.47], "77379": [30.03, -95.53],
  "77380": [30.14, -95.47], "77381": [30.18, -95.52], "77382": [30.2, -95.56],
  "77384": [30.23, -95.49], "77385": [30.19, -95.42], "77386": [30.13, -95.41],
  "77388": [30.05, -95.47], "77389": [30.11, -95.51],
}

/** Used when either ZIP is missing or unknown. */
export const DEFAULT_DRIVE_MINUTES = 20

/**
 * Estimated drive between two ZIPs, rounded up to 5 minutes: straight-line
 * miles times 1.35 for roads, at 35 mph, plus 5 minutes to park and load.
 */
export function driveMinutes(fromZip?: string | null, toZip?: string | null): number {
  if (!fromZip || !toZip) return DEFAULT_DRIVE_MINUTES
  if (fromZip === toZip) return 10
  const a = ZIP_CENTERS[fromZip]
  const b = ZIP_CENTERS[toZip]
  if (!a || !b) return DEFAULT_DRIVE_MINUTES
  const miles = haversineMiles(a, b) * 1.35
  return Math.ceil((5 + (miles / 35) * 60) / 5) * 5
}

function haversineMiles([lat1, lon1]: [number, number], [lat2, lon2]: [number, number]): number {
  const r = (d: number) => (d * Math.PI) / 180
  const dLat = r(lat2 - lat1)
  const dLon = r(lon2 - lon1)
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(r(lat1)) * Math.cos(r(lat2)) * Math.sin(dLon / 2) ** 2
  return 2 * 3958.8 * Math.asin(Math.sqrt(h))
}

export interface BookedJob {
  id: string
  start: number
  minutes: number
  zip?: string | null
  status: "requested" | "confirmed" | "done" | "canceled"
}

export interface Leg {
  /** The job this drive leads to. */
  toId: string
  minutes: number
  /** Minutes free between finishing the drive and the job's start. Negative means late. */
  slack: number
}

/** Jobs that hold time on the calendar. Canceled ones don't. */
export function activeJobs<T extends BookedJob>(jobs: T[]): T[] {
  return jobs.filter((j) => j.status !== "canceled").sort((a, b) => a.start - b.start)
}

/** The drive before each job, from home or the previous job. */
export function legs(jobs: BookedJob[], homeZip?: string | null, s: Settings = DEFAULT_SETTINGS): Leg[] {
  const out: Leg[] = []
  let freeAt = s.dayStart - DEFAULT_DRIVE_MINUTES * 3 // leaving home is never the problem
  let fromZip = homeZip
  for (const job of activeJobs(jobs)) {
    const drive = driveMinutes(fromZip, job.zip)
    out.push({ toId: job.id, minutes: drive, slack: job.start - (freeAt + drive) })
    freeAt = job.start + job.minutes + s.bufferMinutes
    fromZip = job.zip
  }
  return out
}

export interface Candidate {
  start: number
  minutes: number
  zip?: string | null
  /** Ignore this job id, e.g. the job being moved. */
  ignoreId?: string
}

export type Conflict =
  | { kind: "day-off" }
  | { kind: "outside-hours" }
  | { kind: "lunch" }
  | { kind: "full" }
  | { kind: "overlap"; withId: string }
  | { kind: "drive"; withId: string; needMinutes: number }

/** Why a job can't go at a time, or null if it fits. Lists the first problem. */
export function conflictFor(
  candidate: Candidate,
  jobs: BookedJob[],
  weekday: number,
  homeZip?: string | null,
  s: Settings = DEFAULT_SETTINGS,
): Conflict | null {
  if (!s.workDays.includes(weekday)) return { kind: "day-off" }
  const end = candidate.start + candidate.minutes
  if (candidate.start < s.dayStart || end > s.dayEnd) return { kind: "outside-hours" }
  if (s.lunch) {
    const lEnd = s.lunch.start + s.lunch.minutes
    if (candidate.start < lEnd && end > s.lunch.start) return { kind: "lunch" }
  }
  const others = activeJobs(jobs).filter((j) => j.id !== candidate.ignoreId)
  if (others.length >= s.maxJobsPerDay) return { kind: "full" }

  for (const job of others) {
    const jobEnd = job.start + job.minutes
    if (candidate.start < jobEnd && end > job.start) return { kind: "overlap", withId: job.id }
  }
  const before = [...others].reverse().find((j) => j.start + j.minutes <= candidate.start)
  const after = others.find((j) => j.start >= end)
  if (before) {
    const need = s.bufferMinutes + driveMinutes(before.zip, candidate.zip)
    if (candidate.start - (before.start + before.minutes) < need)
      return { kind: "drive", withId: before.id, needMinutes: need }
  }
  if (after) {
    const need = s.bufferMinutes + driveMinutes(candidate.zip, after.zip)
    if (after.start - end < need) return { kind: "drive", withId: after.id, needMinutes: need }
  }
  return null
}

export interface ArrivalWindow {
  /** Arrival window shown to the customer. */
  start: number
  end: number
  /** When the job is penciled in: the window's start. */
  jobStart: number
}

/**
 * Arrival windows a customer can pick for a job of `minutes` at `zip`.
 * A window is open when the job fits starting at the window's start and the
 * start is at least `minNoticeHours` away.
 */
export function openWindows(
  args: {
    minutes: number
    zip?: string | null
    jobs: BookedJob[]
    weekday: number
    /** Days from today to the day being checked, 0 = today. */
    daysAhead: number
    /** Minutes after midnight right now, in the same zone. */
    nowMinutes: number
    homeZip?: string | null
  },
  s: Settings = DEFAULT_SETTINGS,
): ArrivalWindow[] {
  if (args.daysAhead < 0 || args.daysAhead > s.maxDaysAhead) return []
  const earliest = s.minNoticeHours * 60 - (args.daysAhead * 1440 - args.nowMinutes)
  const out: ArrivalWindow[] = []
  for (let start = s.dayStart; start + args.minutes <= s.dayEnd; start += s.windowStep) {
    if (start < earliest) continue
    const c = conflictFor({ start, minutes: args.minutes, zip: args.zip }, args.jobs, args.weekday, args.homeZip, s)
    if (c) continue
    out.push({ start, end: Math.min(start + s.windowMinutes, s.dayEnd), jobStart: start })
  }
  return out
}

/** "8:30 AM" */
export function formatTime(min: number): string {
  const h = Math.floor(min / 60)
  const m = min % 60
  const h12 = h % 12 === 0 ? 12 : h % 12
  return `${h12}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`
}

/** "1 hr 45 min", "50 min", "2 hr" */
export function formatDuration(min: number): string {
  const h = Math.floor(min / 60)
  const m = min % 60
  if (!h) return `${m} min`
  return m ? `${h} hr ${m} min` : `${h} hr`
}
