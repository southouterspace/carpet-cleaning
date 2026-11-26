import type { Area, Guide, Service } from "@carpet/seo"

/**
 * Longer Conroe plumbing copy: extra services, area pages and guides.
 * Written for this site only; don't reuse wording from other sites. No
 * claims about crew size, years in business, reviews, prices or response
 * times until a renter confirms them.
 */

export const moreServices: Service[] = [
  {
    slug: "gas-line-repair",
    name: "Gas line repair",
    summary: "Gas leaks, new gas lines for ranges, dryers and water heaters, and pressure tests, by a licensed plumber.",
    answer:
      "If you smell gas, leave the house, don't touch light switches, and call 911 or the gas company from outside. In Texas, gas piping inside the home is plumbing work and has to be done by a licensed plumber.",
    body: [
      "Gas lines feed ranges, dryers, water heaters, furnaces and fireplaces. A leak can be at a flex connector behind an appliance, a fitting in the attic or the line itself.",
      "New gas lines and repairs are pressure-tested before the gas goes back on, and inside city limits they're permitted and inspected.",
    ],
    faqs: [
      { q: "Who do I call if I smell gas?", a: "Get everyone outside first, then call 911 or your gas company's emergency line from outside. Once the utility has made it safe, a plumber finds and fixes the leak." },
    ],
  },
  {
    slug: "repiping",
    name: "Repiping",
    summary: "Replacing polybutylene, galvanized or leaking copper supply lines with PEX or copper, often through the attic.",
    answer:
      "Repiping makes sense when a house keeps springing leaks, has polybutylene (gray plastic) or galvanized pipe, or has had more than one slab leak. In a slab home, new lines usually run through the attic and walls so the slab stays untouched.",
    body: [
      "Many Conroe homes built from the late 1970s to the mid-1990s were plumbed with polybutylene, a gray plastic pipe known for failing at fittings. Older homes may have galvanized steel that rusts shut from the inside.",
      "A repipe replaces the supply lines, usually with PEX, room by room. Drywall patches are part of the job, so ask what's included.",
    ],
  },
]

export const withMoreContent = (core: Service[]): Service[] => [...core, ...moreServices]

export const areas: Area[] = [
  {
    slug: "downtown-conroe",
    name: "Downtown Conroe",
    kind: "neighborhood",
    summary: "Plumbing for older homes around downtown Conroe: cast iron drains, galvanized lines and water heaters in tight closets.",
    answer:
      "Many houses near downtown Conroe are decades old, so the usual problems are cast iron drain lines that crack or scale up, galvanized supply pipe that loses pressure, and roots in older sewer lines. A camera inspection is worth it before a big repair.",
    intro: [
      "The blocks around the courthouse square and the older streets off Frazier, Davis and Main have some of the oldest homes in Conroe. Some still have original cast iron drains and galvanized water lines.",
      "Those pipes tend to fail slowly: pressure that drops over years, drains that clog more often, and rust-colored water after the water's been off.",
    ],
    highlight: ["sewer-line-repair", "repiping", "drain-cleaning"],
  },
  {
    slug: "river-plantation",
    name: "River Plantation",
    kind: "neighborhood",
    summary: "Plumbing for River Plantation homes along the San Jacinto River: aging supply lines, slab leaks and water heater swaps.",
    answer:
      "River Plantation's homes date mostly from the 1970s and 1980s, which is the age when original water heaters are long gone, supply lines start leaking and some houses still have polybutylene. Big trees mean roots in sewer lines too.",
    intro: [
      "River Plantation sits south of downtown, off I-45 along the West Fork of the San Jacinto River, with a golf course and plenty of mature trees.",
      "Most of the houses are from the 1970s and 1980s. At that age, the plumbing questions are about pipe material, slab leaks and roots, not new-build punch lists.",
    ],
    highlight: ["leak-detection", "repiping", "sewer-line-repair"],
  },
  {
    slug: "grand-central-park",
    name: "Grand Central Park",
    kind: "neighborhood",
    summary: "Plumbing for newer homes in Grand Central Park: builder-warranty questions, water heaters, softeners and fixture fixes.",
    answer:
      "Grand Central Park homes are new, so most plumbing calls are fixtures, clogs from construction debris, water heater settings and softener or filter installs. If your home is still under the builder's warranty, check it before paying for a repair it might cover.",
    intro: [
      "Grand Central Park is a newer master-planned community off I-45 south of downtown Conroe. Homes are plumbed with PEX and modern fixtures.",
      "New plumbing still has problems: loose fittings that weep, drains clogged with construction grit, and water heaters set too hot or too low from the start.",
    ],
    highlight: ["fixture-repair", "drain-cleaning", "water-heater-repair"],
  },
  {
    slug: "lake-conroe-west-shore",
    name: "Lake Conroe west shore",
    kind: "neighborhood",
    summary: "Plumbing for lake homes on the Conroe side of Lake Conroe: weekend-house leaks, water heaters and freeze prep.",
    answer:
      "Lake houses that sit empty during the week can leak for days before anyone notices. Shut the water off at the main when you leave, set the water heater to vacation mode, and before a hard freeze, insulate exposed pipes and drip faucets.",
    intro: [
      "The Conroe ZIP codes reach the western shore of Lake Conroe, with a mix of full-time homes, weekend houses and rentals.",
      "Lake homes have their own plumbing habits: long runs to outdoor kitchens and boat houses, hose bibs on every side, and houses that sit empty for days.",
    ],
    highlight: ["emergency-plumbing", "leak-detection", "water-heater-repair"],
  },
]

