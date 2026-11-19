import type { Area, Guide, Section, Service } from "@carpet/seo"

/**
 * Longer Woodlands copy: extra service sections, extra services, village and
 * town pages, and the cost guide. Written for this site only; don't copy
 * wording to or from the Conroe or Montgomery sites. No claims about crew
 * size, years in business, reviews or certifications.
 */

export const serviceSections: Record<string, Section[]> = {
  "carpet-cleaning": [
    {
      heading: "Why hot water extraction",
      paragraphs: [
        "The major carpet makers recommend hot water extraction for deep cleaning, and many of their warranties ask for it every 12 to 24 months. It works by rinsing: a heated cleaning solution goes into the pile, loosens the soil, and is pulled back out with strong suction along with the dirt.",
        "Low-moisture and encapsulation methods dry faster and are fine for a quick refresh, but they leave more of the soil in the carpet. For a home that hasn't been cleaned in a year or more, a rinse is what brings the color back.",
      ],
    },
    {
      heading: "Pine pollen and the spring clean",
      paragraphs: [
        "Every spring the pines across The Woodlands drop a yellow-green layer of pollen on cars, patios and anything near an open door. Much of it ends up inside, on shoes and paws, and it works its way into light-colored carpet near entries, on stairs and in the main hallway.",
        "Booking a cleaning once the heaviest pollen has passed, usually by late spring, gets that out before summer. If anyone in the house has allergies, a second cleaning in the fall is worth considering.",
      ],
    },
    {
      heading: "A typical two-story job",
      paragraphs: ["Most quote requests from The Woodlands look something like this, and it helps to list yours the same way."],
      list: [
        "Three or four bedrooms upstairs, plus a game room or media room",
        "The upstairs landing and hallway",
        "One staircase, sometimes two",
        "A downstairs study or formal living room, with tile or wood elsewhere",
        "A few pet or drink spots to treat",
      ],
    },
  ],
  "stair-carpet-cleaning": [
    {
      heading: "Why stairs look worse than the rooms",
      paragraphs: [
        "Every trip up and down puts weight on the front edge of each step, the nosing, and that's where soil grinds in and the carpet starts to crush. Hands on the wall and pets lying on the steps add oils along the sides. That's why a staircase often looks gray even when the bedrooms upstairs look fine.",
        "Regular cleaning keeps the nosing from wearing through as fast. Once the backing shows, cleaning can't fix it, so earlier is better.",
      ],
    },
    {
      heading: "Open-sided and curved staircases",
      paragraphs: [
        "Staircases with a curve, a turn, a landing halfway up or carpeted sides take longer than a straight run. Mention the shape in your request, or add a photo, so the price is right the first time.",
      ],
    },
  ],
  "pet-stain-odor-treatment": [
    {
      heading: "How the spots are found",
      paragraphs: [
        "Old urine spots are often invisible once they dry. A UV light makes them glow, and a moisture probe shows how far down they go. Finding them all matters, because one untreated spot is enough to keep a room smelling.",
      ],
    },
    {
      heading: "Treatment levels",
      paragraphs: ["The right treatment depends on how deep the urine went."],
      list: [
        "Surface spots: treated during the regular cleaning",
        "Spots in the pad: an enzyme or oxidizing treatment worked down to the depth of the spot, then rinsed",
        "Heavily soaked areas: the carpet is lifted, the pad section replaced, the subfloor treated or sealed, and the carpet relaid",
      ],
    },
  ],
  "upholstery-cleaning": [
    {
      heading: "Fabrics we see most",
      paragraphs: [
        "Performance fabrics, microfiber, cotton blends and linen slipcovers are common in Woodlands family rooms. Performance fabrics usually clean easily with water. Microfiber and linen can water-spot or shrink if they're handled the wrong way, which is why the cleaning code on the tag is checked before anything else.",
      ],
    },
    {
      heading: "Before you book",
      howTo: true,
      paragraphs: [],
      list: [
        "Take a photo of each piece and its tag",
        "Count the cushions, including loose back cushions",
        "Note any stains and what caused them, if you know",
        "Mention leather pieces separately; leather needs a different process",
      ],
    },
  ],
  "area-rug-cleaning": [
    {
      heading: "Rugs over hardwood and tile",
      paragraphs: [
        "Many Woodlands homes have hardwood or tile downstairs with rugs in the living room, dining room and entry. Those rugs trap a surprising amount of grit, which grinds at the fibers and can scratch the floor underneath. A yearly cleaning, plus vacuuming both sides now and then, keeps them in better shape.",
        "Wool, viscose and hand-knotted rugs get the gentlest handling. Viscose in particular can yellow or lose its sheen if it's cleaned with too much water, so tell us if your rug is soft and shiny and was inexpensive for its look; that's often viscose.",
      ],
    },
  ],
  "tile-and-grout-cleaning": [
    {
      heading: "Where it makes the biggest difference",
      paragraphs: [
        "Kitchens, mudrooms and the back door to the pool or yard get the dirtiest. Bathroom floors and shower grout come next. Light-colored grout shows the biggest before-and-after change, and sealing it afterward keeps it that way longer.",
      ],
    },
  ],
}

