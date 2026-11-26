import { resolveFlags, type SiteConfig } from "@carpet/seo"
import { areas, guides, withMoreContent } from "./content"

/**
 * The Woodlands electrician site. Everything on the site comes from this
 * file and content.ts.
 *
 * Before launch:
 * - `phone` is a placeholder (555-01xx is reserved fictional) and stays
 *   hidden while the phoneCalls flag is off.
 * - Add `hours`, `priceFrom` and `operator` (and the renter's TECL number in
 *   the copy) once a renter confirms them. Never add an address, reviews,
 *   prices or a license number the renter can't back up.
 */
export const site: SiteConfig = {
  id: "electric-woodlands",
  trade: "electrical",
  name: "Woodlands TX Electrician",
  url: "https://woodlandstxelectrician.com",
  tagline:
    "Electricians for The Woodlands, TX: troubleshooting and repairs, panel upgrades, EV chargers, generators, lighting and pool and spa wiring, in every village.",
  phone: "+12815550145",
  city: "The Woodlands",
  region: "TX",
  serviceArea: {
    towns: ["The Woodlands", "Shenandoah", "Oak Ridge North", "Spring", "Conroe"],
    zips: ["77380", "77381", "77382", "77384", "77385", "77389"],
    neighborhoods: ["Panther Creek", "Indian Springs", "Sterling Ridge"],
  },
  hours: [],
  updated: "2026-11-26",
  facts: [
    { label: "Licensing", value: "Texas electricians are licensed by TDLR, and electrical contractors carry a TECL number you can check online" },
    { label: "Power company", value: "CenterPoint Energy runs the lines and meters in The Woodlands; outages go to CenterPoint, not an electrician" },
    { label: "Older villages", value: "Homes in the first villages are 40 to 50 years old, with panels and wiring from that time" },
    { label: "Urgent jobs", value: "Pick \"Emergency\" on the form and the request is flagged as urgent" },
    { label: "Quotes", value: "Free to ask. You hear the price before work starts" },
  ],
  leadEndpoint: "/api/lead",
  turnstileSiteKey: "0x4AAAAAAF9mIQ55cQuaXFQr",
  flags: resolveFlags({ photoUpload: true }, process.env),
  theme: { accent: "#0f6b5c", accentDark: "#09473d" },
  services: withMoreContent([
    {
      slug: "troubleshooting-repair",
      name: "Troubleshooting and repair",
      summary: "Dead circuits, tripping breakers, GFCIs that won't reset, flickering and warm outlets, found and fixed.",
      answer:
        "Most electrical problems are a tripped GFCI, a loose connection, or an overloaded or failing breaker. Push Reset on every GFCI (bathrooms, kitchen, garage, outside) before anything else. Warm or discolored outlets, buzzing and burning smells need an electrician the same day.",
      body: [
        "Troubleshooting starts with the symptom: what stopped working, what was running, and whether a breaker moved. The more of that you put in the request, the faster the fix.",
        "In older Woodlands homes, backstabbed outlets (wires pushed into holes in the back instead of wrapped on screws) loosen over the years and are a common cause of dead or warm outlets.",
      ],
      faqs: [
        { q: "Why did several outlets stop working at once?", a: "Usually a GFCI upstream tripped; one GFCI can protect outlets in other rooms, the garage or outside. If resetting every GFCI doesn't bring them back, a loose connection in one box is the next suspect." },
      ],
    },
    {
      slug: "panel-upgrades",
      name: "Panel upgrades",
      summary: "Older or full panels replaced and upsized for EV chargers, pools, generators and remodels.",
      answer:
        "A panel upgrade makes sense when the panel is full, original to a 1970s or 1980s house, a brand with a poor record (Federal Pacific, Zinsco), or too small for a planned EV charger, pool or addition. It needs a permit and a CenterPoint disconnect, so it's planned a few weeks out.",
      body: [
        "Start with a load calculation. It may show the existing service is enough with a smarter layout, or that a 200-amp upgrade is due.",
      ],
    },
    {
      slug: "ev-chargers",
      name: "EV chargers",
      summary: "Level 2 home chargers and 240-volt outlets for electric cars, with a panel capacity check first.",
      answer:
        "A Level 2 charger usually needs a 40- to 60-amp 240-volt circuit. In many Woodlands homes the panel is in the garage, which keeps the install short; if it's on an outside wall or the panel is full, the job is longer. A photo of the open panel and the parking spot helps get a firm price.",
      body: [
        "Hardwired chargers and 14-50 outlets both work. Hardwired units can run a little higher and avoid wear on a plug that's used every day.",
      ],
    },
    {
      slug: "generators",
      name: "Generators and transfer switches",
      summary: "Standby generators and portable-generator inlets with interlocks, sized for what you need during outages.",
      answer:
        "A portable generator with an inlet and panel interlock covers the essentials for far less money. A standby generator on natural gas starts on its own and can run the whole house if sized for it. Either way, the connection to the panel is what keeps it safe; never backfeed through an outlet.",
      body: [
        "After Hurricane Beryl in July 2024, many Woodlands homes were without power for days in summer heat, which is when backup power matters most.",
      ],
    },
    {
      slug: "lighting-fans",
      name: "Lighting, fans and landscape lights",
      summary: "Ceiling fans, recessed and under-cabinet lights, dimmers, and low-voltage landscape lighting under the trees.",
      answer:
        "Fans need a fan-rated box. Recessed lights in an insulated ceiling need IC-rated housings. Landscape lighting runs on a low-voltage transformer plugged into a weather-protected GFCI outlet, and under The Woodlands' tree cover it's as much about paths and steps as looks.",
      body: [
        "Bundle every fixture and fan into one request so it's one visit.",
      ],
    },
  ]),
  areas,
  guides,
  faqs: [
    { q: "How do I get an electrician in The Woodlands today?", a: "Send the form with \"Today\" or \"Emergency\" picked and what's happening. If you see sparks or smell burning, turn that circuit off at the panel first if you can do it safely." },
    { q: "The power's out. Is that an electrician?", a: "If neighbors are out too, it's CenterPoint Energy; report it to them. If only your house or part of it is out, check the main breaker and GFCIs, then request an electrician." },
    { q: "Is the electrician licensed?", a: "Electrical work in Texas must be done by or under a TDLR-licensed electrician. Ask for the contractor's TECL number and check it on TDLR's website." },
    { q: "What does an electrician cost in The Woodlands?", a: "It depends on the job, parts and permits. Ask for the price before work starts; you're never committed until you agree to it." },
    { q: "Do I need a permit?", a: "Panel upgrades, new circuits and generators generally need a permit and an inspection. The electrician should pull it as part of the job; ask before work starts." },
    { q: "Can I send photos?", a: "Yes, up to five. The open panel with its label, the outlet or fixture, and where a charger or generator would go are the most useful." },
  ],
}
