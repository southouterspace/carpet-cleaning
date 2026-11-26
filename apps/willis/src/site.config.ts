import { resolveFlags, type SiteConfig, withAnswers, withAreaDetail } from "@carpet/seo"
import { answers } from "./answers"
import { areaDetail } from "./local"
import { areas, guides, withMoreContent } from "./content"

/**
 * Willis city site. Everything on the site comes from this file.
 *
 * Before launch:
 * - `phone` is a placeholder (555-01xx is reserved fictional) and stays
 *   hidden while the phoneCalls flag is off. Set the renter's forwarding
 *   number before turning that flag on.
 * - Add `hours`, `priceFrom` and `operator` once a renter confirms them.
 *   Never add an address, reviews or prices the renter can't back up.
 */
export const site: SiteConfig = {
  id: "willis",
  name: "Willis Carpet Cleaning",
  url: "https://williscarpetcleaning.com",
  tagline:
    "Carpet and upholstery cleaning in Willis, TX, for homes along I-45, new builds in The Woodlands Hills and houses on the east side of Lake Conroe.",
  phone: "+19365550130",
  city: "Willis",
  region: "TX",
  serviceArea: {
    towns: ["Willis", "New Waverly", "Panorama Village", "Conroe", "Coldspring"],
    zips: ["77378", "77318"],
    neighborhoods: [
      "Downtown Willis",
      "The Woodlands Hills",
      "Seven Coves",
      "Point Aquarius",
    ],
  },
  hours: [],
  // Date the copy was last reviewed. Bump it when the content changes.
  updated: "2026-11-25",
  // Short, specific facts for the home page "At a glance" block and llms.txt.
  facts: [
    { label: "Dry time", value: "About 4 to 8 hours with the AC running" },
    { label: "Move-outs", value: "Carpet cleaned after the movers and before the walk-through, with a dated receipt" },
    { label: "How often", value: "Every 12 to 18 months for most homes; every 6 to 12 with pets or a lake dog" },
    {
      label: "Advertised local prices",
      value: "$88 to $225 for three rooms, most near $140, from 13 of 54 local cleaners' websites (Nov 2026); other companies' prices, not a quote",
      requires: "priceRanges",
    },
    { label: "Quotes", value: "Free and online; you get the full price before anyone comes out" },
    { label: "Photos", value: "Up to 5 photos can go with your quote request", requires: "photoUpload" },
  ],
  leadEndpoint: "/api/lead",
  turnstileSiteKey: "0x4AAAAAAF9mIQ55cQuaXFQr",
  // Per-site flag overrides go in the first argument; FLAG_* env vars win at build time.
  flags: resolveFlags({ photoUpload: true }, process.env),
  theme: { accent: "#1d4a7a", accentDark: "#123257" },
  // Longer sections and the extra services live in content.ts.
  services: withAnswers(withMoreContent([
    {
      slug: "carpet-cleaning",
      name: "Carpet cleaning",
      summary: "Hot water extraction for whole homes or a few rooms in Willis, TX.",
      body: [
        "Carpet holds a lot more than it shows. Dust, sand and skin oils build up at the base of the fibers for months before a room looks dirty, and by then the traffic lanes are already dull.",
        "The cleaning is straightforward: vacuum and pre-treat the lanes and spots, rinse with hot water while strong suction pulls the dirty water back out, then groom the pile so it dries standing up. Most rooms are dry by evening.",
        "Send the rooms, stairs and anything you're worried about through the form for a full price up front.",
      ],
      faqs: [
        {
          q: "Do I need to vacuum before you come?",
          a: "It helps but isn't required. Picking up toys, shoes and small items from the floor is the bigger help, so every room can be reached.",
        },
      ],
    },
    {
      slug: "pet-stain-odor-removal",
      name: "Pet stain and odor removal",
      summary: "Finds pet urine in carpet and pad and treats it at the depth it soaked to.",
      body: [
        "A urine spot that looks gone but still smells has reached the pad. Heat and humidity bring the odor back, which is why it's worse in a Texas summer. Treating the surface alone won't stop it.",
        "Spots are located first, then treated with an enzyme or oxidizing product at the depth the urine went. Badly soaked pad may need a section replaced, and you'll know before any work starts.",
      ],
    },
    {
      slug: "upholstery-cleaning",
      name: "Upholstery cleaning",
      summary: "Couches, loveseats, sectionals and chairs, cleaned the way their fabric tag allows.",
      body: [
        "Upholstery gets the same dirt as carpet plus body oil, so arms and headrests darken first. The fabric tag code (W, S, WS or X) decides the method. A photo of the piece and its tag gets you the most accurate quote.",
      ],
    },
    {
      slug: "rug-cleaning",
      updated: "2026-11-26",
      name: "Rug cleaning",
      summary: "Area rug cleaning for wool, synthetic, cotton and natural-fiber rugs.",
      body: [
        "Rugs are checked for fiber and dye before cleaning, because wool can shrink, natural fibers can brown and some dyes run. Send the size and a photo of the label with your quote request.",
      ],
    },
    {
      slug: "tile-grout-cleaning",
      updated: "2026-11-26",
      name: "Tile and grout cleaning",
      summary: "Deep cleaning that brings grout lines in kitchens, baths and entries back toward their original color.",
      body: [
        "Grout is porous, so it soaks up dirty mop water and darkens over time. A hot, high-pressure rinse lifts the dirt out of the lines, and a sealer afterward slows it from coming back.",
      ],
    },
  ]), answers.services),
  areas: withAnswers(withAreaDetail(areas, areaDetail, "2026-11-26"), answers.areas),
  guides: withAnswers(guides, answers.guides),
  faqs: [
    {
      q: "What does carpet cleaning cost in Willis, TX?",
      a: "It's priced by the number of rooms and stairs, plus any pet or stain treatment. Send the details through the quote form and you'll get the full price before anyone comes out.",
    },
    {
      q: "Do you clean on the east side of Lake Conroe?",
      a: "Yes. The service area includes Seven Coves, Point Aquarius and the other lake neighborhoods in the Willis ZIP codes, plus The Woodlands Hills, downtown Willis, New Waverly and Panorama Village.",
    },
    {
      q: "Can you clean carpet before I move out of a rental?",
      a: "Yes. Book it after the movers leave and before your walk-through, and keep the dated receipt. Many leases ask for proof of professional cleaning.",
    },
    {
      q: "How soon can I walk on the carpet?",
      a: "Right away in clean socks. Shoes and furniture should wait until it's dry, usually 4 to 8 hours with the AC on.",
    },
    {
      q: "Will the cleaning get out a smell from my dog?",
      a: "General dog smell usually comes out with a thorough rinse and deodorizer. Urine is different and needs treatment at the pad; mention it in your request so it's planned for.",
    },
    {
      q: "Can I send photos with my request?",
      a: "Yes, up to five. Photos of spots, rugs and furniture tags help you get a firm price without a visit.",
    },
  ],
}
