import type { Area, Guide, Section, Service } from "@carpet/seo"

/**
 * Longer Montgomery copy: extra service sections, extra services, lake
 * community pages and the cost guide. Written for this site only; don't
 * reuse Conroe or Woodlands wording. No claims about crew size, years in
 * business, reviews or certifications.
 */

export const serviceSections: Record<string, Section[]> = {
  "carpet-cleaning": [
    {
      heading: "Grit, clay and traffic lanes",
      paragraphs: [
        "Montgomery County soil is a mix of fine sand and red clay, and both end up in carpet. Sand settles at the base of the fibers and wears them down. Clay stains: if it's tracked in wet, it can leave an orange tint that ordinary vacuuming won't touch.",
        "Clay stains respond best to a treatment made for them, applied before the rinse. Mention red clay or orange spots in your quote request so the right product comes along.",
      ],
    },
    {
      heading: "Making it last",
      link: { href: "/guides/is-professional-carpet-cleaning-worth-it", text: "Is professional carpet cleaning worth it?" },
      howTo: true,
      paragraphs: [],
      list: [
        "Shoes off at the door, or a heavy mat outside and in",
        "Vacuum high-traffic paths twice a week, slowly",
        "Blot spills right away with a white towel and cool water",
        "Deep clean every 12 to 18 months, or every 6 to 12 with pets",
      ],
    },
  ],
  "lake-house-rental-cleaning": [
    {
      heading: "A turnover checklist",
      paragraphs: ["Owners and managers usually ask for some or all of these between guests:"],
      list: [
        "Carpet in bedrooms and the main living area",
        "Spot treatment for drinks, food and sunscreen",
        "Couch and chair cushions on the main floor",
        "Tile and grout at the back door and kitchen",
        "Odor treatment if a guest brought a pet",
      ],
    },
    {
      heading: "Off-season care",
      paragraphs: [
        "A lake house that sits closed in a humid Texas winter can pick up a musty smell, especially if the AC is set high. Set it to cycle, run a dehumidifier if you have one, and book a cleaning before the first guests of spring so any smell is gone before it gets a review.",
      ],
    },
  ],
  "pet-odor-removal": [
    {
      heading: "Lake dogs and wet carpet",
      link: { href: "/guides/get-dog-hair-out-of-carpet", text: "How to get dog hair out of carpet" },
      paragraphs: [
        "A dog that spends the afternoon in the lake comes inside with more than dirt. Lake water carries algae and bacteria that leave a smell when the dog dries off on the carpet or the couch. That odor is different from urine, and it usually comes out with a thorough rinse plus a deodorizing treatment.",
        "Urine is the harder problem. Spots that have soaked into the pad need treatment at that depth. In bad cases, the pad section is replaced. You'll get an honest read on which you're dealing with before anything is done.",
      ],
    },
    {
      heading: "Before you rent a carpet machine for pee spots",
      paragraphs: [
        "Rental shampooers and home carpet machines put down a lot of water and don't pull much of it back out. On a urine spot, that water carries the urine deeper into the pad and spreads it wider, so the smell often comes back stronger once it dries.",
        "To treat a spot yourself without a machine, blot it with towels, use an enzyme cleaner made for pet urine, and let it sit as long as the label says. Old spots, big ones and ones that keep coming back need treatment at pad depth.",
      ],
    },
    {
      heading: "What to ask before you book pet odor work",
      paragraphs: [
        "Pet odor jobs vary from company to company. Ask these first.",
      ],
      list: [
        "Will you check for spots with a UV light?",
        "Do you use an enzyme or oxidizing urine treatment, or a deodorizer?",
        "Does the treatment reach the pad and subfloor?",
        "If a spot comes back as the carpet dries, what do you do?",
        "Is pet treatment priced by the spot, the room or the area?",
        "Is it included in any special you advertise?",
      ],
    },
  ],
  "upholstery-cleaning": [
    {
      heading: "Indoor and outdoor cushions",
      paragraphs: [
        "Sunscreen, lake water and damp swimsuits are hard on fabric. Body oils and sunscreen leave darker patches on arms and seat cushions, and dampness can lead to mildew spots. Outdoor fabrics like solution-dyed acrylic are tough and usually clean well. Indoor fabrics need their cleaning code checked first.",
        "Send photos of the pieces and their tags, and say whether they're indoor or outdoor, for the most accurate quote.",
      ],
    },
  ],
  "tile-and-grout-cleaning": [
    {
      heading: "Tile throughout? Start with traffic areas",
      paragraphs: [
        "Many lake houses have tile in most rooms because it handles wet feet. If cleaning it all is more than you want to spend this season, start with the kitchen, the entry and the path to the water. Those areas show the biggest change. Sealing afterward slows down how fast the grout darkens again.",
      ],
    },
  ],
  "area-rug-cleaning": [
    {
      heading: "Jute, sisal and other natural fibers",
      paragraphs: [
        "Natural-fiber rugs are popular in lake houses for their look, but they don't like water. Too much moisture can brown jute and sisal or make them shrink. They're cleaned with a low-moisture method, and some stains on them are permanent. A photo and the label let us tell you what's possible.",
      ],
    },
  ],
}

