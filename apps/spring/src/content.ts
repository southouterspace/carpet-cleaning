import type { Area, Guide, Section, Service } from "@carpet/seo"

/**
 * Longer Spring copy: extra service sections, extra services, area pages
 * and the cost guide. Written for this site only; don't reuse wording from
 * the other sites. No claims about crew size, years in business, reviews
 * or certifications.
 */

export const serviceSections: Record<string, Section[]> = {
  "carpet-cleaning": [
    {
      heading: "Humidity and carpet",
      paragraphs: [
        "Houston-area humidity slows drying and can bring old smells back up. That's why the rinse matters: a cleaning that leaves soap or too much water behind can make carpet feel sticky and smell musty. Strong suction, and running the AC during and after, keeps drying short.",
      ],
    },
    {
      heading: "After the cleaning",
      howTo: true,
      paragraphs: [],
      list: [
        "Keep the AC on and set a few degrees cooler",
        "Run ceiling fans and open interior doors",
        "Walk on it in clean socks, not shoes",
        "Put furniture back once it's dry, using the foil tabs if left under legs",
      ],
    },
  ],
  "pet-urine-removal": [
    {
      heading: "Why home machines make urine worse",
      paragraphs: [
        "Home carpet machines put a lot of water down and pull little of it back. On a urine spot, that water carries the urine deeper and wider in the pad, and the smell often comes back stronger once it dries. Blot, use an enzyme cleaner, and leave deeper spots for treatment at the pad.",
      ],
    },
  ],
  "couch-cleaning": [
    {
      heading: "What the tag means",
      paragraphs: [],
      list: [
        "W: water-based cleaning is fine",
        "S: solvent cleaning only",
        "WS: water or solvent",
        "X: vacuum only",
      ],
    },
  ],
  "tile-and-grout-cleaning": [
    {
      heading: "Downstairs tile, upstairs carpet",
      paragraphs: [
        "In a lot of Spring homes, the whole first floor is tile. Doing the tile and the upstairs carpet in one visit is usually cheaper than two separate trips.",
      ],
    },
  ],
}

export const moreServices: Service[] = [
  {
    slug: "stairs-and-landings",
    name: "Stairs and landings",
    summary: "Step-by-step cleaning for carpeted stairs and upstairs landings, the first carpet to wear in a two-story home.",
    body: [
      "Stairs take more foot traffic per square foot than any room, and every step lands on the same spot. They're cleaned one at a time with a hand tool, including the front edge and the corners against the wall.",
      "The landing at the top of the stairs is usually the darkest carpet in the house. Mention it with your rooms when you ask for a quote.",
    ],
  },
  {
    slug: "mattress-cleaning",
    name: "Mattress cleaning",
    summary: "Low-moisture mattress cleaning for sweat stains, dust and kids' accidents, dry the same day.",
    body: [
      "A low-moisture cleaning lifts stains, dust and odor from a mattress without soaking it, so it's ready by bedtime. Kids' accidents get an enzyme treatment for the urine. A waterproof protector keeps it cleaner afterward.",
    ],
  },
]

export const areas: Area[] = [
  {
    slug: "old-town-spring",
    name: "Old Town Spring",
    kind: "neighborhood",
    summary: "Carpet, rug and upholstery cleaning for homes, shops and restaurants around Old Town Spring, TX.",
    intro: [
      "Old Town Spring is the historic district near I-45 and Spring Cypress Road, with restored older buildings turned into shops, restaurants and offices, and older homes around it. Shops and small offices here can book before opening or after closing so the floors are dry for customers.",
      "Older homes nearby often have area rugs on wood floors. Each rug is checked for fiber and dye before cleaning.",
    ],
    highlight: ["rug-cleaning", "carpet-cleaning", "couch-cleaning"],
  },
  {
    slug: "gleannloch-farms",
    name: "Gleannloch Farms",
    kind: "neighborhood",
    summary: "Carpet, stair and pet urine cleaning for Gleannloch Farms homes in Spring, TX.",
    intro: [
      "Gleannloch Farms is a large master-planned community in northwest Spring with many two-story homes. Most of the carpet is upstairs: bedrooms, game rooms, stairs and the landing. In homes with the original carpet, the stairs and the landing are usually the most worn.",
      "If a pet has had accidents upstairs, those spots get treated at the pad, not just rinsed.",
    ],
    highlight: ["stairs-and-landings", "carpet-cleaning", "pet-urine-removal"],
  },
  {
    slug: "champion-forest",
    name: "Champion Forest",
    kind: "neighborhood",
    summary: "Carpet, couch and tile cleaning for established homes in Champion Forest, on the southwest side of Spring.",
    intro: [
      "Champion Forest is an established, wooded neighborhood with many homes that are decades old. Older homes often have carpet that's been down a long time, or a mix of tile, wood and rugs after remodels.",
      "Older carpet can still clean up well, but you'll hear honestly whether a room is past the point where cleaning helps.",
    ],
    highlight: ["carpet-cleaning", "tile-and-grout-cleaning", "couch-cleaning"],
  },
]

export const guides: Guide[] = [
  {
    slug: "carpet-cleaning-cost-spring",
    title: "What carpet cleaning costs in Spring, TX",
    summary: "How Spring carpet cleaning is priced, why stairs and upstairs-only jobs price differently, and how to get a firm total.",
    updated: "2026-11-25",
    intro: [
      "In Spring, a typical job is the upstairs of a two-story home: three or four bedrooms, a game room, the stairs and the landing. Rooms and stairs set most of the price, and pet treatment and add-ons set the rest.",
    ],
    sections: [
      {
        heading: "Advertised prices nearby",
        requires: "priceRanges",
        paragraphs: [
          "In November 2026 we checked 54 carpet cleaning websites serving Spring, The Woodlands, Tomball, Conroe and nearby towns. Only 13 posted a carpet price. Three rooms were advertised from $88 to $225, most near $140, and many had a minimum around $150.",
          "Those are other companies' prices, not a quote. The cheapest offers often leave out stairs, landings and pre-treatment.",
        ],
      },
      {
        heading: "What sets the price",
        paragraphs: [],
        list: [
          "Number of rooms; game rooms and open lofts may count as two",
          "Stairs, by staircase or by step, and the landing",
          "Pet urine treatment at the pad",
          "Furniture moving",
          "Couches, rugs, tile and mattresses added to the visit",
        ],
      },
      {
        heading: "Upstairs-only jobs",
        paragraphs: [
          "If your downstairs is tile or wood, you only pay for the carpeted rooms. Adding the downstairs tile to the same visit is often cheaper than booking it separately later.",
        ],
      },
      {
        heading: "Getting a firm total",
        paragraphs: [
          "Send the form with your rooms, stairs and spots, and photos if you can. You'll get one price, and nothing is booked until you agree.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the landing counted as a room?",
        a: "Often it's counted with the stairs or as a small room. Mention it in your request so it's in the price.",
      },
      {
        q: "Do coupons include stairs?",
        a: "Usually not. Check what a coupon covers and compare the total for your home.",
      },
    ],
  },
]

/** Adds the extra sections to the core services and appends the extra services. */
export const withMoreContent = (core: Service[]): Service[] =>
  [...core, ...moreServices].map((s) => ({
    ...s,
    sections: [...(s.sections ?? []), ...(serviceSections[s.slug] ?? [])],
  }))
