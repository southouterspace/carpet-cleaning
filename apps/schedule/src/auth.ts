// Sign-in: each cleaner has an email and a code we hand them at onboarding.
// A session is an HMAC-signed cookie, so there's no session table to keep.

const COOKIE = "sched"
const DAYS_SIGNED_IN = 30

const enc = new TextEncoder()

export async function sha256Hex(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", enc.encode(text))
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("")
}

async function hmac(secret: string, data: string): Promise<string> {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, [
    "sign",
  ])
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data))
  return btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_")
}

function sameString(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}

/** A Set-Cookie header value that signs `cleanerId` in. */
export async function sessionCookie(secret: string, cleanerId: string, now = Date.now()): Promise<string> {
  const exp = Math.floor(now / 1000) + DAYS_SIGNED_IN * 86_400
  const value = `${cleanerId}.${exp}`
  const sig = await hmac(secret, value)
  return `${COOKIE}=${value}.${sig}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${DAYS_SIGNED_IN * 86_400}`
}

export function signOutCookie(): string {
  return `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`
}

/** The signed-in cleaner's id, or null. */
export async function readSession(request: Request, secret: string, now = Date.now()): Promise<string | null> {
  const header = request.headers.get("Cookie") ?? ""
  const raw = header
    .split(/;\s*/)
    .find((c) => c.startsWith(`${COOKIE}=`))
    ?.slice(COOKIE.length + 1)
  if (!raw) return null
  const [id, exp, sig] = raw.split(".")
  if (!id || !exp || !sig) return null
  if (Number(exp) * 1000 < now) return null
  return sameString(await hmac(secret, `${id}.${exp}`), sig) ? id : null
}