export const moreServices: Service[] = [
  {
    slug: "carpet-stain-removal",
    name: "Stain and spot removal",
    summary: "Spot treatment for red clay, wine, coffee, food, sunscreen and other stains on Montgomery carpet.",
    body: [
      "Each stain needs the right chemistry. Red clay, coffee, red wine, grease and sunscreen are all treated differently, and using the wrong product can set a stain for good. Spot work is part of every carpet cleaning, and it can also be booked for a few problem spots on their own.",
    ],
    sections: [
      {
        heading: "Before we get there",
        howTo: true,
        paragraphs: [],
        list: [
          "Blot, don't rub, with a white towel",
          "Rinse lightly with cool water and blot again",
          "Avoid bleach, oxy cleaners and colored dish soap",
          "Write down what caused the stain if you know",
        ],
      },
      {
        heading: "When a stain won't come out",
        paragraphs: [
          "Bleach marks, burns and some dyes change the fiber's color, so there's nothing left to clean out. Those can sometimes be lightened, or fixed with a small patch from a closet. A photo with your quote request helps us say which it is.",
        ],
      },
    ],
  },
  {
    slug: "mattress-cleaning",
    name: "Mattress cleaning",
    summary: "Low-moisture mattress cleaning for guest rooms, rentals and kids' beds, dry the same day.",
    body: [
      "Guest beds in a lake house or rental see a lot of different people. A low-moisture mattress cleaning lifts sweat stains, dust and odor without soaking the mattress, so it's ready for the next check-in.",
      "It pairs well with a rental turnover or a seasonal clean, when the bedroom carpet is being done anyway.",
    ],
    faqs: [
      {
        q: "Should I use mattress protectors in a rental?",
        a: "Yes. A waterproof protector is the best way to keep a rental mattress clean between deep cleanings. Wash it with the sheets.",
      },
    ],
  },
]

