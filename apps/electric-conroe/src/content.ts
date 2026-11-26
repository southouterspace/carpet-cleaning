import type { Area, Guide, Service } from "@carpet/seo"

/**
 * Longer Conroe electrical copy: extra services, area pages and guides.
 * Written for this site only. No claims about crew size, years in business,
 * reviews, prices or response times until a renter confirms them.
 */

export const moreServices: Service[] = [
  {
    slug: "rewiring",
    name: "Rewiring older homes",
    summary: "Replacing aluminum branch wiring, two-prong outlets and worn wiring in older Conroe homes.",
    answer:
      "Homes wired around 1965 to 1973 may have aluminum branch wiring, which can overheat at connections. Full rewiring isn't the only fix: an electrician can also join copper pigtails at each device with connectors rated for aluminum. Two-prong outlets mean there's no ground at that box.",
    body: [
      "Signs a house needs wiring work: two-prong outlets, outlets that are warm or discolored, lights that flicker in one room, and a panel with no space left that's full of double-tapped breakers.",
      "Rewiring is usually done room by room, through the attic and walls, with small drywall cuts patched afterward.",
    ],
  },
  {
    slug: "surge-protection",
    name: "Surge protection",
    summary: "Whole-home surge protectors at the panel, plus point-of-use protection for electronics.",
    answer:
      "A whole-home surge protector mounts at the panel and limits spikes from lightning nearby and utility switching before they reach every circuit. It works best together with plug-in surge strips at TVs and computers. It doesn't protect against a direct lightning strike.",
    body: [
      "Summer storms around Lake Conroe bring a lot of lightning, and power often flickers on and off as it's restored, which is hard on electronics, AC boards and appliances.",
    ],
  },
]

export const withMoreContent = (core: Service[]): Service[] => [...core, ...moreServices]

export const areas: Area[] = [
  {
    slug: "grand-central-park",
    name: "Grand Central Park",
    kind: "neighborhood",
    summary: "Electrical work for Grand Central Park homes: EV chargers, ceiling fans, outdoor lighting and generator inlets.",
    answer:
      "Grand Central Park's homes are new, so electrical work is mostly additions: EV chargers in the garage, fans and lighting, outdoor circuits, and generator inlets. If the house is still under the builder's warranty, check it for any failed outlet or breaker first.",
    intro: [
      "Grand Central Park is a master-planned community south of downtown Conroe along I-45, built out over the last decade.",
      "New homes have modern panels with room to grow, which keeps most upgrades simple.",
    ],
    highlight: ["ev-charger-installation", "lighting-ceiling-fans", "generator-installation"],
  },
  {
    slug: "artavia",
    name: "Artavia",
    kind: "neighborhood",
    summary: "Electrical upgrades for Artavia homes off Highway 242: EV chargers, backyard circuits, lighting and surge protection.",
    answer:
      "Artavia homes are recent builds, so the common jobs are add-ons: Level 2 EV chargers, circuits for patios, pools and outdoor kitchens, fans and lighting, and a whole-home surge protector at the panel.",
    intro: [
      "Artavia is a newer community off Highway 242 on the east side of Conroe, with homes built from the late 2010s on.",
    ],
    highlight: ["ev-charger-installation", "surge-protection", "lighting-ceiling-fans"],
  },
  {
    slug: "harpers-preserve",
    name: "Harper's Preserve",
    kind: "neighborhood",
    summary: "Electrical work in Harper's Preserve: generator hookups, EV chargers, lighting and repairs for newer homes.",
    answer:
      "Harper's Preserve homes are newer, with panels that usually have space for an EV charger or a generator interlock. Bring a photo of the open panel to your request so the electrician can check capacity before coming out.",
    intro: [
      "Harper's Preserve sits along Highway 242 on the south side of Conroe, close to The Woodlands, with homes built from the 2010s on.",
    ],
    highlight: ["generator-installation", "ev-charger-installation", "electrical-repair"],
  },
  {
    slug: "downtown-conroe",
    name: "Downtown Conroe",
    kind: "neighborhood",
    summary: "Electrical repairs and rewiring for older homes near downtown Conroe: old panels, two-prong outlets, aluminum wiring.",
    answer:
      "Older homes near downtown Conroe can have 60- or 100-amp panels, two-prong outlets, and in some 1960s and early-1970s houses, aluminum branch wiring. Start with an inspection of the panel and a few outlets; it tells you whether you need repairs, a panel or rewiring.",
    intro: [
      "The streets around the courthouse square and the older neighborhoods north and west of downtown have homes from many decades, some rewired and some not.",
    ],
    highlight: ["rewiring", "panel-upgrades", "electrical-repair"],
  },
]

