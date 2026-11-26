import { resolveFlags, type SiteConfig } from "@carpet/seo"
import { areas, guides, withMoreContent } from "./content"

/**
 * Willis plumbing site. Everything on the site comes from this file and
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
  id: "plumbing-willis",
  trade: "plumbing",
  name: "Willis Plumber",
  url: "https://willisplumber.com",
  tagline:
    "Plumbing repair in Willis, TX: water heaters, leaks, clogged drains, septic lines and new-build fixes, from downtown Willis to the east side of Lake Conroe.",
  phone: "+19365550149",
  city: "Willis",
  region: "TX",
  serviceArea: {
    towns: ["Willis", "New Waverly", "Panorama Village", "Conroe", "Coldspring"],
    zips: ["77378", "77318"],
    neighborhoods: ["Downtown Willis", "The Woodlands Hills", "Lake Conroe east side"],
  },
  hours: [],
  updated: "2026-11-26",
  facts: [
    { label: "Licensing", value: "Texas plumbers are licensed by the Texas State Board of Plumbing Examiners (TSBPE); check any license number online" },
    { label: "New builds", value: "Most new-home builders cover plumbing defects for a set period; check the warranty before paying for a repair" },
    { label: "Septic", value: "Homes outside city and district sewer, common on the east side, are on septic; slow drains everywhere can mean the tank, not the pipe" },
    { label: "Urgent jobs", value: "Pick \"Emergency\" on the form and the request is flagged as urgent" },
    { label: "Quotes", value: "Free to ask. You hear the price before work starts" },
  ],
  leadEndpoint: "/api/lead",
  turnstileSiteKey: "0x4AAAAAAF9mIQ55cQuaXFQr",
  flags: resolveFlags({ photoUpload: true }, process.env),
  theme: { accent: "#2e6b2e", accentDark: "#1d461d" },
  services: withMoreContent([
    {
      slug: "water-heater-repair",
      name: "Water heater repair",
      summary: "No hot water, leaking tanks, pilot problems and replacements for gas, electric and propane heaters.",
      answer:
        "A leak from the tank body means a new water heater; a leak at a valve or fitting, a pilot that goes out, or lukewarm water is usually a repair. Look at the label for the age and fuel type and include it, or a photo, in your request.",
      body: [
        "Willis homes run water heaters on natural gas, electricity or, out in the country, propane. The fuel changes the parts and the price, so say which you have.",
      ],
    },
    {
      slug: "leak-repair",
      name: "Leak repair",
      summary: "Leaks under sinks, in walls, in ceilings, under the slab and in yard lines, found and fixed.",
      answer:
        "A water bill that jumps, a meter moving with all taps off, stains on ceilings or swelling cabinet floors all point to a leak. Shut the valve at that fixture or the main, then send a photo of what you see.",
      body: [
        "Supply lines under sinks and toilets are the most common small leaks, and they're cheap to replace before they burst. If yours are old or rubber, ask about replacing them all at once.",
      ],
    },
    {
      slug: "drain-cleaning",
      name: "Drain cleaning",
      summary: "Clogged sinks, tubs, toilets and main lines cleared, on city sewer or septic.",
      answer:
        "One slow drain is a clog in that line. All drains slow or gurgling points to the main line, or on septic, to the tank. On septic, have the tank's last pump-out date handy; a plumber clears pipes, a septic company pumps tanks.",
      body: [
        "Skip chemical drain cleaners, especially on septic. They rarely clear a full clog and they're hard on pipes and the tank's bacteria.",
      ],
    },
    {
      slug: "emergency-plumber",
      name: "Emergency plumbing",
      summary: "Burst pipes, overflowing toilets, sewage backups and water heaters flooding the garage in Willis.",
      answer:
        "Turn off the main water valve (or a well pump's breaker), then the water heater. If sewage is backing up, stop using water. Send the request marked Emergency with a photo so the plumber brings the right gear.",
      body: [
        "Know where your shut-off is before you need it. In newer Willis subdivisions it's usually in a box near the curb; in older homes it can be at the meter or where the line enters the house.",
      ],
    },
  ]),
  areas,
  guides,
  faqs: [
    { q: "How do I get a plumber in Willis today?", a: "Send the form with \"Today\" or \"Emergency\" picked, what's going on and a photo if you can. If water is running, shut off the main first." },
    { q: "My house is new. Should I call the builder first?", a: "If it's within the builder's warranty period, yes. Many plumbing defects in the first year or two are covered. A plumber can still help with anything the warranty doesn't." },
    { q: "Is the plumber licensed?", a: "Plumbing in Texas must be done by, or under, a plumber licensed by the TSBPE. Ask for the license number and look it up on the board's website." },
    { q: "Do you cover New Waverly and Panorama Village?", a: "Yes. The service area covers Willis's 77378 and 77318 ZIP codes, plus New Waverly, Panorama Village, Coldspring and nearby Conroe." },
    { q: "What does a plumber cost in Willis?", a: "It depends on the job, parts and distance. Ask for the price before work starts; you're never committed until you agree to it." },
    { q: "Can I send photos?", a: "Yes, up to five. The leak, the water heater label or the drain that's backing up are the most useful." },
  ],
}
