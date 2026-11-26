import { resolveFlags, type SiteConfig } from "@carpet/seo"
import { areas, guides, withMoreContent } from "./content"

/**
 * Conroe plumbing site. Everything on the site comes from this file and
 * content.ts.
 *
 * Before launch:
 * - `phone` is a placeholder (555-01xx is reserved fictional) and stays
 *   hidden while the phoneCalls flag is off. Set the renter's forwarding
 *   number before turning that flag on.
 * - Add `hours`, `priceFrom` and `operator` (with the renter's TSBPE license
 *   number in the copy) once a renter confirms them. Never add an address,
 *   reviews, prices or a license number the renter can't back up.
 */
export const site: SiteConfig = {
  id: "plumbing-conroe",
  trade: "plumbing",
  name: "Conroe TX Plumber",
  url: "https://conroetxplumber.com",
  tagline:
    "Plumbing repair in Conroe, TX: leaks, water heaters, clogged drains, slab leaks and sewer lines, for homes from downtown Conroe to the west side of Lake Conroe.",
  phone: "+19365550140",
  city: "Conroe",
  region: "TX",
  serviceArea: {
    towns: ["Conroe", "Shenandoah", "Oak Ridge North", "Panorama Village", "Cut and Shoot", "Porter Heights"],
    zips: ["77301", "77302", "77303", "77304", "77306", "77384", "77385"],
    neighborhoods: ["Downtown Conroe", "River Plantation", "Grand Central Park", "Lake Conroe west shore"],
  },
  hours: [],
  updated: "2026-11-26",
  facts: [
    { label: "Licensing", value: "Texas requires plumbers to be licensed by the Texas State Board of Plumbing Examiners (TSBPE). You can look up any license number on the board's website." },
    { label: "Urgent jobs", value: "Pick \"Emergency\" on the form and the request is flagged as urgent at the top of the plumber's inbox" },
    { label: "Water heaters", value: "Most tank water heaters last about 8 to 12 years; hard water and a skipped flush shorten that" },
    { label: "Older homes", value: "Houses built before the mid-1990s can have polybutylene or galvanized pipe, which fail more often than copper or PEX" },
    { label: "Quotes", value: "Free to ask. You hear the price before work starts" },
  ],
  leadEndpoint: "/api/lead",
  turnstileSiteKey: "0x4AAAAAAF9mIQ55cQuaXFQr",
  flags: resolveFlags({ photoUpload: true }, process.env),
  theme: { accent: "#005a9c", accentDark: "#003a66" },
  services: withMoreContent([
    {
      slug: "emergency-plumbing",
      name: "Emergency plumbing",
      summary: "Burst pipes, overflowing toilets, sewage backups and leaks you can't stop in Conroe, TX.",
      answer:
        "Turn off the main water valve first, then switch off the water heater. Most Conroe homes have the main shut-off in a box near the street or where the line enters the house. Then send the request marked Emergency, with a photo if you can, so the plumber knows what to bring.",
      body: [
        "A plumbing emergency is anything that keeps putting water where it shouldn't be: a split pipe in the attic, a supply line that let go under a sink, a water heater dumping water into the garage, or sewage coming up a floor drain.",
        "The first five minutes matter more than anything a plumber does later. Stop the water at the main, kill power or gas to the water heater, and move what you can out of the way. Then tell the plumber exactly what you saw and where.",
      ],
      faqs: [
        { q: "Where is the main water shut-off in a Conroe house?", a: "Usually in a concrete or plastic box near the street, at the meter, or on an outside wall where the line enters the house. Newer homes sometimes have a second valve in the garage. Find yours before you need it." },
        { q: "Should I turn off the water heater too?", a: "Yes, if you've shut off the main. A tank heater with no water coming in can overheat. Turn a gas heater's control to Pilot or Off, or switch off the breaker for an electric one." },
      ],
    },
    {
      slug: "water-heater-repair",
      name: "Water heater repair and replacement",
      summary: "No hot water, a leaking tank, rumbling or rusty water: tank and tankless water heaters repaired or replaced.",
      answer:
        "If a tank water heater is leaking from the tank itself, it needs replacing; if it's leaking from a fitting or valve, it can often be repaired. No hot water usually means a pilot, thermocouple, element or thermostat problem, which is a repair. Age matters: most tanks last about 8 to 12 years.",
      body: [
        "Water heaters in Conroe work hard. Hard groundwater leaves sediment in the bottom of the tank, which is the rumbling and popping you hear, and it wears tanks out faster.",
        "A plumber checks whether the problem is a part (thermocouple, gas valve, element, thermostat, relief valve) or the tank. Parts get repaired. A tank that's rusting through gets replaced, and that's the time to decide on the same size tank, a bigger one or tankless.",
      ],
      faqs: [
        { q: "Is it worth repairing a 10-year-old water heater?", a: "For a cheap part like a thermocouple or element, often yes. For anything involving the tank, or a gas valve on an older unit, replacing it usually makes more sense. Ask for both prices." },
        { q: "Does a new water heater need a permit in Conroe?", a: "Inside city limits, a water heater replacement generally needs a plumbing permit, and Conroe is no exception. A licensed plumber pulls it as part of the job." },
      ],
    },
    {
      slug: "drain-cleaning",
      name: "Drain cleaning",
      summary: "Slow sinks, clogged tubs and showers, and kitchen drains that keep backing up, cleared and checked.",
      answer:
        "One slow drain is usually a local clog in that fixture's trap or line. Several slow drains at once, or water coming up in the tub when the toilet flushes, points to the main line. Kitchen clogs are mostly grease; bath clogs are mostly hair and soap.",
      body: [
        "A plunger or a hair snake clears most single clogs. When a drain keeps coming back, the clog is further down the line than those tools reach, or the pipe has buildup that narrows it.",
        "A plumber runs a cable machine through the line, and for repeat clogs a camera shows whether it's grease, roots, a belly in the pipe or a break.",
      ],
      sections: [
        {
          heading: "Before you call about a clog",
          howTo: true,
          paragraphs: ["Try these first. They fix a lot of single-fixture clogs."],
          list: [
            "Use a cup plunger on sinks and a flange plunger on toilets, with the overflow covered",
            "Pull hair out of the tub drain with a plastic hair snake",
            "Clean the P-trap under the sink into a bucket",
            "Skip chemical drain openers; they rarely clear a full clog and they're hard on pipes and on the plumber",
          ],
        },
      ],
    },
    {
      slug: "leak-detection",
      name: "Leak detection and slab leaks",
      summary: "Finding hidden leaks in walls, ceilings and under the slab, then fixing them with as little digging as possible.",
      answer:
        "Signs of a slab leak are a water bill that jumps for no reason, the meter spinning with every tap off, a warm spot on the floor, the sound of running water, or damp carpet or flooring with no spill. Most Conroe homes are on slab foundations, so supply lines run under the concrete.",
      body: [
        "Hidden leaks waste water and money long before you see them. A plumber confirms the leak at the meter, then narrows it down with pressure tests, listening equipment and thermal imaging.",
        "Once it's found, there are usually three ways to fix a slab leak: open the slab at the leak, tunnel under it, or reroute the line through the attic or walls. The right one depends on where the leak is and how old the pipe is.",
      ],
      faqs: [
        { q: "How do I check for a leak at the meter?", a: "Turn off every tap and appliance that uses water, then look at the meter. If the small leak indicator (often a triangle or dial) is moving, water is going somewhere." },
      ],
    },
    {
      slug: "sewer-line-repair",
      name: "Sewer line repair",
      summary: "Main line backups, roots in the line, and broken or sagging sewer pipe, found with a camera and repaired.",
      answer:
        "A sewer line problem shows up as several drains backing up at once, gurgling toilets, sewage in the lowest drain, or a soggy, smelly patch in the yard. A camera inspection shows whether it's a clog, roots, a sag or a break before anyone digs.",
      body: [
        "Older Conroe neighborhoods with big trees see roots in clay and cast iron sewer lines. Newer homes have PVC, but settling soil can still pull joints apart.",
        "A cable machine clears the line so it drains again. A camera then shows why it backed up, so you're paying to fix the cause and not just the symptom.",
      ],
    },
    {
      slug: "fixture-repair",
      name: "Toilet, faucet and fixture repair",
      summary: "Running toilets, dripping faucets, low pressure, garbage disposals and shut-off valves that won't shut off.",
      answer:
        "A toilet that runs or refills on its own usually needs a new flapper or fill valve. A dripping faucet needs a cartridge or washer. Low pressure at one fixture is usually a clogged aerator or cartridge; low pressure everywhere points to the pressure regulator or the supply line.",
      body: [
        "Small leaks add up. A running toilet can waste far more water in a day than a household uses for everything else, and a slow drip from a valve under a sink can rot the cabinet floor.",
        "These are short visits, and it's worth listing every small problem in the house on one request so they're done in one trip.",
      ],
    },
  ]),
  areas,
  guides,
  faqs: [
    { q: "How do I get a plumber in Conroe today?", a: "Send the form with \"Today\" or \"Emergency\" picked, a short description and a photo if you can. Requests marked Emergency are flagged as urgent. If water is still running, shut off the main valve first." },
    { q: "Is the plumber licensed?", a: "Plumbing in Texas has to be done by, or under, a plumber licensed by the Texas State Board of Plumbing Examiners. Ask for the license number and check it on the TSBPE website." },
    { q: "What does a plumber cost in Conroe?", a: "It depends on the job, the parts and the time of day. Ask for the price before work starts; you're never committed until you agree to it." },
    { q: "Do you work on the Conroe side of Lake Conroe?", a: "Yes. The service area covers Conroe's ZIP codes, including homes along the west shore of Lake Conroe and in River Plantation, plus Shenandoah, Oak Ridge North, Panorama Village and Cut and Shoot." },
    { q: "My water smells like rotten eggs. Is that a plumbing problem?", a: "If it's only the hot water, it's usually the water heater's anode rod reacting with the water, and a plumber can swap it. If it's hot and cold, it's the water supply; call your water provider." },
    { q: "Can I send photos?", a: "Yes, up to five. A photo of the leak, the water heater's label or the area under the sink helps the plumber bring the right parts." },
  ],
}
