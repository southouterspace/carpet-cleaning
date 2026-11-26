import type { Area, Guide, Service } from "@carpet/seo"

/**
 * Longer Montgomery plumbing copy: extra services, area pages and guides.
 * Written for this site only. No claims about crew size, years in business,
 * reviews, prices or response times until a renter confirms them.
 */

export const moreServices: Service[] = [
  {
    slug: "outdoor-plumbing",
    name: "Outdoor kitchens, docks and hose bibs",
    summary: "Water and gas lines for outdoor kitchens, dock and boat house water, frost-proof hose bibs and shut-offs.",
    answer:
      "Outdoor lines are where lake homes leak and freeze. Put a separate shut-off on every line that runs to a dock, outdoor kitchen or shop, use frost-proof hose bibs, and drain exposed lines before a hard freeze.",
    body: [
      "Gas lines for outdoor kitchens and fire features are sized for the appliances, pressure-tested and permitted where required.",
    ],
  },
]

export const withMoreContent = (core: Service[]): Service[] => [...core, ...moreServices]

export const areas: Area[] = [
  {
    slug: "historic-downtown-montgomery",
    name: "Historic downtown Montgomery",
    kind: "neighborhood",
    summary: "Plumbing for older homes and shops in historic Montgomery: aging drains, water heaters and fixture repairs.",
    answer:
      "Historic Montgomery has some of the oldest buildings in the county, including homes and shops converted from houses. Expect older drain lines, water heaters in tight spaces and fixture work, and pick \"Business\" on the form for a shop.",
    intro: ["Montgomery's historic district around Liberty and College streets has buildings dating back to the 1800s, many now shops, offices and restaurants."],
    highlight: ["drain-sewer", "water-heaters", "leak-repair"],
  },
  {
    slug: "walden-on-lake-conroe",
    name: "Walden on Lake Conroe",
    kind: "neighborhood",
    summary: "Plumbing for Walden homes on Lake Conroe: weekend-house leaks, water heaters, outdoor lines and freeze prep.",
    answer:
      "Walden's homes range from older lake houses to newer builds, with many weekend and second homes. Shut the main and set the water heater to vacation when you leave, and give outdoor lines their own shut-offs.",
    intro: ["Walden on Lake Conroe is an established lake community on the west side of the lake, off Highway 105."],
    highlight: ["leak-repair", "outdoor-plumbing", "water-heaters"],
  },
  {
    slug: "bentwater",
    name: "Bentwater",
    kind: "neighborhood",
    summary: "Plumbing for Bentwater's larger lake homes: multiple water heaters, tankless units, grinder pumps and outdoor kitchens.",
    answer:
      "Bentwater has many large homes with several bathrooms, multiple water heaters or tankless units, and outdoor kitchens. Lakefront lots may use grinder pumps. Note which water heater or which part of the house in your request.",
    intro: ["Bentwater is a large lake and golf community on the west side of Lake Conroe."],
    highlight: ["water-heaters", "drain-sewer", "outdoor-plumbing"],
  },
  {
    slug: "april-sound",
    name: "April Sound",
    kind: "neighborhood",
    summary: "Plumbing for April Sound homes and condos: aging supply lines, water heaters and leaks between units.",
    answer:
      "Many April Sound homes and condos date from the 1970s and 1980s, so original supply lines, polybutylene and older water heaters are common. In condos, a leak can come from the unit above; note it in the request.",
    intro: ["April Sound is one of the older lake communities on the west side of Lake Conroe, with homes and condos from the 1970s on."],
    highlight: ["leak-repair", "water-heaters", "emergency-plumbing"],
  },
]

export const guides: Guide[] = [
  {
    slug: "lake-house-plumbing-checklist",
    title: "Lake house plumbing checklist for Montgomery owners",
    summary: "What to do when you leave a lake house, before a freeze, and when you come back, so a leak doesn't run all week.",
    updated: "2026-11-26",
    answer:
      "When you leave: shut the main, set the water heater to vacation, close the washer valves and check the water heater pan. Before a freeze: drain and cover outdoor lines. When you arrive: open the main slowly and walk the house for drips and stains. A smart leak sensor under the water heater and sinks adds an early warning.",
    intro: ["Lake homes that sit empty for days need a routine. This one takes five minutes."],
    sections: [
      {
        heading: "When you leave",
        howTo: true,
        paragraphs: [],
        list: [
          "Shut off the main water valve",
          "Set the water heater to Vacation or Pilot",
          "Close the washing machine's hot and cold valves",
          "Look in the water heater pan for water or rust",
          "Leave irrigation on its own valve if it has one",
        ],
      },
      {
        heading: "When you come back",
        paragraphs: [],
        list: [
          "Open the main slowly and listen for running water",
          "Check under sinks and around toilets",
          "Look at ceilings under bathrooms and the attic water heater",
        ],
      },
    ],
  },
  {
    slug: "grinder-pump-alarm",
    title: "Grinder pump alarm going off? What to do",
    summary: "What a grinder pump or lift station alarm means at a lakefront home, and the first steps to take.",
    updated: "2026-11-26",
    answer:
      "The alarm means wastewater in the pump's tank is higher than it should be. Stop using water right away, check that the pump's breaker is on, and press the alarm's silence button. If it doesn't clear within a short time, or there's no power, call. Don't open the tank.",
    intro: ["Lakefront homes that sit below the street often send wastewater uphill with a grinder pump in a buried tank."],
    sections: [
      {
        heading: "First steps",
        howTo: true,
        paragraphs: [],
        list: [
          "Stop running water, flushing, laundry and the dishwasher",
          "Silence the alarm (it keeps the light on)",
          "Check the pump's breaker in the main panel and any breaker at the alarm box",
          "If the power was out, give the pump time to catch up after power returns",
          "If the alarm stays on, request a plumber or your district's pump service",
        ],
      },
    ],
  },
]
