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
      link: { href: "/guides/remove-furniture-dents-from-carpet", text: "How to remove furniture dents from carpet" },
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
    {
      heading: "Before you book pet urine treatment",
      paragraphs: [
        "Ask any company these before they come out.",
      ],
      list: [
        "Do you use a UV light to find spots I can't see?",
        "Is the product an enzyme or oxidizer that breaks urine down, or a deodorizer?",
        "Do you treat the pad when urine has soaked through?",
        "What if a spot wicks back up as the carpet dries?",
        "How is pet treatment priced?",
        "Does your special include pet treatment?",
      ],
      link: { href: "/guides/questions-to-ask-a-carpet-cleaner", text: "Questions to ask any carpet cleaner" },
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
        heading: "Per room, roughly",
        requires: "priceRanges",
        paragraphs: [
          "Those three-room prices work out to roughly $30 to $75 per room, most near $47, before stairs and extras. That's our arithmetic on other companies' posted specials, not a quote, and a minimum charge usually applies.",
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
        heading: "Per room or per square foot",
        paragraphs: [
          "Willis cleaners mostly quote by the room. Some quote by the square foot, especially for rentals, shops and large open rooms. A square-foot price is easier to compare across quotes; a room price is easier to understand at a glance.",
          "If you get one of each, measure. A 12 by 12 bedroom is 144 square feet. Rooms over about 300 square feet are often counted as two.",
        ],
      },
      {
        heading: "Questions to ask any cleaner",
        link: { href: "/guides/questions-to-ask-a-carpet-cleaner", text: "More questions to ask before you book" },
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
  {
    slug: "remove-furniture-dents-from-carpet",
    title: "How to remove furniture dents from carpet",
    summary: "Step-by-step: lift furniture dents out of carpet with ice cubes, a hair dryer or a steam iron, and when a dent won't come back.",
    updated: "2026-11-25",
    intro: [
      "When you move a couch or bed in Willis, the carpet underneath often has deep square dents. They aren't permanent. The fibers have been crushed flat, and water and a little heat help them stand back up.",
      "Here's the simple method, plus a faster one for dents that won't budge.",
    ],
    sections: [
      {
        heading: "Lifting dents with ice",
        howTo: true,
        paragraphs: [
          "This is the easiest method and works on most synthetic carpet. You need ice cubes, a towel and a spoon.",
        ],
        list: [
          "Place one ice cube in each dent, or a few for large dents.",
          "Let the ice melt completely, usually a few hours or overnight.",
          "Blot up extra water with a towel.",
          "Use the edge of a spoon or your fingertips to lift the fibers upward.",
          "Let the carpet dry, then vacuum the spot.",
        ],
      },
      {
        heading: "If the dent is still there",
        paragraphs: [
          "Mist the dent with water, then dry it with a hair dryer on medium heat while brushing the fibers up with your fingers. Another option is to hold a steam iron an inch above a damp cloth laid over the dent. Never set the iron on the carpet, and test a hidden spot first, especially on wool.",
        ],
      },
      {
        heading: "When dents don't come back",
        paragraphs: [
          "Carpet that sat under heavy furniture for many years, or carpet that is already worn, may stay flat. A professional cleaning can help because hot water and grooming lift the pile, but it can't fix fibers that have broken down.",
        ],
      },
      {
        heading: "Preventing new dents",
        paragraphs: [
          "Use furniture cups or coasters under legs to spread the weight, and shift heavy pieces an inch or two every few months.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does the ice cube trick really work on carpet dents?",
        a: "Yes, for most dents. Water swells the crushed fibers and lets them stand back up as they dry. Fluff them by hand to finish.",
      },
      {
        q: "Will carpet cleaning remove furniture dents?",
        a: "It often helps. Hot water extraction and grooming the pile lift most dents, though very old dents in worn carpet may stay.",
      },
      {
        q: "Can I use a hair dryer on carpet dents?",
        a: "Yes. Dampen the dent and dry it on medium heat while brushing the fibers up. Keep it moving so the fibers don't overheat.",
      },
    ],
  },
  {
    slug: "questions-to-ask-a-carpet-cleaner",
    title: "Questions to ask a carpet cleaner before you book",
    summary: "The questions to ask any carpet cleaner in Willis before booking: price, method, drying time, pet treatment, insurance and what happens if a spot returns.",
    updated: "2026-11-25",
    intro: [
      "Most bad carpet cleaning experiences come down to a surprise: a price that grew at the door, carpet that stayed wet for two days, or a pet smell that came back a week later. A few questions before you book prevent nearly all of them.",
      "Use these with anyone you're thinking about hiring, including us.",
    ],
    sections: [
      {
        heading: "About the price",
        paragraphs: [],
        list: [
          "Can you give me one total for the whole job, in writing, before you start?",
          "Is pre-treatment included, or extra?",
          "What counts as a room, and are hallways, closets and stairs included?",
          "Is there a minimum charge or a trip charge for my area?",
          "Do you move furniture, and does that cost extra?",
        ],
      },
      {
        heading: "About the method and drying",
        paragraphs: [],
        list: [
          "What cleaning method do you use?",
          "Do you rinse out the cleaning solution?",
          "How long will the carpet take to dry?",
          "Is the method approved by my carpet's warranty?",
        ],
      },
      {
        heading: "About pets and stains",
        paragraphs: [],
        list: [
          "How do you find urine spots I can't see?",
          "Do you treat urine at the pad, or only the surface?",
          "Which stains might not come out, and will you tell me before you start?",
          "If a spot comes back after drying, what is your policy?",
        ],
      },
      {
        heading: "About the company",
        paragraphs: [],
        list: [
          "Are you insured if something is damaged?",
          "Will the person who comes out be the one doing the work?",
          "Can I see recent reviews from people in my area?",
        ],
      },
      {
        heading: "Asking us",
        paragraphs: [
          "Send these with your quote request if you like. You'll get the answers in writing along with your price, before anything is booked.",
        ],
        link: { href: "/services/carpet-cleaning", text: "See our carpet cleaning service" },
      },
    ],
    faqs: [
      {
        q: "What should I ask a carpet cleaner before hiring?",
        a: "Ask for a written total, what's included, the cleaning method and drying time, how pet urine is treated, whether they're insured, and what happens if a spot comes back.",
      },
      {
        q: "Should a carpet cleaner give a price over the phone?",
        a: "A cleaner should be able to give a firm total once they know your rooms, stairs and any spots or pet areas. Photos make that easier.",
      },
      {
        q: "Should I tip a carpet cleaner?",
        a: "It isn't expected, but many people tip for a hard job like heavy furniture or a lot of pet treatment.",
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
