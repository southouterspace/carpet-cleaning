import { describe, expect, test } from "bun:test"
import { confirmationEmail, leadEmail, normalizePhone, parseLead, pickPhotos } from "./lead"

const form = (fields: Record<string, string>) => {
  const f = new FormData()
  for (const [k, v] of Object.entries(fields)) f.append(k, v)
  return f
}

describe("normalizePhone", () => {
  test("accepts common US formats", () => {
    expect(normalizePhone("(936) 555-0100")).toBe("+19365550100")
    expect(normalizePhone("1-936-555-0100")).toBe("+19365550100")
  })
  test("rejects short numbers", () => {
    expect(normalizePhone("555-0100")).toBeNull()
  })
})

describe("parseLead", () => {
  const good = { site: "conroe", name: " Pat  Lee ", phone: "936.555.0100", zip: "77301" }

  test("cleans a valid lead", () => {
    const r = parseLead(form({ ...good, message: "3 rooms\nand stairs" }))
    expect(r.ok).toBe(true)
    if (r.ok) {
      expect(r.lead.name).toBe("Pat Lee")
      expect(r.lead.phone).toBe("+19365550100")
      expect(r.lead.message).toBe("3 rooms\nand stairs")
    }
  })

  test("flags the honeypot as spam", () => {
    const r = parseLead(form({ ...good, company: "Acme SEO" }))
    expect(r).toMatchObject({ ok: false, spam: true })
  })

  test("asks for a phone number", () => {
    expect(parseLead(form({ ...good, phone: "12" }))).toMatchObject({ ok: false })
  })

  test("keeps known quote details and drops unknown values", () => {
    const r = parseLead(
      form({ ...good, rooms: "3", stairs: "1", pets: "yes", timing: "week", contact: "call" })
    )
    expect(r).toMatchObject({
      ok: true,
      lead: { rooms: "3", stairs: "1", pets: true, timing: "week", contact: "call" },
    })
    const odd = parseLead(form({ ...good, rooms: "99", timing: "<script>" }))
    expect(odd).toMatchObject({ ok: true, lead: { rooms: null, timing: null, pets: false } })
  })

  test("checks email and needs one when email is the contact choice", () => {
    expect(parseLead(form({ ...good, email: "nope" })).ok).toBe(false)
    expect(parseLead(form({ ...good, contact: "email" })).ok).toBe(false)
    expect(parseLead(form({ ...good, contact: "email", email: "pat@example.com" })).ok).toBe(true)
  })

  test("rejects a bad ZIP and odd site ids", () => {
    expect(parseLead(form({ ...good, zip: "7730" })).ok).toBe(false)
    expect(parseLead(form({ ...good, site: "../x" })).ok).toBe(false)
  })
})

test("lead email escapes HTML", () => {
  const mail = leadEmail(
    {
      site: "conroe",
      name: "<b>x</b>",
      phone: "+19365550100",
      zip: null,
      service: null,
      message: null,
      page: null,
      rooms: null,
      stairs: null,
      pets: false,
      timing: null,
      contact: null,
      email: null,
      turnstileToken: null,
    },
    "Conroe TX Carpet Cleaners"
  )
  expect(mail.html).not.toContain("<b>x</b>")
  expect(mail.text).toContain("Phone: +19365550100")
})

test("confirmation names the service and how they'll be reached, without HTML", () => {
  const mail = confirmationEmail(
    {
      site: "conroe",
      name: "<i>Pat</i> Lee",
      phone: "+19365550100",
      zip: "77301",
      service: "pet-odor-removal",
      message: null,
      page: "/",
      rooms: "3",
      stairs: "none",
      pets: true,
      timing: "asap",
      contact: "text",
      email: "pat@example.com",
      turnstileToken: null,
    },
    "Conroe TX Carpet Cleaners"
  )
  expect(mail.text).toContain("pet odor removal")
  expect(mail.text).toContain("text you at +19365550100")
  expect(mail.html).not.toContain("<i>")
})

describe("pickPhotos", () => {
  const withFiles = (...files: File[]) => {
    const f = new FormData()
    for (const file of files) f.append("photos", file)
    return f
  }
  const jpg = (bytes = 10) => new File([new Uint8Array(bytes)], "a.jpg", { type: "image/jpeg" })

  test("skips the empty part an untouched file input sends", () => {
    const r = pickPhotos(withFiles(new File([], "", { type: "application/octet-stream" })))
    expect(r).toEqual({ ok: true, photos: [] })
  })
  test("accepts up to five images", () => {
    const r = pickPhotos(withFiles(jpg(), jpg(), jpg(), jpg(), jpg()))
    expect(r.ok && r.photos.length).toBe(5)
    expect(pickPhotos(withFiles(jpg(), jpg(), jpg(), jpg(), jpg(), jpg())).ok).toBe(false)
  })
  test("rejects SVG and oversized files", () => {
    expect(pickPhotos(withFiles(new File(["<svg/>"], "x.svg", { type: "image/svg+xml" }))).ok).toBe(false)
    expect(pickPhotos(withFiles(jpg(10 * 1024 * 1024 + 1))).ok).toBe(false)
  })
})

test("lead email links each photo", () => {
  const mail = leadEmail(
    { site: "conroe", name: "Pat", phone: "+19365550100", zip: null, service: null, message: null, page: null,
      rooms: null, stairs: null, pets: false, timing: null, contact: null, email: null, turnstileToken: null },
    "Conroe TX Carpet Cleaners",
    ["https://x.test/api/photo/a/1", "https://x.test/api/photo/a/2"]
  )
  expect(mail.text).toContain("https://x.test/api/photo/a/2")
  expect(mail.html).toContain('<a href="https://x.test/api/photo/a/1">Photo 1</a>')
})
