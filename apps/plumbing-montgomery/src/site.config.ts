import { resolveFlags, type SiteConfig } from "@carpet/seo"
import { areas, guides, withMoreContent } from "./content"

/**
 * Montgomery plumbing site. Everything on the site comes from this file and
 * content.ts.
 *
 * Before launch:
 * - `phone` is a placeholder (555-01xx is reserved fictional) and stays
 *   hidden while the phoneCalls flag is off.
 * - Add `hours`, `priceFrom` and `operator` (and the renter's TSBPE license
 *   number in the copy) once a renter confirms them. Never add an address,
 *   reviews, prices or a license number the renter can't back up.
 */
export const site: SiteConfig = {
  id: "plumbing-montgomery",
  trade: "plumbing",
  name: "Montgomery TX Plumber",
  url: "https://montgomerytxplumber.com",
  tagline:
    "Plumbers for Montgomery, TX and the west side of Lake Conroe: lake homes, weekend houses and the historic town, from water heaters and leaks to drains and outdoor kitchens.",
  phone: "+19365550148",
  city: "Montgomery",
  region: "TX",
  serviceArea: {
    towns: ["Montgomery", "Conroe", "Willis", "Magnolia", "Dobbin"],
    zips: ["77316", "77356"],
    neighborhoods: ["Historic downtown Montgomery", "Walden on Lake Conroe", "Bentwater", "April Sound"],
  },
  hours: [],
  updated: "2026-11-26",
  facts: [
    { label: "Licensing", value: "Texas plumbers are licensed by the Texas State Board of Plumbing Examiners (TSBPE); license numbers can be checked online" },
    { label: "Weekend homes", value: "Many lake homes sit empty during the week, so a leak can run for days. Shutting the main when you leave is the cheapest insurance" },
    { label: "Water sources", value: "Most lake communities are on utility-district water and sewer; homes on acreage outside town may have a well and septic" },
    { label: "Urgent jobs", value: "Pick \"Emergency\" on the form and the request is flagged as urgent" },
    { label: "Quotes", value: "Free to ask. You hear the price before work starts" },
  ],
  leadEndpoint: "/api/lead",
  turnstileSiteKey: "0x4AAAAAAF9mIQ55cQuaXFQr",
  flags: resolveFlags({ photoUpload: true }, process.env),
  theme: { accent: "#2f5873", accentDark: "#1d3a4d" },
  services: withMoreContent([
    {
      slug: "leak-repair",
      name: "Leak detection and repair",
      summary: "Hidden leaks in walls, ceilings, slabs and yard lines found and fixed, including in homes that sit empty.",
      answer:
        "With everything off, a meter that keeps moving means a leak. In a weekend house, the first sign is often a high water bill or a stain discovered on Friday. A plumber isolates the leak by section, then uses pressure, acoustic and thermal tests before opening anything.",
      body: [
        "Lake homes have long runs to docks, boat houses, outdoor kitchens and irrigation. Those lines are a common source of leaks that never show inside.",
      ],
    },
    {
      slug: "water-heaters",
      name: "Water heaters",
      summary: "Tank and tankless water heaters repaired and replaced, including attic, garage and multiple-heater homes.",
      answer:
        "Large lake homes often have two water heaters or a tankless unit. A tank leaking from its body needs replacing; a valve or pilot problem is usually a repair. Set heaters to vacation mode when the house will be empty.",
      body: [
        "If a tank is in the attic, check its pan for water or rust each time you're at the house. A wet pan is the warning before a ceiling comes down.",
      ],
    },
    {
      slug: "drain-sewer",
      name: "Drains and sewer lines",
      summary: "Clogged drains, main line backups and lift-station questions, cleared and checked with a camera.",
      answer:
        "A single slow drain is a local clog. Several at once, or water rising in a tub when a toilet flushes, is the main line. Homes on septic should check the tank before the line. Some lakefront homes pump sewage uphill with a grinder pump; an alarm on that panel means stop using water and call.",
      body: [
        "Grinder pumps and small lift stations are common where a lot slopes down to the water. They have an alarm light or buzzer that comes on when the pump can't keep up.",
      ],
    },
    {
      slug: "emergency-plumbing",
      name: "Emergency plumbing",
      summary: "Burst pipes, a water heater flooding the garage, overflowing fixtures and sewage backups in Montgomery.",
      answer:
        "Shut off the main valve first, usually in a box near the street, then turn off the water heater. If it's sewage or a grinder pump alarm, stop running water in the house. Then send the request marked Emergency with a photo.",
      body: [
        "If you're not at the lake house when it happens, a neighbor or the property manager can close the curb valve if they know where it is. Tell them before you need them to.",
      ],
    },
  ]),
  areas,
  guides,
  faqs: [
    { q: "How do I get a plumber in Montgomery today?", a: "Send the form with \"Today\" or \"Emergency\" picked, a short description and a photo if you can. If water is running, shut the main valve first." },
    { q: "Can a plumber get in if I'm not at the lake house?", a: "Often, yes, if you arrange access: a lockbox, a gate code or a neighbor. Put the details in the message box, never the code itself until you've spoken with the plumber." },
    { q: "Is the plumber licensed?", a: "Plumbing in Texas must be done by, or under, a plumber licensed by the TSBPE. Ask for the license number and look it up on the board's website." },
    { q: "Do you cover Walden, Bentwater and April Sound?", a: "Yes. The service area covers Montgomery's 77316 and 77356 ZIP codes, including the lake communities on the west side of Lake Conroe, plus Dobbin and nearby Conroe, Willis and Magnolia." },
    { q: "What does a plumber cost in Montgomery?", a: "It depends on the job, parts and travel. Ask for the price before work starts; you're never committed until you agree to it." },
    { q: "Can I send photos?", a: "Yes, up to five. Photos of the leak, the water heater label or the grinder pump panel help the plumber come ready." },
  ],
}
