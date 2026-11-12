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
    week: "Within a week",
    month: "Within a month",
    pricing: "Just comparing prices",
  },
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

/** Normalizes a US phone number to E.164, or returns null when it isn't 10 digits. */
export function normalizePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "")
  return digits.length === 10 ? `+1${digits}` : null
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
      contact,
      email,
      turnstileToken: clean(form.get("cf-turnstile-response"), 2048),
    },
  }
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`)

/** Email to the renter (and owner) for a new lead. */
export function leadEmail(lead: Lead, siteName: string) {
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
    ["Details", lead.message],
    ["Page", lead.page],
  ]
  const shown = rows.filter((r): r is [string, string] => Boolean(r[1]))
  return {
    subject: `New quote request: ${lead.name} (${siteName})`,
    text: shown.map(([k, v]) => `${k}: ${v}`).join("\n") + "\n\nCall them back soon; fast replies win the job.",
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
      `</table><p>Call them back soon; fast replies win the job.</p>`,
  }
}

const how = { text: "text", call: "call", email: "email" } as Record<string, string>

/** Short receipt to the customer. It promises no price or time, since a cleaner sets those. */
export function confirmationEmail(lead: Lead, siteName: string) {
  const first = lead.name.split(" ")[0]
  const service = lead.service && lead.service !== "other" ? lead.service.replace(/-/g, " ") : "cleaning"
  const reach = how[lead.contact ?? ""] ?? "contact"
  const lines = [
    `Thanks, ${first}. We got your ${service} quote request.`,
    `A local carpet cleaner will ${reach} you at ${lead.contact === "email" ? lead.email : lead.phone} with a price. Nothing is booked until you say yes.`,
    "If you didn't send this request, you can ignore this email.",
  ]
  return {
    subject: `We got your quote request (${siteName})`,
    text: lines.join("\n\n") + `\n\n${siteName}`,
    html: lines.map((l) => `<p>${esc(l)}</p>`).join("") + `<p>${esc(siteName)}</p>`,
  }
}
