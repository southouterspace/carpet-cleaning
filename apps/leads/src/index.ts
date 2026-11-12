import { leadEmail, parseLead, type Lead } from "./lead"

export interface Env {
  DB: D1Database
  EMAIL: SendEmail
  TURNSTILE_SECRET?: string
  NOTIFY_FROM: string
  OWNER_EMAIL: string
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
    await env.DB.prepare(
      `INSERT INTO leads (id, site_id, name, phone, zip, service, message, page, user_agent, country)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(
        id,
        site.id,
        lead.name,
        lead.phone,
        lead.zip,
        lead.service,
        lead.message,
        lead.page,
        request.headers.get("User-Agent")?.slice(0, 300) ?? null,
        (request.cf?.country as string | undefined) ?? null
      )
      .run()

    // Notify after responding; the lead is already saved if email fails.
    ctx.waitUntil(notify(env, site, lead, id))
    return reply(200, { ok: true })
  },
} satisfies ExportedHandler<Env>

const isLocal = (host: string) => host === "localhost" || host === "127.0.0.1"

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

async function notify(env: Env, site: SiteRow, lead: Lead, id: string) {
  const to = [site.renter_email, env.OWNER_EMAIL].filter((e): e is string => Boolean(e))
  if (!env.NOTIFY_FROM || to.length === 0) return
  const mail = leadEmail(lead, site.name)
  try {
    await env.EMAIL.send({
      to,
      from: { email: env.NOTIFY_FROM, name: site.name },
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    })
    await env.DB.prepare("UPDATE leads SET notified = 1 WHERE id = ?").bind(id).run()
  } catch (err) {
    console.error("lead email failed", { id, err: String(err) })
  }
}
