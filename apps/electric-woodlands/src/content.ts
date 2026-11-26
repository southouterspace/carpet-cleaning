import type { Area, Guide, Service } from "@carpet/seo"

/**
 * Longer Woodlands electrical copy: extra services, village pages and
 * guides. Written for this site only. No claims about crew size, years in
 * business, reviews, prices or response times until a renter confirms them.
 */

export const moreServices: Service[] = [
  {
    slug: "pool-spa-electrical",
    name: "Pool and spa wiring",
    summary: "Wiring for pool pumps, heaters, lights and hot tubs, with GFCI protection and bonding checked.",
    answer:
      "Pools and spas need GFCI-protected circuits, a disconnect within sight of the equipment, and bonding that ties metal parts together so there's no voltage difference to feel in the water. If you ever feel a tingle in a pool or spa, get everyone out and turn the equipment off.",
    body: [
      "Variable-speed pumps, heaters and new lighting often need circuit changes at the pool panel. Hot tubs usually need a dedicated 240-volt circuit and a disconnect.",
    ],
  },
]

export const withMoreContent = (core: Service[]): Service[] => [...core, ...moreServices]

export const areas: Area[] = [
  {
    slug: "panther-creek",
    name: "Panther Creek",
    kind: "neighborhood",
    summary: "Electrical work for Panther Creek's older homes: aging panels, backstabbed outlets, added circuits and lighting.",
    answer:
      "Panther Creek is one of The Woodlands' earliest villages, so many homes still have their original panel and wiring devices. Worn outlets, full panels and circuits never meant for today's loads are the usual jobs; an inspection is a good first step before a remodel.",
    intro: ["Panther Creek was among the first villages built, with homes from the late 1970s and 1980s under tall pines."],
    highlight: ["panel-upgrades", "troubleshooting-repair", "lighting-fans"],
  },
  {
    slug: "indian-springs",
    name: "Indian Springs",
    kind: "neighborhood",
    summary: "Electrical work for Indian Springs homes: panel upgrades, generators, pool wiring and EV chargers.",
    answer:
      "Indian Springs homes are mostly from the 1980s and 1990s, many with pools, so jobs here lean toward panel upgrades, pool equipment circuits, generator inlets and EV chargers.",
    intro: ["Indian Springs sits on the east side of The Woodlands, with homes from the 1980s on."],
    highlight: ["pool-spa-electrical", "generators", "panel-upgrades"],
  },
  {
    slug: "sterling-ridge",
    name: "Sterling Ridge",
    kind: "neighborhood",
    summary: "Electrical work for Sterling Ridge homes: EV chargers, generators, lighting and outdoor living circuits.",
    answer:
      "Sterling Ridge homes are mostly from the late 1990s and 2000s, with panels that often have room for an EV charger or generator interlock. Outdoor kitchens, patio fans and landscape lighting are common add-ons.",
    intro: ["Sterling Ridge is on the west side of The Woodlands and was built out from the late 1990s on."],
    highlight: ["ev-chargers", "generators", "lighting-fans"],
  },
]

export const guides: Guide[] = [
  {
    slug: "ev-charger-woodlands-garage",
    title: "Installing an EV charger in a Woodlands garage: what it takes",
    summary: "Circuit size, panel capacity, charger choice and permits for a Level 2 home charger in The Woodlands.",
    updated: "2026-11-26",
    answer:
      "Most installs are a 40- to 60-amp 240-volt circuit from the panel to the garage, a hardwired charger or a 14-50 outlet, and a permit. What changes the price is panel capacity and distance; a full or small panel may need a load-management device or an upgrade first.",
    intro: ["An EV charger is one of the largest loads in a house, so the panel decides how simple the job is."],
    sections: [
      {
        heading: "What to have ready",
        howTo: true,
        paragraphs: [],
        list: [
          "A photo of the open panel and its label",
          "Where the car parks and where the panel is",
          "The charger you want, or the car's maximum charging rate",
          "Any other big loads you plan to add (pool, hot tub, generator)",
        ],
      },
    ],
  },
  {
    slug: "gfci-wont-reset",
    title: "GFCI outlet won't reset? What it means",
    summary: "Why a GFCI refuses to reset, what you can check, and when it needs an electrician.",
    updated: "2026-11-26",
    answer:
      "A GFCI won't reset when it has no power, when it's sensing a real ground fault downstream, or when it has failed. Check the breaker first, then unplug everything on that circuit, including outdoor items, and try again. If it still won't reset, or trips the moment it does, call an electrician.",
    intro: ["GFCI outlets protect bathrooms, kitchens, garages and outdoor outlets, and one GFCI often protects several outlets in other places."],
    sections: [
      {
        heading: "Check in this order",
        howTo: true,
        paragraphs: [],
        list: [
          "Make sure the breaker for that circuit is on",
          "Look for another GFCI upstream that has tripped",
          "Unplug everything on the circuit, including outside lights and fountains",
          "Press Reset firmly until it clicks",
          "If outdoor outlets got wet, let them dry for a day and try again",
        ],
      },
    ],
  },
]
