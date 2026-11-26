import { resolveFlags, type SiteConfig } from "@carpet/seo"
import { areas, guides, withMoreContent } from "./content"

/**
 * Magnolia plumbing site. Everything on the site comes from this file and
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
  id: "plumbing-magnolia",
  trade: "plumbing",
  name: "Magnolia TX Plumbing",
  url: "https://magnoliatxplumbing.com",
  tagline:
    "Plumbing in Magnolia, TX for city water, MUD and well homes: water heaters, leaks, drains on septic, pressure tanks, softeners and iron filters.",
  phone: "+12815550147",
  city: "Magnolia",
  region: "TX",
  serviceArea: {
    towns: ["Magnolia", "Pinehurst", "Stagecoach", "Todd Mission", "Decker Prairie"],
    zips: ["77354", "77355"],
    neighborhoods: ["Audubon", "High Meadow Ranch", "Lake Windcrest"],
  },
  hours: [],
  updated: "2026-11-26",
  facts: [
    { label: "Licensing", value: "Texas plumbers are licensed by the Texas State Board of Plumbing Examiners (TSBPE); license numbers can be checked online" },
    { label: "Water sources", value: "Magnolia homes are on city water, a utility district or a private well, and acreage homes often have a well and septic" },
    { label: "Well water", value: "Iron, sulfur smell and hardness are common in private wells; test before choosing a filter or softener" },
    { label: "Urgent jobs", value: "Pick \"Emergency\" on the form and the request is flagged as urgent" },
    { label: "Quotes", value: "Free to ask. You hear the price before work starts" },
  ],
  leadEndpoint: "/api/lead",
  turnstileSiteKey: "0x4AAAAAAF9mIQ55cQuaXFQr",
  flags: resolveFlags({ photoUpload: true }, process.env),
  theme: { accent: "#006d77", accentDark: "#004a51" },
  services: withMoreContent([
    {
      slug: "water-heaters",
      name: "Water heater repair and replacement",
      summary: "Gas, electric, propane and tankless water heaters repaired or replaced, including homes on well water.",
      answer:
        "A leak from the tank body means replacement; a leaking valve, a pilot that won't stay lit or lukewarm water is usually a repair. On well water, sediment and iron wear tanks faster, so flushing once a year matters more. Many rural Magnolia homes run water heaters on propane rather than natural gas.",
      body: [
        "Tell the plumber the fuel (natural gas, propane or electric), the tank size and the age from the label. That decides the part or the replacement before they arrive.",
      ],
    },
    {
      slug: "well-pressure-tanks",
      name: "Pressure tanks and well-side plumbing",
      summary: "Pressure tanks, pressure switches and the plumbing between the well and the house for low or pulsing pressure.",
      answer:
        "Pressure that surges and drops, or a pump that clicks on and off every few seconds, usually means a waterlogged pressure tank or a failing pressure switch. Both sit between the well and the house. No water at all is often the pump or its power, which may need a water well pump installer.",
      body: [
        "In Texas, work on the well pump itself is done by a licensed water well pump installer; the pressure tank, switch and house plumbing are plumbing work. Say what you're seeing and the right person gets sent.",
      ],
      faqs: [
        { q: "Why does my water pressure go up and down?", a: "On a well, that's usually the pressure tank losing its air charge or a worn pressure switch. On city or MUD water, it's more often the pressure regulator or a partly closed valve." },
      ],
    },
    {
      slug: "drains-septic",
      name: "Drain cleaning on septic and sewer",
      summary: "Clogged drains and main lines cleared, with septic-safe methods for homes on a septic system.",
      answer:
        "On septic, several slow drains at once can mean the tank needs pumping, not a clogged pipe. A plumber clears the line from the house to the tank; a septic company pumps the tank. Skip chemical drain openers on septic, since they can harm the bacteria the system depends on.",
      body: [
        "On city or MUD sewer, repeat clogs in the main line point to roots, grease or a sag; a camera shows which.",
      ],
    },
    {
      slug: "leak-repair",
      name: "Leak repair",
      summary: "Leaks in walls, under slabs, in yard lines from the meter or well, and at fixtures.",
      answer:
        "On city or MUD water, a meter that moves with everything off means a leak. On a well, a pump that runs when no one is using water says the same thing. Yard lines on acreage can run hundreds of feet, so the search starts by splitting the system into sections.",
      body: [
        "Long runs of PVC to barns, shops and second homes are common on Magnolia acreage, and a break can go unnoticed for weeks in soft ground.",
      ],
    },
    {
      slug: "water-treatment",
      name: "Softeners and well water filters",
      summary: "Water softeners, iron and sulfur filters, and reverse osmosis, chosen from a water test.",
      answer:
        "Hardness, iron and a rotten-egg smell need different equipment: a softener for hardness, an iron or oxidizing filter for iron and sulfur, and reverse osmosis at the sink for drinking water. Test first, because the wrong unit won't fix the problem.",
      body: [
        "City and MUD customers can find what's in their water in the provider's annual water quality report. Well owners need their own test.",
      ],
    },
  ]),
  areas,
  guides,
  faqs: [
    { q: "How do I get a plumber in Magnolia today?", a: "Send the form with \"Today\" or \"Emergency\" picked, what's happening and a photo if you can. If water is running, turn off the main valve, or on a well, switch off the pump's breaker." },
    { q: "Do you work on homes with wells and septic?", a: "Yes. The plumbing in the house, the pressure tank and switch, and the drain line to the septic tank are plumbing work. Well pump work and septic pumping are separate trades, and you'll be told if you need one." },
    { q: "Is the plumber licensed?", a: "Plumbing in Texas must be done by, or under, a plumber licensed by the TSBPE. Ask for the license number and look it up on the board's website." },
    { q: "Do you cover Pinehurst and Stagecoach?", a: "Yes. The service area covers Magnolia's 77354 and 77355 ZIP codes, plus Pinehurst, Stagecoach, Todd Mission and Decker Prairie." },
    { q: "What does a plumber cost in Magnolia?", a: "It depends on the job, parts and distance. Ask for the price before work starts; you're never committed until you agree to it." },
    { q: "Can I send photos?", a: "Yes, up to five. The leak, the water heater label, the pressure tank and gauge, or the drain that's backing up are the most useful." },
  ],
}
