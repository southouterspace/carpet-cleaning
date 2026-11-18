import { describe, expect, test } from "bun:test"
import {
  allFaqs,
  areaService,
  article,
  buildLlmsFullTxt,
  buildLlmsTxt,
  visibleSections,
  faqPage,
  formatPhone,
  resolveFlags,
  flagEnvName,
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
  flags: resolveFlags(),
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

test("llms.txt lists services, and the phone only when calls are on", () => {
  const txt = buildLlmsTxt(site)
  expect(txt.startsWith("# Test Carpet Co\n")).toBe(true)
  expect(txt).toContain("https://example.com/services/pet")
  expect(txt).not.toContain("+19365550100")
  const calls = { ...site, flags: resolveFlags({ phoneCalls: true }) }
  expect(buildLlmsTxt(calls)).toContain("+19365550100")
  expect(localBusiness(site).telephone).toBeUndefined()
  expect(localBusiness(calls).telephone).toBe("+19365550100")
})

test("formatPhone", () => {
  expect(formatPhone("+19365550100")).toBe("(936) 555-0100")
})

describe("flags", () => {
  test("env name is FLAG_ plus screaming snake case", () => {
    expect(flagEnvName("mobileCallBar")).toBe("FLAG_MOBILE_CALL_BAR")
  })
  test("site overrides beat defaults and env beats both", () => {
    expect(resolveFlags({ quoteForm: false }).quoteForm).toBe(false)
    expect(resolveFlags({ quoteForm: false }, { FLAG_QUOTE_FORM: "true" }).quoteForm).toBe(true)
    expect(resolveFlags({}, { FLAG_MOBILE_CALL_BAR: "0" }).mobileCallBar).toBe(false)
  })
  test("ignores unrecognized values", () => {
    expect(resolveFlags({}, { FLAG_QUOTE_FORM: "yes" }).quoteForm).toBe(true)
  })
})

describe("content pages", () => {
  const withContent: SiteConfig = {
    ...site,
    services: [
      { ...site.services[0]!, faqs: [{ q: "Pet q?", a: "Pet a." }], sections: [{ heading: "How", paragraphs: ["Steps."] }] },
    ],
    areas: [
      { slug: "old-town", name: "Old Town", kind: "neighborhood", summary: "Old Town homes.", intro: ["Intro."], faqs: [{ q: "Area q?", a: "Area a." }] },
      { slug: "nextville", name: "Nextville", kind: "town", summary: "Next town.", intro: ["Town intro."] },
    ],
    guides: [
      {
        slug: "cost",
        title: "What it costs",
        summary: "Prices.",
        updated: "2026-11-18",
        intro: ["It depends."],
        sections: [
          { heading: "Factors", paragraphs: ["Rooms."] },
          { heading: "Survey", paragraphs: ["$88 to $225."], requires: "priceRanges" },
        ],
      },
    ],
  }

  test("a neighborhood sits inside the city; a town is its own City", () => {
    const n = areaService(withContent, withContent.areas![0]!) as any
    expect(n.areaServed["@type"]).toBe("Place")
    expect(n.areaServed.containedInPlace.name).toBe("Testville, TX")
    const t = areaService(withContent, withContent.areas![1]!) as any
    expect(t.areaServed).toEqual({ "@type": "City", name: "Nextville, TX" })
  })

  test("article is published by the business", () => {
    const a = article(withContent, withContent.guides![0]!) as any
    expect(a.publisher["@id"]).toBe("https://example.com/#business")
    expect(a.dateModified).toBe("2026-11-18")
  })

  test("flagged sections stay hidden until the flag is on", () => {
    const g = withContent.guides![0]!
    expect(visibleSections(withContent, g.sections).map((s) => s.heading)).toEqual(["Factors"])
    expect(buildLlmsFullTxt(withContent)).not.toContain("$88")
    const on = { ...withContent, flags: resolveFlags({ priceRanges: true }) }
    expect(buildLlmsFullTxt(on)).toContain("$88")
  })

  test("allFaqs groups general, service and area questions", () => {
    expect(allFaqs(withContent).map((g) => g.heading)).toEqual(["General questions", "Pet odor removal", "Old Town"])
  })

  test("llms.txt links areas, guides and the full text", () => {
    const txt = buildLlmsTxt(withContent)
    expect(txt).toContain("[Old Town](https://example.com/areas/old-town)")
    expect(txt).toContain("[What it costs](https://example.com/guides/cost)")
    expect(txt).toContain("https://example.com/llms-full.txt")
  })
})