export const guides: Guide[] = [
  {
    slug: "breaker-keeps-tripping",
    title: "Breaker keeps tripping? What it means and what to check",
    summary: "Why a breaker trips, what you can safely check yourself, and when it's time for an electrician.",
    updated: "2026-11-26",
    answer:
      "A breaker trips because a circuit is overloaded, a device or wire is shorting, or (for GFCI and AFCI breakers) it sensed a ground fault or arc. Unplug everything on that circuit, reset it, and plug things back in one at a time. If it trips with nothing plugged in, trips right away, or feels hot, call an electrician.",
    intro: [
      "Breakers are there to trip. The question is why it keeps happening.",
    ],
    sections: [
      {
        heading: "What you can check safely",
        howTo: true,
        paragraphs: ["Stop if anything is hot, smells burnt or sparks."],
        list: [
          "Note what was running when it tripped",
          "Unplug everything on that circuit",
          "Push the breaker fully to Off, then back to On",
          "Plug items back in one at a time and see which one trips it",
          "Move heaters, hair dryers or window units to another circuit if the circuit was simply overloaded",
        ],
      },
      {
        heading: "When it's an electrician job",
        paragraphs: [],
        list: [
          "It trips with nothing plugged in",
          "It won't reset, or trips the instant you reset it",
          "The breaker or panel is warm, buzzing or scorched",
          "Lights dim or flicker on other circuits too",
        ],
      },
    ],
  },
  {
    slug: "generator-options-conroe",
    title: "Backup power for a Conroe home: inlet and interlock vs. standby generator",
    summary: "How portable-generator inlets and standby generators compare for outages after storms like Beryl and Uri.",
    updated: "2026-11-26",
    answer:
      "A generator inlet with a panel interlock lets a portable generator safely power chosen circuits; you start it and flip it over yourself. A standby generator is permanently installed, runs on natural gas or propane, and switches on automatically. Inlets cost much less; standby units are hands-off and can run central AC if sized for it.",
    intro: [
      "Winter Storm Uri in February 2021 and Hurricane Beryl in July 2024 both left many homes around Conroe without power for days.",
    ],
    sections: [
      {
        heading: "Inlet and interlock",
        paragraphs: [
          "An outdoor inlet box connects to the panel, and an interlock plate makes it impossible to have the main breaker and generator breaker on at the same time. That keeps power from flowing back onto the utility's lines.",
        ],
      },
      {
        heading: "Standby generator",
        paragraphs: [
          "A standby unit sits on a pad outside, tied into an automatic transfer switch. It needs a gas supply sized for it, a permit and regular exercise and maintenance.",
        ],
      },
      {
        heading: "Never do this",
        paragraphs: ["Running a generator indoors or in a garage, even with the door open, can kill with carbon monoxide."],
        list: [
          "Don't plug a generator into a dryer or wall outlet (backfeeding)",
          "Don't run it in the garage or near windows",
          "Don't refuel it while it's hot",
        ],
      },
    ],
  },
  {
    slug: "is-my-electrical-panel-safe",
    title: "Is your electrical panel safe? Signs it should be replaced",
    summary: "Panel brands to watch for, warning signs, and what a replacement involves in a Conroe home.",
    updated: "2026-11-26",
    answer:
      "Consider replacing a panel if it's a Federal Pacific (Stab-Lok) or Zinsco, if it's rusted, scorched or buzzing, if breakers feel warm, or if it's full and you're adding major loads. The brand is printed on the label inside the door.",
    intro: [
      "Panels last a long time, but some models have a poor track record and others are simply too small for how homes are used now.",
    ],
    sections: [
      {
        heading: "Warning signs",
        paragraphs: [],
        list: [
          "Federal Pacific Stab-Lok or Zinsco on the label",
          "Rust, water stains or scorch marks",
          "Buzzing, crackling or a hot smell",
          "Breakers that are warm or won't stay on",
          "No open spaces and lots of tandem breakers",
        ],
      },
      {
        heading: "What replacement involves",
        paragraphs: [
          "The electrician pulls a permit, the utility disconnects and reconnects power at the meter, the old panel comes out and circuits move to the new one, and the city inspects it. Expect most of a day without power.",
        ],
      },
    ],
  },
]
