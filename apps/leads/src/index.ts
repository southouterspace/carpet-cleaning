import { confirmationEmail, leadEmail, parseLead, pickPhotos, type Lead } from "./lead"

export interface Env {
  DB: D1Database
  EMAIL: SendEmail
  /** Customer photos, stored as <lead id>/<n>. Without it, photos are ignored. */
  PHOTOS?: R2Bucket
  TURNSTILE_SECRET?: string
  /** Mailbox name; mail goes out as <NOTIFY_FROM>@<site domain>. Empty turns email off. */
  NOTIFY_FROM: string
  /** Secret: your own copy of every lead. */
  OWNER_EMAIL?: string
}

interface SiteRow {
  id: string
  domain: string
  name: string
  renter_email: string | null
}

/**
 * Lead intake for every city site. Reached only through each site's service
 * binding at POST /api/lead, so requests arrive same-origin from the site.
 */
export default {
  async fetch(request, env, ctx): Promise<Response> {
    const url = new URL(request.url)
    const photo = url.pathname.match(PHOTO_PATH)
    if (photo && request.method === "GET") return servePhoto(env, `${photo[1]}/${photo[2]}`)
    if (url.pathname !== "/api/lead") return new Response("Not found", { status: 404 })
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: { Allow: "POST" } })
    }
    const wantsJson = (request.headers.get("Accept") ?? "").includes("application/json")
    const reply = (status: number, body: { ok: boolean; error?: string }) =>
      wantsJson
        ? Response.json(body, { status })
        : body.ok
          ? Response.redirect(new URL("/thanks", url).toString(), 303)
          : new Response(body.error ?? "Error", { status })

    let form: FormData
    try {
      form = await request.formData()
    } catch {
      return reply(400, { ok: false, error: "Couldn't read the form." })
    }

    const parsed = parseLead(form)
    if (!parsed.ok) {
      // Answer bots as if it worked so they don't retry with a fix.
      if (parsed.spam) return reply(200, { ok: true })
      return reply(400, { ok: false, error: parsed.error })
    }
    const lead = parsed.lead
    const picked = env.PHOTOS ? pickPhotos(form) : { ok: true as const, photos: [] }
    if (!picked.ok) return reply(400, { ok: false, error: picked.error })

    const site = await env.DB.prepare(
      "SELECT id, domain, name, renter_email FROM sites WHERE id = ? AND active = 1"
    )
      .bind(lead.site)
      .first<SiteRow>()
    // The host must match the site's domain, so one site can't post as another.
    const host = url.hostname.replace(/^www\./, "")
    if (!site || (host !== site.domain && !isLocal(host))) {
      return reply(400, { ok: false, error: "Unknown site." })
    }

    if (env.TURNSTILE_SECRET) {
      const ip = request.headers.get("CF-Connecting-IP")
      if (!(await verifyTurnstile(env.TURNSTILE_SECRET, lead.turnstileToken, ip))) {
        return reply(400, { ok: false, error: "Please complete the check and try again." })
      }
    }

    const id = crypto.randomUUID()
    // Store photos first so the lead row never points at missing files.
    const photos = picked.photos
    if (env.PHOTOS && photos.length) {
      const bucket = env.PHOTOS
      await Promise.all(
        photos.map((f, i) =>
          bucket.put(`${id}/${i + 1}`, f.stream(), {
            httpMetadata: { contentType: f.type },
            customMetadata: { site: site.id },
          })
        )
      )
    }
    await env.DB.prepare(
      `INSERT INTO leads (id, site_id, name, phone, email, contact, zip, service,
         rooms, stairs, pets, timing, message, page, user_agent, country, photos)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(
        id,
        site.id,
        lead.name,
        lead.phone,
        lead.email,
        lead.contact,
        lead.zip,
        lead.service,
        lead.rooms,
        lead.stairs,
        lead.pets ? 1 : 0,
        lead.timing,
        lead.message,
        lead.page,
        request.headers.get("User-Agent")?.slice(0, 300) ?? null,
        (request.cf?.country as string | undefined) ?? null,
        photos.length
      )
      .run()

    // Notify after responding; the lead is already saved if email fails.
    const photoUrls = photos.map((_, i) => `https://${site.domain}/api/photo/${id}/${i + 1}`)
    ctx.waitUntil(notify(env, site, lead, id, photoUrls))
    return reply(200, { ok: true })
  },
} satisfies ExportedHandler<Env>

const isLocal = (host: string) => host === "localhost" || host === "127.0.0.1"

/** /api/photo/<lead id>/<n>. The random lead id is what keeps a photo link private. */
const PHOTO_PATH = /^\/api\/photo\/([0-9a-f-]{36})\/([1-9])$/

async function servePhoto(env: Env, key: string) {
  const obj = await env.PHOTOS?.get(key)
  if (!obj) return new Response("Not found", { status: 404 })
  const headers = new Headers({
    "Content-Type": obj.httpMetadata?.contentType ?? "application/octet-stream",
    "Cache-Control": "private, max-age=86400",
    "X-Content-Type-Options": "nosniff",
    "X-Robots-Tag": "noindex",
    "Content-Security-Policy": "default-src 'none'",
  })
  return new Response(obj.body, { headers })
}

async function verifyTurnstile(secret: string, token: string | null, ip: string | null) {
  if (!token) return false
  const body = new FormData()
  body.append("secret", secret)
  body.append("response", token)
  if (ip) body.append("remoteip", ip)
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
  })
  const data = (await res.json()) as { success?: boolean }
  return data.success === true
}

async function notify(env: Env, site: SiteRow, lead: Lead, id: string, photoUrls: string[]) {
  if (!env.NOTIFY_FROM) return
  // Each site sends from its own domain, so leads and confirmations match the site.
  const from = { email: `${env.NOTIFY_FROM}@${site.domain}`, name: site.name }
  const to = [site.renter_email, env.OWNER_EMAIL].filter((e): e is string => Boolean(e))
  if (to.length) {
    const mail = leadEmail(lead, site.name, photoUrls)
    try {
      await env.EMAIL.send({ to, from, subject: mail.subject, text: mail.text, html: mail.html })
      await env.DB.prepare("UPDATE leads SET notified = 1 WHERE id = ?").bind(id).run()
    } catch (err) {
      console.error("lead email failed", { id, err: String(err) })
    }
  }
  // Tell the customer we got it, so they aren't left wondering.
  if (lead.email) {
    const mail = confirmationEmail(lead, site.name)
    try {
      await env.EMAIL.send({ to: lead.email, from, subject: mail.subject, text: mail.text, html: mail.html })
    } catch (err) {
      console.error("confirmation email failed", { id, err: String(err) })
    }
  }
}