export const areas: Area[] = [
  {
    slug: "historic-downtown-montgomery",
    name: "Historic downtown Montgomery",
    kind: "neighborhood",
    summary: "Carpet, rug and upholstery cleaning for homes and businesses around historic downtown Montgomery, TX.",
    intro: [
      "Downtown Montgomery is one of the oldest towns in Texas, known as the birthplace of the Texas flag, and its historic district mixes older homes with small shops and restaurants. Many of the older houses have original or refinished wood floors with area rugs, plus carpet in the bedrooms.",
      "Older homes deserve a gentle approach. Antique and hand-made rugs should be checked for dye bleed and fiber type before cleaning, and older carpet may need a lighter touch than newer synthetic carpet.",
    ],
    highlight: ["area-rug-cleaning", "carpet-cleaning", "upholstery-cleaning"],
  },
  {
    slug: "walden-on-lake-conroe",
    name: "Walden on Lake Conroe",
    kind: "neighborhood",
    summary: "Carpet and upholstery cleaning for Walden on Lake Conroe homes, condos and weekend places on the lake's west side.",
    intro: [
      "Walden on Lake Conroe is a long-established golf and lake community on a peninsula east of downtown Montgomery. It has a mix of full-time homes, weekend houses and condos, many of them with years of lake life in the carpet and cushions.",
      "Weekend owners often want the work done while they're away. If you share a door code or lockbox, the cleaning can be scheduled for a weekday and you'll get a note when it's done.",
    ],
    sections: [
      {
        heading: "Common Walden requests",
        paragraphs: [],
        list: [
          "Carpet in condos and townhomes before the summer season",
          "Couch and chair cushions with sunscreen and lake-water smell",
          "Tile and grout at the entry and on the way to the dock",
          "Turnovers for homes that are rented out",
        ],
      },
    ],
    highlight: ["lake-house-rental-cleaning", "upholstery-cleaning", "carpet-cleaning"],
    faqs: [
      {
        q: "Can the cleaning be done on a weekday while I'm in Houston?",
        a: "Often, yes. Mention it in your quote request along with how the home can be accessed, and we'll confirm the details before the day.",
      },
    ],
  },
  {
    slug: "bentwater",
    name: "Bentwater",
    kind: "neighborhood",
    summary: "Carpet, rug and upholstery cleaning for Bentwater homes on the west shore of Lake Conroe.",
    intro: [
      "Bentwater is a gated lake and golf community on the west shore of Lake Conroe, with many larger homes, golf course lots and waterfront properties. Bigger homes usually mean more rooms, more area rugs and more upholstered furniture, so it pays to bundle everything into one visit.",
      "Fine area rugs and delicate upholstery fabrics are common here. Those get checked for fiber, dye stability and cleaning code before any method is chosen.",
    ],
    sections: [
      {
        heading: "Gate access",
        paragraphs: [
          "Add the gate details or your preferred access arrangement to your quote request so the visit isn't held up at the entrance.",
        ],
      },
    ],
    highlight: ["area-rug-cleaning", "upholstery-cleaning", "carpet-cleaning"],
  },
  {
    slug: "april-sound",
    name: "April Sound",
    kind: "neighborhood",
    summary: "Carpet, couch and tile cleaning for April Sound homes, condos and rentals on Lake Conroe.",
    intro: [
      "April Sound is an established lakefront community on Lake Conroe with houses, condos and townhomes, plenty of them used as weekend places or rentals. Condo carpet tends to see heavy use in a small space, so traffic paths and entry areas wear fastest.",
      "If you rent your place out, a cleaning between seasons keeps guest photos and reviews in good shape. Owners with more than one unit can ask about a regular schedule.",
    ],
    highlight: ["lake-house-rental-cleaning", "tile-and-grout-cleaning", "upholstery-cleaning"],
  },
  {
    slug: "del-lago",
    name: "Del Lago",
    kind: "neighborhood",
    summary: "Carpet and upholstery cleaning for Del Lago condos and homes on the Lake Conroe shore near Montgomery.",
    intro: [
      "The Del Lago area is home to a lakeside resort and nearby condos and homes, many of them second homes or rentals. Condos here often have carpet in the bedrooms and tile in the living areas, with upholstered furniture that sees a new set of guests every week in season.",
      "Short gaps between bookings make timing important. Tell us the check-out and check-in times, and the cleaning will be scheduled early enough for the carpet to dry.",
    ],
    highlight: ["lake-house-rental-cleaning", "mattress-cleaning", "upholstery-cleaning"],
  },
  {
    slug: "woodforest",
    name: "Woodforest",
    kind: "neighborhood",
    summary: "Carpet, stair and pet odor cleaning for family homes in Woodforest, the master-planned community south of Montgomery.",
    intro: [
      "Woodforest is a large master-planned community south of downtown Montgomery, with a golf course, pools and lots of two-story family homes. Most of the carpet here is upstairs: bedrooms, game rooms, landings and stairs.",
      "Busy households with kids and pets usually need traffic lanes and pet spots handled. Homes from the earlier phases are often at the age where the carpet needs a real deep clean, not just a refresh.",
    ],
    highlight: ["carpet-cleaning", "pet-odor-removal", "carpet-stain-removal"],
  },
]

