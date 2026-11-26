import type { Area, Guide, Service } from "@carpet/seo"

/**
 * Longer Woodlands plumbing copy: extra services, village pages and guides.
 * Written for this site only. No claims about crew size, years in business,
 * reviews, prices or response times until a renter confirms them.
 */

export const moreServices: Service[] = [
  {
    slug: "water-softeners-filtration",
    name: "Water softeners and filtration",
    summary: "Softener and whole-house filter installs and repairs, plus reverse osmosis at the kitchen sink.",
    answer:
      "A water softener removes the calcium and magnesium that leave scale on fixtures and inside water heaters. A whole-house carbon filter targets chlorine or chloramine taste and smell. They solve different problems, and many homes have both. Get your water tested, or read your utility's water quality report, before buying either.",
    body: [
      "Water in The Woodlands comes from local utility districts, and hardness and treatment vary. Your district's annual water quality report lists what's in it.",
      "Softeners need a drain, a loop or bypass in the plumbing, and an outlet. Many Woodlands homes were built with a softener loop in the garage, which makes an install simple.",
    ],
  },
  {
    slug: "gas-lines",
    name: "Gas lines",
    summary: "Gas leak repair and new lines for ranges, outdoor kitchens, fire pits, pool heaters and tankless water heaters.",
    answer:
      "If you smell gas, leave the house and call 911 or CenterPoint Energy from outside. New gas lines for outdoor kitchens, pool heaters and tankless water heaters are sized for the appliance, pressure-tested, permitted and inspected.",
    body: [
      "Converting to a tankless water heater often needs a larger gas line than the old tank used. That's part of the price to ask about.",
    ],
  },
]

export const withMoreContent = (core: Service[]): Service[] => [...core, ...moreServices]

export const areas: Area[] = [
  {
    slug: "grogans-mill",
    name: "Grogan's Mill",
    kind: "neighborhood",
    summary: "Plumbing for Grogan's Mill, The Woodlands' first village: original pipes, slab leaks, repipes and root-filled sewer lines.",
    answer:
      "Grogan's Mill homes date back to the mid-1970s, the start of The Woodlands. Expect original copper or early polybutylene under slabs, cast iron drains, and roots from mature trees in the sewer line. Ask whether a reroute makes more sense than another spot repair.",
    intro: [
      "Grogan's Mill was the first village in The Woodlands, opened in 1974, around the Woodlands Resort and the original golf courses.",
      "With homes approaching 50 years old, plumbing jobs here are often about replacing what's original.",
    ],
    highlight: ["slab-leak-repair", "polybutylene-repiping", "drain-sewer"],
  },
  {
    slug: "cochrans-crossing",
    name: "Cochran's Crossing",
    kind: "neighborhood",
    summary: "Plumbing for Cochran's Crossing homes: polybutylene, attic water heaters and slab leaks in 1980s houses.",
    answer:
      "Many Cochran's Crossing homes were built in the 1980s, squarely in the polybutylene era, and many have attic water heaters. Check under sinks for gray plastic pipe and look at the water heater's pan for water or rust.",
    intro: [
      "Cochran's Crossing sits north of Woodlands Parkway, with homes mostly from the 1980s and early 1990s.",
    ],
    highlight: ["polybutylene-repiping", "water-heaters", "slab-leak-repair"],
  },
  {
    slug: "alden-bridge",
    name: "Alden Bridge",
    kind: "neighborhood",
    summary: "Plumbing for Alden Bridge homes from the 1990s: water heater replacements, tankless conversions and fixtures.",
    answer:
      "Alden Bridge homes mostly date from the 1990s, so original water heaters are long gone and many second ones are due. Tankless conversions are common here, and they often need a bigger gas line. Earlier homes in the village may still have polybutylene.",
    intro: [
      "Alden Bridge, on the north side of The Woodlands along Research Forest and Kuykendahl, was built out mostly in the 1990s.",
    ],
    highlight: ["water-heaters", "gas-lines", "water-softeners-filtration"],
  },
  {
    slug: "creekside-park",
    name: "Creekside Park",
    kind: "neighborhood",
    summary: "Plumbing for Creekside Park homes on the Harris County side: newer builds, softeners, tankless units and drains.",
    answer:
      "Creekside Park is The Woodlands' newest village, south of Spring Creek in Harris County, so homes have modern PEX and PVC. Common calls are clogged drains, water heater and tankless service, softener installs, and warranty questions on newer homes.",
    intro: [
      "Creekside Park sits south of Spring Creek, in ZIP 77389, and was built from the late 2000s on.",
    ],
    highlight: ["water-softeners-filtration", "water-heaters", "drain-sewer"],
  },
]

