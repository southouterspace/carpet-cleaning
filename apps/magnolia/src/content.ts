import type { Area, Guide, Section, Service } from "@carpet/seo"

/**
 * Longer Magnolia copy: extra service sections, extra services, community
 * pages and the cost guide. Written for this site only; don't reuse wording
 * from the other sites. No claims about crew size, years in business,
 * reviews or certifications.
 */

export const serviceSections: Record<string, Section[]> = {
  "carpet-cleaning": [
    {
      heading: "Acreage, mud and the back door",
      link: { href: "/guides/red-clay-mud-out-of-carpet", text: "How to get red clay and mud out of carpet" },
      paragraphs: [
        "Homes on acreage get more dirt through the back door than the front. Boots from the barn, dogs from the pasture and kids from the yard all come in the same way, so the carpet nearest that door usually wears first.",
        "A boot tray and a washable runner just inside that door catch most of it. When you ask for a quote, mention which entry gets the most use so it gets extra pre-treatment.",
      ],
    },
    {
      heading: "Between cleanings",
      howTo: true,
      paragraphs: [],
      list: [
        "Put a coarse mat outside each door and a soft one inside",
        "Let mud dry hard, then break it up and vacuum it",
        "Vacuum the main paths twice a week with a slow pass",
        "Blot spills with a white towel and cool water; don't scrub",
        "Book a deep clean once a year, or every 6 months with outdoor dogs",
      ],
    },
  ],
  "new-home-carpet-care": [
    {
      heading: "What to expect from builder-grade carpet",
      paragraphs: [
        "Most new homes come with a lighter, lower-density carpet over a basic pad. It's comfortable at first, but the pile flattens faster on stairs, landings and the hall to the kitchen. That flattening is wear, not dirt, so cleaning makes it look better but can't fully undo it.",
        "Cleaning before the lanes turn gray, and vacuuming slowly, does the most to slow it down. Moving furniture a few inches now and then also spreads the wear.",
      ],
    },
    {
      heading: "Construction dust",
      paragraphs: [
        "If your street is still being built out, fine dust from lots and roads around you gets into the house for months. Change the AC filter more often during that time, and plan a cleaning once the construction near you is finished.",
      ],
    },
  ],
  "pet-urine-odor": [
    {
      heading: "Farm dogs and indoor cats",
      paragraphs: [
        "Dogs that spend the day outside bring in mud, grass and the occasional smell of whatever they rolled in. That comes out with a good rinse and a deodorizer. Urine is different, and cat urine is the strongest. Old cat spots often need treatment to the pad, and sometimes the subfloor needs sealing before new pad goes down.",
      ],
    },
    {
      heading: "If a spot is fresh",
      howTo: true,
      paragraphs: [],
      list: [
        "Blot up as much as you can with paper towels, pressing hard",
        "Use an enzyme cleaner made for pet urine, not a fragrance spray",
        "Leave it wet as long as the label says, then let it air dry",
        "Skip steam irons and heat, which can set the odor",
      ],
    },
    {
      heading: "Ask these before booking pet urine work",
      paragraphs: [
        "Pet urine is the one job where cleaners differ most. These questions tell you what you're paying for.",
      ],
      list: [
        "Do you find spots with a UV light first?",
        "Do you use an enzyme or oxidizing treatment, or a scented deodorizer?",
        "Will you treat the pad and subfloor where urine soaked through?",
        "If a spot wicks back as it dries, what's your policy?",
        "How do you price pet treatment: per spot, per room or by area?",
        "Is pet treatment part of the special, or added on?",
      ],
    },
  ],
  "upholstery-cleaning": [
    {
      heading: "Reading the tag",
      paragraphs: [],
      list: [
        "W: water-based cleaning is fine",
        "S: solvent only; water can leave rings",
        "WS: either method works",
        "X: vacuum only; no wet cleaning",
      ],
    },
  ],
  "area-rug-cleaning": [
    {
      heading: "Rugs from the porch and the barn office",
      paragraphs: [
        "Outdoor and indoor-outdoor rugs are usually polypropylene and clean well. Cowhide, jute and wool are another story. Cowhide should never be soaked, jute browns when it gets too wet, and wool can shrink. A photo of the rug and its label tells us which you have.",
      ],
    },
  ],
}

