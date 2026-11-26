import { resolveFlags, type SiteConfig } from "@carpet/seo"
import { areas, guides, withMoreContent } from "./content"

/**
 * Conroe electrician site. Everything on the site comes from this file and
 * content.ts.
 *
 * Before launch:
 * - `phone` is a placeholder (555-01xx is reserved fictional) and stays
 *   hidden while the phoneCalls flag is off.
 * - Add `hours`, `priceFrom` and `operator` (and the renter's TECL license
 *   number in the copy) once a renter confirms them. Never add an address,
 *   reviews, prices or a license number the renter can't back up.
 */
export const site: SiteConfig = {
  id: "electric-conroe",
  trade: "electrical",
  name: "Conroe TX Electric",
  url: "https://conroetxelectric.com",
  tagline:
    "Electricians in Conroe, TX for breakers that keep tripping, dead outlets, panel upgrades, generators, EV chargers and lighting, in new builds and older homes.",
  phone: "+19365550141",
  city: "Conroe",
  region: "TX",
  serviceArea: {
    towns: ["Conroe", "Shenandoah", "Oak Ridge North", "Panorama Village", "Cut and Shoot"],
    zips: ["77301", "77302", "77303", "77304", "77306", "77384", "77385"],
    neighborhoods: ["Grand Central Park", "Artavia", "Harper's Preserve", "Downtown Conroe"],
  },
  hours: [],
  updated: "2026-11-26",
  facts: [
    { label: "Licensing", value: "Electrical work in Texas is licensed by TDLR. Contractors hold a TECL number you can look up on TDLR's website" },
    { label: "Urgent jobs", value: "Pick \"Emergency\" on the form and the request is flagged as urgent" },
    { label: "Panels to replace", value: "Federal Pacific Stab-Lok and Zinsco panels are widely recommended for replacement" },
    { label: "Storm outages", value: "Winter Storm Uri (February 2021) and Hurricane Beryl (July 2024) both left Conroe-area homes without power for days" },
    { label: "Quotes", value: "Free to ask. You hear the price before work starts" },
  ],
  leadEndpoint: "/api/lead",
  turnstileSiteKey: "0x4AAAAAAF9mIQ55cQuaXFQr",
  flags: resolveFlags({ photoUpload: true }, process.env),
  theme: { accent: "#a84300", accentDark: "#6b2a00" },
  services: withMoreContent([
    {
      slug: "electrical-repair",
      name: "Electrical repair",
      summary: "Breakers that keep tripping, dead outlets, flickering lights, warm switches and GFCIs that won't reset.",
      answer:
        "A breaker that trips once after a big load is doing its job; one that trips again and again is telling you the circuit is overloaded, a device has a short, or the breaker is failing. Warm or buzzing outlets and switches, burning smells and flickering across the house need an electrician soon.",
      body: [
        "Most electrical repairs start with a symptom you can describe: which rooms, what was running, and what happened. Put that in the request and the electrician can usually tell whether it's a device, a circuit or the panel.",
        "Dead outlets are often on a tripped GFCI somewhere else (a bathroom, the garage or outside). Push the Reset button on every GFCI in the house before assuming the worst.",
      ],
      faqs: [
        { q: "Why do my lights flicker when the AC kicks on?", a: "A brief dim when a big motor starts can be normal. Flickering that's bad, getting worse or happening without the AC can mean a loose connection in the panel or at the meter, which needs an electrician." },
        { q: "Half the house lost power but the breakers look fine. What's that?", a: "Often a problem on one leg of the service: at the meter, the main breaker or the utility's line. Call Entergy Texas or your utility first if neighbors have it too; otherwise it's an electrician job." },
      ],
    },
    {
      slug: "panel-upgrades",
      name: "Panel upgrades and replacement",
      summary: "Replacing old or recalled-type panels, adding capacity for EV chargers, pools and generators, and adding circuits.",
      answer:
        "Replace a panel if it's a Federal Pacific Stab-Lok or Zinsco, if it's scorched, rusted or buzzing, or if it's full and you're adding something big like an EV charger, hot tub or generator. A panel upgrade needs a permit and usually a utility disconnect, so it's scheduled, not same-day.",
      body: [
        "Older Conroe homes often have 100-amp panels that were fine when they were built and are now asked to run more AC, a bigger kitchen and a car charger.",
        "An electrician starts with a load calculation. Sometimes a full upgrade is needed; sometimes a load-managing device or a smaller subpanel does the job for less.",
      ],
    },
    {
      slug: "generator-installation",
      name: "Generator hookups and standby generators",
      summary: "Generator inlets and interlocks for portable generators, transfer switches, and whole-home standby generators.",
      answer:
        "The two common setups are a portable generator plugged into an inlet box with an interlock on the panel, and a permanently installed standby generator with an automatic transfer switch. Never backfeed a house through a dryer outlet; it can kill a lineworker and start a fire.",
      body: [
        "Long outages after Winter Storm Uri in 2021 and Hurricane Beryl in 2024 sent a lot of Montgomery County homeowners looking for backup power.",
        "An inlet and interlock lets a portable generator run chosen circuits safely and costs far less than a standby unit. A standby generator runs on natural gas or propane and switches on by itself, which matters for medical equipment and for houses that sit empty.",
      ],
      sections: [
        {
          heading: "What to decide before getting a price",
          paragraphs: [],
          list: [
            "What must run during an outage: fridge, a few lights, internet, AC, well pump, medical equipment",
            "Portable (you start it and plug it in) or standby (automatic)",
            "Fuel: gasoline, natural gas or propane",
            "Where it can sit: clear of windows and doors, on a level pad",
          ],
        },
      ],
    },
    {
      slug: "ev-charger-installation",
      name: "EV charger installation",
      summary: "Level 2 chargers and 240-volt outlets for electric cars, with a load check on your panel first.",
      answer:
        "Most EV owners want a Level 2 charger on a 40- to 60-amp circuit in the garage. Whether that's a simple install depends on space and capacity in your panel and the distance from the panel to where the car parks. A photo of the open panel and its label helps get an accurate price.",
      body: [
        "Many newer Conroe homes have the panel in the garage, which keeps an EV install short. Older homes may need a longer run or a panel upgrade first.",
      ],
    },
    {
      slug: "lighting-ceiling-fans",
      name: "Lighting and ceiling fans",
      summary: "Ceiling fans, recessed lights, under-cabinet and outdoor lighting, dimmers and smart switches.",
      answer:
        "A ceiling fan needs a fan-rated box, not a light box, and in a two-story house that can mean working from the attic. Recessed lights in a ceiling that touches insulation need IC-rated cans. Smart switches often need a neutral wire, which older switch boxes may not have.",
      body: [
        "Lighting jobs are good to bundle: list every fixture, fan and switch in one request so it's one visit.",
      ],
    },
  ]),
  areas,
  guides,
  faqs: [
    { q: "How do I get an electrician in Conroe today?", a: "Send the form with \"Today\" or \"Emergency\" picked and a short description: what happened, which rooms, and whether a breaker tripped. If you see sparks or smell burning, turn that circuit off first if it's safe." },
    { q: "Is the electrician licensed?", a: "Electrical work in Texas has to be done by or under an electrician licensed by the Texas Department of Licensing and Regulation (TDLR). Ask for the contractor's TECL number and check it on TDLR's website." },
    { q: "What does an electrician cost in Conroe?", a: "It depends on the job, parts and permits. Ask for the price before work starts; you're never committed until you agree to it." },
    { q: "Who do I call when the power's out?", a: "If the neighbors are out too, it's the utility: Entergy Texas serves most of Conroe, and some areas are on co-op or other providers. If it's only your house, check the main breaker, then request an electrician." },
    { q: "Do I need a permit?", a: "Panel changes, new circuits and generator installs generally need a permit inside Conroe city limits. The electrician pulls it as part of the job." },
    { q: "Can I send photos?", a: "Yes, up to five. A photo of the panel with the door open, its label, or the outlet or fixture in question makes the reply faster and more accurate." },
  ],
}
