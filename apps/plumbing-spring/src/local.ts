import type { AreaDetail } from "@carpet/seo"

/**
 * Extra detail for Spring plumbing pages, merged in by slug. Every indexable
 * page needs text no other page has (see scripts/uniqueness.mjs). Sources:
 * oldtownspring.com (railroad-era history), kleinisd.net (Klein's German
 * settler history and district area), gleannlochfarms.org (community off
 * Spring Cypress), hcfcd.org (Harris County flooding and Cypress and Spring
 * Creek watersheds), February 2021 winter storm (ERCOT outage reports).
 */
export const areaDetail: AreaDetail = {
  "old-town-spring": {
    sections: [
      {
        heading: "Old buildings with new uses",
        paragraphs: [
          "Old Town Spring grew up around the railroad in the early 1900s, and many of its buildings have changed hands and uses since. A cottage that's now a gift shop, or a house turned into a café, often has plumbing that was added to piece by piece, with new fixtures tied into much older drains.",
          "For shops and restaurants, the common calls are restroom toilets that clog under heavy use, grease building up in kitchen lines, and water heaters too small for a busy weekend.",
        ],
        list: [
          "Restaurants need a grease trap that's pumped on schedule",
          "Commercial toilets should use pressure-assist or flushometer valves for heavy traffic",
          "Keep a record of each plumbing visit for the landlord or the next owner",
        ],
        link: { href: "/services/drain-cleaning", text: "Drain cleaning" },
      },
    ],
  },
  "champion-forest": {
    sections: [
      {
        heading: "Big lots, big trees, long sewer runs",
        paragraphs: [
          "Champion Forest's wooded lots set many houses well back from the street, which means a long sewer line between the house and the main. The longer the line, the more joints roots can find and the more places the pipe can sag as the clay soil moves through wet and dry years.",
          "Houston-area clay swells after heavy rain and shrinks in drought. That movement shifts slabs a little every year, and it's one reason slab leaks show up so often in homes from the 1970s and 1980s.",
        ],
        list: [
          "Water the soil near the foundation in a long drought to limit movement",
          "A sudden jump in the water bill can be the first sign of a slab leak",
          "A cleanout near the house makes sewer work faster and cheaper",
        ],
        link: { href: "/services/leak-repair", text: "Leak and slab leak repair" },
      },
    ],
  },
  "gleannloch-farms": {
    sections: [
      {
        heading: "Second-generation water heaters",
        paragraphs: [
          "A house built in Gleannloch Farms around 2000 has seen two decades of hard water, and tank water heaters rarely last much past twelve years here. If yours is the original, or the label is so faded you can't read the date, plan the replacement before it leaks.",
          "Many larger homes here have two water heaters, one for each end of the house. When one starts rumbling or leaking, it's worth asking whether to replace both at once, or to switch to a single tankless unit sized for the whole house.",
        ],
        list: [
          "Rumbling or popping from the tank usually means heavy sediment",
          "Rusty hot water points to a tank rusting from the inside",
          "Garage installs need the burner raised off the floor, so check the stand",
        ],
        link: { href: "/services/water-heater-service", text: "Water heater service" },
      },
    ],
  },
  "klein": {
    sections: [
      {
        heading: "One name, many decades of homes",
        paragraphs: [
          "Klein takes its name from Adam Klein, one of the German settlers who farmed this part of north Harris County in the 1800s. Today it's a sprawl of subdivisions built from the 1970s to now, and the plumbing in any one house depends far more on its year than its ZIP code.",
          "That's why the form asks when your home was built. A 1978 house might need a repipe and a sewer camera; a 2015 house is more likely to need a new fill valve and a softener service.",
        ],
        list: [
          "Before 1980: cast iron drains and galvanized or copper supply lines",
          "About 1978 to 1995: polybutylene is possible",
          "After 2000: mostly PEX supply and PVC drains",
        ],
        link: { href: "/guides/sewer-backs-up-when-it-rains", text: "Why the sewer backs up when it rains" },
      },
    ],
  },
}

/** Extra sections for service pages, by slug. */
export const serviceDetail: AreaDetail = {
  "drain-cleaning": {
    sections: [
      {
        heading: "Which drain, which cause",
        paragraphs: [],
        list: [
          "Kitchen: grease, coffee grounds and food scraps that cool and stick",
          "Bathroom sink: hair, toothpaste and soap scum around the stopper",
          "Shower: hair and soap, often right below the strainer",
          "Laundry: lint, especially from towels and new clothes",
          "Several drains at once: usually the main line, not one fixture",
        ],
      },
    ],
  },
  "fixtures": {
    sections: [
      {
        heading: "Small fixes that save water",
        paragraphs: [
          "A toilet that runs on its own every few minutes is usually a worn flapper or a fill valve set too high, and it can add a surprising amount to a monthly water bill. A drop of food coloring in the tank shows a silent leak: if color shows up in the bowl without flushing, the flapper is leaking.",
          "Garbage disposals mostly fail from what goes into them. Potato peels, rice, pasta and fibrous scraps like celery jam the grinder or pack the drain, so they're better off in the trash.",
        ],
      },
    ],
  },
  "emergency-plumbing": {
    sections: [
      {
        heading: "Before the plumber arrives",
        paragraphs: [],
        list: [
          "Shut off the water at the main, or at the fixture's own valve",
          "Turn off the water heater if the leak is at or near it",
          "Move rugs, boxes and electronics away from the water",
          "Take photos of the damage for your insurance company",
          "Don't flush or run water if sewage is coming up a drain",
        ],
      },
    ],
  },
  "leak-repair": {
    sections: [
      {
        heading: "Check the meter yourself",
        paragraphs: [
          "Turn off every faucet, the ice maker and the irrigation system, then look at the water meter in the box near the street. Most meters have a small triangle or star dial that spins when water is moving. If it turns with everything off, water is leaking somewhere between the meter and your fixtures.",
        ],
      },
    ],
  },
  "water-heater-service": {
    sections: [
      {
        heading: "Repair or replace",
        paragraphs: [
          "A bad thermostat, a worn heating element, or a gas valve that won't hold the pilot are all repairable. A tank that's leaking from its body, not a fitting, can't be fixed and needs replacing. Age matters too: putting a new part on a tank past ten years old is often money spent twice.",
        ],
      },
    ],
  },
  "frozen-pipes": {
    sections: [
      {
        heading: "What 2021 taught Spring homeowners",
        paragraphs: [
          "The February 2021 winter storm kept much of the Houston area below freezing for days, with long power outages, and pipes split in attics and outside walls all over Spring. Houses here aren't built for that kind of cold, so the weak spots are the same every time: attic lines, pipes in exterior walls, hose bibs and the backflow device on irrigation systems.",
          "Adding foam sleeves in the attic and on any pipe you can see outside, plus insulated covers for hose bibs, costs little and handles most freezes.",
        ],
      },
    ],
  },
}
