import type { AreaDetail } from "@carpet/seo"

/**
 * Local detail for each Willis neighborhood page. Every page needs text no
 * other page has (see scripts/uniqueness.mjs). Sources:
 * lakeconroe.com/about-lake-conroe (Willis history, lake neighborhoods),
 * 10federalstorage.com/blog/best-neighborhoods-in-willis-tx (The Woodlands Hills).
 */
export const areaDetail: AreaDetail = {
  "the-woodlands-hills": {
    sections: [
      {
        heading: "Built by the developer of The Woodlands",
        paragraphs: [
          "The Woodlands Hills is being built by Howard Hughes, the company behind The Woodlands, and it's the biggest new neighborhood Willis has seen in a generation. New sections keep opening, so a street of finished homes often sits next to one still being framed.",
          "That means two kinds of dirt at once: the everyday kind from a busy family, and fine construction dust that drifts in for as long as building goes on nearby. The dust is light gray and gritty, and vacuuming alone doesn't lift it from a thick new pile.",
        ],
        link: { href: "/services/carpet-cleaning", text: "Carpet cleaning in Willis" },
      },
    ],
    faqs: [
      {
        q: "Should I wait until construction near me is done to clean?",
        a: "If the lots around you will be built on for another year, a light clean now and a full one later makes sense. Dust ground in for a year is harder to get out.",
      },
    ],
  },
  "seven-coves": {
    sections: [
      {
        heading: "Coves, docks and long weekends",
        paragraphs: [
          "Seven Coves is one of the long-standing neighborhoods on the Lake Conroe shoreline, named for the coves its streets wind around. Plenty of lots back onto the water with a private dock, so the back door, not the front, is the main way in all summer.",
        ],
        list: [
          "Wet swimsuits on couch cushions leave water rings on some fabrics",
          "Lake mud dries into a fine silt that settles deep in carpet",
          "Fish and bait smells cling to rugs by the back door",
          "Closed-up weekend homes can smell musty after a hot week",
        ],
        link: { href: "/services/upholstery-cleaning", text: "Upholstery cleaning" },
      },
    ],
  },
  "point-aquarius": {
    sections: [
      {
        heading: "Mixed floors in older lake homes",
        paragraphs: [
          "Point Aquarius is among the older Lake Conroe neighborhoods near Willis, and homes there have been redone room by room over the years. It's common to find tile in the kitchen and baths, carpet in the bedrooms and a big rug in the living room, all in one house.",
          "Each surface takes a different method. Tile and grout get a pressure rinse, rugs are cleaned by fiber, and carpet gets hot water extraction, so say which rooms have which floor when you ask for a price.",
        ],
        link: { href: "/services/tile-grout-cleaning", text: "Tile and grout cleaning" },
      },
    ],
    faqs: [
      {
        q: "Can tile, rugs and carpet all be done in one visit?",
        a: "Usually, yes. Bundling them saves a second trip and often costs less than booking each one on its own.",
      },
    ],
  },
  "downtown-willis": {
    sections: [
      {
        heading: "A railroad town with old houses",
        paragraphs: [
          "Willis grew up around the railroad after the Willis brothers gave their land to it in 1870, and it was known for its cigar factories around 1900. Some houses near downtown date from those early decades, often raised on piers with wood floors, and the newer homes and duplexes around them are mostly rentals.",
          "In an older raised house, a bad odor in a room can come from under the floor, not the carpet. If a smell stays after a cleaning, ask whether the crawl space should be checked.",
        ],
        link: { href: "/services/move-out-carpet-cleaning", text: "Move-out carpet cleaning" },
      },
    ],
    faqs: [
      {
        q: "Do you clean carpet in small offices and shops downtown?",
        a: "Yes. Book a time before opening or after closing, and the carpet will be dry for the next business day.",
      },
    ],
  },
}
