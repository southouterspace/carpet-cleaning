import { resolveFlags, withAnswers, type SiteConfig } from "@carpet/seo"
import { answers } from "./answers"
import { areas, guides, withMoreContent } from "./content"

/**
 * Tomball city site. Everything on the site comes from this file.
 *
 * Before launch:
 * - `phone` is a placeholder (555-01xx is reserved fictional) and stays
 *   hidden while the phoneCalls flag is off. Set the renter's forwarding
 *   number before turning that flag on.
 * - Add `hours`, `priceFrom` and `operator` once a renter confirms them.
 *   Never add an address, reviews or prices the renter can't back up.
 */
export const site: SiteConfig = {
  id: "tomball",
  name: "Tomball Carpet Cleaning",
  url: "https://tomballtxcarpetcleaning.com",
  tagline:
    "Carpet, sofa, rug and tile cleaning in Tomball, TX, for older homes near Main Street, family homes in Northpointe and places out toward Rosehill.",
  phone: "+12815550140",
  city: "Tomball",
  region: "TX",
  serviceArea: {
    towns: ["Tomball", "Pinehurst", "Klein", "Cypress", "Hockley"],
    zips: ["77375", "77377"],
    neighborhoods: ["Downtown Tomball", "Northpointe", "Rosehill"],
  },
  hours: [],
  // Date the copy was last reviewed. Bump it when the content changes.
  updated: "2026-11-25",
  // Short, specific facts for the home page "At a glance" block and llms.txt.
  facts: [
    { label: "Drying", value: "Usually 4 to 8 hours; AC and ceiling fans shorten it" },
    { label: "Older homes", value: "Rugs and older carpet get a fiber and dye check before any cleaning" },
    { label: "How often", value: "Every 12 to 18 months, or every 6 to 12 with pets and kids" },
    {
      label: "Advertised local prices",
      value: "$88 to $225 for three rooms, most near $140, from 13 of 54 local cleaners' websites (Nov 2026); other companies' prices, not a quote",
      requires: "priceRanges",
    },
    { label: "Quote", value: "Free, online, with the total before anyone drives over" },
    { label: "Photos", value: "Attach up to 5 photos for a firmer price", requires: "photoUpload" },
  ],
  leadEndpoint: "/api/lead",
  turnstileSiteKey: "0x4AAAAAAF9mIQ55cQuaXFQr",
  // Per-site flag overrides go in the first argument; FLAG_* env vars win at build time.
  flags: resolveFlags({ photoUpload: true }, process.env),
  theme: { accent: "#8a4a0c", accentDark: "#5e3206" },
  // Longer sections and the extra services live in content.ts.
  services: withAnswers(withMoreContent([
    {
      slug: "carpet-cleaning",
      name: "Carpet cleaning",
      summary: "Deep, hot water carpet cleaning for Tomball homes, priced by the room before anyone comes out.",
      body: [
        "Vacuuming takes care of what's on top. The soil that makes carpet look tired sits lower, stuck to the fibers with oils from feet, cooking and the air. Hot water and a cleaning rinse loosen it, and strong suction carries it out.",
        "Every job starts with a walk-through of the rooms and spots, then pre-treatment, the rinse and a final grooming pass. Most carpet is dry the same day.",
        "Fill in the quote form with your rooms, stairs and any spots, and you'll get one price for all of it.",
      ],
      faqs: [
        {
          q: "Is hot water extraction the same as steam cleaning?",
          a: "Yes, mostly. Steam cleaning is the common name for hot water extraction. The water is hot, not actual steam, and it's the method most carpet makers recommend.",
        },
      ],
    },
    {
      slug: "pet-odor-treatment",
      name: "Pet odor treatment",
      summary: "Urine and pet odor treatment that goes to the pad, where the smell is coming from.",
      body: [
        "Most of a pet accident ends up in the pad under the carpet. That's why the spot can look fine and still smell, and why the smell gets worse when it's humid. The fix is treating the pad, not perfuming the top.",
        "Spots are found first, then treated at the depth the urine went with an enzyme or oxidizing product. Pad that's been soaked many times may need replacing. You'll know before work starts.",
      ],
    },
    {
      slug: "sofa-cleaning",
      name: "Sofa and upholstery cleaning",
      summary: "Cleaning for sofas, sectionals, recliners and chairs, using the method the fabric tag calls for.",
      body: [
        "Sofas darken where people rest their heads and arms, from body oils that soak into the fabric. The tag code (W, S, WS or X) says which cleaning methods are safe. Send a photo of the piece and the tag for a quick quote.",
      ],
    },
    {
      slug: "area-rug-cleaning",
      name: "Area rug cleaning",
      summary: "Cleaning for wool, cotton, synthetic and natural-fiber rugs, with dyes tested first.",
      body: [
        "Older and hand-made rugs can bleed dye or shrink if they're cleaned like wall-to-wall carpet. Every rug is checked for fiber and dye stability first. Send the size, material and a photo when you request a quote.",
      ],
    },
    {
      slug: "tile-and-grout",
      name: "Tile and grout",
      summary: "Hot rinse cleaning and optional sealing for tile and grout in kitchens, baths and entries.",
      body: [
        "Grout soaks up mop water and the dirt in it, so it darkens a little every week. A hot, high-pressure rinse lifts that dirt out of the lines. Sealing afterward helps it stay cleaner.",
      ],
    },
  ]), answers.services),
  areas: withAnswers(areas, answers.areas),
  guides: withAnswers(guides, answers.guides),
  faqs: [
    {
      q: "How much is carpet cleaning in Tomball, TX?",
      a: "It depends on the number of rooms, stairs and any pet or stain work. Send those through the quote form and you'll get a total for the whole job before anyone comes out.",
    },
    {
      q: "Which parts of Tomball do you cover?",
      a: "All of Tomball's 77375 and 77377 ZIP codes, including downtown, Northpointe and Rosehill, plus Pinehurst, Klein, Cypress and Hockley.",
    },
    {
      q: "Can you clean an older or hand-made rug?",
      a: "Usually. Every rug gets a fiber and dye check first. Some rugs need a gentler method, and you'll hear about any risk before cleaning starts.",
    },
    {
      q: "How long until the carpet is dry?",
      a: "Most carpet dries in 4 to 8 hours. AC and ceiling fans help. Walk on it in clean socks, and wait on furniture until it's dry.",
    },
    {
      q: "Do you clean shops and offices?",
      a: "Yes. Small shops and offices can book before or after business hours so the floor is dry when doors open.",
    },
    {
      q: "Can I send photos with my quote request?",
      a: "Yes, up to five. Photos of stains, rugs and sofa tags help you get a firm price without a visit.",
    },
  ],
}
