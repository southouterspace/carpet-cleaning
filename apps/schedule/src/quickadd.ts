// Fantastical-style quick add: "Lee 4 rooms pets stairs Thu 1pm 77304".
// Turns one line into a draft job. Anything it can't read is left as the name
// or the notes, so nothing the cleaner typed is lost.

import { addDays, weekday } from "./dates"

export interface QuickAdd {
  name: string
  rooms: number
  stairs: number
  pets: boolean
  /** YYYY-MM-DD, or null if no day was given. */
  day: string | null
  /** Minutes after midnight, or null if no time was given. */
  start: number | null
  zip: string | null
  phone: string | null
  notes: string
}

const DAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
const NUMBER_WORDS: Record<string, number> = {
  a: 1, an: 1, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
}

/**
 * Parse a quick-add line. `today` is the cleaner's local date (YYYY-MM-DD).
 * Bare times from 1 to 6 with no am/pm are read as PM ("Thu 2" = 2 PM),
 * since nobody starts a carpet job at 2 AM.
 */
export function parseQuickAdd(input: string, today: string): QuickAdd {
  let text = ` ${input.trim().replace(/\s+/g, " ")} `
  const out: QuickAdd = {
    name: "", rooms: 0, stairs: 0, pets: false, day: null, start: null, zip: null, phone: null, notes: "",
  }
  const take = (re: RegExp, fn: (m: RegExpMatchArray) => void) => {
    const m = text.match(re)
    if (m) {
      fn(m)
      text = text.replace(m[0], " ")
    }
  }

  // Phone before ZIP and numbers, so its digits aren't read as rooms.
  take(/\s(\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})(?=[\s,;])/, (m) => {
    out.phone = (m[1] ?? "").replace(/\D/g, "")
  })
  take(/\s(7\d{4})(?=[\s,;])/, (m) => {
    out.zip = m[1] ?? null
  })

  const num = (s: string) => NUMBER_WORDS[s.toLowerCase()] ?? Number(s)
  const numWord = "(\\d+|a|an|one|two|three|four|five|six|seven|eight|nine|ten)"
  take(new RegExp(`\\s${numWord}\\s?(?:rooms?|rms?|r)(?=[\\s,;])`, "i"), (m) => {
    out.rooms = num(m[1] ?? "0")
  })
  take(new RegExp(`\\s${numWord}\\s?(?:stairs?|staircases?|flights?)(?=[\\s,;])`, "i"), (m) => {
    out.stairs = num(m[1] ?? "0")
  })
  take(/\s(?:stairs?|staircase)(?=[\s,;])/i, () => {
    out.stairs = Math.max(out.stairs, 1)
  })
  take(/\s(?:pets?|dogs?|cats?)(?=[\s,;])/i, () => {
    out.pets = true
  })

  // Day: today, tomorrow, a weekday name (next one, today counts), or 12/3.
  take(/\s(today|tonight)(?=[\s,;])/i, () => {
    out.day = today
  })
  take(/\s(tomorrow|tmrw|tmr)(?=[\s,;])/i, () => {
    out.day = addDays(today, 1)
  })
  take(/\s(next\s)?(sun|mon|tue|tues|wed|thu|thur|thurs|fri|sat)[a-z]*(?=[\s,;])/i, (m) => {
    const target = DAYS.indexOf((m[2] ?? "").slice(0, 3).toLowerCase())
    let ahead = (target - weekday(today) + 7) % 7
    if (m[1] && ahead === 0) ahead = 7 // "next Thu" on a Thursday is a week out
    out.day = addDays(today, ahead)
  })
  take(/\s(\d{1,2})\/(\d{1,2})(?=[\s,;])/, (m) => {
    const year = Number(today.slice(0, 4))
    const mm = String(Number(m[1])).padStart(2, "0")
    const dd = String(Number(m[2])).padStart(2, "0")
    let day = `${year}-${mm}-${dd}`
    if (day < today) day = `${year + 1}-${mm}-${dd}`
    out.day = day
  })

  // Time: 1pm, 1:30 pm, 13:00, noon, "at 2".
  take(/\s(noon)(?=[\s,;])/i, () => {
    out.start = 12 * 60
  })
  take(/\s(?:at\s)?(\d{1,2})(?::(\d{2}))?\s?(am|pm|a|p)(?=[\s,;])/i, (m) => {
    let h = Number(m[1]) % 12
    if ((m[3] ?? "").toLowerCase().startsWith("p")) h += 12
    out.start = h * 60 + Number(m[2] ?? 0)
  })
  take(/\s(?:at\s)?(\d{1,2}):(\d{2})(?=[\s,;])/, (m) => {
    let h = Number(m[1])
    if (h >= 1 && h <= 6) h += 12
    out.start = h * 60 + Number(m[2])
  })
  take(/\sat\s(\d{1,2})(?=[\s,;])/i, (m) => {
    let h = Number(m[1])
    if (h >= 1 && h <= 6) h += 12
    out.start = h * 60
  })

  // What's left: leading words are the name, anything after a comma or dash is notes.
  const rest = text.trim().replace(/\s+/g, " ")
  const split = rest.search(/\s?[,;–—-]\s?/)
  if (split >= 0) {
    out.name = rest.slice(0, split).trim()
    out.notes = rest.slice(split).replace(/^\s?[,;–—-]\s?/, "").trim()
  } else {
    out.name = rest
  }
  if (out.start !== null && (out.start < 0 || out.start >= 24 * 60)) out.start = null
  return out
}
