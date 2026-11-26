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
      link: { href: "/guides/hot-water-extraction-vs-low-moisture-cleaning", text: "Hot water extraction vs low-moisture cleaning" },
      paragraphs: [
        "The major carpet makers recommend hot water extraction for deep cleaning, and many of their warranties ask for it every 12 to 24 months. It works by rinsing: a heated cleaning solution goes into the pile, loosens the soil, and is pulled back out with strong suction along with the dirt.",
        "Low-moisture and encapsulation methods dry faster and are fine for a quick refresh, but they leave more of the soil in the carpet. For a home that hasn't been cleaned in a year or more, a rinse is what brings the color back.",
      ],
    },
    {
      heading: "Can you sleep in the room the same night?",
      paragraphs: [
        "Usually, yes. With the AC or ceiling fans running, carpet is dry enough to walk on in socks within a few hours and fully dry in 4 to 12, depending on how thick it is and how humid the day is. Wait to put wooden furniture back until it's dry, or set the legs on foil or plastic tabs so they can't stain it, and keep pets off it until then.",
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
    {
      heading: "Can carpet cleaning get rid of cat urine smell?",
      paragraphs: [
        "Yes, but rarely with one surface clean. Cat urine is more concentrated than dog urine, so even a small spot smells strong and lingers. Cats also go back to the same place, often a corner, along a wall or beside a bed, so one spot is usually several old ones on top of each other.",
        "Each of those spots has to be treated at the depth it reached, and a corner that's been used for months may need its pad section replaced. Removing the smell also takes away what draws the cat back. If the habit started suddenly, it's worth a call to your vet.",
      ],
    },
    {
      heading: "A short checklist before you book pet treatment",
      paragraphs: [
        "Whoever you hire, these answers tell you whether the urine will actually be treated or only masked.",
      ],
      list: [
        "Do you find spots with a UV light, or only treat what I can see?",
        "Is the urine treatment an enzyme or oxidizer, or a fragrance deodorizer?",
        "Can you treat the pad underneath when the urine has soaked through?",
        "What happens if a spot wicks back after the carpet dries?",
        "Is pet treatment priced per spot, per room or by area?",
        "Does the advertised special include pet treatment, or is it extra?",
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
      link: { href: "/guides/rug-cleaning-cost-by-size-and-fiber", text: "How rug size and fiber set the price" },
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
    {
      heading: "Tile, stone or plank",
      paragraphs: [
        "Porcelain and ceramic tile handle a hot, high-pressure rinse without trouble. Travertine, marble and slate are softer and react to acid, so they get a pH-neutral cleaner and less pressure. Wood-look porcelain plank, now common in kitchens and living rooms across the villages, cleans like any porcelain tile but has longer grout runs that hold more dirt.",
        "If you're not sure which you have, a photo of the floor and a close-up of one tile is usually enough to tell.",
      ],
    },
    {
      heading: "Should grout be sealed?",
      paragraphs: [
        "Sealing doesn't make grout stain-proof, but it slows down how fast spills and mop water soak in. It's most worth it on light grout in kitchens, entries and bathrooms. Dark grout in a low-traffic room can skip it.",
      ],
    },
  ],
}

export const moreServices: Service[] = [
  {
    slug: "mattress-cleaning",
    updated: "2026-11-26",
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
      {
        heading: "Memory foam and pillow tops",
        paragraphs: [
          "Foam mattresses soak up water fast and dry slowly, which is why they're cleaned with very little moisture and strong suction. Pillow tops get the same care, with extra attention to the seams where dust collects.",
          "After cleaning, leave the mattress uncovered with a fan on it for an hour or two, then put a washable protector on before the sheets.",
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
      {
        heading: "Clean or replace before you list?",
        paragraphs: [
          "Cleaning costs a small fraction of new carpet, so it's worth trying first. Buyers notice smell and stains much more than the carpet's age. Replacement makes more sense when the carpet is torn, badly sun-faded, rippled from stretching, or soaked with pet urine through the pad.",
          "Ask for an honest read on each room before you book. Sometimes the answer is to clean the bedrooms and replace one stained room, which costs far less than redoing the whole house.",
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
    updated: "2026-11-25",
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
        heading: "Per room, worked out",
        requires: "priceRanges",
        paragraphs: [
          "Split three ways, those advertised three-room prices land between about $30 and $75 a room, most near $47. That is arithmetic on other companies' posted specials, not our quote, and minimum charges apply to small jobs.",
        ],
      },
      {
        heading: "Rooms, landings and game rooms",
        paragraphs: [
          "A bedroom is one room. A big game room or media room is often priced as two. The upstairs landing and hallway are sometimes included free and sometimes counted as a room, so it's worth asking. Listing every space you want cleaned is the easiest way to avoid surprises.",
        ],
      },
      {
        heading: "Per room or per square foot",
        paragraphs: [
          "Most cleaners in The Woodlands price carpet by the room; a few price by the square foot. A room quote is simpler, but it hides how big a \"room\" can be. A square-foot quote is easier to compare, as long as you measure the same way.",
          "If you're comparing the two, measure wall to wall. Bedrooms here are often 150 to 220 square feet, while upstairs game rooms over a garage can run past 300 and may be counted as two rooms.",
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
      {
        q: "Are $99 whole-house carpet cleaning specials real?",
        a: "Some are, but check what they cover. Low specials often count only a few rooms, cap the size of each room, and price pre-treatment, stairs, hallways and spot work separately. Ask what the advertised price includes and get one total for your home before you book.",
      },
    ],
  },
  {
    slug: "rug-cleaning-cost-by-size-and-fiber",
    title: "Rug cleaning cost in The Woodlands: how size and fiber set the price",
    summary: "How area rug cleaning is priced in The Woodlands by size and fiber, from 5x8 to 9x12, and what wool, silk and jute add.",
    updated: "2026-11-25",
    intro: [
      "Rug cleaning is priced differently from wall-to-wall carpet. Most cleaners charge by the square foot of the rug, and the rate per square foot depends on what the rug is made of. That is why two 8x10 rugs can get very different quotes.",
      "We haven't surveyed local rug prices yet, so this guide explains how the price is built rather than listing dollar figures. Use it to check that quotes are measuring the same thing.",
    ],
    sections: [
      {
        heading: "Size: work out the square feet",
        paragraphs: [
          "Multiply the length by the width in feet. Round rugs are usually measured as the square they fit in. These are the common sizes and their areas:",
        ],
        list: [
          "3x5 rug: 15 square feet",
          "5x8 rug: 40 square feet",
          "6x9 rug: 54 square feet",
          "8x10 rug: 80 square feet",
          "9x12 rug: 108 square feet",
          "10x14 rug: 140 square feet",
        ],
      },
      {
        heading: "Fiber: why the rate changes",
        paragraphs: [
          "The fiber decides how the rug can be washed, how long it takes to dry, and how much risk there is of shrinking, browning or dye bleeding. Check the label on the back or underside before you ask for a quote.",
        ],
        list: [
          "Nylon, polyester and olefin: the easiest to clean and usually the lowest rate",
          "Wool: needs cooler water and a wool-safe rinse, so it usually costs more",
          "Cotton and flatweaves: can shrink or bleed if overwet",
          "Jute, sisal and seagrass: brown and stain with water, so they need dry or very low-moisture cleaning",
          "Silk, viscose and bamboo silk: the most delicate and usually the highest rate",
        ],
      },
      {
        heading: "Other things that add to a rug quote",
        paragraphs: [],
        list: [
          "Pet urine, which may need a soak to reach the base of the rug",
          "Fringe cleaning or repair",
          "Pickup and delivery, if the rug is cleaned off site",
          "Moth or water damage",
          "A rug pad, if you want a new one cut to size",
        ],
      },
      {
        heading: "In-home or off-site cleaning",
        paragraphs: [
          "Synthetic rugs can often be cleaned in your home, on a protected floor, at the same visit as your carpet. Wool, silk and rugs with urine usually do better at a rug plant, where they can be dusted, washed and dried flat. Off-site cleaning takes longer and costs more, but it is the safer choice for valuable rugs.",
        ],
      },
      {
        heading: "What to send for an exact rug price",
        paragraphs: [
          "Send the size of each rug, the fiber from the label if you can find it, and photos of the front, back and any stains or fringe damage. Mention pets. You'll get a price for each rug before anything is picked up.",
        ],
        link: { href: "/services/area-rug-cleaning", text: "See our area rug cleaning service" },
      },
    ],
    faqs: [
      {
        q: "How much more does an 8x10 rug cost to clean than a 5x8?",
        a: "About twice as much, because an 8x10 rug is 80 square feet and a 5x8 is 40, and most cleaners price rugs by the square foot. Fiber and stains can change that.",
      },
      {
        q: "Why does wool rug cleaning cost more?",
        a: "Wool needs cooler water, a wool-safe cleaner and careful drying to avoid shrinking or browning. That takes more time than cleaning a synthetic rug.",
      },
      {
        q: "Can you clean a rug at the same time as my carpet?",
        a: "Synthetic rugs often can be cleaned in the home during the same visit. Delicate or urine-soaked rugs usually need to go to a rug plant.",
      },
    ],
  },
  {
    slug: "hot-water-extraction-vs-low-moisture-cleaning",
    title: "Hot water extraction vs low-moisture carpet cleaning",
    summary: "Steam cleaning, low-moisture and dry carpet cleaning compared: how each works, drying time, and which suits pets, traffic lanes and quick refreshes.",
    updated: "2026-11-25",
    intro: [
      "Carpet cleaning methods go by a lot of names: steam cleaning, hot water extraction, encapsulation, low-moisture, dry cleaning, bonnet cleaning. They boil down to two groups. One rinses the carpet and pulls the water back out. The other uses very little water and lifts soil with a cleaning solution that dries.",
      "Here's how they compare in a typical Woodlands home, where most carpet is upstairs and gets a lot of foot traffic from kids and pets.",
    ],
    sections: [
      {
        heading: "Hot water extraction",
        paragraphs: [
          "A cleaning solution is sprayed into the carpet, then a wand rinses it with hot water while a powerful vacuum pulls the water, soil and solution back out. Truck-mounted units have the most heat and suction. This is the method most carpet manufacturers name in their warranty care instructions.",
          "Carpet is usually damp for 4 to 8 hours afterward, sometimes longer on humid days or with thick carpet.",
        ],
      },
      {
        heading: "Low-moisture and encapsulation cleaning",
        paragraphs: [
          "A small amount of solution is worked into the carpet with a rotary or brush machine. The solution wraps around soil and dries into crystals that are vacuumed up later. Carpet is usually dry in one to two hours.",
          "It is popular for offices and for quick refreshes between deep cleanings. It removes less soil from the base of the carpet and doesn't flush out urine.",
        ],
      },
      {
        heading: "Which method fits which job",
        paragraphs: [],
        list: [
          "Pet urine and odor: hot water extraction, with a urine treatment that reaches the pad",
          "Dark traffic lanes and years of buildup: hot water extraction",
          "A quick refresh before guests: low-moisture is fine",
          "Offices that can't close for long: low-moisture between periodic extractions",
          "Carpet under a manufacturer's warranty: check the warranty, which usually asks for extraction",
        ],
      },
      {
        heading: "Questions to ask about the method",
        paragraphs: [
          "Ask what method will be used, how long the carpet will take to dry, and whether the cleaner rinses out the cleaning solution. Leftover soap is the main reason carpet looks dirty again soon after a cleaning, whatever the method.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is steam cleaning the same as hot water extraction?",
        a: "Yes. \"Steam cleaning\" is the common name, but the machine uses hot water, not steam. The industry term is hot water extraction.",
      },
      {
        q: "Does dry carpet cleaning use any water?",
        a: "A little. \"Dry\" and low-moisture methods use far less water than extraction, which is why carpet dries in an hour or two.",
      },
      {
        q: "Which carpet cleaning method lasts longest?",
        a: "Hot water extraction usually stays clean longest because it removes the most soil and rinses out the cleaning solution.",
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
