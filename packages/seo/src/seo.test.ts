import { describe, expect, test } from "bun:test"
import {
  buildLlmsTxt,
  faqPage,
  formatPhone,
  graph,
  localBusiness,
  type SiteConfig,
} from "./index"

const site: SiteConfig = {
  id: "test",
  name: "Test Carpet Co",
  url: "https://example.com",
  tagline: "Carpet cleaning in Testville.",
  phone: "+19365550100",
  city: "Testville",
  region: "TX",
  serviceArea: { towns: ["Testville"], zips: ["77301"], neighborhoods: [] },
  hours: ["Mo-Sa 08:00-18:00"],
  services: [
    { slug: "pet", name: "Pet odor removal", summary: "Removes urine.", body: [] },
  ],
  faqs: [{ q: "Do you move furniture?", a: "Light pieces, yes." }],
  leadEndpoint: "https://leads.example.com/lead",
  turnstileSiteKey: "",
  theme: { accent: "#000", accentDark: "#000" },
}

describe("localBusiness", () => {
  test("omits address until a renter with a real location is set", () => {
    expect(localBusiness(site).address).toBeUndefined()
    const withRenter = localBusiness({
      ...site,
      operator: {
        legalName: "Real Cleaner LLC",
        address: { street: "1 Main St", city: "Testville", region: "TX", postalCode: "77301" },
      },
    })
    expect(withRenter.name).toBe("Real Cleaner LLC")
    expect(withRenter.address).toMatchObject({ postalCode: "77301" })
  })
})

describe("graph", () => {
  test("drops empty nodes and escapes < so script tags can't break", () => {
    const out = graph(faqPage([]), faqPage([{ q: "</script>", a: "x" }]))
    expect(out).not.toContain("</script>")
    expect(JSON.parse(out)["@graph"]).toHaveLength(1)
  })
})

test("llms.txt lists services and phone", () => {
  const txt = buildLlmsTxt(site)
  expect(txt.startsWith("# Test Carpet Co\n")).toBe(true)
  expect(txt).toContain("https://example.com/services/pet")
  expect(txt).toContain("+19365550100")
})

test("formatPhone", () => {
  expect(formatPhone("+19365550100")).toBe("(936) 555-0100")
})
