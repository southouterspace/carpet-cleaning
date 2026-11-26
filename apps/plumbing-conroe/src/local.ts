import type { AreaDetail } from "@carpet/seo"

/**
 * Local detail for each Conroe plumbing area page. Every page needs text no
 * other page has (see scripts/uniqueness.mjs). Facts here are about the age
 * and type of homes, which drive what plumbing they have. Sources:
 * conroe.org (downtown history), riverplantation.org (1970s community on the
 * West Fork of the San Jacinto), grandcentralpark.com (Johnson Development
 * master-planned community), Lake Conroe built 1973 by the San Jacinto River
 * Authority (sjra.net). Pipe eras: polybutylene was common from about 1978 to
 * 1995; PEX became standard in new Texas homes in the 2000s.
 */
export const areaDetail: AreaDetail = {
  "downtown-conroe": {
    sections: [
      {
        heading: "What's under an old Conroe house",
        paragraphs: [
          "Plenty of homes near downtown sit on piers and beams instead of a slab, with a crawl space underneath. That's good news for repairs: a plumber can usually reach a leaking drain or supply line from below without breaking concrete or opening walls.",
          "The catch is that crawl-space pipes are exposed to the cold. When a hard freeze is in the forecast, wrap any pipe you can see under the house and close the foundation vents if your home has them.",
        ],
        list: [
          "Wet soil or a musty smell under the house can mean a slow drain leak",
          "A sagging floor near a bathroom often points to a long-running leak",
          "Orange or brown water after the water's been off is usually galvanized pipe",
        ],
        link: { href: "/services/repiping", text: "When repiping makes sense" },
      },
    ],
    faqs: [
      {
        q: "Is a pier-and-beam house easier to repipe?",
        a: "Usually, yes. New lines can run through the crawl space, so there's less drywall to open than in a slab home. Ask the plumber to check the crawl space access before quoting.",
      },
    ],
  },
  "river-plantation": {
    sections: [
      {
        heading: "Fifty years of trees and pipes",
        paragraphs: [
          "River Plantation was laid out in the early 1970s, so the oldest sewer lines there have spent half a century next to oak and pine roots. Roots find the joints in clay and cast iron sewer pipe, and the first sign is often a toilet that gurgles when the washer drains.",
          "Homes from the late 1970s through the 1980s are the ones most likely to have polybutylene supply lines. If you see gray plastic pipe at the water heater or under a sink, it's worth getting a repipe price before it starts leaking.",
        ],
        list: [
          "A camera inspection shows roots, sags and cracks before you pay to dig",
          "Root clogs come back, so ask about clearing schedules or a liner",
          "Check the water heater's label: the date is often in the serial number",
        ],
        link: { href: "/services/sewer-line-repair", text: "Sewer line repair" },
      },
    ],
    faqs: [
      {
        q: "Do homes near the river flood the sewer line?",
        a: "When the river is high, some lower lots see slow drains or backups. A backwater valve on the sewer line keeps city or river water from coming up into the house.",
      },
    ],
  },
  "grand-central-park": {
    sections: [
      {
        heading: "The first few years in a new home",
        paragraphs: [
          "Grand Central Park is still being built out, so many owners are in their first or second year in the house. That's when the builder's warranty matters most: most builders cover plumbing defects for a set time, and a leak inside a wall in year one is usually theirs to fix.",
          "Keep a simple log of anything odd: a drip, a slow drain, a water heater that runs out fast. Builders want a written list, and it helps a plumber spot a pattern if the warranty has run out.",
        ],
        list: [
          "Find your main shut-off now, before you need it in a hurry",
          "Test the water hardness before buying a softener",
          "Flush the water heater once a year to clear sediment",
          "Clean faucet aerators if pressure drops in the first months",
        ],
        link: { href: "/services/water-heater-repair", text: "Water heater service" },
      },
    ],
  },
  "lake-conroe-west-shore": {
    sections: [
      {
        heading: "Plumbing that sits idle",
        paragraphs: [
          "Lake Conroe filled in 1973, and the shoreline has homes from every decade since. A weekend house built in the 1980s may still have its original water heater closet and polybutylene lines, while the house next door was rebuilt last year.",
          "Water that sits in pipes for a week can smell like rotten eggs when you get back, especially from the hot side. That's usually the water heater's anode rod reacting with the water, and a plumber can swap it for a different type.",
        ],
        list: [
          "Smart leak sensors and an automatic shut-off valve suit homes left empty",
          "Outdoor kitchens and boat houses need their own shut-offs for freezes",
          "Run every faucet for a minute when you arrive to clear stale water",
        ],
        link: { href: "/guides/burst-pipe-what-to-do", text: "What to do when a pipe bursts" },
      },
    ],
    faqs: [
      {
        q: "Should I turn the water heater off when I leave the lake house?",
        a: "Most heaters have a vacation setting that keeps them from freezing while using little energy. Turning the water off at the main matters more, since it limits how much a leak can do.",
      },
    ],
  },
}
