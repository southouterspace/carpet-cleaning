import type { Area, Guide, Section, Service } from "@carpet/seo"

/**
 * Longer Willis copy: extra service sections, extra services, neighborhood
 * pages and the cost guide. Written for this site only; don't reuse wording
 * from the other sites. No claims about crew size, years in business,
 * reviews or certifications.
 */

export const serviceSections: Record<string, Section[]> = {
  "carpet-cleaning": [
    {
      heading: "Why carpet dulls in the lanes first",
      paragraphs: [
        "Grit works like sandpaper. Each step grinds it against the fibers, which scratches them and makes the carpet look dull even after a vacuum. Regular deep cleaning gets that grit out before it does lasting damage.",
      ],
    },
    {
      heading: "Getting the most from a cleaning",
      howTo: true,
      paragraphs: [],
      list: [
        "Clear small items and anything breakable off the floor",
        "Point out the spots you care about most when the cleaner arrives",
        "Turn the AC down a few degrees and run ceiling fans",
        "Wait until the carpet is dry before moving furniture back",
      ],
    },
  ],
  "pet-stain-odor-removal": [
    {
      heading: "Lake dogs and wet paws",
      paragraphs: [
        "Dogs that swim in Lake Conroe bring in a musty smell that settles into carpet and couches when they dry off on them. That smell is mostly from lake water, not urine, and it usually comes out with a thorough rinse and a deodorizer.",
      ],
    },
    {
      heading: "What not to use on a urine spot",
      paragraphs: [],
      list: [
        "Steam from a home machine or iron, which can set the odor",
        "Ammonia cleaners, which smell like urine to a pet",
        "Fragrance sprays, which cover the smell for a day",
        "Rental shampooers, which push urine deeper into the pad",
      ],
    },
  ],
  "upholstery-cleaning": [
    {
      heading: "Leather and microfiber",
      paragraphs: [
        "Microfiber couches are often S-code, which means a solvent cleaning; water can leave rings. Leather is a separate job: it gets cleaned and conditioned rather than rinsed. Mention the material in your quote request.",
      ],
    },
  ],
}

export const moreServices: Service[] = [
  {
    slug: "move-out-carpet-cleaning",
    name: "Move-out carpet cleaning",
    summary: "Carpet cleaning between the movers and the walk-through, with a dated receipt for your landlord or buyer.",
    body: [
      "Many Willis leases ask for professional carpet cleaning when you move out, and buyers notice carpet on a walk-through. The best time is after everything is out of the house and before the final inspection, so the whole floor can be reached.",
      "You'll get a dated receipt you can hand to a landlord or property manager. Landlords and agents can also book cleaning between tenants.",
    ],
    sections: [
      {
        heading: "Move-out checklist",
        howTo: true,
        paragraphs: [],
        list: [
          "Book the cleaning for after the movers and before the walk-through",
          "Leave the AC on so the carpet can dry",
          "Point out any pet spots so they get treated, not just rinsed",
          "Keep the dated receipt for your deposit",
        ],
      },
    ],
  },
  {
    slug: "mattress-cleaning",
    name: "Mattress cleaning",
    summary: "Low-moisture mattress cleaning for sweat stains, dust and odors, dry by bedtime.",
    body: [
      "Mattresses collect sweat, skin and dust mites. A low-moisture cleaning lifts stains and odor without soaking the mattress, so it can be slept on the same night. It's an easy add-on when the bedroom carpet is being cleaned.",
    ],
  },
]

