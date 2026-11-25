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
      link: { href: "/guides/replace-carpet-or-clean-it", text: "Should you replace carpet or clean it?" },
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
    {
      heading: "Ask before you book pet urine removal",
      paragraphs: [
        "These answers tell you whether the urine gets treated or just covered up.",
      ],
      list: [
        "Will you use a UV light to find the spots?",
        "Is the treatment an enzyme or oxidizer, or a deodorizer?",
        "Does it reach the pad and subfloor?",
        "What's your policy if a spot wicks back after drying?",
        "Is it priced per spot, per room or by area?",
        "Is it included in any special?",
      ],
    },
    {
      heading: "Urine on tile and wood floors",
      paragraphs: [
        "Downstairs tile and wood floors in Spring homes take accidents too. On sealed tile, urine wipes up, but it soaks into unsealed grout and leaves an odor; cleaning and sealing the grout fixes most of it. On wood, wipe it up fast. Urine that sits can stain the wood dark and may need sanding or board replacement, which is a flooring job, not a cleaning.",
      ],
      link: { href: "/services/tile-and-grout-cleaning", text: "See tile and grout cleaning" },
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
        heading: "Per room, divided out",
        requires: "priceRanges",
        paragraphs: [
          "Those three-room specials divide out to about $30 to $75 per room, with most near $47. That's simple arithmetic on other companies' posted prices, not a quote, and minimums usually apply.",
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
        heading: "Per room or per square foot",
        paragraphs: [
          "Most Spring cleaners quote per room. A per-square-foot quote is more common for game rooms, media rooms and open upstairs lofts, where a \"room\" can be twice the size of a bedroom.",
          "To compare, measure wall to wall. An 18 by 20 game room is 360 square feet, which is two rooms on most per-room quotes.",
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
  {
    slug: "replace-carpet-or-clean-it",
    title: "Should you replace carpet or clean it?",
    summary: "How to tell if carpet needs replacing or just a cleaning, how long carpet lasts, and what a cleaning can do for 10 and 15-year-old carpet.",
    updated: "2026-11-25",
    intro: [
      "In Spring, a lot of homes built in the 2000s and 2010s still have the original carpet upstairs. Whether to clean it or replace it is one of the most common questions, especially before selling.",
      "Here's how to tell which you need.",
    ],
    sections: [
      {
        heading: "Signs cleaning will fix it",
        paragraphs: [],
        list: [
          "Traffic lanes that look gray but the pile is still there",
          "A few spots or stains in otherwise good carpet",
          "Dull, flat-looking carpet that still feels thick underfoot",
          "Light pet odor from a small number of spots",
        ],
      },
      {
        heading: "Signs it's time to replace",
        paragraphs: [],
        list: [
          "Bald spots or backing showing through on stairs and landings",
          "Seams splitting or edges fraying along doorways",
          "Ripples that come back after stretching",
          "Urine soaked through the pad in many places",
          "Pad that feels flat, crunchy or lumpy",
          "Water damage or mold under the carpet",
        ],
      },
      {
        heading: "How long carpet lasts",
        paragraphs: [
          "Builder-grade carpet often lasts 8 to 10 years upstairs in a busy house. Better nylon carpet can last 15 years or more with regular vacuuming and a cleaning every year or so. Stairs and landings wear out first, which is why some homeowners replace just those.",
        ],
      },
      {
        heading: "Is it worth cleaning 15-year-old carpet?",
        paragraphs: [
          "Often yes, if the fibers aren't worn through. A good cleaning can brighten old carpet and buy time, especially if you plan to replace it in a year or two or you're selling and want the house to show well. If you're replacing it next month anyway, skip the cleaning.",
        ],
      },
      {
        heading: "Before selling",
        paragraphs: [
          "Buyers notice clean carpet and smell pet odor right away. A cleaning costs far less than new carpet and is usually enough unless the carpet is worn, badly stained or soaked with urine. Many sellers clean and let the buyer choose new flooring.",
        ],
        link: { href: "/services/carpet-cleaning", text: "See carpet cleaning" },
      },
    ],
    faqs: [
      {
        q: "How do I know if my carpet needs to be replaced?",
        a: "Look for bald spots, backing showing, splitting seams, ripples that won't stay flat, or urine soaked through the pad in many places. Dirt and traffic lanes alone usually just need a cleaning.",
      },
      {
        q: "How long does carpet last?",
        a: "About 8 to 15 years, depending on quality, traffic, pets and how often it's vacuumed and cleaned.",
      },
      {
        q: "Should I clean carpet before selling my house?",
        a: "Usually yes. It's much cheaper than replacing and makes the home show and smell better, unless the carpet is worn out.",
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
