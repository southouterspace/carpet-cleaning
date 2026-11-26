import type { Area, Guide, Service } from "@carpet/seo"

/**
 * Longer Willis plumbing copy: extra services, area pages and guides.
 * Written for this site only, and different from the Willis carpet site's
 * wording. No claims about crew size, years in business, reviews, prices or
 * response times until a renter confirms them.
 */

export const moreServices: Service[] = [
  {
    slug: "new-home-plumbing-fixes",
    name: "New-home plumbing fixes",
    summary: "Weeping fittings, low pressure, clogged aerators and running toilets in newly built Willis homes.",
    answer:
      "New homes have their own set of plumbing problems: construction debris in aerators and valves, fittings that weep, toilets that run, and water heaters set too hot or too low. Check the builder's warranty first; anything outside it or past it is a quick repair.",
    body: [
      "Willis has grown fast along I-45, and many of its homes are only a few years old. New plumbing usually fails small, which makes it cheap to fix early.",
    ],
  },
]

export const withMoreContent = (core: Service[]): Service[] => [...core, ...moreServices]

export const areas: Area[] = [
  {
    slug: "downtown-willis",
    name: "Downtown Willis",
    kind: "neighborhood",
    summary: "Plumbing for older homes in and around downtown Willis: aging pipes, water heaters and drain lines.",
    answer:
      "Older homes near downtown Willis can have galvanized supply lines, cast iron drains and water heaters in small closets. Low pressure, rusty water and repeat clogs are the signs that pipes, not fixtures, are the problem.",
    intro: ["The older streets around downtown Willis, west of I-45, have homes from many decades alongside newer infill."],
    highlight: ["leak-repair", "drain-cleaning", "water-heater-repair"],
  },
  {
    slug: "the-woodlands-hills",
    name: "The Woodlands Hills",
    kind: "neighborhood",
    summary: "Plumbing fixes for new homes in The Woodlands Hills: warranty questions, fixtures, clogs and water heaters.",
    answer:
      "The Woodlands Hills homes are new, so most calls are fixtures, clogged drains from construction debris, and water heater settings. Check your builder's warranty for any leak first.",
    intro: ["The Woodlands Hills is a newer master-planned community on the Willis side of I-45, with homes from the late 2010s on."],
    highlight: ["new-home-plumbing-fixes", "drain-cleaning", "water-heater-repair"],
  },
  {
    slug: "lake-conroe-east-side",
    name: "Lake Conroe east side",
    kind: "neighborhood",
    summary: "Plumbing for lake homes on the Willis side of Lake Conroe: septic lines, water heaters, leaks and weekend houses.",
    answer:
      "Homes on the east side of Lake Conroe range from older cottages to newer houses, and some are on septic or private wells. Weekend houses should have the main shut when empty, and septic homes should keep pump-out dates handy.",
    intro: ["The Willis ZIP codes reach the east shore of Lake Conroe, including Seven Coves and Point Aquarius."],
    highlight: ["drain-cleaning", "emergency-plumber", "water-heater-repair"],
  },
]

export const guides: Guide[] = [
  {
    slug: "new-home-plumbing-first-year",
    title: "Plumbing in a new Willis home: what to check in the first year",
    summary: "The plumbing problems new homes tend to have, and how to catch them while the builder's warranty still applies.",
    updated: "2026-11-26",
    answer:
      "In the first year, check under every sink for drips, look at the water heater's temperature setting and pan, clean aerators that slow down, watch for toilets that run, and note any low pressure. Report problems to the builder in writing before the warranty period ends.",
    intro: ["Most new-home plumbing problems are small and show up in the first months."],
    sections: [
      {
        heading: "First-year checklist",
        howTo: true,
        paragraphs: [],
        list: [
          "Look under every sink with a flashlight for drips or water stains",
          "Unscrew and rinse faucet aerators that have slowed",
          "Listen for toilets refilling on their own",
          "Set the water heater to about 120°F",
          "Find and test the main shut-off valve",
          "Write down warranty dates and send problems to the builder in writing",
        ],
      },
    ],
  },
  {
    slug: "septic-or-sewer-willis",
    title: "Septic or sewer? What Willis homeowners should know about their drains",
    summary: "How to tell whether your home is on septic or sewer, and what that changes when drains back up.",
    updated: "2026-11-26",
    answer:
      "If you pay a sewer charge on your water bill, you're on city or district sewer. If not, and there's a tank lid or drain field in the yard, you're on septic. On septic, slow drains everywhere often mean the tank needs pumping; on sewer, they mean a clog in your main line or the main.",
    intro: ["Willis has city sewer in town, utility-district sewer in newer subdivisions, and septic in much of the country around it."],
    sections: [
      {
        heading: "Who handles what",
        paragraphs: [],
        list: [
          "Pipes inside the house and the line to the tank or sewer tap: plumber",
          "Pumping the septic tank and drain field problems: septic company",
          "Sewer main in the street: the city or utility district",
        ],
      },
    ],
  },
]