export const moreServices: Service[] = [
  {
    slug: "mattress-cleaning",
    name: "Mattress cleaning",
    summary: "Low-moisture mattress cleaning for sweat stains, dust and odor, dry enough to sleep on the same night.",
    body: [
      "Mattresses rarely get cleaned, yet they collect sweat, skin, dust and the occasional spill every night. A low-moisture clean lifts that from the surface layers without soaking the foam or springs, so the bed is ready by evening.",
      "It's a common add-on when the carpet in the bedrooms is being cleaned anyway, especially in kids' rooms, guest rooms that are about to get used, and beds the dog sleeps on.",
    ],
    sections: [
      {
        heading: "What to expect",
        paragraphs: [
          "Fresh stains and odors respond best. Old yellowing may lighten but usually won't disappear completely. If you send a photo, you'll know what's realistic before you book.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you clean a memory foam mattress?",
        a: "Yes, with a low-moisture method that keeps water out of the foam. Mention the type in your quote request.",
      },
    ],
  },
  {
    slug: "move-out-carpet-cleaning",
    name: "Move-out and pre-listing cleaning",
    summary: "Carpet cleaning for Woodlands homes being sold, leased or vacated, timed around listing photos or the final walk-through.",
    body: [
      "Clean carpet makes a home photograph better and show better, and it's one of the cheapest things a seller can do before listing. For renters, many leases in the area require professional carpet cleaning at move-out, with a receipt.",
      "Tell us whether the home is empty or still furnished, and the date you're working toward. An empty home is quicker to clean, and the cleaning can be scheduled right after the movers leave.",
    ],
    sections: [
      {
        heading: "Timing for sellers",
        paragraphs: [
          "Book the cleaning a day or two before photos, after any painting and repairs are finished. Painters and contractors track in dust, so cleaning first means doing it twice.",
        ],
      },
      {
        heading: "Timing for renters and landlords",
        paragraphs: [
          "Leave a day between the cleaning and the walk-through so the carpet is fully dry. Ask your landlord or property manager whether they need a receipt, and request one when you book.",
        ],
      },
    ],
  },
]

export const areas: Area[] = [
  {
    slug: "grogans-mill",
    name: "Grogan's Mill",
    kind: "neighborhood",
    summary: "Carpet cleaning for Grogan's Mill, the original village of The Woodlands, with its wooded lots and established homes.",
    intro: [
      "Grogan's Mill was the first village in The Woodlands, opened in 1974, and many of its homes sit on deep, heavily wooded lots near the Woodlands Country Club golf courses. The tree cover is beautiful, but it means a steady supply of leaves, pine needles and pollen coming through the door.",
      "Homes here have often been updated more than once. It's common to find new hardwood or tile downstairs with older carpet still in the bedrooms, or carpet that's been replaced in some rooms but not others.",
    ],
    sections: [
      {
        heading: "What we usually see",
        paragraphs: [],
        list: [
          "Older carpet in bedrooms that needs a careful clean, not an aggressive one",
          "Entries and back doors with tracked-in leaf litter and pollen",
          "Area rugs over refinished hardwood",
          "Homes being prepared for sale after many years with one owner",
        ],
      },
    ],
    highlight: ["carpet-cleaning", "area-rug-cleaning", "move-out-carpet-cleaning"],
  },
  {
    slug: "panther-creek",
    name: "Panther Creek",
    kind: "neighborhood",
    summary: "Carpet, sofa and pet odor cleaning for Panther Creek homes in The Woodlands, near Lake Woodlands and Town Center.",
    intro: [
      "Panther Creek is one of the older villages, close to Lake Woodlands and an easy trip to Town Center. Its homes range from compact patio homes and townhomes to larger family houses, so jobs here range from a couple of rooms to a whole two-story home.",
      "Smaller homes and townhomes often have carpet throughout the upstairs, and a single staircase that takes nearly all the traffic. That staircase is usually the first thing people want cleaned.",
    ],
    highlight: ["stair-carpet-cleaning", "carpet-cleaning", "upholstery-cleaning"],
    faqs: [
      {
        q: "Is there a minimum for a small townhome?",
        a: "Many cleaners have a minimum charge. Tell us exactly what you want cleaned and the quote will show whether a minimum applies.",
      },
    ],
  },
  {
    slug: "cochrans-crossing",
    name: "Cochran's Crossing",
    kind: "neighborhood",
    summary: "Carpet, stair and pet stain cleaning for family homes in Cochran's Crossing, The Woodlands.",
    intro: [
      "Cochran's Crossing is a family village with plenty of two-story homes, cul-de-sacs and pathways. A lot of these homes have been through a couple of rounds of kids and pets, so traffic lanes, stair wear and pet spots are the usual reasons people reach out.",
      "If the carpet is getting older and you're not sure whether to clean or replace, a cleaning is often a worthwhile first step. It costs a fraction of new carpet and shows you how much life is left in it.",
    ],
    highlight: ["pet-stain-odor-treatment", "stair-carpet-cleaning", "carpet-cleaning"],
  },
  {
    slug: "indian-springs",
    name: "Indian Springs",
    kind: "neighborhood",
    summary: "Carpet, rug and upholstery cleaning for Indian Springs homes in The Woodlands, from patio homes to larger estates.",
    intro: [
      "Indian Springs has a wide mix of homes, from patio homes and smaller family houses to some of the larger homes in The Woodlands. Bigger homes mean more rooms, more rugs and often more than one staircase, so it helps to list everything in one quote request and get it done in a single visit.",
      "Formal living and dining rooms in larger homes often have fine area rugs. Those are better cleaned with care, and sometimes off-site, than with the same method as wall-to-wall carpet.",
    ],
    highlight: ["area-rug-cleaning", "upholstery-cleaning", "carpet-cleaning"],
  },
  {
    slug: "alden-bridge",
    name: "Alden Bridge",
    kind: "neighborhood",
    summary: "Whole-home carpet, stair and sofa cleaning for Alden Bridge, one of the larger family villages in The Woodlands.",
    intro: [
      "Alden Bridge is a big, busy village with lots of two-story family homes, pools and backyard dogs. The typical job is a whole-home clean: bedrooms, a game room, the landing and the stairs, plus a sectional that's seen a few movie nights.",
      "Pool season adds wet feet and chlorine. Carpet near the back door and on the path to the upstairs bathroom picks up the most of it, so those areas get extra attention.",
    ],
    highlight: ["carpet-cleaning", "stair-carpet-cleaning", "upholstery-cleaning"],
  },
  {
    slug: "sterling-ridge",
    name: "Sterling Ridge",
    kind: "neighborhood",
    summary: "Carpet and upholstery cleaning for Sterling Ridge homes on the west side of The Woodlands.",
    intro: [
      "Sterling Ridge, on the west side of The Woodlands, is newer than the original villages, with many two-story homes from the late 1990s and 2000s. A lot of these homes are on their second carpet by now, or due for it, and owners want to keep the replacement looking good.",
      "Newer replacement carpet is often a softer, denser polyester or nylon. It cleans up well but holds onto more soil in its thicker pile, so a proper rinse makes a real difference compared to a quick surface clean.",
    ],
    highlight: ["carpet-cleaning", "upholstery-cleaning", "mattress-cleaning"],
  },
  {
    slug: "college-park",
    name: "College Park",
    kind: "neighborhood",
    summary: "Carpet, stair and move-out cleaning for College Park homes and rentals on the east side of The Woodlands.",
    intro: [
      "College Park sits on the east side of The Woodlands, across I-45 from most of the other villages. It has a good number of rentals and first homes, so move-out cleanings and cleanings before a new tenant are a large share of the work.",
      "Landlords who own a few homes here can ask about scheduling turnovers whenever a lease ends, with the receipt sent straight to them.",
    ],
    highlight: ["move-out-carpet-cleaning", "carpet-cleaning", "pet-stain-odor-treatment"],
  },
  {
    slug: "creekside-park",
    name: "Creekside Park",
    kind: "neighborhood",
    summary: "Carpet, stair and rug cleaning for Creekside Park, the newest village of The Woodlands on the Harris County side.",
    intro: [
      "Creekside Park is the newest village in The Woodlands, south of Spring Creek in Harris County. Most homes are recent builds with light-colored builder carpet upstairs and hard floors down, which means the stairs and landing take nearly all the foot traffic.",
      "New carpet is easy to keep nice if it's cleaned before traffic lanes set in. A first cleaning in the first year or two, then every 12 to 18 months, is a good rhythm for a busy household.",
    ],
    highlight: ["stair-carpet-cleaning", "carpet-cleaning", "area-rug-cleaning"],
    faqs: [
      {
        q: "Do you come to Creekside Park even though it's in Harris County?",
        a: "Yes. Creekside Park is part of The Woodlands and is in the regular service area.",
      },
    ],
  },
  {
    slug: "shenandoah",
    name: "Shenandoah",
    kind: "town",
    summary: "Carpet, sofa and rug cleaning for homes and townhomes in Shenandoah, TX, just north of The Woodlands.",
    intro: [
      "Shenandoah is a small city just north of The Woodlands along I-45, with established neighborhoods, newer townhomes and plenty of shopping and medical offices nearby. Homes here range from older single-story houses to recent builds.",
      "It's part of the same service area as The Woodlands, so the quote process is the same: tell us about the rooms, stairs and spots, and get a price before anyone comes out.",
    ],
    highlight: ["carpet-cleaning", "upholstery-cleaning", "pet-stain-odor-treatment"],
  },
  {
    slug: "oak-ridge-north",
    name: "Oak Ridge North",
    kind: "town",
    summary: "Carpet and pet odor cleaning for Oak Ridge North, the established city just east of The Woodlands along I-45.",
    intro: [
      "Oak Ridge North is a small, established city east of The Woodlands, with mostly single-story homes on wooded lots. Many have been lived in for a long time, and the carpet in them has seen years of pets and traffic.",
      "Older carpet can often be brought back further than people expect, as long as the cleaning is matched to its condition. Where pet spots have gone deep, odor treatment at the pad is usually what makes the difference.",
    ],
    highlight: ["pet-stain-odor-treatment", "carpet-cleaning", "tile-and-grout-cleaning"],
  },
]

export const guides: Guide[] = [
  {
    slug: "carpet-cleaning-cost-the-woodlands",
    title: "Carpet cleaning prices in The Woodlands",
    summary: "How carpet cleaning is priced in The Woodlands, TX: rooms, stairs, pet treatment and add-ons, plus how to compare quotes.",
    updated: "2026-11-19",
    intro: [
      "Most Woodlands homes are two stories with carpet upstairs, so the price of a carpet cleaning here mostly comes down to three things: how many rooms, how many staircases, and whether there are pet spots or stains to treat. Add-ons like sofas, rugs and tile are priced by the piece or the area.",
    ],
    sections: [
      {
        heading: "What local companies advertise",
        requires: "priceRanges",
        paragraphs: [
          "When we reviewed 54 carpet cleaning websites serving The Woodlands, Spring, Conroe and nearby towns in November 2026, only 13 listed a carpet price. Advertised three-room prices ranged from $88 to $225, most were around $140, and minimums near $150 were common.",
          "Those are other companies' advertised prices, not a quote from us, and the cheapest ones usually leave out stairs, pre-treatment or large rooms.",
        ],
      },
      {
        heading: "Rooms, landings and game rooms",
        paragraphs: [
          "A bedroom is one room. A big game room or media room is often priced as two. The upstairs landing and hallway are sometimes included free and sometimes counted as a room, so it's worth asking. Listing every space you want cleaned is the easiest way to avoid surprises.",
        ],
      },
      {
        heading: "Stairs",
        paragraphs: [
          "Stairs are almost always priced separately, by the staircase or by the step, because each tread is cleaned by hand. Homes with two staircases, or a curved one, should mention it.",
        ],
      },
      {
        heading: "Add-ons that change the total",
        paragraphs: [],
        list: [
          "Pet urine treatment, by spot or by room",
          "Carpet protector after cleaning",
          "Sofas and sectionals, usually by the seat or the piece",
          "Area rugs, by size and fiber",
          "Tile and grout, by square foot, with sealing extra",
          "Mattresses, by size",
        ],
      },
      {
        heading: "Comparing quotes fairly",
        paragraphs: [
          "Ask each company for one total for the whole job, what method they use, and whether pre-treatment and spot work are included. A low room price with extras added at the door is the most common complaint in this industry, and it's avoidable by getting the full number in writing first.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it worth paying more for carpet protector?",
        a: "In high-traffic homes with kids or pets, often yes. Protector helps spills bead up and makes the next cleaning more effective. On carpet that's rarely used, it's less important.",
      },
      {
        q: "How do I get a price without a phone call?",
        a: "Send the quote form with your rooms, stairs and spots, and add photos if you can. The price comes back by text or email.",
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
