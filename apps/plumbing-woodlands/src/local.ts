import type { AreaDetail } from "@carpet/seo"

/**
 * Extra detail for The Woodlands plumbing pages, merged in by slug. Every
 * indexable page needs text no other page has (see scripts/uniqueness.mjs).
 * Sources: thewoodlandstownship-tx.gov village pages (village order and
 * rough opening decades: Grogan's Mill 1974, Cochran's Crossing 1980s,
 * Alden Bridge 1990s, Creekside Park 2000s on the Harris County side);
 * polybutylene was common from about 1978 to 1995.
 */
export const areaDetail: AreaDetail = {
  "grogans-mill": {
    sections: [
      {
        heading: "Fifty-year-old drains under the trees",
        paragraphs: [
          "Grogan's Mill opened in 1974, so its first homes are now about fifty years old. Many have had a water heater or two replaced and some fixtures updated, but the drain lines under the slab are often original cast iron, and cast iron that age can scale up inside or crack along the bottom.",
          "The forest that makes the village feel the way it does also sends roots toward every sewer joint. Slow drains in the lowest bathroom, or a toilet that bubbles when the tub drains, are worth a camera look before they turn into a backup.",
        ],
        list: [
          "Ask for a camera inspection video you can keep",
          "Hydrostatic testing shows whether the drains under the slab hold water",
          "Pipe lining can fix some cast iron without cutting the slab",
        ],
        link: { href: "/services/drain-sewer", text: "Drain and sewer service" },
      },
    ],
  },
  "cochrans-crossing": {
    sections: [
      {
        heading: "The polybutylene years",
        paragraphs: [
          "Cochran's Crossing was mostly built in the 1980s, right in the middle of the years when builders across Texas used polybutylene supply pipe. Not every house got it, but enough did that checking is the first step for any leak there.",
          "Water heaters in many of these homes sit in the attic or in a closet off the garage. In the attic, the pan and drain line under the tank are all that stand between a slow leak and a stained ceiling, so it pays to look at them twice a year.",
        ],
        list: [
          "Gray plastic pipe at the water heater is a likely sign of polybutylene",
          "Copper fittings on polybutylene were a common failure point",
          "A home inspection report from when you bought may already say",
        ],
        link: { href: "/services/polybutylene-repiping", text: "Polybutylene repiping" },
      },
    ],
    faqs: [
      {
        q: "Will my home insurance cover polybutylene leaks?",
        a: "Policies differ. Some insurers won't write a new policy on a home with polybutylene, and others cover the water damage from a sudden leak but not the pipe. Read your policy or ask your agent before a leak happens.",
      },
    ],
  },
  "alden-bridge": {
    sections: [
      {
        heading: "Original equipment reaching its end",
        paragraphs: [
          "Most of Alden Bridge went up in the 1990s, so its homes are about thirty years old. That's past the life of any original water heater, and close to the age when supply valves under sinks and toilets start to seize or drip.",
          "The 1990s were also when builders began moving away from polybutylene, so the newer streets in the village are more likely to have copper or CPVC. A quick look at the pipe at the water heater settles it.",
        ],
        list: [
          "Replace stiff shut-off valves before you need to use them",
          "Washing machine hoses older than five years are worth swapping",
          "A tank water heater from the 1990s is on borrowed time",
        ],
        link: { href: "/services/water-heaters", text: "Water heater repair and replacement" },
      },
    ],
  },
  "creekside-park": {
    sections: [
      {
        heading: "Newer homes on the south side",
        paragraphs: [
          "Creekside Park is the newest village, south of Spring Creek in Harris County, with homes built from the late 2000s on. They're plumbed with PEX and modern fixtures, and many came with tankless water heaters and softener loops already in place.",
          "Tankless units here need descaling about once a year, because the water here tends to be hard. A heater that starts showing an error code, or water that swings between hot and cold, is often just scale on the heat exchanger.",
        ],
        list: [
          "Check whether your builder's plumbing warranty has run out",
          "Use the softener loop the builder left, if there is one",
          "Keep the tankless unit's isolation valves clear so it can be flushed",
        ],
        link: { href: "/guides/tankless-water-heater-worth-it", text: "Is tankless worth it?" },
      },
    ],
    faqs: [
      {
        q: "Who do I call about low water pressure on my street?",
        a: "Water in Creekside Park comes from a municipal utility district, and your water bill names it. Call the district if the whole street has low pressure or an outage; call a plumber if it's only your house.",
      },
    ],
  },
}

/** Extra sections for service pages, by slug. */
export const serviceDetail: AreaDetail = {
  "gas-lines": {
    sections: [
      {
        heading: "Gas for the backyard",
        paragraphs: [
          "Outdoor kitchens, fire pits and pool heaters are the most common reason for a new gas line in The Woodlands. Each one needs a line sized for its burner, a shut-off valve near the appliance, and a pressure test before the gas is turned on.",
          "A tankless water heater usually needs a bigger gas line than the tank it replaces, which is the part of a conversion people don't expect.",
        ],
        list: [
          "Know the BTU rating of each appliance you plan to add",
          "Ask whether the meter can carry the extra load",
          "Buried lines should be marked before anyone digs nearby",
        ],
      },
    ],
  },
  "polybutylene-repiping": {
    sections: [
      {
        heading: "Planning around the job",
        paragraphs: [
          "Most repipes take a few days, and water is usually back on each evening. The crew opens small holes in walls and ceilings to pull new lines, so clearing a path to each bathroom, the kitchen and the laundry speeds things up.",
        ],
      },
    ],
  },
  "drain-sewer": {
    sections: [
      {
        heading: "Cable or water jet",
        paragraphs: [
          "A cable machine punches through a clog and cuts roots, and it's the usual first step. A water jetter scours the whole pipe wall clean and works better on grease in kitchen lines and on roots that keep coming back. Neither is right for every pipe: old, thin cast iron may need a gentler approach.",
        ],
      },
    ],
  },
  "emergency-plumber": {
    sections: [
      {
        heading: "Find these before an emergency",
        paragraphs: [],
        list: [
          "The main shut-off, often in a box near the curb or on the house wall by the garage",
          "The water heater's gas valve or breaker",
          "Each toilet's supply valve, behind it near the floor",
          "The irrigation system's separate valve, if it has one",
        ],
      },
    ],
  },
}

/** Extra sections for guides, by slug. */
export const guideDetail: AreaDetail = {
  "leaving-town-plumbing-checklist": {
    sections: [
      {
        heading: "When you get back",
        paragraphs: [
          "Open the main slowly and listen. A hiss with every faucet closed means water is going somewhere. Then turn the water heater back to its normal setting and run each faucet until the air sputters out.",
          "Check ceilings under the attic water heater and any bathrooms upstairs for new stains, and glance at the water meter: if the small dial is turning with nothing running, there's a leak.",
        ],
      },
    ],
  },
}