export const guides: Guide[] = [
  {
    slug: "burst-pipe-what-to-do",
    title: "A pipe burst in your Conroe home: what to do first",
    summary: "The order to do things in when a pipe bursts: water off, water heater off, power safe, photos for insurance, then a plumber.",
    updated: "2026-11-26",
    answer:
      "Shut off the main water valve, then turn off the water heater. Switch off breakers for any wet area if you can reach the panel without standing in water. Open a faucet at the lowest point to drain the lines, take photos for insurance, and then get a plumber.",
    intro: [
      "Burst pipes in Conroe usually come from two things: a hard freeze, like the February 2021 winter storm, or an old fitting or supply line that finally gives out.",
      "Either way, the damage comes from how long water runs. The steps below are in order.",
    ],
    sections: [
      {
        heading: "Step by step",
        howTo: true,
        paragraphs: ["Do these in order."],
        list: [
          "Turn off the main water valve at the street box, the meter or where the line enters the house",
          "Turn the water heater off: gas to Pilot or Off, or the breaker for an electric heater",
          "If water is near outlets or the panel, switch off those breakers only if you can reach them standing somewhere dry",
          "Open the lowest faucet in the house to drain what's left in the pipes",
          "Move furniture and rugs out of the water and start fans",
          "Take photos and video of the damage and the broken pipe for your insurance claim",
          "Send a request marked Emergency with a photo of the break",
        ],
      },
      {
        heading: "After a freeze",
        paragraphs: [
          "Pipes often split while frozen but don't leak until they thaw. After a hard freeze, check the attic, exterior walls and the garage as temperatures rise, and keep the main valve handy.",
        ],
      },
    ],
    faqs: [
      { q: "Does homeowners insurance cover a burst pipe?", a: "Many policies cover sudden water damage from a burst pipe but not a slow leak or damage from neglect. Call your insurer, and keep photos and the plumber's invoice." },
    ],
  },
  {
    slug: "slab-leak-signs",
    title: "Slab leak signs in Conroe homes, and what fixing one involves",
    summary: "How to tell if you have a slab leak, how plumbers find one, and the three ways it gets fixed.",
    updated: "2026-11-26",
    answer:
      "A slab leak shows up as a higher water bill, a meter that moves with everything off, warm spots on the floor, the sound of running water, or damp flooring with no spill. A plumber confirms it at the meter, locates it with listening and thermal tools, and fixes it by opening the slab, tunneling, or rerouting the line.",
    intro: [
      "Almost every house around Conroe sits on a concrete slab, with water lines running underneath. When one leaks, it's out of sight.",
    ],
    sections: [
      {
        heading: "Signs to look for",
        paragraphs: [],
        list: [
          "A water bill that jumps without a change in use",
          "The meter's leak indicator moving with every tap and appliance off",
          "A warm spot on tile or wood (a hot water line leaking)",
          "Running water sounds with nothing on",
          "Damp carpet, swelling baseboards or new cracks in tile",
        ],
      },
      {
        heading: "Three ways to fix it",
        paragraphs: [
          "Spot repair opens the slab right at the leak. It's direct, but it means breaking flooring in that spot.",
          "Tunneling digs under the slab from outside to reach the pipe. It saves the floor and takes longer.",
          "Rerouting abandons the leaking line and runs a new one through the attic or walls. For older pipe that's likely to leak again, it's often the better fix.",
        ],
      },
    ],
  },
  {
    slug: "water-heater-repair-or-replace",
    title: "Repair or replace your water heater? A Conroe homeowner's checklist",
    summary: "How to tell whether a water heater needs a part or a new tank, and what to decide before replacing one.",
    updated: "2026-11-26",
    answer:
      "Repair it if the tank is sound and the problem is a part: thermocouple, element, thermostat, gas valve or relief valve. Replace it if the tank itself is leaking or rusting, or it's past about 10 to 12 years old and needs an expensive part. The age is on the label, often in the serial number.",
    intro: [
      "Conroe's hard water is tough on water heaters. Sediment builds up in the bottom of the tank, which is the popping sound, and it shortens the tank's life.",
    ],
    sections: [
      {
        heading: "Checklist",
        paragraphs: [],
        list: [
          "Water pooling under the tank, coming from the tank body: replace",
          "Water at a pipe fitting or the relief valve: usually a repair",
          "No hot water on a gas heater: often the pilot or thermocouple",
          "Lukewarm water on an electric heater: often an element or thermostat",
          "Rusty hot water only: the tank or anode rod is corroding",
          "Rumbling or popping: sediment; a flush may help if the tank is young",
        ],
      },
      {
        heading: "Before you replace it",
        paragraphs: [
          "Decide on size (gallons, or flow rate for tankless), fuel (gas or electric) and location. Tankless units cost more up front, need larger gas lines and regular descaling in hard water, and last longer. Ask for prices on both if you're unsure.",
        ],
      },
    ],
  },
]
