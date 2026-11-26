/** Pure parsing and validation for a quote request, kept free of bindings so it is easy to test. */

export interface Lead {
  site: string
  name: string
  phone: string
  zip: string | null
  service: string | null
  message: string | null
  page: string | null
  /** Quoting details, so the cleaner can price the job before calling back. */
  rooms: string | null
  stairs: string | null
  pets: boolean
  timing: string | null
  /** Repair trades: whose property it is, and roughly when it was built. */
  property: string | null
  built: string | null
  contact: string | null
  email: string | null
  turnstileToken: string | null
}

/** Allowed values for the quote form's selects, with the label used in emails. */
export const CHOICES = {
  rooms: { "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6+": "6 or more" },
  stairs: { none: "No stairs", "1": "1 staircase", "2+": "2 or more staircases" },
  timing: {
    asap: "As soon as possible",
    emergency: "EMERGENCY: can't wait",
    today: "Today if possible",
    week: "Within a week",
    month: "Within a month",
    planning: "Planning ahead / comparing prices",
    pricing: "Just comparing prices",
  },
  property: { house: "House they own", rental: "Home they rent", landlord: "Rental they own", business: "Business" },
  built: { pre1980: "Before 1980", "1980-2000": "1980 to 2000", post2000: "After 2000" },
  contact: { text: "Text", call: "Call", email: "Email" },
} as const

const pick = <K extends keyof typeof CHOICES>(form: FormData, key: K): string | null => {
  const v = clean(form.get(key), 20)
  return v && v in CHOICES[key] ? v : null
}

const label = <K extends keyof typeof CHOICES>(key: K, v: string | null) =>
  v ? ((CHOICES[key] as Record<string, string>)[v] ?? v) : null

export type ParseResult =
  | { ok: true; lead: Lead }
  | { ok: false; error: string; spam?: boolean }

const clean = (v: FormDataEntryValue | null, max: number): string | null => {
  if (typeof v !== "string") return null
  const s = v.replace(/\s+/g, " ").trim().slice(0, max)
  return s.length ? s : null
}

/**
 * Normalizes a US phone number to E.164, or returns null when it isn't a real
 * 10-digit North American number (area code and exchange can't start with 0 or 1).
 */
export function normalizePhone(raw: string): string | null {
  if (/[a-z]/i.test(raw)) return null
  const digits = raw.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "")
  return /^[2-9]\d{2}[2-9]\d{6}$/.test(digits) ? `+1${digits}` : null
}

