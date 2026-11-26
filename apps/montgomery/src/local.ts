import type { AreaDetail } from "@carpet/seo"

/**
 * Local detail for each Montgomery-area page. Every page needs text no other
 * page has (see scripts/uniqueness.mjs). Sources: lakeconroe.com/about-lake-conroe
 * (town history, lake), sjpjgroup.com/lake-conroe-living-willis-montgomery (Bentwater).
 */
export const areaDetail: AreaDetail = {
  "historic-downtown-montgomery": {
    sections: [
      {
        heading: "Houses from the 1850s on",
        paragraphs: [
          "Montgomery was incorporated in 1848, and a building boom in the 1850s left houses that still stand around the historic district, some still owned by descendants of the first families. Homes that old were built for wood floors and rugs, not wall-to-wall carpet, so rug cleaning is the most common request near the square.",
          "Older rugs, especially hand-knotted wool, should be tested for color bleed in a corner before any wet cleaning. A rug that bleeds needs a different method, and finding out first saves the rug.",
        ],
        link: { href: "/services/area-rug-cleaning", text: "Area rug cleaning" },
      },
    ],
    faqs: [
      {
        q: "Can an antique rug be cleaned at home?",
        a: "Some can, with a gentle low-moisture method. Fragile, hand-knotted or bleeding rugs are safer cleaned off-site. A photo of the front and back helps decide.",
      },
    ],
  },
  "walden-on-lake-conroe": {
    sections: [
      {
        heading: "One of the lake's first communities",
        paragraphs: [
          "Walden dates to the 1970s, when Lake Conroe was new, and it was one of the oldest communities on its shore. That makes many of its homes and condos 40 or more years old, with carpet and furniture that have been through a lot of summers.",
          "Older condos often have carpet in bedrooms over a concrete slab. Moisture from the slab plus the lake air can keep a faint musty smell in the pad, and that's worth mentioning when you ask for a price.",
        ],
        link: { href: "/services/lake-house-rental-cleaning", text: "Lake house and rental cleaning" },
      },
    ],
  },
  bentwater: {
    sections: [
      {
        heading: "About 1,400 gated acres on the west shore",
        paragraphs: [
          "Bentwater covers roughly 1,400 acres on the Montgomery side of the lake, and its property owners association dates to 1987. Golf, waterfront and wooded lots mean a mix of large family homes and lock-and-leave weekend houses. Larger homes often have finishes worth naming in a quote request:",
        ],
        list: [
          "Light-colored wool or wool-blend carpet in formal rooms",
          "Silk or viscose rugs, which water can damage",
          "Performance fabric and leather on outdoor-facing furniture",
          "Several staircases in two- and three-story homes",
        ],
        link: { href: "/services/upholstery-cleaning", text: "Upholstery cleaning by fabric code" },
      },
    ],
    faqs: [
      {
        q: "Can viscose or silk rugs be cleaned?",
        a: "Yes, but carefully. Viscose loses its shine and can brown if it gets too wet, so it's cleaned with very little water or taken off-site. Say what the label says in your request.",
      },
    ],
  },
  "april-sound": {
    sections: [
      {
        heading: "Condos, townhomes and weekend rentals",
        paragraphs: [
          "April Sound is a gated community on Lake Conroe with a mix of houses, condos and townhomes, and a lot of owners rent their places out on weekends. A short-term rental's carpet takes more wear in a season than a full-time home's does in a year, because every guest walks in from the dock.",
          "Owners who rent out usually book a deep clean before the summer rush and again after Labor Day, with spot work in between.",
        ],
        link: { href: "/guides/carpet-cleaning-cost-montgomery", text: "Carpet cleaning prices in Montgomery" },
      },
    ],
    faqs: [
      {
        q: "Can one visit clean several April Sound units?",
        a: "Yes. List each unit with its rooms in one request, and the price will show each one separately.",
      },
    ],
  },
  "del-lago": {
    sections: [
      {
        heading: "Between check-out and check-in",
        paragraphs: [
          "Around the Del Lago resort, many condos are second homes or vacation rentals, and turnovers often fall on the same day. Carpet needs about 4 to 8 hours to dry, so a morning cleaning is what makes a same-day check-in work.",
        ],
        list: [
          "Book the earliest slot after check-out",
          "Leave the AC on and set a few degrees cooler",
          "Ask for bedrooms first so they dry while the rest is done",
          "Put furniture pads or foil under legs if guests arrive before it's fully dry",
        ],
        link: { href: "/services/mattress-cleaning", text: "Mattress cleaning for rentals" },
      },
    ],
  },
  woodforest: {
    sections: [
      {
        heading: "Older phases and newer streets",
        paragraphs: [
          "Woodforest was built in phases south of downtown Montgomery, around its own golf course. The first phases are old enough that their carpet has seen a full round of kids and pets, while the newest streets are still on builder carpet.",
          "Busy homes here tend to need spot work more than anything: juice, mud and dog accidents. Pre-treating each spot before the hot water rinse is what gets those out instead of spreading them.",
        ],
        link: { href: "/guides/get-dog-hair-out-of-carpet", text: "How to get dog hair out of carpet" },
      },
    ],
    faqs: [
      {
        q: "Should builder carpet in a newer Woodforest home be cleaned differently?",
        a: "Not really, but it needs a thorough rinse. Builder carpet has a thin pile that holds soil near the top, so a quick surface clean leaves it looking flat again within weeks.",
      },
    ],
  },
}