export const areas: Area[] = [
  {
    slug: "the-woodlands-hills",
    name: "The Woodlands Hills",
    kind: "neighborhood",
    summary: "Carpet, stair and pet cleaning for new homes in The Woodlands Hills, the master-planned community in Willis, TX.",
    intro: [
      "The Woodlands Hills is a newer master-planned community in Willis near I-45, and most of its homes are only a few years old. New homes usually mean builder-grade carpet, carpeted stairs and a lot of dust from construction still going on nearby.",
      "Cleaning new carpet before the traffic lanes show keeps it looking new longer. Many carpet warranties also ask for professional hot water cleaning every 12 to 24 months, so keep each receipt.",
    ],
    highlight: ["carpet-cleaning", "pet-stain-odor-removal", "upholstery-cleaning"],
  },
  {
    slug: "seven-coves",
    name: "Seven Coves",
    kind: "neighborhood",
    summary: "Carpet and upholstery cleaning for Seven Coves homes on the Willis side of Lake Conroe.",
    intro: [
      "Seven Coves is a lake neighborhood on the Willis side of Lake Conroe, with homes of many ages, from older lake cottages to newer houses. Lake living brings sand, wet feet and damp towels inside, and older homes are often ready for a full deep clean.",
      "If your home is a weekend place or a rental, the cleaning can be scheduled on a weekday or between guests. Share how to get in when you request a quote.",
    ],
    highlight: ["carpet-cleaning", "upholstery-cleaning", "pet-stain-odor-removal"],
  },
  {
    slug: "point-aquarius",
    name: "Point Aquarius",
    kind: "neighborhood",
    summary: "Carpet, rug and tile cleaning for Point Aquarius homes on Lake Conroe near Willis.",
    intro: [
      "Point Aquarius is a lakeside community near Willis on Lake Conroe, with wooded lots and many homes that have been there for decades. Older homes often mix carpet in the bedrooms with tile and area rugs in the main rooms.",
      "Bundling rugs, tile and carpet into one visit saves a second trip. Mention any gate details in your request.",
    ],
    highlight: ["rug-cleaning", "tile-grout-cleaning", "carpet-cleaning"],
  },
  {
    slug: "downtown-willis",
    name: "Downtown Willis",
    kind: "neighborhood",
    summary: "Carpet, upholstery and move-out cleaning for older homes, rentals and offices around downtown Willis, TX.",
    intro: [
      "The older part of Willis, near the historic downtown, has many older houses, rentals and small businesses. Rentals turn over often here, so move-out cleaning is one of the most common requests.",
      "Offices and shops can book early or late so the carpet is dry before opening.",
    ],
    highlight: ["move-out-carpet-cleaning", "carpet-cleaning", "upholstery-cleaning"],
  },
]

export const guides: Guide[] = [
  {
    slug: "carpet-cleaning-cost-willis",
    title: "Carpet cleaning prices in Willis, TX: what goes into the number",
    summary: "How carpet cleaning is priced for Willis homes, rentals and lake houses, what costs extra, and how to get a firm number before booking.",
    updated: "2026-11-25",
    intro: [
      "A carpet cleaning price in Willis comes down to a few things: how many rooms, whether there are stairs, how much pet and spot work there is, and whether anything else, like a couch or rug, gets added to the visit.",
    ],
    sections: [
      {
        heading: "Advertised prices nearby",
        requires: "priceRanges",
        paragraphs: [
          "In November 2026 we reviewed 54 carpet cleaning websites serving Willis, Conroe, Montgomery, The Woodlands and nearby towns. Only 13 listed a carpet price. Three rooms ranged from $88 to $225, with most near $140, and minimums around $150 were common.",
          "Those are prices other companies advertise, not a quote. Low prices often leave out stairs, pre-treatment and larger rooms.",
        ],
      },
      {
        heading: "What adds to the price",
        paragraphs: [],
        list: [
          "Extra rooms, or a large open room counted as two",
          "Stairs and landings",
          "Pet urine treatment at the pad",
          "Moving heavy furniture",
          "A tight move-out date",
        ],
      },
      {
        heading: "Questions to ask any cleaner",
        paragraphs: [],
        list: [
          "Is pre-treatment included?",
          "Are hallways and stairs counted as rooms?",
          "Is there a trip charge for my area?",
          "What happens if a spot doesn't come out?",
        ],
      },
      {
        heading: "Getting your number",
        paragraphs: [
          "Send the quote form with your rooms, stairs and spots, and photos if you can. You'll get one price for the job, and nothing is booked until you say yes.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does move-out cleaning cost more?",
        a: "Usually not by itself. An empty house is faster to clean. A tight date or heavy pet treatment can change the price.",
      },
      {
        q: "Should I pick the cheapest coupon?",
        a: "Compare the total for your home, not the coupon. Ask what's included before you book.",
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
