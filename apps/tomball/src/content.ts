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
    {
      heading: "Before you book: pet urine questions",
      paragraphs: [
        "Ask any company these before they treat urine.",
      ],
      list: [
        "Do you check with a UV light?",
        "Enzyme or oxidizer, or a deodorizer?",
        "Do you treat the pad when it's soaked through?",
        "What if a spot comes back as it dries?",
        "How is pet treatment priced?",
        "Is it included in your special?",
      ],
    },
  ],
  "sofa-cleaning": [
    {
      heading: "Cleaning codes",
      link: { href: "/guides/upholstery-cleaning-codes", text: "Upholstery cleaning codes explained" },
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
        link: { href: "/guides/kool-aid-red-drink-stains-carpet", text: "How to get red drink stains out of carpet" },
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
        heading: "What that is per room",
        requires: "priceRanges",
        paragraphs: [
          "Divide those three-room prices by three and you get roughly $30 to $75 a room, most around $47. That's our arithmetic on posted specials from other companies, not a quote. Minimum charges are common.",
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
        heading: "Per room or per square foot",
        paragraphs: [
          "Tomball homes are usually priced per room. Shops, offices and older homes with big open rooms are often priced per square foot. Either can be fair; the trouble comes when one quote counts the hallway and the other doesn't.",
          "If you're comparing, measure the rooms. A 13 by 15 bedroom is 195 square feet. A room over about 300 square feet usually counts as two on a per-room quote.",
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
  {
    slug: "upholstery-cleaning-codes",
    title: "Upholstery cleaning codes: W, S, W/S and X explained",
    summary: "What the W, S, W/S and X cleaning codes on your couch tag mean, which cleaners are safe for each, and what to do if there's no tag.",
    updated: "2026-11-25",
    intro: [
      "Most sofas, chairs and cushions have a tag under the cushion or on the frame with a single letter code. It's the most useful thing to know before you try to clean a stain or book an upholstery cleaning, because the wrong cleaner can leave a permanent water ring.",
      "Here's what each code means, in plain terms.",
    ],
    sections: [
      {
        heading: "What each code means",
        paragraphs: [],
        list: [
          "W: water-based cleaners are safe. Most cotton blends, polyester and many performance fabrics.",
          "S: solvent-based cleaners only. No water. Common on rayon, viscose, some velvets and some microfiber.",
          "W/S or SW: either water-based or solvent cleaners can be used. Test a hidden spot first.",
          "X: vacuum or brush only. No liquid cleaners of any kind. Professional cleaning only, if at all.",
        ],
      },
      {
        heading: "Where to find the tag",
        paragraphs: [
          "Look under the seat cushions, on the deck of the couch, on the underside of the frame, or on a cushion zipper. Some manufacturers print it in the care guide or on their website under your model.",
        ],
      },
      {
        heading: "If there's no tag",
        paragraphs: [
          "Treat the fabric as if it were S and don't use water until you know. A professional cleaner can test the fabric for fiber type and dye stability before cleaning. Older and hand-me-down furniture often has no tag at all.",
        ],
      },
      {
        heading: "Microfiber, leather and other special cases",
        paragraphs: [
          "Microfiber couches are often coded S, and water can leave marks unless it's blotted out evenly. Leather has its own cleaners and conditioners and isn't covered by these codes. Performance fabrics are usually W, but check, since some coatings don't take solvents well.",
        ],
      },
      {
        heading: "Before you book an upholstery cleaning",
        paragraphs: [
          "Take a photo of the tag and send it with your quote request, along with photos of any stains. It tells the cleaner which method to use and avoids surprises.",
        ],
        link: { href: "/services/sofa-cleaning", text: "See sofa and upholstery cleaning" },
      },
    ],
    faqs: [
      {
        q: "What does S mean on a couch tag?",
        a: "S means solvent cleaning only. Don't use water or water-based cleaners, which can leave rings or change the color.",
      },
      {
        q: "Can you clean an X-code couch?",
        a: "X means vacuum or brush only, with no liquid cleaners. A professional may be able to do a dry cleaning, but many X fabrics can only be vacuumed.",
      },
      {
        q: "Can I use water on a W/S couch?",
        a: "Yes. W/S means either water-based or solvent cleaners are safe. Test a hidden spot first.",
      },
    ],
  },
  {
    slug: "kool-aid-red-drink-stains-carpet",
    title: "How to get Kool-Aid and red drink stains out of carpet",
    summary: "How to get red Kool-Aid, fruit punch, sports drink and red soda stains out of carpet: blot, rinse, then treat the dye. What to try and what to avoid.",
    updated: "2026-11-25",
    intro: [
      "Red drinks are a two-part stain. The sugar comes out with water. The red dye is made to color things and bonds to nylon carpet fibers, especially once it dries. In Tomball homes with kids, red punch and sports drinks are the most common stain cleaners get asked about.",
      "Act fast and the dye usually comes out. Here's what to do.",
    ],
    sections: [
      {
        heading: "Getting red drink out of carpet",
        howTo: true,
        paragraphs: [
          "You need white cloths or paper towels, cool water, clear dish soap and white vinegar.",
        ],
        list: [
          "Blot up the spill right away with a white cloth. Don't rub.",
          "Pour a little cool water on the spot and blot again to dilute the dye.",
          "Mix one teaspoon of clear dish soap and one tablespoon of white vinegar in two cups of warm water.",
          "Dab the mix onto the stain and blot from the outside toward the center.",
          "Rinse with plain water and blot until no more color comes up.",
          "Press a stack of dry towels on the spot with something heavy on top and let it dry.",
        ],
      },
      {
        heading: "What not to use",
        paragraphs: [],
        list: [
          "Bleach, which removes carpet color along with the stain",
          "Colored or scented carpet cleaners, which can leave their own stain",
          "A lot of soap, which leaves a sticky spot that attracts dirt",
          "Scrubbing, which spreads the dye and frays the fibers",
        ],
      },
      {
        heading: "When the red won't come out",
        paragraphs: [
          "If a pink or red shadow is left after the spot dries, the dye has bonded to the fiber. Professional red dye removers use heat to lift it, and they work on many nylon carpets. Very old stains, or stains on wool, may only lighten. Tell the cleaner what the drink was and how long ago it spilled.",
        ],
        link: { href: "/services/spot-and-stain-removal", text: "See spot and stain removal" },
      },
    ],
    faqs: [
      {
        q: "Can Kool-Aid stains come out of carpet?",
        a: "Often, especially when treated quickly. Old or set-in red dye may need a professional dye remover and sometimes can only be lightened.",
      },
      {
        q: "Does hydrogen peroxide remove red Kool-Aid?",
        a: "It can lighten red dye, but it can also lighten carpet color. Test it on a hidden spot first, and never use it on wool.",
      },
      {
        q: "Why does the stain come back pink after drying?",
        a: "Dye left deeper in the carpet rises to the surface as it dries. Rinse and blot again, then dry with weighted towels.",
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
