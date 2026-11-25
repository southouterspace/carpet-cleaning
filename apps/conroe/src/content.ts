import type { Area, Guide, Section, Service } from "@carpet/seo"

/**
 * Longer Conroe copy: extra service sections, extra services, area pages and
 * the cost guide. Kept out of site.config.ts so that file stays readable.
 * Only write what's true for any honest local cleaner; no claims about crew
 * size, years in business, reviews or certifications.
 */

export const serviceSections: Record<string, Section[]> = {
  "carpet-cleaning": [
    {
      heading: "What a deep clean includes",
      howTo: true,
      paragraphs: [
        "A proper deep clean is more than running a wand over the floor. Each step does a different job, and skipping one is usually why a cheap cleaning looks good for a week and then goes dull.",
      ],
      list: [
        "A walk-through to note stains, traffic lanes, pet spots and anything fragile",
        "Dry soil removal along edges and in heavy-traffic areas",
        "Pre-treatment matched to the soil: traffic lanes, food and drink, or pet spots",
        "Hot water extraction to rinse the loosened soil out of the fibers",
        "Spot work on anything left after the rinse",
        "Grooming so the pile dries standing up and looks even",
      ],
    },
    {
      heading: "Getting ready for the cleaning",
      paragraphs: [
        "Pick up toys, shoes, cords and anything on the floor, and move small furniture like side tables and chairs if you can. Put breakables somewhere safe. Vacuuming beforehand helps but isn't required.",
        "Leave the AC on the day of the cleaning. In Conroe's humidity, cool, dry indoor air is the single biggest thing that speeds up drying.",
      ],
    },
    {
      heading: "After the cleaning",
      paragraphs: [
        "Walk on the carpet in clean socks once it feels damp rather than wet, and wait for it to dry fully before putting shoes or furniture back. If furniture has to go back sooner, set foil or plastic tabs under the legs so wood stain and rust can't transfer to the damp carpet.",
      ],
    },
  ],
  "pet-odor-removal": [
    {
      heading: "Why pet odor keeps coming back",
      paragraphs: [
        "Urine is mostly water, but it leaves salts and bacteria behind as it dries. Those salts pull moisture out of the air, which is why the smell gets stronger on muggy days and after it rains. Surface shampoo and household sprays can mask it for a while, but they don't reach the pad where most of the urine ends up.",
        "A cleaner who knows odor work will find the spots first, often with a UV light or a moisture meter, then treat them at the depth the urine traveled. Heavy spots may need the carpet lifted so the pad and subfloor can be treated or replaced.",
      ],
    },
    {
      heading: "What to tell us in your quote request",
      paragraphs: ["The more we know up front, the more accurate the price will be."],
      list: [
        "Roughly how many spots, and which rooms they're in",
        "Whether it's one pet or several, and dog or cat",
        "How old the spots are and whether they've been cleaned before",
        "Whether you're selling, moving out or staying in the home",
      ],
    },
    {
      heading: "How to get dog or cat pee out of carpet before we arrive",
      paragraphs: [
        "What you do in the first hour decides how much of a fresh accident reaches the pad. An old, dried spot is different: the goal there is not to make it worse before it's treated properly.",
      ],
      list: [
        "Blot a fresh puddle with white towels, pressing down or standing on them to pull up as much as you can",
        "Add a little cool water and blot again. Skip vinegar and bleach mixtures, ammonia and scented sprays",
        "Use an enzyme cleaner made for pet urine and leave it wet as long as its label says",
        "Keep heat off the spot. A home steam machine or a hair dryer can set the stain and the smell",
        "Leave old, dried spots alone and list them in your quote request so they're treated at pad depth",
      ],
      howTo: true,
    },
    {
      heading: "Will carpet cleaning kill fleas?",
      paragraphs: [
        "A hot water cleaning removes many flea eggs, larvae and adults from the carpet, so it helps. It isn't a flea treatment on its own, though. Treat your pets with a product your vet recommends at the same time, or the fleas come straight back from the pets and the yard.",
      ],
    },
    {
      heading: "Before you book any pet odor cleaning, ask these",
      paragraphs: [
        "Pet odor work varies more than any other part of carpet cleaning. These questions sort a real treatment from a deodorizer that wears off in a week.",
      ],
      list: [
        "Will you check the carpet with a UV light to find every spot, or only treat the ones I point out?",
        "What product do you use on urine: an enzyme or oxidizer that breaks it down, or a deodorizer that covers it?",
        "Do you treat the pad and subfloor, or only the carpet surface?",
        "If a spot wicks back up or the smell returns after drying, what is your policy?",
        "How is pet treatment priced: by the spot, by the room, or by the area?",
        "Is pet treatment included in your advertised special, or added on top?",
      ],
      link: { href: "/guides/find-pet-urine-carpet-black-light", text: "How to find urine spots with a black light" },
    },
  ],
  "upholstery-cleaning": [
    {
      heading: "Reading the cleaning code",
      paragraphs: [
        "Look for a tag under the cushions or on the frame. The letter on it tells a cleaner which methods are safe for that fabric.",
      ],
      list: [
        "W: water-based cleaning is fine",
        "S: solvent only; water can leave rings or shrink the fabric",
        "WS: either method, with care",
        "X: vacuum only; no water or solvent",
      ],
    },
    {
      heading: "Common jobs in Conroe homes",
      paragraphs: [
        "Family-room sectionals with years of body oil on the arms and headrests, dining chairs after a holiday dinner, and recliners that the dog has claimed. Pet hair and dander come out with the cleaning, which helps if anyone in the house has allergies.",
      ],
    },
  ],
  "tile-and-grout-cleaning": [
    {
      heading: "Cleaning versus sealing",
      link: { href: "/guides/tile-and-grout-cleaning-cost-conroe", text: "What changes the price of tile and grout cleaning" },
      paragraphs: [
        "Cleaning gets the dirt out of the grout. Sealing fills the pores afterward so the next spill sits on top instead of soaking in. Unsealed grout in a busy kitchen can look dingy again within months, while sealed grout usually stays clean much longer with ordinary mopping.",
        "If your grout is cracked or crumbling, cleaning won't fix it. That's a regrouting job, and we'll say so if we see it.",
      ],
    },
  ],
  "area-rug-cleaning": [
    {
      heading: "What changes the method",
      paragraphs: [
        "Fiber matters most. Wool, cotton, viscose (sometimes sold as art silk), jute and synthetic rugs all react differently to water and heat. Hand-knotted rugs, fringe and rugs with bright dyes need the most care. A photo of the front, the back and any label helps us tell you how it should be cleaned.",
      ],
    },
  ],
  "move-out-carpet-cleaning": [
    {
      heading: "Move-out timing that works",
      paragraphs: [
        "Book the cleaning for after the last furniture is out and before the final walk-through, ideally with a day in between so the carpet is fully dry. If movers are coming the same day, schedule the cleaning after they leave.",
        "Sellers can book the cleaning before listing photos, so rooms look their best online.",
      ],
    },
    {
      heading: "Will a cleaning protect my deposit?",
      paragraphs: [
        "Texas law doesn't let a landlord keep your deposit for normal wear and tear, like light traffic lanes on older carpet. Stains, pet damage and odor are another matter. A professional cleaning removes most of those, and the receipt shows you met a lease that requires one.",
        "Burns, tears and spots where the color has bleached out won't clean up, so photograph them before you hand back the keys.",
      ],
    },
  ],
}

