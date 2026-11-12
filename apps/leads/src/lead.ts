/** Pure parsing and validation for a quote request, kept free of bindings so it is easy to test. */

export interface Lead {
  site: string
  name: string
  phone: string
  zip: string | null
  service: string | null
  message: string | null
  page: string | null
  turnstileToken: string | null
}

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
    ["Service", lead.service],
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
            : `<tr><th align="left">${k}</th><td>${esc(v)}</td></tr>`
        )
        .join("") +
      `</table><p>Call them back soon; fast replies win the job.</p>`,
  }
}
