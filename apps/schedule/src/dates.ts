// Local dates in the cleaner's time zone, as YYYY-MM-DD strings.

/** Today's date and minutes after midnight in `timeZone`. */
export function nowIn(timeZone: string, at: Date = new Date()): { day: string; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(at)
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "0"
  return {
    day: `${get("year")}-${get("month")}-${get("day")}`,
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  }
}

const DAY_RE = /^\d{4}-\d{2}-\d{2}$/

export function isDay(value: unknown): value is string {
  if (typeof value !== "string" || !DAY_RE.test(value)) return false
  const d = new Date(`${value}T00:00:00Z`)
  return !Number.isNaN(d.getTime()) && d.toISOString().startsWith(value)
}

/** 0 = Sunday. */
export function weekday(day: string): number {
  return new Date(`${day}T00:00:00Z`).getUTCDay()
}

export function addDays(day: string, n: number): string {
  const d = new Date(`${day}T00:00:00Z`)
  d.setUTCDate(d.getUTCDate() + n)
  return d.toISOString().slice(0, 10)
}

export function daysBetween(from: string, to: string): number {
  return Math.round((Date.parse(`${to}T00:00:00Z`) - Date.parse(`${from}T00:00:00Z`)) / 86_400_000)
}