export function parseLead(form: FormData): ParseResult {
  // Honeypot: real visitors never see or fill this field.
  if (clean(form.get("company"), 200)) {
    return { ok: false, error: "Rejected.", spam: true }
  }
  const site = clean(form.get("site"), 40)
  const name = clean(form.get("name"), 80)
  const rawPhone = clean(form.get("phone"), 20)
  if (!site || !/^[a-z0-9-]+$/.test(site)) return { ok: false, error: "Unknown site." }
  if (!name) return { ok: false, error: "Please add your name." }
  const phone = rawPhone ? normalizePhone(rawPhone) : null
  if (!phone) return { ok: false, error: "Please add a 10-digit phone number." }
  const zip = clean(form.get("zip"), 5)
  if (zip && !/^\d{5}$/.test(zip)) return { ok: false, error: "Please check the ZIP code." }
  const email = clean(form.get("email"), 120)
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please check the email address." }
  }
  const contact = pick(form, "contact")
  if (contact === "email" && !email) {
    return { ok: false, error: "Please add an email so we can reply that way." }
  }
  // The message keeps line breaks, so it isn't run through clean().
  const rawMessage = form.get("message")
  const message =
    typeof rawMessage === "string" && rawMessage.trim()
      ? rawMessage.trim().slice(0, 1000)
      : null
  return {
    ok: true,
    lead: {
      site,
      name,
      phone,
      zip,
      service: clean(form.get("service"), 60),
      message,
      page: clean(form.get("page"), 200),
      rooms: pick(form, "rooms"),
      stairs: pick(form, "stairs"),
      pets: form.get("pets") === "yes",
      timing: pick(form, "timing"),
      property: pick(form, "property"),
      built: pick(form, "built"),
      contact,
      email,
      turnstileToken: clean(form.get("cf-turnstile-response"), 2048),
    },
  }
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`)

export const PHOTO_LIMITS = { count: 5, bytes: 10 * 1024 * 1024 }
/** Raster types only; SVG could carry script when served back. */
const PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/heic", "image/heif"]

export type PhotoResult = { ok: true; photos: File[] } | { ok: false; error: string }

/** Photos attached to a quote request. Empty file inputs send a zero-byte part, which is skipped. */
export function pickPhotos(form: FormData): PhotoResult {
  const photos = form
    .getAll("photos")
    .filter((f): f is File => typeof f !== "string" && f.size > 0)
  if (photos.length > PHOTO_LIMITS.count) {
    return { ok: false, error: `Please attach up to ${PHOTO_LIMITS.count} photos.` }
  }
  if (photos.some((f) => !PHOTO_TYPES.includes(f.type))) {
    return { ok: false, error: "Photos must be JPEG, PNG, WebP or HEIC images." }
  }
  if (photos.some((f) => f.size > PHOTO_LIMITS.bytes)) {
    return { ok: false, error: "Each photo must be under 10 MB." }
  }
  return { ok: true, photos }
}

/** Email to the renter (and owner) for a new lead. */
/** Trades a site can be (sites.trade). Unknown values read as carpet. */
export type Trade = "carpet" | "plumbing" | "electrical" | "hvac" | "garage-door"

const PRO: Record<Trade, string> = {
  carpet: "carpet cleaner",
  plumbing: "plumber",
  electrical: "electrician",
  hvac: "AC technician",
  "garage-door": "garage door technician",
}
const proOf = (trade?: string | null) => PRO[(trade as Trade) in PRO ? (trade as Trade) : "carpet"]

export function leadEmail(lead: Lead, siteName: string, photoUrls: string[] = []) {
  const rows: [string, string | null][] = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["ZIP", lead.zip],
    ["Email", lead.email],
    ["Reach by", label("contact", lead.contact)],
    ["Service", lead.service],
    ["Rooms", label("rooms", lead.rooms)],
    ["Stairs", label("stairs", lead.stairs)],
    ["Pet stains/odor", lead.pets ? "Yes" : null],
    ["When", label("timing", lead.timing)],
    ["Property", label("property", lead.property)],
    ["Built", label("built", lead.built)],
    ["Details", lead.message],
    ["Page", lead.page],
  ]
  const shown = rows.filter((r): r is [string, string] => Boolean(r[1]))
  const photoText = photoUrls.length ? `\n\nPhotos:\n${photoUrls.join("\n")}` : ""
  const photoHtml = photoUrls.length
    ? `<p><strong>Photos:</strong> ${photoUrls.map((u, i) => `<a href="${esc(u)}">Photo ${i + 1}</a>`).join(" · ")}</p>`
    : ""
  return {
    subject: `${lead.timing === "emergency" ? "URGENT " : ""}New quote request: ${lead.name} (${siteName})`,
    text:
      shown.map(([k, v]) => `${k}: ${v}`).join("\n") +
      photoText +
      (lead.timing === "emergency" ? "\n\nThey marked this as an emergency. Call them now." : "\n\nCall them back soon; fast replies win the job."),
    html:
      `<p>New quote request from <strong>${esc(siteName)}</strong>.</p><table>` +
      shown
        .map(([k, v]) =>
          k === "Phone"
            ? `<tr><th align="left">${k}</th><td><a href="tel:${esc(v)}">${esc(v)}</a></td></tr>`
            : k === "Email"
            ? `<tr><th align="left">${k}</th><td><a href="mailto:${esc(v)}">${esc(v)}</a></td></tr>`
            : `<tr><th align="left">${k}</th><td>${esc(v)}</td></tr>`
        )
        .join("") +
      `</table>${photoHtml}<p>${lead.timing === "emergency" ? "<strong>They marked this as an emergency. Call them now.</strong>" : "Call them back soon; fast replies win the job."}</p>`,
  }
}

const how = { text: "text", call: "call", email: "email" } as Record<string, string>

/** Short receipt to the customer. It promises no price or time, since the pro sets those. */
export function confirmationEmail(lead: Lead, siteName: string, trade?: string | null) {
  const first = lead.name.split(" ")[0]
  const carpet = proOf(trade) === PRO.carpet
  const fallback = carpet ? "cleaning" : "service"
  const service = lead.service && lead.service !== "other" ? lead.service.replace(/-/g, " ") : fallback
  const reach = how[lead.contact ?? ""] ?? "contact"
  const at = lead.contact === "email" ? lead.email : lead.phone
  const lines = [
    `Thanks, ${first}. We got your ${service} ${carpet ? "quote " : ""}request.`,
    carpet
      ? `A local carpet cleaner will ${reach} you at ${at} with a price. Nothing is booked until you say yes.`
      : `A local ${proOf(trade)} will ${reach} you at ${at} about a time and a price. Nothing is booked until you say yes.`,
    "If you didn't send this request, you can ignore this email.",
  ]
  return {
    subject: `We got your quote request (${siteName})`,
    text: lines.join("\n\n") + `\n\n${siteName}`,
    html: lines.map((l) => `<p>${esc(l)}</p>`).join("") + `<p>${esc(siteName)}</p>`,
  }
}
