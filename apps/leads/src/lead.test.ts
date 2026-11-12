import { describe, expect, test } from "bun:test"
import { leadEmail, normalizePhone, parseLead } from "./lead"

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
      turnstileToken: null,
    },
    "Conroe TX Carpet Cleaners"
  )
  expect(mail.html).not.toContain("<b>x</b>")
  expect(mail.text).toContain("Phone: +19365550100")
})