export const moreServices: Service[] = [
  {
    slug: "stain-removal",
    name: "Stain and spot removal",
    summary: "Spot treatment for red dirt, coffee, wine, grease and other stains on Magnolia carpet.",
    body: [
      "Stains are chemistry. Red dirt, coffee, wine, grease and dye each need a different product, and the wrong one can set a stain for good. Spot work comes with every carpet cleaning, and a few spots can be booked on their own.",
    ],
    sections: [
      {
        heading: "Stains that won't come out",
        paragraphs: [
          "Bleach spots, burns and some dyes change the color of the fiber, so there's nothing left to rinse out. A small patch from a closet can sometimes hide them. Send a photo with your request and you'll hear which kind you have.",
        ],
      },
    ],
  },
  {
    slug: "stair-carpet-cleaning",
    name: "Stair carpet cleaning",
    summary: "Step-by-step cleaning for carpeted stairs and landings, the first place carpet wears in a two-story home.",
    body: [
      "Every trip up and down lands on the same spot of each step, so stairs mat down and darken before any room does. Each step is cleaned on its own with a hand tool, including the nose of the step and the corners against the wall, where dust collects.",
      "Stairs are usually priced per staircase or per step. Mention them in your quote request, along with any landing at the top.",
    ],
    sections: [
      {
        heading: "Between professional cleanings",
        paragraphs: [
          "Vacuuming the stairs once a week with a hand tool keeps grit from grinding into the step edges.",
        ],
        link: { href: "/guides/how-to-clean-carpeted-stairs", text: "How to clean carpeted stairs yourself" },
      },
    ],
  },
]

export const areas: Area[] = [
  {
    slug: "audubon",
    name: "Audubon",
    kind: "neighborhood",
    summary: "Carpet, stair and new home carpet care for Audubon, the newer master-planned community in Magnolia, TX.",
    intro: [
      "Audubon is one of Magnolia's newer master-planned communities, so most of the homes there are only a few years old. That usually means builder-grade carpet, carpeted stairs in the two-story plans and a lot of fine dust from the streets still being built around it.",
      "A first cleaning before the traffic lanes show, then once a year, is the best way to keep new carpet looking new. It also covers the cleaning many carpet warranties ask for.",
    ],
    highlight: ["new-home-carpet-care", "stair-carpet-cleaning", "carpet-cleaning"],
  },
  {
    slug: "high-meadow-ranch",
    name: "High Meadow Ranch",
    kind: "neighborhood",
    summary: "Carpet, rug and upholstery cleaning for homes in High Meadow Ranch, Magnolia's golf course community.",
    intro: [
      "High Meadow Ranch is a golf course community in Magnolia with larger homes on bigger lots. Larger homes tend to have more rooms, more area rugs and more upholstered pieces, so bundling them into one visit saves time and a second trip.",
      "Fine rugs and delicate fabrics get checked first for fiber, dye and cleaning code. Add any gate details to your request so the visit isn't held up.",
    ],
    highlight: ["area-rug-cleaning", "upholstery-cleaning", "carpet-cleaning"],
  },
  {
    slug: "lake-windcrest",
    name: "Lake Windcrest",
    kind: "neighborhood",
    summary: "Carpet and upholstery cleaning for Lake Windcrest homes in Magnolia, including lake and pet odor cleanup.",
    intro: [
      "Lake Windcrest is a gated community built around a private lake in Magnolia, with wooded lots and homes of many ages. Lakeside living brings in wet feet, wet dogs and damp towels, and older homes here are often due for a deep clean of the main rooms.",
      "If your dog swims, the smell it leaves on carpet and the couch usually comes out with a thorough rinse and a deodorizer. Urine spots are a separate job and get treated at pad depth.",
    ],
    highlight: ["pet-urine-odor", "upholstery-cleaning", "carpet-cleaning"],
  },
  {
    slug: "downtown-magnolia",
    name: "Downtown Magnolia",
    kind: "neighborhood",
    summary: "Carpet, rug and tile cleaning for older homes and small businesses around downtown Magnolia, TX.",
    intro: [
      "The older part of Magnolia, around the FM 1488 and FM 1774 crossroads, has a mix of older houses, small shops and offices. Older homes here often have wood or tile in the main rooms with area rugs on top, and carpet in the bedrooms.",
      "Small offices and shops can ask for a time outside business hours so the floors are dry when doors open.",
    ],
    highlight: ["area-rug-cleaning", "tile-and-grout-cleaning", "carpet-cleaning"],
  },
]

