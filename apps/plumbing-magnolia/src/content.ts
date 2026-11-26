import type { Area, Guide, Service } from "@carpet/seo"

/**
 * Longer Magnolia plumbing copy: extra services, area pages and guides.
 * Written for this site only. No claims about crew size, years in business,
 * reviews, prices or response times until a renter confirms them.
 */

export const moreServices: Service[] = [
  {
    slug: "emergency-plumbing",
    name: "Emergency plumbing",
    summary: "Burst pipes, leaking water heaters, sewage backups and broken yard lines in Magnolia homes.",
    answer:
      "Stop the water first: the main valve on city or MUD water, or the well pump's breaker on a well. Then turn off the water heater and send the request marked Emergency with a photo.",
    body: [
      "On a well, shutting off the pump stops the water but also drains the pressure tank, so you'll have no water until it's fixed. That's expected.",
    ],
  },
]

export const withMoreContent = (core: Service[]): Service[] => [...core, ...moreServices]

export const areas: Area[] = [
  {
    slug: "audubon",
    name: "Audubon",
    kind: "neighborhood",
    summary: "Plumbing for Audubon's new homes: water heaters, softeners, fixture fixes and builder-warranty questions.",
    answer:
      "Audubon homes are new builds on utility-district water and sewer, so plumbing calls are mostly fixtures, clogged drains, water heater settings and softener or filter installs. Check the builder's warranty for any leak in the first years.",
    intro: ["Audubon is a newer master-planned community in Magnolia, with homes built in the 2020s."],
    highlight: ["water-treatment", "water-heaters", "drains-septic"],
  },
  {
    slug: "high-meadow-ranch",
    name: "High Meadow Ranch",
    kind: "neighborhood",
    summary: "Plumbing for High Meadow Ranch homes on larger lots: water heaters, leaks, softeners and drains.",
    answer:
      "High Meadow Ranch has larger homes on bigger lots, so long yard lines, outdoor kitchens and multiple water heaters are common. A water heater that's 10 or more years old in a home this age is worth checking before it leaks.",
    intro: ["High Meadow Ranch is a Magnolia community with homes on larger lots, built from the 2000s on."],
    highlight: ["water-heaters", "leak-repair", "water-treatment"],
  },
  {
    slug: "lake-windcrest",
    name: "Lake Windcrest",
    kind: "neighborhood",
    summary: "Plumbing for Lake Windcrest homes: water heaters, leaks, drains and the occasional weekend-house surprise.",
    answer:
      "Lake Windcrest homes range in age, with many from the 1980s and 1990s, so original water heaters, supply lines and fixtures are due. If a house sits empty, shut the water off when you leave.",
    intro: ["Lake Windcrest is an established lake community in Magnolia."],
    highlight: ["water-heaters", "leak-repair", "emergency-plumbing"],
  },
]

export const guides: Guide[] = [
  {
    slug: "well-water-pressure-problems",
    title: "Well water pressure problems in Magnolia: what's causing them",
    summary: "How to tell a pressure tank, pressure switch or well pump problem apart, and who fixes each one.",
    updated: "2026-11-26",
    answer:
      "Short, rapid pump cycling usually means a waterlogged pressure tank. Pressure that slowly fades and never recovers points to the pump or a clogged filter. No water at all is often the pump's breaker, the pressure switch or the pump itself. Tanks and switches are plumbing work; the pump in the well needs a licensed water well pump installer.",
    intro: ["Many homes on Magnolia acreage get water from a private well, with a pressure tank and switch in a well house or garage."],
    sections: [
      {
        heading: "What you can check",
        howTo: true,
        paragraphs: ["Turn off the pump's breaker before touching anything near the switch."],
        list: [
          "Read the pressure gauge: most systems cycle between 30-50 or 40-60 psi",
          "Watch the pump: does it turn on and off every few seconds while a tap runs?",
          "Check the whole-house filter cartridge for clogging",
          "Tap the pressure tank: a tank that sounds full of water top to bottom may be waterlogged",
        ],
      },
    ],
  },
  {
    slug: "septic-slow-drains",
    title: "Slow drains on septic: clogged pipe or full tank?",
    summary: "How to tell whether a Magnolia home's slow drains need a plumber or a septic pump-out.",
    updated: "2026-11-26",
    answer:
      "One slow drain is a clog in that fixture's line. Every drain slow at once, gurgling, or sewage smell outside near the tank points to the tank or drain field. If it's been more than three to five years since the tank was pumped, start with a septic company; if the tank is fine, a plumber clears the line from the house.",
    intro: ["Septic systems are common on acreage around Magnolia and Pinehurst, outside utility-district sewer."],
    sections: [
      {
        heading: "Keep the system healthy",
        paragraphs: [],
        list: [
          "Pump the tank every three to five years, or as the septic company advises",
          "Skip chemical drain openers and flushable wipes",
          "Keep cars and heavy equipment off the drain field",
          "Spread out laundry instead of doing many loads in one day",
        ],
      },
    ],
  },
]
