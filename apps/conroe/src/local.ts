import type { AreaDetail } from "@carpet/seo"

/**
 * Local detail for each Conroe neighborhood and town page: facts about the
 * place, the homes and floors there, and the questions people there ask.
 * Every page needs text no other page has (see scripts/uniqueness.mjs).
 * Keep facts checkable; sources are listed next to each entry.
 */
export const areaDetail: AreaDetail = {
  // Opened 2017: grandcentralparktx.com
  "grand-central-park": {
    sections: [
      {
        heading: "Homes built since 2017",
        paragraphs: [
          "Grand Central Park opened in 2017, so even its oldest houses are young. That puts most owners on their first carpet, and the first deep clean is usually the one that decides how long it lasts. Light beige and gray builder carpet hides dust for a while, then shows a gray path from the stairs to the bedrooms all at once.",
          "Homes that back onto the parks and trails see more sand and mud by the back door than the ones facing the street. A mat outside and one inside that door cuts down what reaches the carpet.",
        ],
        link: { href: "/services/stair-carpet-cleaning", text: "How stair cleaning works" },
      },
    ],
    faqs: [
      {
        q: "How soon should new carpet in Grand Central Park get its first cleaning?",
        a: "Within the first 12 to 18 months for most families, and sooner with pets. Cleaning before traffic lanes set in is easier than pulling them out later.",
      },
    ],
  },
  // Off Highway 242 on the east side, CISD school planned: artaviatx.com
  artavia: {
    sections: [
      {
        heading: "Where carpet wears first in Artavia",
        paragraphs: [
          "Artavia sits on Conroe's east side off Highway 242, inside Conroe ISD, with a school planned inside the community. In homes with young kids, juice, crayon and slime spots in the game room come up as often as traffic lanes do.",
        ],
        list: [
          "The landing at the top of the stairs, where everyone turns",
          "The game room, often the only carpeted room downstairs",
          "Kids' bedrooms near the bathroom door",
          "The rug under the kitchen table",
        ],
        link: { href: "/services/carpet-stain-removal", text: "Spot and stain removal" },
      },
    ],
    faqs: [
      {
        q: "Can you get slime out of carpet?",
        a: "Usually. Let it dry, scrape off what you can, then leave the rest for the cleaner. Hot water and vinegar at home can spread the color, so test any home fix in a closet first.",
      },
    ],
  },
  "harpers-preserve": {
    sections: [
      {
        heading: "Pollen, trails and older phases",
        paragraphs: [
          "Harper's Preserve is built around a large green space and trails off Highway 242, and the pine and oak cover means a yellow film of pollen on every surface each spring. That dust settles into carpet near doors and windows, where it shows up as a dull, slightly yellow cast.",
          "The first sections are old enough now that some owners are deciding between a deep clean and new carpet. Cleaning the worst room first is a cheap way to see which way to go before paying for the whole house.",
        ],
        link: { href: "/guides/carpet-cleaning-cost-conroe", text: "What carpet cleaning costs in Conroe" },
      },
    ],
    faqs: [
      {
        q: "When is the best time of year to clean carpet in Harper's Preserve?",
        a: "After the spring pollen drops, usually by late April or May. Cleaning before it ends means the next pollen wave lands on clean carpet.",
      },
    ],
  },
  "river-plantation": {
    sections: [
      {
        heading: "What older carpet can and can't do",
        paragraphs: [],
        list: [
          "Faded color from years of sun won't come back with cleaning",
          "Matted traffic lanes often lift a good deal with hot water and grooming",
          "Old pet spots may leave a light mark even after the odor is gone",
          "Loose or rippled carpet needs a stretch, which is a separate job",
        ],
        link: { href: "/services/pet-odor-removal", text: "Pet urine and odor treatment" },
      },
    ],
    faqs: [
      {
        q: "Is it worth cleaning 20-year-old carpet?",
        a: "Often, if the pad is sound and you plan to stay a few more years. If you're replacing it within a year, put the money toward the new carpet instead.",
      },
    ],
  },
  // County seat since 1889, square with the 1935 Crighton Theatre: lakeconroe.com/about-lake-conroe
  "downtown-conroe": {
    sections: [
      {
        heading: "Older houses near the square",
        paragraphs: [
          "Conroe has been the county seat since 1889, and the blocks around the courthouse square and the 1935 Crighton Theatre hold some of its oldest houses. Many have wood floors that were covered with carpet decades ago, then uncovered again, so area rugs over hardwood are a common job here.",
          "In older homes, a rug can hide dye or water marks in the wood under it. Ask the cleaner to lift and check the floor when they pick up or clean the rug.",
        ],
        link: { href: "/services/area-rug-cleaning", text: "Area rug cleaning" },
      },
    ],
    faqs: [
      {
        q: "Can a rug be cleaned on a hardwood floor without hurting the wood?",
        a: "Yes, with a low-moisture method or by taking the rug out to clean it. Wet cleaning on top of hardwood risks water marks, so say the floor type in your request.",
      },
    ],
  },
  // Built 1973 on the West Fork of the San Jacinto River: lakeconroe.com/about-lake-conroe
  "lake-conroe": {
    sections: [
      {
        heading: "Humidity in a closed-up lake house",
        paragraphs: [
          "Lake Conroe was built in 1973 on the West Fork of the San Jacinto River, and it covers about 21,000 acres. Houses close to that much water stay damp, and a weekend place shut up for a week in August can smell musty by Friday even when nothing spilled.",
          "That smell usually lives in the pad and in cushions, not the air. Cleaning removes what's feeding it, but the AC or a dehumidifier set to run while you're away is what keeps it from coming back.",
        ],
        link: { href: "/services/upholstery-cleaning", text: "Couch and upholstery cleaning" },
      },
    ],
    faqs: [
      {
        q: "Can the cleaning be done while I'm not at the lake house?",
        a: "Often, yes. Mention how the cleaner can get in, such as a lockbox or door code, and whether the AC can be left running so the carpet dries.",
      },
    ],
  },
  "panorama-village": {
    sections: [
      {
        heading: "Single-story homes and golf-course lots",
        paragraphs: [
          "Panorama Village is its own small city, separate from Conroe, with homes spread along the fairways of its golf course. A lot of the houses are single story, which means carpet in the main living room and halls, not only upstairs. Those rooms carry the whole household's traffic, so lanes show faster than in a two-story house.",
          "Golf course lots also bring in fine grass clippings and sand from the course on shoes and cart tires. Most of it lands within a few feet of the garage door and the patio door.",
        ],
        link: { href: "/services/carpet-cleaning", text: "Whole-home carpet cleaning" },
      },
    ],
    faqs: [
      {
        q: "Is Panorama Village part of Conroe for scheduling?",
        a: "Yes. It's a separate city, but it sits right next to Conroe and is booked the same way.",
      },
    ],
  },
}
