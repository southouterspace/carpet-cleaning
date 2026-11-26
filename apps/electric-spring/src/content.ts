import type { Area, Guide, Service } from "@carpet/seo"

/**
 * Longer Spring electrical copy: extra services, area pages and guides.
 * Written for this site only. No claims about crew size, years in business,
 * reviews, prices or response times until a renter confirms them.
 */

export const moreServices: Service[] = [
  {
    slug: "lighting-ceiling-fans",
    name: "Lighting and ceiling fans",
    summary: "Fans, recessed lights, dimmers, smart switches and outdoor lighting for patios and driveways.",
    answer:
      "Ceiling fans need a fan-rated box, recessed lights in an insulated ceiling need IC-rated housings, and most smart switches need a neutral wire. Outdoor lights need weather-rated fixtures and GFCI protection.",
    body: ["List every fixture and fan in one request so it's done in one visit."],
  },
]

export const withMoreContent = (core: Service[]): Service[] => [...core, ...moreServices]

export const areas: Area[] = [
  {
    slug: "gleannloch-farms",
    name: "Gleannloch Farms",
    kind: "neighborhood",
    summary: "Electrical work in Gleannloch Farms: EV chargers, generator hookups, surge protection and lighting for newer homes.",
    answer:
      "Gleannloch Farms homes date mostly from the late 1990s and 2000s, so panels are usually sound but filling up. EV chargers, generator inlets, whole-home surge protection and outdoor lighting are the common jobs.",
    intro: ["Gleannloch Farms is a master-planned community off Spring Cypress Road, built mostly from the late 1990s on."],
    highlight: ["ev-charging", "generator-hookups", "whole-home-surge"],
  },
  {
    slug: "champion-forest",
    name: "Champion Forest",
    kind: "neighborhood",
    summary: "Electrical work for Champion Forest's 1970s and 1980s homes: panel replacement, repairs and added circuits.",
    answer:
      "Champion Forest homes are mostly from the 1970s and 1980s, so original panels, worn outlets and circuits stretched by modern kitchens and AC are common. A panel and wiring check is a good first step before a remodel or EV charger.",
    intro: ["Champion Forest is an established neighborhood along Champion Forest Drive in the Spring and Klein area, with large lots and big trees."],
    highlight: ["panel-replacement", "electrical-repairs", "lighting-ceiling-fans"],
  },
  {
    slug: "northgate-forest",
    name: "Northgate Forest",
    kind: "neighborhood",
    summary: "Electrical work in Northgate Forest: older panels, generator hookups, surge protection and lighting for large homes.",
    answer:
      "Northgate Forest's large, wooded lots and older homes mean long circuit runs, aging panels and trees that bring lines down in storms. Generator hookups, panel replacement and surge protection are the jobs to plan.",
    intro: ["Northgate Forest is a wooded, established neighborhood on the south side of the Spring area, with large homes on big lots."],
    highlight: ["generator-hookups", "panel-replacement", "whole-home-surge"],
  },
]

export const guides: Guide[] = [
  {
    slug: "electrical-after-a-flood",
    title: "After a flood: getting your Spring home's power back on safely",
    summary: "What to do with outlets, panels and appliances that got wet, and why an electrician checks before power returns.",
    updated: "2026-11-26",
    answer:
      "If water reached outlets, the panel or appliances, keep the main breaker off and don't touch the panel while standing in water. An electrician needs to inspect, and usually replace, wet outlets, breakers and wiring before the power goes back on. Take photos for insurance first.",
    intro: ["Spring sits between Spring Creek and Cypress Creek, and storms like Hurricane Harvey in 2017 put water in thousands of homes."],
    sections: [
      {
        heading: "Step by step",
        howTo: true,
        paragraphs: [],
        list: [
          "Keep the main breaker off; if the panel is wet or you're standing in water, don't touch it and call CenterPoint to disconnect at the meter",
          "Take photos of water lines on walls, outlets and the panel",
          "Unplug appliances that got wet and set them aside",
          "Have an electrician inspect before power is restored",
          "Expect wet outlets, switches and breakers to be replaced, not dried",
        ],
      },
    ],
  },
  {
    slug: "whole-home-surge-protection-worth-it",
    title: "Is whole-home surge protection worth it?",
    summary: "What a panel surge protector does, what it doesn't, and why it pairs with plug-in strips.",
    updated: "2026-11-26",
    answer:
      "For most Spring homes, yes: a surge protector at the panel is a small part of the cost of an AC control board or a refrigerator, and it protects every circuit from spikes caused by nearby lightning and power switching back on. It works best with point-of-use strips for electronics, and it can't stop a direct lightning strike.",
    intro: ["Electronics are everywhere in a house now, including in the AC, the fridge, the washer and the garage door opener."],
    sections: [
      {
        heading: "Two layers",
        paragraphs: [
          "The panel device catches large surges coming in from outside. Plug-in strips catch the smaller spikes made inside the house and the remainder that gets past the panel.",
        ],
      },
    ],
  },
]
