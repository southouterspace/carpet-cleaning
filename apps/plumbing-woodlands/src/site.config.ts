import { resolveFlags, type SiteConfig, withAreaDetail } from "@carpet/seo"
import { areaDetail, guideDetail, serviceDetail } from "./local"
import { areas, guides, withMoreContent } from "./content"

/**
 * The Woodlands plumbing site. Everything on the site comes from this file
 * and content.ts.
 *
 * Before launch:
 * - `phone` is a placeholder (555-01xx is reserved fictional) and stays
 *   hidden while the phoneCalls flag is off.
 * - Add `hours`, `priceFrom` and `operator` (and the renter's TSBPE license
 *   number in the copy) once a renter confirms them. Never add an address,
 *   reviews, prices or a license number the renter can't back up.
 */
export const site: SiteConfig = {
  id: "plumbing-woodlands",
  trade: "plumbing",
  name: "Woodlands TX Plumber",
  url: "https://woodlandstxplumber.com",
  tagline:
    "Plumbers for The Woodlands, TX: slab leaks, water heaters and tankless units, polybutylene repipes, drains and sewer lines, village by village.",
  phone: "+12815550142",
  city: "The Woodlands",
  region: "TX",
  serviceArea: {
    towns: ["The Woodlands", "Shenandoah", "Oak Ridge North", "Spring", "Conroe"],
    zips: ["77380", "77381", "77382", "77384", "77385", "77389"],
    neighborhoods: ["Grogan's Mill", "Cochran's Crossing", "Alden Bridge", "Creekside Park"],
  },
  hours: [],
  updated: "2026-11-26",
  facts: [
    { label: "Licensing", value: "Texas plumbers are licensed by the Texas State Board of Plumbing Examiners (TSBPE); license numbers can be checked online" },
    { label: "Oldest villages", value: "Grogan's Mill, Panther Creek and Cochran's Crossing homes are mostly from the 1970s and 1980s, the polybutylene era" },
    { label: "Foundations", value: "Homes sit on slabs over clay soil that swells and shrinks, which stresses pipes under the slab" },
    { label: "Urgent jobs", value: "Pick \"Emergency\" on the form and the request is flagged as urgent" },
    { label: "Quotes", value: "Free to ask. You hear the price before work starts" },
  ],
  leadEndpoint: "/api/lead",
  turnstileSiteKey: "0x4AAAAAAF9mIQ55cQuaXFQr",
  flags: resolveFlags({ photoUpload: true }, process.env),
  theme: { accent: "#55601a", accentDark: "#384010" },
  services: withAreaDetail(withMoreContent([
    {
      slug: "slab-leak-repair",
      name: "Slab leak detection and repair",
      summary: "Finding leaks under the slab with pressure, acoustic and thermal tests, then repairing or rerouting the line.",
      answer:
        "Woodlands homes sit on concrete slabs over clay that swells when wet and shrinks in drought, and that movement stresses the pipes underneath. A slab leak shows up as a jump in the water bill, a moving meter with everything off, warm floors or damp flooring. Fixes are a spot repair, a tunnel or a reroute through the attic.",
      body: [
        "Dry summers followed by heavy rain are hard on slab plumbing. Clay soil moves, the slab moves a little with it, and older copper or polybutylene under the house can crack.",
        "A plumber confirms the leak at the meter, isolates hot from cold, and pinpoints the spot before anything is opened. When the pipe is old and likely to leak again elsewhere, rerouting the whole line is often the better value.",
      ],
      faqs: [
        { q: "Does homeowners insurance pay for a slab leak?", a: "Many policies pay to access the leak and repair water damage, but not to fix the pipe itself. Ask your insurer before the work starts and keep the plumber's report and photos." },
      ],
    },
    {
      slug: "water-heaters",
      name: "Water heaters and tankless",
      summary: "Tank and tankless water heaters repaired, flushed, descaled and replaced, including attic installs.",
      answer:
        "Many Woodlands homes have their water heater in the attic, so a leak there damages ceilings fast; a drain pan and a working pan drain matter. Tank heaters typically last 8 to 12 years. Tankless units last longer but need descaling, roughly once a year in hard water, and often a larger gas line when converting.",
      body: [
        "If yours is in the attic, check the pan under it for water or rust every few months. A wet pan is the early warning.",
        "When replacing, the choice is like for like, a larger tank, or tankless. Tankless saves space and runs out of hot water less, but costs more up front.",
      ],
      faqs: [
        { q: "How do I find my water heater's age?", a: "It's on the label, often coded into the serial number (many brands use a letter for the month and two digits for the year). Search the brand plus \"serial number age\" or include a photo of the label in your request." },
      ],
    },
    {
      slug: "polybutylene-repiping",
      name: "Polybutylene and whole-house repiping",
      summary: "Replacing gray polybutylene and aging copper with PEX, routed through the attic to keep the slab closed.",
      answer:
        "Polybutylene is a gray (sometimes blue or black) plastic water pipe used from the late 1970s to the mid-1990s, and its fittings fail with age. Many homes in The Woodlands' older villages were built in that window. A repipe replaces the supply lines, usually with PEX, through the attic and walls.",
      body: [
        "Look for gray plastic pipe at the water heater, under sinks, or where the line enters the house. Stamped markings like \"PB2110\" confirm it.",
        "A typical repipe takes a few days: new lines run through the attic, drop into walls at each fixture, and small drywall openings are patched afterward.",
      ],
    },
    {
      slug: "drain-sewer",
      name: "Drain and sewer line service",
      summary: "Clogs, backups, roots and broken sewer pipe, cleared with a cable or jetter and checked with a camera.",
      answer:
        "One slow drain is usually a local clog. Several drains backing up, gurgling, or water rising in the tub when the toilet flushes points to the main sewer line. The Woodlands' mature trees send roots into older lines, and a camera shows what's there before anyone digs.",
      body: [
        "Older villages have tall pines and oaks close to the house, and roots find their way into cast iron and clay joints. Newer homes have PVC, but settling can pull joints apart.",
      ],
    },
    {
      slug: "emergency-plumber",
      name: "Emergency plumbing",
      summary: "Burst pipes, attic water heater leaks, overflowing toilets and sewage backups in The Woodlands.",
      answer:
        "Shut off the main water valve, then turn off the water heater. In many Woodlands homes the main is in a box near the curb, and some also have a valve in the garage. If the water is coming from the attic, put a bucket under the leak and push a small hole in a sagging ceiling so it drains instead of collapsing.",
      body: [
        "Attic plumbing is common here, which means leaks show up as ceiling stains or drips. The faster the water is off, the less drywall and insulation get ruined.",
      ],
    },
  ]), serviceDetail),
  areas: withAreaDetail(areas, areaDetail, "2026-11-26"),
  guides: withAreaDetail(guides, guideDetail),
  faqs: [
    { q: "How do I get a plumber in The Woodlands today?", a: "Send the form with \"Today\" or \"Emergency\" picked, a short description and a photo if you can. If water is still running, turn off the main valve first." },
    { q: "Do I have polybutylene pipe?", a: "If your home was built from the late 1970s to the mid-1990s, check under sinks and at the water heater for gray plastic pipe. Markings like PB2110 confirm it. Many homes in the older villages have been repiped already; many haven't." },
    { q: "Is the plumber licensed?", a: "Plumbing in Texas must be done by, or under, a plumber licensed by the TSBPE. Ask for the license number and look it up on the board's website." },
    { q: "Do you cover Creekside Park and the Harris County side?", a: "Yes. The service area covers all of The Woodlands' ZIP codes, including Creekside Park in 77389, plus Shenandoah, Oak Ridge North and nearby Spring and Conroe." },
    { q: "Should I turn off the water when I travel?", a: "It's a good habit, especially if the water heater is in the attic. Shut the main, set the water heater to vacation, and leave the irrigation system on its own valve if it has one." },
    { q: "Can I send photos?", a: "Yes, up to five. A photo of the leak, the water heater label or the pipe you're unsure about helps the plumber come prepared." },
  ],
}