export const guides: Guide[] = [
  {
    slug: "carpet-cleaning-cost-magnolia",
    title: "How much carpet cleaning costs in Magnolia, TX",
    summary: "What sets the price of carpet cleaning in Magnolia homes, what tends to cost extra, and how to get a firm number up front.",
    updated: "2026-11-25",
    intro: [
      "Magnolia has everything from new two-story homes in Audubon to older houses on five acres, and carpet cleaning prices follow the house. The number of rooms and stairs matters most, then how much spot, mud and pet work there is.",
    ],
    sections: [
      {
        heading: "Advertised prices nearby",
        requires: "priceRanges",
        paragraphs: [
          "In November 2026 we looked at 54 carpet cleaning websites serving Magnolia, Tomball, Conroe, The Woodlands and the towns around them. Only 13 posted a carpet price. Three rooms were advertised for $88 to $225, with most near $140, and many had a minimum around $150.",
          "Those are other companies' advertised prices, not a quote. A low price often leaves out stairs, pre-treatment or larger rooms.",
        ],
      },
      {
        heading: "Per room, by the numbers",
        requires: "priceRanges",
        paragraphs: [
          "Split by three, those advertised specials come to about $30 to $75 per room, most close to $47. That's arithmetic on other companies' posted prices, not a quote, and most also have a minimum charge.",
        ],
      },
      {
        heading: "What changes the total",
        paragraphs: [],
        list: [
          "How many rooms, and how big they are",
          "Stairs, priced per staircase or per step",
          "Pet urine treatment and heavy mud or red dirt",
          "Furniture that has to be moved",
          "Couches, rugs, tile or mattresses added to the visit",
          "Distance, for homes well outside town",
        ],
      },
      {
        heading: "Per room or per square foot",
        paragraphs: [
          "Most Magnolia quotes are per room, with stairs and pet treatment on top. Bigger homes on acreage often have large open rooms, and a per-square-foot quote can be fairer for those.",
          "Measure the big rooms if you're comparing quotes. A 16 by 20 family room is 320 square feet and will often count as two rooms.",
        ],
      },
      {
        heading: "Ask what the price includes",
        paragraphs: [
          "Before you book with anyone, ask whether the price includes pre-treatment, stairs, hallways and any trip charge. The fair way to compare two quotes is the total for your home, not the price per room.",
        ],
      },
      {
        heading: "Getting a firm number",
        paragraphs: [
          "Send the quote form with your rooms, stairs and spots, plus photos if you can. You'll get one price for the whole job, and nothing is booked until you agree to it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is there a trip charge for homes outside town?",
        a: "Ask when you get your quote. Any distance charge should be in the price you're given, not added on the day.",
      },
      {
        q: "Is it cheaper to rent a machine?",
        a: "Up front, yes. But rental machines leave more water and soap behind, carpet takes longer to dry, and it can get dirty again faster. For a light refresh between cleanings they're fine.",
      },
    ],
  },
  {
    slug: "how-to-clean-carpeted-stairs",
    title: "How to clean carpeted stairs",
    summary: "Step-by-step: vacuum, spot clean and deep clean carpeted stairs at home, including the step edges, corners and the landing.",
    updated: "2026-11-25",
    intro: [
      "Stairs get dirty before any room in the house. Every step lands on the same small patch, grit grinds into the front edge, and full-size vacuums don't fit. In two-story Magnolia homes, especially the new builds in Audubon and Escondido, the stairs and the landing are usually the first carpet to look worn.",
      "Here's how to clean them yourself, and when it's worth having them done.",
    ],
    sections: [
      {
        heading: "Cleaning carpeted stairs step by step",
        howTo: true,
        paragraphs: [
          "You need a vacuum with a hose and crevice tool or a handheld vacuum, a stiff brush, white cloths and a carpet spot cleaner.",
        ],
        list: [
          "Start at the top step and work down so dirt falls onto steps you haven't cleaned yet.",
          "Brush each step toward the front edge to loosen grit and hair.",
          "Vacuum the flat part of the step, then the front edge, then the corners against the wall and the rail.",
          "Spot clean stains with a small amount of cleaner on a white cloth. Blot, don't scrub.",
          "For a deeper clean, go over each step with a handheld carpet extractor, then a dry pass to pull out extra water.",
          "Leave the stairs to dry with a fan running, and keep traffic light until they're dry.",
        ],
      },
      {
        heading: "Don't forget the landing",
        paragraphs: [
          "The landing at the top of the stairs takes almost as much traffic as the stairs, plus everyone pauses and turns there. Vacuum it slowly in two directions and treat it like a high-traffic room.",
        ],
      },
      {
        heading: "Red clay and mud on the stairs",
        paragraphs: [
          "Let mud dry completely, then break it up and vacuum before you use any water. Wet red clay spreads and stains. Once the dry dirt is out, blot the stain with a little cleaner.",
        ],
        link: { href: "/guides/red-clay-mud-out-of-carpet", text: "How to get red clay and mud out of carpet" },
      },
      {
        heading: "When to have stairs cleaned professionally",
        paragraphs: [
          "If the stairs are dark across the middle of each step, or the edges look gray and matted, a home extractor usually can't reach deep enough. A professional cleaning does each step by hand with more heat and suction, and stairs are usually priced per staircase or per step.",
        ],
        link: { href: "/services/stair-carpet-cleaning", text: "See stair carpet cleaning" },
      },
    ],
    faqs: [
      {
        q: "How do you deep clean carpeted stairs?",
        a: "Vacuum each step, treat spots, then go over each step with a handheld extractor and let it dry. Work from the top down.",
      },
      {
        q: "Why do carpeted stairs get dirty so fast?",
        a: "Every step lands on the same small area, and grit grinds into the front edge of each stair. Full-size vacuums also don't reach them well.",
      },
      {
        q: "How long do carpeted stairs take to dry after cleaning?",
        a: "Usually a few hours. A fan and good air flow speed it up. Keep heavy traffic off until they're dry.",
      },
    ],
  },
  {
    slug: "red-clay-mud-out-of-carpet",
    title: "How to get red clay and mud out of carpet",
    summary: "How to get red clay and mud stains out of carpet: let it dry, vacuum it out, then blot. What to avoid, and when the stain needs a pro.",
    updated: "2026-11-25",
    intro: [
      "On acreage in Magnolia, mud comes in on boots, tires, kids and dogs, and red or orange clay is the hardest of all. It's mostly fine mineral particles that carry color, so scrubbing it while wet pushes it deeper.",
      "The key is patience. Most clay stains come out if the dry dirt goes first.",
    ],
    sections: [
      {
        heading: "Getting mud and clay out",
        howTo: true,
        paragraphs: [
          "You need a spoon or dull knife, a vacuum, clear dish soap, white cloths and warm water.",
        ],
        list: [
          "Leave the mud alone until it's completely dry. Overnight is best.",
          "Break up the dried mud with a spoon or dull knife and vacuum it up, going over the spot several times.",
          "Mix a few drops of clear dish soap in a cup of warm water.",
          "Dab the solution onto the stain with a white cloth and blot from the outside in.",
          "Rinse by blotting with plain water, then press a dry towel on the spot.",
          "Repeat if color is still coming up on the cloth, and let it dry.",
        ],
      },
      {
        heading: "What not to do",
        paragraphs: [],
        list: [
          "Don't rub wet mud. It spreads the clay and drives it deeper.",
          "Don't use hot water on fresh mud, which can set the color.",
          "Don't use colored cleaners or a lot of soap, which leave residue that attracts more dirt.",
          "Don't soak the spot. Too much water wicks the stain back up as it dries.",
        ],
      },
      {
        heading: "When red clay won't come out",
        paragraphs: [
          "Clay that's been walked in for months, or a path from the back door, usually needs a professional cleaning with hot water and a rinse. Some old clay stains in light carpet may lighten without disappearing completely.",
        ],
        link: { href: "/services/stain-removal", text: "See stain removal" },
      },
      {
        heading: "Keeping mud off the carpet",
        paragraphs: [
          "Put a coarse mat outside and a washable rug inside every door people use, including the garage door. A boot tray and a towel for the dog by the back door stop most of it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can red clay stains come out of carpet?",
        a: "Most can, if you let the mud dry and vacuum out as much as possible before using any water. Old clay stains in light carpet may only lighten.",
      },
      {
        q: "Should I use vinegar on a mud stain?",
        a: "A little white vinegar mixed with water can help with leftover color after the dry dirt is vacuumed out. Test it on a hidden spot first.",
      },
      {
        q: "Why does the mud stain come back after it dries?",
        a: "That's wicking. Dirt deeper in the carpet rises to the surface as it dries. Blot with less water and press a dry towel on the spot to pull it out.",
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
