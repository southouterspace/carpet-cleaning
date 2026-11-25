import { resolveFlags, withAnswers, type SiteConfig } from "@carpet/seo"
import { answers } from "./answers"
import { areas, guides, withMoreContent } from "./content"

/**
 * Spring city site. Everything on the site comes from this file.
 *
 * Before launch:
 * - `phone` is a placeholder (555-01xx is reserved fictional) and stays
 *   hidden while the phoneCalls flag is off. Set the renter's forwarding
 *   number before turning that flag on.
 * - Add `hours`, `priceFrom` and `operator` once a renter confirms them.
 *   Never add an address, reviews or prices the renter can't back up.
 */
export const site: SiteConfig = {
  id: "spring",
  name: "Spring TX Carpet Cleaners",
  url: "https://springtxcarpetcleaners.com",
  tagline:
    "Carpet, stair, couch and rug cleaning for Spring, TX homes, from Old Town Spring to Gleannloch Farms, Champion Forest and Klein.",
  phone: "+12815550150",
  city: "Spring",
  region: "TX",
  serviceArea: {
    towns: ["Spring", "Klein", "Westfield", "Humble", "Tomball"],
    zips: ["77373", "77379", "77386", "77388", "77389"],
    neighborhoods: ["Old Town Spring", "Gleannloch Farms", "Champion Forest", "Klein"],
  },
  hours: [],
  // Date the copy was last reviewed. Bump it when the content changes.
  updated: "2026-11-25",
  // Short, specific facts for the home page "At a glance" block and llms.txt.
  facts: [
    { label: "Most common job", value: "Upstairs bedrooms, game room, stairs and landing in a two-story home" },
    { label: "Drying time", value: "4 to 8 hours with the AC on and fans running" },
    { label: "How often", value: "Every 12 to 18 months; every 6 to 12 with pets or young kids" },
    {
      label: "Advertised local prices",
      value: "$88 to $225 for three rooms, most near $140, from 13 of 54 local cleaners' websites (Nov 2026); other companies' prices, not a quote",
      requires: "priceRanges",
    },
    { label: "Quotes", value: "Free and online, with a total price before anyone comes out" },
    { label: "Photos", value: "Up to 5 photos can go with your request", requires: "photoUpload" },
  ],
  leadEndpoint: "/api/lead",
  turnstileSiteKey: "0x4AAAAAAF9mIQ55cQuaXFQr",
  // Per-site flag overrides go in the first argument; FLAG_* env vars win at build time.
  flags: resolveFlags({ photoUpload: true }, process.env),
  theme: { accent: "#3f3a94", accentDark: "#2a2668" },
  // Longer sections and the extra services live in content.ts.
  services: withAnswers(withMoreContent([
    {
      slug: "carpet-cleaning",
      name: "Carpet cleaning",
      summary: "Hot water extraction for bedrooms, game rooms and living areas in Spring, TX homes.",
      body: [
        "A lot of Spring carpet has lived through years of kids, pets and Houston humidity. Soil builds up low in the pile where a vacuum can't reach, and the paths between rooms turn a shade darker than the rest.",
        "Each cleaning starts with pre-treating the traffic paths and spots, then a hot water rinse with strong suction to carry the soil out. A grooming pass at the end helps the carpet dry evenly. With the AC on, it's usually dry by evening.",
        "Send the rooms, stairs and problem spots through the form for a total price.",
      ],
      faqs: [
        {
          q: "Should I clean carpet or replace it?",
          a: "If the carpet is mostly matted, frayed at the seams or the pad is breaking down, replacing it may make more sense. If it's just dirty in the lanes, a deep clean usually brings it back. Photos with your request help us tell you honestly.",
        },
      ],
    },
    {
      slug: "pet-urine-removal",
      name: "Pet urine removal",
      summary: "Locates pet urine in carpet and pad and treats it at the depth it reached, so the smell doesn't return.",
      body: [
        "Urine soaks through carpet into the pad, and Spring's humidity keeps bringing the smell back up. Cleaning the surface alone won't stop it.",
        "Spots are found first, often with a UV light, and treated at the pad with an enzyme or oxidizing product. Pad that's been soaked over and over may need replacing, and you'll know the cost before work starts.",
      ],
    },
    {
      slug: "couch-cleaning",
      name: "Couch cleaning",
      summary: "Cleaning for couches, sectionals and chairs, matched to the fabric's cleaning code.",
      body: [
        "Couches hold body oil, food and pet hair, and the darkest spots are where people lean. The tag code (W, S, WS or X) tells which methods are safe for the fabric. Send a photo of the couch and its tag for a quick quote.",
      ],
    },
    {
      slug: "rug-cleaning",
      name: "Rug cleaning",
      summary: "Area rug cleaning for wool, synthetic and natural-fiber rugs, checked for dye and fiber first.",
      body: [
        "Wool rugs can shrink, jute and sisal can brown and some dyes bleed when wet. Every rug is checked first. Send the size, material and a photo of the label with your request.",
      ],
    },
    {
      slug: "tile-and-grout-cleaning",
      name: "Tile and grout cleaning",
      summary: "Hot rinse cleaning for tile and grout in kitchens, baths, entries and laundry rooms.",
      body: [
        "Grout soaks up mop water and slowly turns gray or brown. A hot, high-pressure rinse with a recovery tool lifts the dirt out, and sealing afterward helps it stay clean.",
      ],
    },
  ]), answers.services),
  areas: withAnswers(areas, answers.areas),
  guides: withAnswers(guides, answers.guides),
  faqs: [
    {
      q: "What does carpet cleaning cost in Spring, TX?",
      a: "It depends on how many rooms, the stairs and any pet or stain treatment. Send those through the quote form and you'll get a total for the whole job before anyone comes out.",
    },
    {
      q: "What parts of Spring do you cover?",
      a: "ZIP codes 77373, 77379, 77386, 77388 and 77389, including Old Town Spring, Gleannloch Farms, Champion Forest and Klein, plus Westfield and Humble.",
    },
    {
      q: "Can you clean just the upstairs?",
      a: "Yes. Many Spring homes have tile or wood downstairs and carpet upstairs. Tell us the rooms, stairs and landing and you'll get a price for just that.",
    },
    {
      q: "My carpet got wet from a leak. Can you clean it?",
      a: "For a small, clean-water leak that's been dried quickly, usually yes. Carpet that sat in flood water or a sewage backup should be handled by a water damage restoration company and is often replaced.",
    },
    {
      q: "How long does carpet take to dry?",
      a: "Usually 4 to 8 hours. Keep the AC on and fans running. Socks are fine sooner; wait on furniture until it's dry.",
    },
    {
      q: "Can I send photos instead of a visit?",
      a: "Yes, up to five with your quote request. Photos of spots, the stairs and furniture tags make a firm price possible.",
    },
  ],
}
