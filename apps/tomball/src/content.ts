import type { Area, Guide, Section, Service } from "@carpet/seo"

/**
 * Longer Tomball copy: extra service sections, extra services, area pages
 * and the cost guide. Written for this site only; don't reuse wording from
 * the other sites. No claims about crew size, years in business, reviews
 * or certifications.
 */

export const serviceSections: Record<string, Section[]> = {
  "carpet-cleaning": [
    {
      heading: "Older carpet in older homes",
      paragraphs: [
        "Some homes near downtown Tomball still have carpet that's been down for 15 or 20 years. Older carpet can still clean up well, but seams, loose edges and worn backing need a lighter hand. You'll hear what to expect before the cleaning, including whether a room is past the point where cleaning helps much.",
      ],
    },
    {
      heading: "Keeping it clean longer",
      howTo: true,
      paragraphs: [],
      list: [
        "Use mats at every outside door, inside and out",
        "Vacuum the busiest paths twice a week",
        "Blot spills right away with a white towel and cool water",
        "Schedule a deep clean every 12 to 18 months",
      ],
    },
  ],
  "pet-odor-treatment": [
    {
      heading: "Signs the urine reached the pad",
      paragraphs: [],
      list: [
        "The smell is stronger on humid or rainy days",
        "A spot reappears a few days after you clean it",
        "Your pet keeps going back to the same place",
        "The carpet backing feels stiff or crunchy",
      ],
    },
  ],
  "sofa-cleaning": [
    {
      heading: "Cleaning codes",
      paragraphs: [],
      list: [
        "W: water-based cleaning",
        "S: solvent cleaning only",
        "WS: either water or solvent",
        "X: vacuum only, no wet cleaning",
      ],
    },
  ],
  "area-rug-cleaning": [
    {
      heading: "Family rugs and heirlooms",
      paragraphs: [
        "A lot of older Tomball families have a rug that's been handed down. Wool and hand-knotted rugs can usually be cleaned, but they're checked first for loose dyes, weak fringe and old repairs. If a rug needs more care than an in-home cleaning can give, you'll be told so.",
      ],
    },
  ],
}

export const moreServices: Service[] = [
  {
    slug: "shop-and-office-carpet",
    name: "Shop and office carpet",
    summary: "Carpet cleaning for small shops, offices and churches in Tomball, booked around business hours.",
    body: [
      "Small shops, offices and meeting rooms get heavy, concentrated traffic: the path from the door to the counter, the spot under every desk chair. Low-profile commercial carpet cleans well and dries fast.",
      "Cleaning can be done early in the morning, after closing or on a weekend so the floor is dry when people arrive.",
    ],
  },
  {
    slug: "spot-and-stain-removal",
    name: "Spot and stain removal",
    summary: "Treatment for coffee, wine, grease, mud and other stains on carpet and upholstery.",
    body: [
      "Stains each need their own chemistry, and the wrong product can lock one in. Spot work is part of every cleaning, and a few spots can also be booked on their own.",
    ],
    sections: [
      {
        heading: "Before we arrive",
        howTo: true,
        paragraphs: [],
        list: [
          "Blot with a white towel; don't rub",
          "Dab with cool water and blot again",
          "Skip bleach, oxy cleaners and colored soap",
          "Note what spilled, if you know",
        ],
      },
    ],
  },
]

export const areas: Area[] = [
  {
    slug: "downtown-tomball",
    name: "Downtown Tomball",
    kind: "neighborhood",
    summary: "Carpet, rug and upholstery cleaning for older homes, shops and offices around downtown Tomball, TX.",
    intro: [
      "Tomball grew up as a railroad town, and the blocks around Main Street and the old depot still have many older homes, shops and offices. Older houses here often have wood floors with area rugs, plus carpet in the bedrooms that's been down for years.",
      "Rugs and older carpet get a fiber and dye check before cleaning. Shops and offices can book outside business hours, which matters on busy weekends like the spring German Heritage Festival.",
    ],
    highlight: ["area-rug-cleaning", "shop-and-office-carpet", "carpet-cleaning"],
  },
  {
    slug: "northpointe",
    name: "Northpointe",
    kind: "neighborhood",
    summary: "Carpet, stair and pet odor cleaning for family homes in Northpointe, the master-planned community in Tomball.",
    intro: [
      "Northpointe is a master-planned community in Tomball with many two-story family homes. Most of the carpet is upstairs, in bedrooms, game rooms and on the stairs, and busy homes with kids and pets wear the stairs and landings first.",
      "If your carpet is original to the house, the traffic lanes are usually ready for a full deep clean, not a refresh. Pet spots get treated at the pad.",
    ],
    highlight: ["carpet-cleaning", "pet-odor-treatment", "spot-and-stain-removal"],
  },
  {
    slug: "rosehill",
    name: "Rosehill",
    kind: "neighborhood",
    summary: "Carpet, couch and tile cleaning for homes on larger lots in Rosehill, just west of Tomball.",
    intro: [
      "Rosehill is the area west of Tomball with larger lots, acreage and a mix of older and newer homes. Bigger yards and gravel drives mean more sand and mud at the back door, and many homes have tile in the main rooms.",
      "Mention a gate or a long drive in your request so the visit goes smoothly.",
    ],
    highlight: ["carpet-cleaning", "tile-and-grout", "sofa-cleaning"],
  },
]

export const guides: Guide[] = [
  {
    slug: "carpet-cleaning-cost-tomball",
    title: "Carpet cleaning cost in Tomball, TX",
    summary: "How Tomball carpet cleaning is priced, what changes the total, and how to compare quotes fairly.",
    updated: "2026-11-25",
    intro: [
      "Carpet cleaning prices in Tomball vary with the house and the job. Rooms and stairs set most of the price; pet treatment, furniture moving and add-ons like a sofa or rug make up the rest.",
    ],
    sections: [
      {
        heading: "Advertised prices nearby",
        requires: "priceRanges",
        paragraphs: [
          "In November 2026 we went through 54 carpet cleaning websites serving Tomball, Magnolia, The Woodlands, Spring and nearby towns. Only 13 showed a carpet price. Three rooms were advertised from $88 to $225, most near $140, often with a minimum around $150.",
          "That's other companies' advertising, not a quote. The lowest prices tend to leave out stairs, pre-treatment and big rooms.",
        ],
      },
      {
        heading: "What moves the number",
        paragraphs: [],
        list: [
          "Rooms, with large open areas sometimes counted as two",
          "Stairs and landings",
          "Pet urine treatment",
          "Moving heavy furniture",
          "Sofas, rugs, tile and stain work added to the visit",
        ],
      },
      {
        heading: "Comparing quotes",
        paragraphs: [
          "Line two quotes up by their total for your home, with the same rooms, stairs and treatments. Ask each company what's included and whether there are any charges added on the day.",
        ],
      },
      {
        heading: "Getting a firm price",
        paragraphs: [
          "Use the quote form to send your rooms, stairs and spots, with photos if you can. You'll get one total, and nothing is booked until you agree.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do stairs count as a room?",
        a: "Pricing for stairs varies. Some cleaners charge per staircase, others per step. Ask, and make sure your quote includes them.",
      },
      {
        q: "Is pet treatment extra?",
        a: "Usually, because it takes more product and time. A spot that has reached the pad takes more work than a surface stain.",
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
