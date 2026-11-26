import type { Area, Guide, Service } from "@carpet/seo"

/**
 * Longer Conroe AC copy: extra services, area pages and guides. Written for
 * this site only. No claims about crew size, years in business, reviews,
 * prices or response times until a renter confirms them.
 */

export const moreServices: Service[] = [
  {
    slug: "ductwork",
    name: "Attic ductwork repair and sealing",
    summary: "Leaky, crushed or disconnected attic ducts found and repaired, so cooled air reaches the rooms.",
    answer:
      "Ducts in a Conroe attic sit in air that can pass 130 degrees in summer, so a leak or a disconnected run dumps cold air into the attic. Signs are one room that never cools, high bills, and dusty vents. Sealing and repairing ducts is often cheaper than a bigger AC.",
    body: [
      "Flex duct sags, gets crushed by storage or people walking the attic, and pulls loose from boxes over time. A technician checks airflow at each vent and the duct runs in the attic.",
    ],
  },
  {
    slug: "thermostats",
    name: "Thermostats and zoning",
    summary: "Programmable and smart thermostats installed and wired correctly, including heat pumps and two-story zoning.",
    answer:
      "Most smart thermostats need a C (common) wire; older systems may not have one run. Heat pumps need a thermostat set up for heat pump control, or the backup heat runs far more than it should.",
    body: [
      "In two-story homes, upstairs is usually hotter. A zoning system with dampers or a second system is the real fix; a thermostat alone can't move more air upstairs.",
    ],
  },
]

export const withMoreContent = (core: Service[]): Service[] => [...core, ...moreServices]

export const areas: Area[] = [
  {
    slug: "downtown-conroe",
    name: "Downtown Conroe",
    kind: "neighborhood",
    summary: "AC service for older homes near downtown Conroe: aging systems, R-22 units, small closets and window-unit conversions.",
    answer:
      "Older homes near downtown Conroe often have systems squeezed into small closets or attics never designed for central air, and some still run R-22. Expect questions about duct size and returns as much as the unit itself.",
    intro: ["The older streets around the courthouse square have homes from many decades, some with central air added long after they were built."],
    highlight: ["ac-replacement", "ductwork", "ac-repair"],
  },
  {
    slug: "river-plantation",
    name: "River Plantation",
    kind: "neighborhood",
    summary: "AC repair and replacement in River Plantation's 1970s and 1980s homes: older systems, ductwork and heat pumps.",
    answer:
      "River Plantation's homes are mostly from the 1970s and 1980s, so many are on their third or fourth AC and still have original ductwork. When replacing the system, have the ducts checked too.",
    intro: ["River Plantation sits south of downtown Conroe along the West Fork of the San Jacinto River, with mature trees that shade some homes and drop leaves into outdoor units."],
    highlight: ["ac-replacement", "ductwork", "ac-maintenance"],
  },
  {
    slug: "artavia",
    name: "Artavia",
    kind: "neighborhood",
    summary: "AC service for Artavia's newer homes: tune-ups, drain line clogs, thermostats and warranty questions.",
    answer:
      "Artavia homes are recent builds with newer, efficient systems, so most calls are drain line clogs, thermostat setup and tune-ups. Keep tune-up records; many manufacturer warranties expect regular maintenance.",
    intro: ["Artavia is a newer community off Highway 242 on the east side of Conroe."],
    highlight: ["ac-maintenance", "thermostats", "ac-repair"],
  },
  {
    slug: "harpers-preserve",
    name: "Harper's Preserve",
    kind: "neighborhood",
    summary: "AC service in Harper's Preserve: two-story cooling, tune-ups, drain clogs and thermostat zoning.",
    answer:
      "Many Harper's Preserve homes are two stories with two systems or one zoned system. An upstairs that won't cool is often airflow or zoning, not a failing unit, so mention which floor is the problem.",
    intro: ["Harper's Preserve sits along Highway 242 on the south side of Conroe, near The Woodlands."],
    highlight: ["thermostats", "ac-repair", "ac-maintenance"],
  },
]

export const guides: Guide[] = [
  {
    slug: "ac-not-cooling-checklist",
    title: "AC not cooling? Six checks before you call",
    summary: "Simple things to check when your AC stops cooling, and the signs that mean turn it off and call.",
    updated: "2026-11-26",
    answer:
      "Check that the thermostat is on Cool and below room temperature, the breaker and outdoor disconnect are on, the filter is clean, the outdoor unit's fan is spinning, there's no ice on the lines, and the drain pan isn't full. If there's ice, a silent or humming outdoor unit, or a burning smell, turn it off and call.",
    intro: ["Plenty of no-cool calls turn out to be a thermostat or a tripped float switch. These checks take ten minutes."],
    sections: [
      {
        heading: "The checks",
        howTo: true,
        paragraphs: [],
        list: [
          "Thermostat on Cool, set a few degrees below the room, with fresh batteries",
          "Breaker for the AC and air handler on, and the outdoor disconnect switch on",
          "Filter clean (hold it to the light)",
          "Outdoor fan spinning and the unit not just humming",
          "No ice on the copper lines or the indoor coil",
          "Drain pan not full of water (a float switch shuts the system off when it is)",
        ],
      },
      {
        heading: "Turn it off and call if",
        paragraphs: [],
        list: ["You see ice", "The outdoor unit hums but the fan doesn't turn", "You smell burning", "The breaker trips again"],
      },
    ],
  },
  {
    slug: "repair-or-replace-ac-conroe",
    title: "Repair or replace your AC? How Conroe homeowners can decide",
    summary: "The age, refrigerant and repair history that tip the decision, and what to ask for when replacing.",
    updated: "2026-11-26",
    answer:
      "Repair a system that's under about 10 years old and needs a common part. Lean toward replacing when it's 12 to 15 or more years old and needs a compressor, coil or big refrigerant charge, runs on R-22, or has failed several summers in a row. Get a load calculation either way.",
    intro: ["The decision mostly comes down to age, refrigerant and what the next repair costs compared with the unit's remaining life."],
    sections: [
      {
        heading: "When replacing, ask for",
        paragraphs: [],
        list: [
          "A Manual J load calculation, not just the old unit's size",
          "A matched outdoor unit and indoor coil",
          "The SEER2 rating and the refrigerant it uses",
          "A duct inspection, since new equipment on leaky ducts underperforms",
          "Registration of the manufacturer's warranty",
        ],
      },
    ],
  },
  {
    slug: "r22-and-new-refrigerants",
    title: "R-22, R-410A and the new refrigerants: what it means for your AC",
    summary: "Why refrigerant matters when repairing or replacing a system, explained without the jargon.",
    updated: "2026-11-26",
    answer:
      "R-22 stopped being produced in 2020, so repairs that need it are costly. R-410A systems are still serviced, but new systems built since 2025 use lower-impact refrigerants such as R-454B or R-32. You can't swap a new outdoor unit onto an old coil with a different refrigerant.",
    intro: ["The refrigerant your system uses is printed on the outdoor unit's data plate."],
    sections: [
      {
        heading: "What it means for you",
        paragraphs: [
          "R-22 system with a big leak: usually time to replace. R-410A system that's working: keep maintaining it. Replacing anything: expect the new system to use a new refrigerant, with matched indoor and outdoor parts.",
        ],
      },
    ],
  },
]