export const guides: Guide[] = [
  {
    slug: "polybutylene-pipe-the-woodlands",
    title: "Polybutylene pipe in The Woodlands: how to tell, and what to do",
    summary: "How to spot polybutylene in a Woodlands home, why it fails, and what replacing it involves.",
    updated: "2026-11-26",
    answer:
      "Polybutylene is gray plastic water pipe used from the late 1970s to the mid-1990s. Look at the water heater, under sinks and where the main enters; \"PB2110\" stamped on the pipe confirms it. It tends to fail at fittings without warning, so most owners replace it with PEX in a planned repipe instead of waiting for a leak.",
    intro: [
      "Many homes in Grogan's Mill, Panther Creek, Cochran's Crossing and Indian Springs were built while polybutylene was common.",
    ],
    sections: [
      {
        heading: "How to check",
        howTo: true,
        paragraphs: [],
        list: [
          "Look at the pipes going into the top of the water heater",
          "Look under the kitchen and bathroom sinks, behind the shut-off valves",
          "Check where the main line enters, often in the garage or at the slab edge",
          "Gray, flexible plastic pipe, often with copper or plastic crimp rings, is likely polybutylene",
        ],
      },
      {
        heading: "Why replace it",
        paragraphs: [
          "Polybutylene and its fittings degrade with age and the disinfectants in tap water, and failures can be sudden. Some insurers ask about it, and buyers' inspectors flag it.",
        ],
      },
      {
        heading: "What a repipe looks like",
        paragraphs: [
          "New PEX lines run through the attic and down inside walls to each fixture. Most homes are done in a few days with water back on each night, then drywall is patched.",
        ],
      },
    ],
  },
  {
    slug: "tankless-water-heater-worth-it",
    title: "Is a tankless water heater worth it in The Woodlands?",
    summary: "What changes when you switch from a tank to tankless: gas lines, venting, descaling and hot water delivery.",
    updated: "2026-11-26",
    answer:
      "Tankless makes the most sense for a household that runs out of hot water, wants the attic or garage space, and plans to stay for years. It costs more up front, usually needs a bigger gas line and new venting, and needs descaling about once a year in hard water. A tank is simpler and cheaper to replace.",
    intro: [
      "Many Woodlands homes have gas water heaters in the attic or garage, which makes them good candidates for tankless, with a few catches.",
    ],
    sections: [
      {
        heading: "What to ask before switching",
        paragraphs: [],
        list: [
          "Is my gas line big enough, or does it need upsizing?",
          "Where will it vent, and does it need a new condensate drain?",
          "What flow rate do I need for the showers that run at once?",
          "Will you install isolation valves for descaling?",
        ],
      },
    ],
  },
  {
    slug: "leaving-town-plumbing-checklist",
    title: "Leaving town? A plumbing checklist for Woodlands homes",
    summary: "What to turn off before a trip so a small leak doesn't become a ceiling repair.",
    updated: "2026-11-26",
    answer:
      "Turn off the main water valve, set the water heater to vacation or pilot, shut the washer's supply valves, and leave the irrigation system on its own valve if it has one. Ask a neighbor to check the house if a freeze is forecast.",
    intro: ["Attic water heaters and supply lines are common in The Woodlands, and a leak with no one home goes straight into the ceilings."],
    sections: [
      {
        heading: "Before you leave",
        howTo: true,
        paragraphs: [],
        list: [
          "Shut off the main water valve",
          "Set the water heater to Vacation or Pilot",
          "Close the washing machine's hot and cold valves",
          "Check the water heater pan for water or rust",
          "If a freeze is coming, open cabinet doors on outside walls and drip a faucet instead of shutting the main",
        ],
      },
    ],
  },
]