export const moreServices: Service[] = [
  {
    slug: "stair-carpet-cleaning",
    name: "Stair carpet cleaning",
    summary: "Hand cleaning for carpeted stairs, treads, risers and upstairs landings in two-story Conroe homes.",
    body: [
      "Stairs get more traffic per square foot than any room in the house, and dirt grinds into the edge of every step. A floor wand can't reach them properly, so each tread and riser is cleaned by hand with a stair tool.",
      "Most of the newer two-story homes around Conroe have at least one carpeted staircase and a carpeted landing upstairs. That landing is usually the first place traffic lanes show.",
    ],
    sections: [
      {
        heading: "How stairs are priced",
        paragraphs: [
          "Stairs are usually priced per staircase or per step, separate from rooms, because the work is slower. Tell us how many staircases you have and roughly how many steps, and the quote will cover them.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I just clean the stairs and not the rest of the house?",
        a: "Yes. Stairs and the landing are a common job on their own, especially between whole-home cleanings.",
      },
    ],
  },
  {
    slug: "mattress-cleaning",
    name: "Mattress cleaning",
    summary: "Deep cleaning and stain treatment for mattresses, to cut down on dust, sweat stains and odor.",
    body: [
      "A mattress collects sweat, skin flakes, dust and the occasional spill or accident, and most people never clean one. Mattress cleaning uses a low-moisture method so the mattress dries quickly and nothing soaks into the core.",
      "It's popular with families who have kids, pets that sleep on the bed, or anyone with dust allergies. It also makes sense before moving a guest bed into regular use.",
    ],
    sections: [
      {
        heading: "What it can and can't fix",
        paragraphs: [
          "Cleaning lifts surface soil and treats sweat and urine stains, and it can freshen a mattress noticeably. Old yellowing from years of use may lighten but not disappear, and it won't fix sagging. You'll hear what to expect when you send a photo.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long before I can sleep on the mattress?",
        a: "Usually a few hours. Low-moisture cleaning is used on mattresses so they dry the same day.",
      },
    ],
  },
  {
    slug: "carpet-stain-removal",
    name: "Carpet spot and stain removal",
    summary: "Targeted treatment for coffee, wine, food, mud, red clay and other carpet stains.",
    body: [
      "Most stains come out when they're treated with the right product for what caused them. Coffee and wine need different chemistry than grease, and red clay tracked in from a Conroe yard needs different treatment than both.",
      "Spot work comes with every deep clean, and you can also book it on its own for one or two bad spots.",
    ],
    sections: [
      {
        heading: "What to do right after a spill",
        howTo: true,
        paragraphs: ["Quick action keeps a spill from becoming a stain."],
        list: [
          "Blot with a white towel, working from the outside in. Don't scrub.",
          "Rinse with a little plain cool water and blot again.",
          "Skip colored dish soap, bleach and oxy powders, which can leave rings or lighten the carpet.",
          "If the spot comes back after it dries, that's the soil wicking up from below, and a hot water rinse usually fixes it.",
        ],
      },
      {
        heading: "Stains that may be permanent",
        paragraphs: [
          "Bleach spots, burns and some dyes (hair dye, red drink mixes, ink) change the color of the fiber itself. Those can sometimes be lightened but not fully removed. A photo with your quote request lets us tell you before anyone comes out.",
        ],
      },
    ],
  },
]

export const areas: Area[] = [
  {
    slug: "grand-central-park",
    name: "Grand Central Park",
    kind: "neighborhood",
    summary: "Carpet, stair and upholstery cleaning for the newer homes in Grand Central Park on Conroe's south side, off I-45.",
    intro: [
      "Grand Central Park is one of Conroe's newest master-planned communities, so most of its homes still have the carpet the builder put in. Builder-grade carpet is usually a light neutral color with a thinner pile, and it shows traffic lanes, especially on stairs and landings, within the first couple of years.",
      "A first deep clean before those lanes set in keeps the carpet looking new longer. It's also worth doing before the builder's warranty period ends, so you can see whether any seams or stretching problems need to be reported.",
    ],
    sections: [
      {
        heading: "Typical jobs here",
        paragraphs: [],
        list: [
          "Upstairs bedrooms, game rooms and landings in two-story homes",
          "Carpeted stairs, which usually show wear first",
          "Pet spots in homes with new puppies",
          "Sectionals and dining chairs in open-plan family rooms",
        ],
      },
    ],
    highlight: ["carpet-cleaning", "stair-carpet-cleaning", "pet-odor-removal"],
    faqs: [
      {
        q: "Will cleaning void my new carpet's warranty?",
        a: "No. Most carpet warranties actually require periodic professional hot water extraction. Keep the receipt in case you ever need to make a claim.",
      },
    ],
  },
  {
    slug: "artavia",
    name: "Artavia",
    kind: "neighborhood",
    summary: "Carpet and upholstery cleaning for Artavia, the newer master-planned community on Conroe's east side off Highway 242.",
    intro: [
      "Artavia homes are new enough that most owners are on their first carpet. The rooms that usually need help first are the ones the family lives in: the game room, the kids' bedrooms and the hallway between them.",
      "Many Artavia homes mix hard floors downstairs with carpet upstairs. That means area rugs on the first floor, which collect grit fast because there's no carpet around them to trap it, and carpet upstairs that gets most of its dirt from the stairs.",
    ],
    sections: [
      {
        heading: "Planning a cleaning",
        paragraphs: [
          "If the carpet is only a year or two old, a deep clean of the upstairs rooms, stairs and landing is usually all it needs. Add rugs and upholstery to the same visit and you'll only need to clear the house once.",
        ],
      },
    ],
    highlight: ["carpet-cleaning", "area-rug-cleaning", "upholstery-cleaning"],
  },
  {
    slug: "harpers-preserve",
    name: "Harper's Preserve",
    kind: "neighborhood",
    summary: "Carpet cleaning for Harper's Preserve homes along Highway 242: bedrooms, stairs, pet spots, sofas and rugs.",
    intro: [
      "Harper's Preserve has a mix of homes from different building phases, so carpet ages vary from street to street. Earlier homes are often at the point where traffic lanes and pet spots have built up, while newer ones mainly need upkeep.",
      "Families with pets who back onto the preserve's green space and trails tend to track in more dirt and pollen, so entry areas and the paths to the back door get dirty first.",
    ],
    sections: [
      {
        heading: "Common requests",
        paragraphs: [],
        list: [
          "Whole-home carpet cleaning in homes that are five to ten years old",
          "Pet urine treatment in bedrooms and closets",
          "Tile and grout in kitchens and entryways",
        ],
      },
    ],
    highlight: ["carpet-cleaning", "pet-odor-removal", "tile-and-grout-cleaning"],
  },
  {
    slug: "river-plantation",
    name: "River Plantation",
    kind: "neighborhood",
    summary: "Carpet, pet odor and upholstery cleaning for River Plantation, the established golf-course neighborhood south of downtown.",
    intro: [
      "River Plantation is one of Conroe's older, established neighborhoods, set around a golf course near the West Fork of the San Jacinto River. Many homes have been lived in for decades, and the carpet in them is often older too.",
      "Older carpet can still clean up well, but it takes a careful hand. Years of pet spots, faded traffic lanes and loose seams are common. A cleaner should look first and tell you honestly whether cleaning will get the result you want, or whether some rooms are past saving.",
    ],
    sections: [
      {
        heading: "Selling or updating an older home",
        paragraphs: [
          "If you're getting a home ready to sell, cleaning the carpet before listing photos is a low-cost way to make rooms look fresher. If you plan to replace it anyway, skip cleaning those rooms and spend the money on tile and grout or upholstery instead.",
        ],
      },
      {
        heading: "After a river flood scare",
        paragraphs: [
          "If water has come into the house, carpet that sat wet for more than a day or two usually needs to be replaced, not cleaned, along with the pad. Water damage is a job for a restoration company. Once the home is dry, a cleaning can help with rooms that only got damp.",
        ],
      },
    ],
    highlight: ["pet-odor-removal", "carpet-cleaning", "upholstery-cleaning"],
  },
  {
    slug: "downtown-conroe",
    name: "Downtown Conroe",
    kind: "neighborhood",
    summary: "Carpet, rug and upholstery cleaning for homes, apartments and rentals in and around historic downtown Conroe.",
    intro: [
      "The streets around the historic square mix older houses, newer infill homes, apartments and small rentals. Carpet ranges from decades-old to just installed, and many older homes have hardwood with area rugs on top.",
      "Landlords and tenants near downtown often need carpet cleaned between leases, and the shorter the gap, the more scheduling matters. Tell us the move-out and move-in dates and the cleaning will be planned in between.",
    ],
    highlight: ["move-out-carpet-cleaning", "area-rug-cleaning", "carpet-stain-removal"],
  },
  {
    slug: "lake-conroe",
    name: "Lake Conroe",
    kind: "neighborhood",
    summary: "Carpet and upholstery cleaning for homes, condos and weekend places around Lake Conroe, from the Conroe side of the lake.",
    intro: [
      "Lake houses get a different kind of dirt: sand, wet feet, sunscreen and damp towels on the couch. Carpet near the back door and furniture on the main floor take most of it, and a long, humid summer can leave a musty smell behind.",
      "Many owners book a cleaning at the start of the season and again when it winds down. If the place is rented out, cleaning between guests keeps it photo-ready.",
    ],
    sections: [
      {
        heading: "Keeping lake-house carpet fresh",
        paragraphs: [],
        list: [
          "Put a heavy mat at every door that leads to the water",
          "Run the AC or a dehumidifier when the house sits empty in summer",
          "Wash or clean cushion covers that get sunscreen on them",
          "Treat musty smells early, before they settle into the pad",
        ],
      },
    ],
    highlight: ["carpet-cleaning", "upholstery-cleaning", "tile-and-grout-cleaning"],
  },
  {
    slug: "panorama-village",
    name: "Panorama Village",
    kind: "town",
    summary: "Carpet, upholstery and pet odor cleaning for Panorama Village, the small golf-course city just west of Conroe.",
    intro: [
      "Panorama Village is a small city just west of Conroe, built around a golf course, with mostly established single-story and two-story homes. Many residents have lived there for years, and plenty of homes still have wall-to-wall carpet in bedrooms and living areas.",
      "It's close enough to Conroe that it's part of the regular service area, with the same quote process: tell us about the rooms and any problem spots, and get a price before anyone comes out.",
    ],
    highlight: ["carpet-cleaning", "upholstery-cleaning", "pet-odor-removal"],
  },
]

export const guides: Guide[] = [
  {
    slug: "carpet-cleaning-cost-conroe",
    title: "How much does carpet cleaning cost in Conroe?",
    summary: "What changes the price of carpet cleaning in Conroe, TX, what usually costs extra, and how to get an exact quote.",
    updated: "2026-11-25",
    intro: [
      "Carpet cleaning in Conroe is priced by the job, not by a single flat rate, and the price depends mostly on how many rooms you have, whether there are stairs, and how much spot and odor work is needed. The fastest way to an exact number is to send those details with a quote request.",
      "This guide explains what goes into a price so you know what to ask and what to compare when you get quotes.",
    ],
    sections: [
      {
        heading: "Typical advertised prices around Conroe",
        requires: "priceRanges",
        paragraphs: [
          "In November 2026 we looked at the websites of 54 carpet cleaners serving Conroe, Montgomery, The Woodlands and nearby towns. Only 13 posted a carpet price. Their advertised prices for three rooms ran from $88 to $225, with most near $140, and a minimum charge of around $150 was common.",
          "These are other companies' advertised prices, not a quote. Low teaser prices often exclude pre-treatment, stairs or larger rooms.",
        ],
      },
      {
        heading: "What that works out to per room",
        requires: "priceRanges",
        paragraphs: [
          "Divided out, the advertised three-room prices above come to roughly $30 to $75 per room, with most near $47. That is simple arithmetic on other companies' posted specials, not a quote, and a minimum charge usually applies to small jobs.",
        ],
      },
      {
        heading: "How a room is counted",
        paragraphs: [
          "Most cleaners count a standard bedroom or living room as one room, with a size limit of roughly 200 to 300 square feet. Large open living areas, game rooms and combined living and dining spaces may count as two. Hallways, closets and landings are sometimes included and sometimes not, so ask.",
        ],
      },
      {
        heading: "What usually costs extra",
        paragraphs: [],
        list: [
          "Stairs, usually priced per staircase or per step",
          "Pet urine and odor treatment, priced by the number of spots or the area",
          "Heavy stain work beyond normal spotting",
          "Moving large furniture",
          "Carpet protector applied after cleaning",
          "Upholstery, rugs, tile and mattresses, priced by the piece or the area",
        ],
      },
      {
        heading: "Watch out for these pricing tricks",
        paragraphs: [
          "A very low per-room price can turn into a much bigger bill once pre-treatment, a minimum charge or \"heavily soiled\" fees are added at the door. Ask for one number for the whole job, in writing, before work starts. That's the only way to compare quotes fairly.",
        ],
      },
      {
        heading: "Per room or per square foot?",
        paragraphs: [
          "Most Conroe carpet cleaners quote by the room, then add stairs and extras. A few quote by the square foot, which is common for commercial jobs and very large open rooms. Neither is better on its own. What matters is that both quotes cover the same rooms and the same treatments.",
          "To compare a per-room quote with a per-square-foot one, measure your rooms. A 12 by 14 bedroom is 168 square feet. If a room is over about 300 square feet, expect a per-room price to count it as more than one.",
        ],
      },
      {
        heading: "How to get an exact price",
        paragraphs: [
          "Our quote form asks for exactly what changes the price: rooms, stairs, pets and stains, and when you'd like it done. Add photos if you can. You'll get a price for the whole job before anyone comes out, with no phone call needed.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it cheaper to rent a carpet cleaner?",
        a: "Renting costs less up front, but rental machines have weaker suction, so carpet stays wet longer and more soap is left behind. That residue makes carpet get dirty again faster. For a light refresh it can work; for traffic lanes, pet spots or a move-out, a professional cleaning usually goes further.",
      },
      {
        q: "Do you charge for a quote?",
        a: "No. Quotes are free, and you'll have the price before you decide.",
      },
      {
        q: "Does a move-out cleaning cost more?",
        a: "Usually not. An empty home is often quicker to clean because there's no furniture to work around, though heavy stains or pet spots add to it.",
      },
    ],
  },
  {
    slug: "tile-and-grout-cleaning-cost-conroe",
    title: "What changes the price of tile and grout cleaning in Conroe",
    summary: "How tile and grout cleaning is priced in Conroe homes, what sealing adds, and what to send for an exact quote.",
    updated: "2026-11-25",
    intro: [
      "Tile and grout cleaning is priced differently from carpet. Instead of counting rooms, most cleaners measure the floor area, then add for showers, backsplashes and sealing. In Conroe, where a lot of homes have tile through the kitchen, living areas and wet rooms, that area adds up quickly, so it helps to know what goes into the number.",
      "We haven't surveyed local tile prices yet, so this guide has no price table. It explains how the price is built so you can compare quotes on the same terms.",
    ],
    sections: [
      {
        heading: "How the area is measured",
        paragraphs: [
          "Most quotes are based on square feet of floor. Measure each tiled room wall to wall and multiply length by width, then add the rooms together. A 12 by 15 kitchen is 180 square feet. Leave out the space under cabinets and islands.",
          "Showers, tub surrounds and backsplashes are usually priced separately because the work is by hand on a vertical surface.",
        ],
      },
      {
        heading: "What makes the job take longer",
        paragraphs: [],
        list: [
          "Dark or stained grout lines, especially in kitchens and entries",
          "Textured, slate or saltillo tile that holds soil in its surface",
          "Soap scum and hard water buildup in showers",
          "Wide grout lines or a lot of small mosaic tile",
          "Old sealer or wax that has to come off first",
        ],
      },
      {
        heading: "Cleaning, sealing and color sealing",
        paragraphs: [
          "Cleaning removes the dirt. A clear sealer goes on afterward to slow down how fast the grout soaks up spills, and it is a separate line on most quotes. Color sealing paints the grout lines with a tinted sealer, which can even out grout that won't come clean, and it costs more than clear sealer because each line is done by hand.",
          "If your grout is cracked or missing, that is a regrout job, not a cleaning. Ask for it to be quoted on its own.",
        ],
      },
      {
        heading: "What to send for an exact price",
        paragraphs: [
          "Send the rough square footage of each tiled room, whether showers are included, and whether you want sealing. Photos of the worst grout lines help a lot. You'll get one total for the whole job before anyone comes out.",
        ],
        link: { href: "/services/tile-and-grout-cleaning", text: "See our tile and grout cleaning service" },
      },
    ],
    faqs: [
      {
        q: "Is tile and grout cleaning priced by the square foot?",
        a: "Usually. Most cleaners measure the floor area and add separate prices for showers, backsplashes and sealing. Some price by the room for small jobs.",
      },
      {
        q: "Do I need to seal grout after cleaning?",
        a: "It isn't required, but unsealed grout soaks up spills and gets dark again sooner. A clear sealer is a common add-on right after cleaning, once the grout is dry.",
      },
      {
        q: "Can cleaning make old grout look new?",
        a: "Often it gets close. Grout that is stained deep or worn away may still look uneven, and color sealing is the usual fix for that.",
      },
    ],
  },
  {
    slug: "find-pet-urine-carpet-black-light",
    title: "How to find pet urine in carpet with a black light",
    summary: "Step-by-step: use a UV black light to find dog and cat urine spots in carpet, mark them, and tell them apart from other stains.",
    updated: "2026-11-25",
    intro: [
      "Most pet urine in carpet is invisible in daylight. It dries clear, the smell comes and goes with humidity, and the spot you know about is rarely the only one. A UV flashlight, often called a black light, makes dried urine glow so you can find every spot.",
      "Finding them before a cleaning matters. Urine has to be treated where it soaked into the pad, and a cleaner can only treat the spots they know about.",
    ],
    sections: [
      {
        heading: "How to check carpet for urine with a UV light",
        howTo: true,
        paragraphs: [
          "You need a UV flashlight, ideally one labeled 365 nm, a roll of painter's tape and a dark room.",
        ],
        list: [
          "Wait until after dark and turn off every light in the room. Close the blinds.",
          "Hold the light one to two feet above the carpet and walk the room slowly in rows.",
          "Look for dull yellow or green glowing spots, splash marks and drip trails.",
          "Check along baseboards, in corners, behind doors and under beds and tables, where pets go when no one is watching.",
          "Mark the edge of each spot with painter's tape so you can find it in daylight.",
          "Smell the marked spots up close. Urine usually smells stronger right at the carpet surface.",
          "Count the spots and take a photo of the room with the tape in place.",
        ],
      },
      {
        heading: "What else glows under a black light",
        paragraphs: [
          "Urine isn't the only thing that shows up. Some spilled drinks, old cleaning residue, lint, and optical brighteners in laundry soap can glow too. Urine spots tend to have a ring or splash shape and a smell. A round spot with no smell is more likely a spill or old soap.",
        ],
      },
      {
        heading: "What the spots tell you",
        paragraphs: [
          "Small spots in open areas usually mean an accident or two. Big spots, many spots along one wall, or spots on top of each other mean repeated marking, and the urine has likely reached the pad and the floor underneath. Those need a deeper treatment than a surface clean.",
        ],
      },
      {
        heading: "What to do before the cleaning",
        paragraphs: [
          "Leave the tape down and don't scrub the dried spots with store-bought cleaners. Some leave residue or set the odor. In your quote request, say how many spots you found and which rooms they're in, and add a photo.",
        ],
        link: { href: "/services/pet-odor-removal", text: "See how pet odor removal works" },
      },
    ],
    faqs: [
      {
        q: "What color is cat or dog urine under a black light?",
        a: "Dried urine usually glows a dull yellow or yellow-green. Fresh urine may barely glow at all until it dries.",
      },
      {
        q: "Does a black light find old urine stains?",
        a: "Yes. Dried urine, even months old, usually glows. Spots that were cleaned with some products may glow less, but the urine underneath is often still there.",
      },
      {
        q: "Can I use my phone as a black light?",
        a: "No. A phone flashlight is white light. You need a UV flashlight, and one rated 365 nm shows urine more clearly than cheaper 395 nm lights.",
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