export const guides: Guide[] = [
  {
    slug: "carpet-cleaning-cost-montgomery",
    title: "What carpet cleaning costs in Montgomery and around Lake Conroe",
    summary: "How carpet cleaning is priced for Montgomery homes, lake houses and rentals, what adds to it, and how to get a firm number.",
    updated: "2026-11-25",
    intro: [
      "There's no single price for carpet cleaning in Montgomery. A full-time home in Woodforest, a lakefront condo in April Sound and a rental turnover in Walden are priced differently, mostly by how many rooms, whether there are stairs, how much spot and odor work is needed, and how tight the schedule is.",
    ],
    sections: [
      {
        heading: "Advertised prices nearby",
        requires: "priceRanges",
        paragraphs: [
          "In November 2026 we checked 54 carpet cleaning websites serving Montgomery, Conroe, The Woodlands, Magnolia and nearby towns. Only 13 posted a carpet price. Three rooms were advertised for $88 to $225, most were near $140, and a minimum around $150 was common.",
          "That's what other companies advertise, not a quote. Low advertised prices often leave out stairs, pre-treatment or larger rooms, and some areas add a trip charge.",
        ],
      },
      {
        heading: "That works out per room to",
        requires: "priceRanges",
        paragraphs: [
          "Dividing those three-room specials by three gives about $30 to $75 a room, with most around $47. It's arithmetic on other companies' posted prices, not a quote, and most have a minimum for small jobs.",
        ],
      },
      {
        heading: "What sets the price",
        paragraphs: [],
        list: [
          "Rooms: a standard room counts as one, a large open area may count as two",
          "Stairs: priced per staircase or per step",
          "Spot, clay and pet odor treatment",
          "Furniture that needs moving",
          "Couches, rugs, tile and mattresses added to the visit",
        ],
      },
      {
        heading: "Per room or per square foot",
        paragraphs: [
          "Homes are usually quoted by the room. Lake condos, rental units and large open living areas are sometimes quoted by the square foot instead, which makes a big great room easier to price fairly.",
          "Either way, ask what counts as a room and whether hallways, closets and landings are included. A 14 by 20 living room is 280 square feet and may count as more than one room on a per-room quote.",
        ],
      },
      {
        heading: "Rentals and lake houses",
        paragraphs: [
          "A same-day turnover between guests can cost more than a flexible booking, because the schedule is fixed. Booking turnovers ahead for the season, or bundling several units on one day, usually brings the price down.",
        ],
      },
      {
        heading: "Cheap specials and what they leave out",
        paragraphs: [
          "A low coupon price is built to get a crew to your door. It usually covers a set number of small rooms with a basic rinse. Hallways, stairs, pre-treatment, pet spots and protector are often extra, and a home out by the lake may carry a trip charge.",
          "That doesn't make a special a bad deal. It just means the number to compare is the total for your home, not the price on the flyer.",
        ],
      },
      {
        heading: "Getting a firm number",
        paragraphs: [
          "Send the quote form with your rooms, stairs, spots and any couches or rugs, plus photos if you can. You'll get one price for the whole job before anyone drives out, and nothing is booked until you agree to it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is there a trip charge for the lake communities?",
        a: "Ask when you get your quote. Any charge for distance or gate access should be included in the price you're given, not added later.",
      },
      {
        q: "Do rental turnovers cost more?",
        a: "Sometimes, if the window between guests is short. Booking a regular schedule for the season usually costs less per visit.",
      },
    ],
  },
  {
    slug: "get-dog-hair-out-of-carpet",
    title: "How to get dog hair out of carpet",
    summary: "Step-by-step ways to get embedded dog hair out of carpet with a rubber broom, a squeegee and the right vacuum settings, plus how to keep it down.",
    updated: "2026-11-25",
    intro: [
      "Dog hair weaves itself into carpet, especially short, wiry hair from labs, heelers and shepherds. A regular pass with the vacuum picks up what's on top and leaves the rest. Around Lake Montgomery, where dogs go from the water to the couch to the bedroom carpet, it builds up fast.",
      "Here's what actually gets it out, using things most homes already have.",
    ],
    sections: [
      {
        heading: "Getting embedded dog hair out",
        howTo: true,
        paragraphs: [
          "You need a rubber broom or a window squeegee, a spray bottle of water and a vacuum with a brush roll.",
        ],
        list: [
          "Lightly mist one section of carpet with water. Don't soak it.",
          "Pull a rubber broom or squeegee toward you in short, firm strokes. Hair will roll up into clumps.",
          "Pick up the clumps by hand or with a dustpan.",
          "Set the vacuum to the right height for your carpet and turn the brush roll on.",
          "Vacuum slowly, first in one direction and then crosswise.",
          "Empty the bin or bag and clean hair off the brush roll when you're done.",
        ],
      },
      {
        heading: "Other tools that work",
        paragraphs: [],
        list: [
          "Rubber gloves: run a damp gloved hand over stairs and edges",
          "A pumice-style pet hair stone for small areas and car mats",
          "A lint roller for stair treads and furniture edges",
          "A vacuum with a tangle-free brush roll if you have long-haired dogs",
        ],
      },
      {
        heading: "Keeping dog hair down",
        paragraphs: [
          "Brush your dog outside a few times a week, more during spring and fall shedding. A washable rug or towel by the back door catches wet, sandy fur before it hits the carpet. Vacuum the dog's favorite spots every day or two, before the hair gets worked in.",
        ],
      },
      {
        heading: "When a cleaning helps",
        paragraphs: [
          "A professional cleaning loosens hair, dander and the oils from your dog's coat that make carpet look dull and smell like dog. It works best right after a thorough vacuum, and it's a good time to treat any urine spots too.",
        ],
        link: { href: "/services/pet-odor-removal", text: "See pet odor removal" },
      },
    ],
    faqs: [
      {
        q: "What is the best way to get dog hair out of carpet?",
        a: "A rubber broom or squeegee pulls embedded hair into clumps better than a vacuum alone. Follow it with slow vacuuming in two directions.",
      },
      {
        q: "Does carpet cleaning remove dog hair?",
        a: "It removes some, but hair should be vacuumed out first. Wet hair is harder to pull from carpet, so a good vacuum beforehand makes the cleaning work better.",
      },
      {
        q: "Why won't my vacuum pick up dog hair?",
        a: "Short, stiff hair works into the carpet weave. Check the vacuum height setting, clear hair from the brush roll, and rake the carpet with a rubber broom first.",
      },
    ],
  },
  {
    slug: "is-professional-carpet-cleaning-worth-it",
    title: "Is professional carpet cleaning worth it?",
    summary: "When a professional carpet cleaning is worth paying for, when renting a machine is enough, and how often Montgomery homes need one.",
    updated: "2026-11-25",
    intro: [
      "Carpet is one of the biggest surfaces in a house and one of the most expensive to replace. Whether a professional cleaning is worth it depends on what you're trying to fix and how long you want the carpet to last.",
      "Here's an honest look at when it pays off and when it doesn't.",
    ],
    sections: [
      {
        heading: "When it's worth paying for",
        paragraphs: [],
        list: [
          "Traffic lanes that have turned gray and don't vacuum out",
          "Pet urine spots or an odor you can smell when you walk in",
          "Before selling, listing or moving out",
          "Lake houses and rentals between seasons or guests",
          "Carpet under warranty, which often requires professional cleaning",
          "Allergies, when dust and dander build up in the carpet",
        ],
      },
      {
        heading: "When a rental or DIY is enough",
        paragraphs: [
          "A rented machine can handle a light refresh in a low-traffic room or a fresh spill. The catch is suction. Rental units leave more water and soap in the carpet, so it dries slowly and can get dirty again faster. Use less soap than the bottle says and rinse with plain water.",
        ],
      },
      {
        heading: "How often to clean",
        paragraphs: [
          "Most carpet makers suggest a professional cleaning every 12 to 18 months. Homes with pets, small kids or a lot of lake traffic usually do better every 6 to 12 months. Vacuuming twice a week does more to keep carpet looking good than anything else.",
        ],
      },
      {
        heading: "Cleaning versus replacing",
        paragraphs: [
          "If carpet is worn through, has seams coming apart, or the pad is soaked with urine in many places, cleaning won't make it new. If the fibers are intact and the problem is dirt or spots, cleaning usually costs far less than replacing and can add years.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does professional carpet cleaning really make a difference?",
        a: "Usually yes. Professional machines have more heat and suction than rental units, so they pull out more soil and leave less residue behind.",
      },
      {
        q: "How often should carpet be professionally cleaned?",
        a: "About once a year for most homes, and every 6 to 12 months with pets, kids or heavy traffic.",
      },
      {
        q: "Can carpet cleaning make carpet worse?",
        a: "It can if too much soap is left behind or the carpet is overwet. Ask how the cleaner rinses and how long drying will take.",
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
