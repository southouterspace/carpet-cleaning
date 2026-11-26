import type { AreaDetail } from "@carpet/seo"

/**
 * Local detail for each Conroe electrical area page. Every page needs text no
 * other page has (see scripts/uniqueness.mjs). Facts are about home age and
 * what that means for wiring. Sources: grandcentralpark.com and
 * harperspreserve.com (newer master-planned communities), artavia.com
 * (community off Highway 242), conroe.org (downtown history). Wiring eras:
 * aluminum branch wiring was used in some homes from about 1965 to 1973
 * (U.S. CPSC "Repairing Aluminum Wiring"); AFCI breakers have been required
 * in bedrooms since the 1999 National Electrical Code and in more rooms since.
 */
export const areaDetail: AreaDetail = {
  "grand-central-park": {
    sections: [
      {
        heading: "Adding on to a new panel",
        paragraphs: [
          "Builders here size the panel for the house as it was sold, not for the hot tub, the shop in the garage and two electric cars that come later. Before adding a big load, an electrician runs a load calculation to see what the service can carry.",
          "New homes also have AFCI and GFCI breakers on most circuits, and those can trip in ways older breakers never did. A breaker that trips every time a vacuum or a treadmill starts is often a sign the device and the breaker don't get along, not a wiring fault.",
        ],
        list: [
          "Photograph the panel label showing the main breaker size",
          "Count the empty breaker slots, if any",
          "Note where the garage outlets are fed from before planning a charger",
        ],
        link: { href: "/guides/breaker-keeps-tripping", text: "Why a breaker keeps tripping" },
      },
    ],
  },
  "artavia": {
    sections: [
      {
        heading: "Backyards with pools and kitchens",
        paragraphs: [
          "Artavia's lots are built for outdoor living, and that's where most new electrical work goes: a pool pump and lights, a patio fan, an outdoor kitchen with a fridge and outlets, landscape lighting along the fence.",
          "Outdoor circuits need GFCI protection, weatherproof covers that stay closed with a cord plugged in, and wire buried at the right depth. Pools add bonding rules of their own, so it's best to plan the electrical work with the pool builder, not after.",
        ],
        list: [
          "Ask for a separate circuit for each big outdoor load",
          "Put landscape lighting on a timer or photocell switch",
          "Keep a clear path to the outdoor disconnect for the pool equipment",
        ],
        link: { href: "/services/lighting-ceiling-fans", text: "Lighting and ceiling fans" },
      },
    ],
    faqs: [
      {
        q: "Can I add outlets to my patio myself?",
        a: "Texas law lets homeowners do some electrical work on their own house, but outdoor and pool wiring carries real shock risk and usually needs a permit. Most people hire an electrician for it.",
      },
    ],
  },
  "harpers-preserve": {
    sections: [
      {
        heading: "Ready for the next outage",
        paragraphs: [
          "Harper's Preserve is a forested community, and tall pines over power lines mean storm outages can last longer than in open subdivisions. That's why so many owners there ask about generators before anything else.",
          "The two common setups are a portable generator plugged into an inlet box with an interlock on the panel, and a permanent standby generator that starts on its own. The first is far cheaper; the second runs the whole house without anyone stepping outside in the storm.",
        ],
        list: [
          "Decide which circuits you must have: fridge, Wi-Fi, fans, one AC",
          "Check HOA rules on where a standby unit can sit",
          "A standby generator on natural gas needs a gas line sized for it",
        ],
        link: { href: "/guides/generator-options-conroe", text: "Generator options compared" },
      },
    ],
    faqs: [
      {
        q: "Can a portable generator power my AC?",
        a: "Some can run one smaller AC unit, but central AC draws a big surge when it starts. Check the generator's starting watts against the AC's label, or ask the electrician to add a soft-start kit.",
      },
    ],
  },
  "downtown-conroe": {
    sections: [
      {
        heading: "Signs an older house needs attention",
        paragraphs: [
          "Homes near downtown span many decades, and a lot of them have been added on to over the years. The kitchen may be rewired while the back bedrooms still run on the original cloth-covered wire, so one room can tell you little about the next.",
          "Aluminum branch wiring turns up in some houses built in the late 1960s and early 1970s. It isn't dangerous everywhere, but connections at outlets and switches can loosen and overheat. Special connectors rated for aluminum fix the weak points without a full rewire.",
        ],
        list: [
          "Outlets or switch plates that feel warm",
          "Lights that dim when the AC or microwave starts",
          "A burning smell with no obvious source",
          "Fuses instead of breakers, or a panel with no labels",
        ],
        link: { href: "/guides/is-my-electrical-panel-safe", text: "Is my electrical panel safe?" },
      },
    ],
    faqs: [
      {
        q: "Will my insurer care about old wiring?",
        a: "Some insurers ask about the panel brand, fuses or aluminum wiring when you buy or renew a policy. An electrician's inspection report helps answer those questions.",
      },
    ],
  },
}
