import type { Area, Guide, Service } from "@carpet/seo"

/**
 * Longer Spring plumbing copy: extra services, area pages and guides.
 * Written for this site only. No claims about crew size, years in business,
 * reviews, prices or response times until a renter confirms them.
 */

export const moreServices: Service[] = [
  {
    slug: "frozen-pipes",
    name: "Frozen and burst pipe repair",
    summary: "Thawing frozen lines, repairing split pipes in attics and outside walls, and insulating exposed plumbing.",
    answer:
      "If a pipe is frozen, open the faucet it feeds and warm the pipe slowly with a hair dryer or space heater, never an open flame. If it's split, shut the main before it thaws. Insulating attic lines, hose bibs and pipes on outside walls is the cheapest way to avoid a repeat.",
    body: [
      "Freezes are rare in Spring, which is exactly why homes here aren't built for them. Winter Storm Uri in February 2021 split pipes in attics and exterior walls across the Houston area.",
    ],
  },
  {
    slug: "fixtures",
    name: "Toilets, faucets and disposals",
    summary: "Running toilets, dripping faucets, garbage disposals, shut-off valves and low water pressure.",
    answer:
      "A toilet that runs or refills on its own needs a flapper or fill valve. A dripping faucet needs a cartridge. Low pressure at one fixture is usually the aerator or cartridge; low pressure everywhere is usually the pressure regulator or the main line.",
    body: [
      "Put every small fix in the house on one request so it's one visit.",
    ],
  },
]

export const withMoreContent = (core: Service[]): Service[] => [...core, ...moreServices]

export const areas: Area[] = [
  {
    slug: "old-town-spring",
    name: "Old Town Spring",
    kind: "neighborhood",
    summary: "Plumbing for Old Town Spring's older homes and shops: aging drains, water heaters and restroom repairs.",
    answer:
      "Old Town Spring mixes older houses with shops and restaurants, so plumbing here ranges from cast iron drains and old water heaters in homes to restroom and grease-line problems in businesses. Pick \"Business\" on the form for a shop or restaurant.",
    intro: [
      "Old Town Spring is the historic center of Spring, east of I-45, with older homes on the side streets and shops and restaurants in the old town blocks.",
    ],
    highlight: ["drain-cleaning", "sewer-backups", "fixtures"],
  },
  {
    slug: "champion-forest",
    name: "Champion Forest",
    kind: "neighborhood",
    summary: "Plumbing for Champion Forest homes from the 1970s and 1980s: slab leaks, repipes, sewer lines and water heaters.",
    answer:
      "Champion Forest's homes are mostly from the 1970s and 1980s, so original supply lines and cast iron drains are near the end of their life. Slab leaks, root-filled sewer lines and polybutylene are the jobs to expect.",
    intro: [
      "Champion Forest is an established neighborhood in the Spring and Klein area, along Champion Forest Drive, with large lots and mature trees.",
    ],
    highlight: ["leak-repair", "sewer-backups", "water-heater-service"],
  },
  {
    slug: "gleannloch-farms",
    name: "Gleannloch Farms",
    kind: "neighborhood",
    summary: "Plumbing for Gleannloch Farms homes: water heaters coming due, tankless conversions, drains and fixtures.",
    answer:
      "Most Gleannloch Farms homes were built from the late 1990s through the 2000s, so many are on their second water heater and some are due for a third. Fixture wear and slow drains are common; old pipe materials mostly aren't.",
    intro: [
      "Gleannloch Farms is a master-planned community off Spring Cypress Road and the Grand Parkway, built mostly from the late 1990s on.",
    ],
    highlight: ["water-heater-service", "fixtures", "drain-cleaning"],
  },
  {
    slug: "klein",
    name: "Klein",
    kind: "neighborhood",
    summary: "Plumbing across the Klein area: leaks, water heaters, sewer lines and repairs for homes of every age.",
    answer:
      "The Klein area covers neighborhoods built over more than 40 years, so plumbing ranges from repipes in 1970s homes to fixture and water heater work in newer ones. Year built, on the form, tells the plumber a lot before they arrive.",
    intro: [
      "Klein is the large area of north Harris County around the Klein school district, between Spring, Tomball and Champion Forest.",
    ],
    highlight: ["leak-repair", "water-heater-service", "emergency-plumbing"],
  },
]

export const guides: Guide[] = [
  {
    slug: "sewer-backs-up-when-it-rains",
    title: "Why your sewer backs up when it rains in Spring, and how to stop it",
    summary: "What happens to sewer lines in heavy rain, how to tell if it's your line or the main, and what fixes it.",
    updated: "2026-11-26",
    answer:
      "In heavy rain, storm water leaks into sewer mains until they fill, and sewage comes back up the lowest drain in nearby houses. If it only happens in storms and your line is clear, a backwater valve is the fix. If it also happens on dry days, your own line has a blockage, roots or a break.",
    intro: [
      "Spring's creeks rise fast in big storms, and the sewer system feels it. Backups at the lowest drain (a downstairs shower, tub or floor drain) are the sign.",
    ],
    sections: [
      {
        heading: "When it's happening",
        howTo: true,
        paragraphs: [],
        list: [
          "Stop running water, flushing and running the washer or dishwasher",
          "Keep people and pets away from the sewage",
          "Call the utility district if neighbors are backing up too",
          "Take photos for insurance",
          "Once the rain stops, have the line cleared and inspected with a camera",
        ],
      },
      {
        heading: "Fixes",
        paragraphs: [
          "A cleanout near the house gives access to the line. A backwater valve stops reverse flow. Repairing cracked pipe keeps groundwater and roots out of your line.",
        ],
      },
    ],
    faqs: [
      { q: "Does insurance cover a sewer backup?", a: "Standard homeowners policies often exclude sewer backup unless you added a water backup endorsement, and flood insurance is separate. Check your policy before the next storm." },
    ],
  },
  {
    slug: "frozen-pipes-spring-tx",
    title: "Frozen pipes in Spring, TX: before, during and after a freeze",
    summary: "How to protect pipes in a Houston-area home before a hard freeze, and what to do if they freeze anyway.",
    updated: "2026-11-26",
    answer:
      "Before a hard freeze, cover hose bibs, disconnect hoses, open cabinet doors on outside walls and let faucets drip. If a pipe freezes, open the faucet and warm the pipe slowly, never with a flame. If one splits, shut the main and call a plumber; many breaks only leak once they thaw.",
    intro: [
      "Spring sees a hard freeze only every few years, so most homes have pipes in attics and outside walls with little insulation.",
    ],
    sections: [
      {
        heading: "Before the freeze",
        howTo: true,
        paragraphs: [],
        list: [
          "Disconnect garden hoses and cover outdoor faucets",
          "Open sink cabinets on outside walls",
          "Let a faucet on each side of the house drip",
          "Know where the main shut-off is and that you can turn it",
          "Turn off and drain the irrigation system's backflow preventer if it's exposed",
        ],
      },
      {
        heading: "After",
        paragraphs: [
          "Walk the attic, garage and outside walls as it thaws. Water stains and dripping are the first signs of a split line.",
        ],
      },
    ],
  },
]
