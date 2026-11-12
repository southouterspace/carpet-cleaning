import { resolveFlags, type SiteConfig } from "@carpet/seo"

/**
 * The Woodlands city site. Everything on the site comes from this file.
 *
 * Before launch:
 * - `phone` is a placeholder (555-01xx is reserved fictional) and stays
 *   hidden while the phoneCalls flag is off. Set the renter's forwarding
 *   number before turning that flag on.
 * - Add `hours`, `priceFrom` and `operator` once a renter confirms them.
 *   Never add an address, reviews or prices the renter can't back up.
 */
export const site: SiteConfig = {
  id: "woodlands",
  name: "Woodlands Carpet Cleaning",
  url: "https://woodlandscarpetcleaning.com",
  tagline:
    "Carpet, stair, upholstery and rug cleaning for homes in every village of The Woodlands, TX.",
  phone: "+12815550100",
  city: "The Woodlands",
  region: "TX",
  serviceArea: {
    towns: ["The Woodlands", "Shenandoah", "Oak Ridge North", "Spring", "Conroe"],
    zips: ["77380", "77381", "77382", "77384", "77385", "77389"],
    neighborhoods: [
      "Grogan's Mill",
      "Panther Creek",
      "Cochran's Crossing",
      "Indian Springs",
      "Alden Bridge",
      "Sterling Ridge",
      "College Park",
      "Creekside Park",
    ],
  },
  hours: [],
  leadEndpoint: "/api/lead",
  turnstileSiteKey: "0x4AAAAAAF9mIQ55cQuaXFQr",
  // Per-site flag overrides go in the first argument; FLAG_* env vars win at build time.
  flags: resolveFlags({ photoUpload: true }, process.env),
  theme: { accent: "#2b6a3d", accentDark: "#1c4a29" },
  services: [
    {
      slug: "carpet-cleaning",
      name: "Whole-home carpet cleaning",
      summary:
        "Hot water extraction for bedrooms, game rooms, living areas and hallways in Woodlands homes.",
      body: [
        "Homes in The Woodlands tend to have a lot of carpet upstairs: bedrooms, a game room, a media room and the landing that ties them together. Those rooms see daily traffic from kids and pets, and the pine pollen that coats everything each spring gets tracked in and worked into the pile.",
        "A whole-home cleaning starts with a quick walk-through to mark spots and traffic lanes. Those get pre-treated, then each room is cleaned with hot water extraction, which rinses the soil out instead of just lifting the top layer. The carpet is groomed at the end so it dries evenly and looks uniform.",
        "With the AC running, most rooms are dry enough to walk on in a few hours. Send your room count and whether the upstairs is carpeted, and you'll get a price before anyone shows up.",
      ],
      faqs: [
        {
          q: "Do I need to be home during the cleaning?",
          a: "Someone needs to let the crew in and do the walk-through. After that, many people work from another room or step out until it's done.",
        },
        {
          q: "Will cleaning make my carpet get dirty faster?",
          a: "Not when it's rinsed properly. Resoiling happens when shampoo residue is left behind, which is why a rinse with hot water extraction matters.",
        },
      ],
    },
    {
      slug: "stair-carpet-cleaning",
      name: "Stair and landing cleaning",
      summary:
        "Step-by-step cleaning for carpeted staircases and upstairs landings, the dirtiest carpet in most two-story homes.",
      body: [
        "Stairs take more foot traffic per square foot than any room in the house, and every step has an edge where dirt grinds in. A standard carpet wand can't reach them well, so stairs are cleaned with a hand tool, one tread and riser at a time.",
        "Most two-story homes in The Woodlands have at least one carpeted staircase, and many have two. Mention how many in your quote request so the price covers them.",
      ],
      faqs: [
        {
          q: "Are stairs priced separately?",
          a: "Usually, yes. Stairs take longer than an open room, so most cleaners price them by the staircase. Tell us how many you have and you'll get one number for the whole job.",
        },
      ],
    },
    {
      slug: "pet-stain-odor-treatment",
      name: "Pet stain and odor treatment",
      summary:
        "Targets urine that has soaked into the pad, so the smell doesn't come back after a humid week.",
      body: [
        "Urine wicks down through the carpet into the pad and subfloor. A surface clean can make a spot look better while the odor keeps coming back, especially in Houston-area humidity. The fix is to find where it went and treat the source with an enzyme or oxidizing treatment.",
        "Old or repeated spots can leave a permanent stain or need a section of pad replaced. You'll hear that before any work starts, not after.",
      ],
    },
    {
      slug: "upholstery-cleaning",
      name: "Sofa and upholstery cleaning",
      summary: "Cleaning for sofas, sectionals, recliners, ottomans and dining chairs.",
      body: [
        "Upholstery picks up body oils, spills and pet hair, and the method has to match the fabric. The cleaning code on the tag (W, S, WS or X) decides whether water can be used at all.",
        "A photo of the piece and its tag gets you the most accurate quote.",
      ],
    },
    {
      slug: "area-rug-cleaning",
      name: "Area rug cleaning",
      summary: "Careful cleaning for wool, silk-blend, synthetic and machine-made rugs.",
      body: [
        "Area rugs over hardwood and tile are common in Woodlands homes, and they need gentler handling than wall-to-wall carpet. Wool can shrink, and some dyes bleed if they get too wet, so the rug's fiber and construction are checked first.",
        "Share the size and, if you know it, the material when you ask for a quote.",
      ],
    },
    {
      slug: "tile-and-grout-cleaning",
      name: "Tile and grout cleaning",
      summary: "Brings grout lines in kitchens, baths, mudrooms and entryways back to their real color.",
      body: [
        "Mopping pushes dirty water into grout, so it gets darker every year. A pressurized hot rinse clears out what a mop can't, and an optional sealer slows down how fast it soils again.",
      ],
    },
  ],
  faqs: [
    {
      q: "How much does carpet cleaning cost in The Woodlands?",
      a: "It depends on the number of rooms, how many staircases you have, and whether any spots need pet or stain treatment. Send a quote request with those details and you'll get an exact price before any work starts.",
    },
    {
      q: "Which villages and ZIP codes do you cover?",
      a: "All of The Woodlands, from Grogan's Mill and Panther Creek to Sterling Ridge and Creekside Park, in ZIP codes 77380, 77381, 77382, 77384, 77385 and 77389. Shenandoah, Oak Ridge North and nearby parts of Spring and Conroe are covered too.",
    },
    {
      q: "When is the best time of year to clean carpet here?",
      a: "Late spring, after the yellow pine pollen settles, is a popular time. Before the holidays is the other busy stretch, so book early if you're hosting.",
    },
    {
      q: "Is the cleaning safe for kids and pets?",
      a: "Yes. Hot water extraction mostly uses heat and water. Ask about specific products if anyone in the home has sensitivities, and keep pets off the carpet until it's dry.",
    },
    {
      q: "How soon can someone come out?",
      a: "It depends on the week. Pick a timeframe on the quote form and you'll hear back with the first open slot.",
    },
  ],
}
