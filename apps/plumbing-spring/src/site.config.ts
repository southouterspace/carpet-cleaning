import { resolveFlags, type SiteConfig, withAreaDetail } from "@carpet/seo"
import { areaDetail, serviceDetail } from "./local"
import { areas, guides, withMoreContent } from "./content"

/**
 * Spring plumbing site. Everything on the site comes from this file and
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
  id: "plumbing-spring",
  trade: "plumbing",
  name: "Spring Texas Plumber",
  url: "https://springtexasplumber.com",
  tagline:
    "Plumbing repair in Spring, TX: sewer backups when it storms, water heaters, leaks, clogged drains and frozen pipes, from Old Town Spring to Gleannloch Farms.",
  phone: "+12815550143",
  city: "Spring",
  region: "TX",
  serviceArea: {
    towns: ["Spring", "Klein", "The Woodlands", "Tomball", "Humble"],
    zips: ["77373", "77379", "77386", "77388", "77389"],
    neighborhoods: ["Old Town Spring", "Champion Forest", "Gleannloch Farms", "Klein"],
  },
  hours: [],
  updated: "2026-11-26",
  facts: [
    { label: "Licensing", value: "Texas plumbers are licensed by the Texas State Board of Plumbing Examiners (TSBPE); you can look up a license number online" },
    { label: "Utility districts", value: "Most Spring neighborhoods get water and sewer from a municipal utility district (MUD). The MUD handles the main; the line from your house to it is usually yours" },
    { label: "Heavy rain", value: "Spring and Cypress Creek flooding, as in Hurricane Harvey in 2017, can push sewage back up through the lowest drains" },
    { label: "Urgent jobs", value: "Pick \"Emergency\" on the form and the request is flagged as urgent" },
    { label: "Quotes", value: "Free to ask. You hear the price before work starts" },
  ],
  leadEndpoint: "/api/lead",
  turnstileSiteKey: "0x4AAAAAAF9mIQ55cQuaXFQr",
  flags: resolveFlags({ photoUpload: true }, process.env),
  theme: { accent: "#a3243d", accentDark: "#6e1729" },
  services: withAreaDetail(withMoreContent([
    {
      slug: "sewer-backups",
      name: "Sewer backups and main line repair",
      summary: "Sewage coming up a tub or floor drain, toilets gurgling, and backups every time it pours, cleared and fixed.",
      answer:
        "If sewage comes up the lowest drain in the house, stop using water right away, because everything you run goes to that drain. If it only happens in heavy rain, storm water is getting into the sewer system or your line is partly blocked. A plumber clears the line, runs a camera, and can add a backwater valve or a cleanout.",
      body: [
        "Spring sits between Spring Creek and Cypress Creek, and in big storms the sewer mains fill with water that seeps in through cracks and manholes. When they back up, the first place it shows is the lowest drain in your house.",
        "If your line is clear and it still happens in storms, a backwater valve on your sewer line lets sewage out and keeps it from coming back in. If it happens in dry weather too, the problem is in your line: roots, grease, a sag or a break.",
      ],
      faqs: [
        { q: "Is a sewer backup the MUD's problem or mine?", a: "It depends where the blockage is. The utility district usually handles the main in the street; the line from your house to the main is usually the homeowner's. A camera inspection shows which side it's on. If neighbors are backing up too, call the MUD first." },
        { q: "What's a backwater valve?", a: "A one-way valve on your sewer line that lets wastewater leave the house and closes if sewage tries to flow back in. It needs an accessible cleanout so it can be checked." },
      ],
    },
    {
      slug: "water-heater-service",
      name: "Water heater repair and replacement",
      summary: "No hot water, leaking tanks, pilot lights that won't stay lit, and tank or tankless replacements in Spring homes.",
      answer:
        "A leak from the tank body means replacement. A leak from a valve or fitting, a pilot that won't stay lit, or lukewarm water is usually a repair. Most tank water heaters last about 8 to 12 years. After a flood, a gas water heater that sat in water needs to be checked before it's relit.",
      body: [
        "Spring homes have water heaters in garages, closets and attics. A garage unit that sat in floodwater can have a damaged gas valve and burner even if it lights.",
      ],
    },
    {
      slug: "leak-repair",
      name: "Leak repair and slab leaks",
      summary: "Leaks in walls, ceilings and under the slab, found with pressure and acoustic tests and repaired.",
      answer:
        "Look for a water bill that jumps, a meter that moves with all water off, damp drywall, ceiling stains under bathrooms, or warm spots on the floor. Supply lines in most Spring homes run under the slab or through the attic, and the fix depends on where the leak is and how old the pipe is.",
      body: [
        "Clay soil in north Harris County swells in wet weather and shrinks in drought, which moves slabs and stresses pipes under them.",
      ],
    },
    {
      slug: "drain-cleaning",
      name: "Drain cleaning",
      summary: "Kitchen, bath, laundry and floor drains cleared with a cable or jetter, and checked with a camera when they keep clogging.",
      answer:
        "One slow drain is a local clog. A kitchen drain that clogs again and again is usually grease buildup down the line, which a jetter clears better than a cable. Several drains slow at once means the main.",
      body: [
        "Laundry drains in older Spring homes can be too small for modern washers, which pump water out fast and overflow the standpipe. That's a fix, not just a clog.",
      ],
    },
    {
      slug: "emergency-plumbing",
      name: "Emergency plumbing",
      summary: "Burst pipes, a water heater flooding the garage, overflowing toilets and backups you can't stop.",
      answer:
        "Shut off the main water valve, usually in a box near the curb, then turn the water heater off. If it's sewage, stop running water in the house. Then send the request marked Emergency with a photo, so the plumber can bring the right equipment.",
      body: [
        "Most damage comes from the minutes before the water is off. Know where your main valve is and make sure the lid isn't buried under mulch or sod.",
      ],
    },
  ]), serviceDetail),
  areas: withAreaDetail(areas, areaDetail, "2026-11-26"),
  guides,
  faqs: [
    { q: "How do I get a plumber in Spring today?", a: "Send the form with \"Today\" or \"Emergency\" picked, what's happening and a photo if you can. If water is running, shut off the main valve first. If sewage is coming up, stop using water." },
    { q: "Why does my tub drain back up when it rains hard?", a: "Storm water gets into sewer mains during heavy rain, and when the main is full, sewage comes up the lowest drain in your house. A camera inspection shows whether your own line is also part of the problem, and a backwater valve can stop it." },
    { q: "Is the plumber licensed?", a: "Plumbing in Texas must be done by, or under, a plumber licensed by the TSBPE. Ask for the license number and look it up on the board's website." },
    { q: "What does a plumber cost in Spring?", a: "It depends on the job, parts and time of day. Ask for the price before work starts; you're never committed until you agree to it." },
    { q: "Do you work in Klein and Champion Forest?", a: "Yes. The service area covers Spring's ZIP codes from Old Town Spring west through Klein, Champion Forest and Gleannloch Farms, plus nearby The Woodlands, Tomball and Humble." },
    { q: "Can I send photos?", a: "Yes, up to five. A photo of the leak, the drain that's backing up or the water heater label helps the plumber come ready." },
  ],
}
