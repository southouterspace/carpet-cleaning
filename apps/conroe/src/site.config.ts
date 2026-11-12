import { resolveFlags, type SiteConfig } from "@carpet/seo"

/**
 * Conroe city site. Everything on the site comes from this file.
 *
 * Before launch:
 * - `phone` is a placeholder (555-01xx is reserved fictional) and stays
 *   hidden while the phoneCalls flag is off. Set the renter's forwarding
 *   number before turning that flag on.
 * - Add `hours`, `priceFrom` and `operator` once a renter confirms them.
 *   Never add an address, reviews or prices the renter can't back up.
 */
export const site: SiteConfig = {
  id: "conroe",
  name: "Conroe TX Carpet Cleaners",
  url: "https://conroetxcarpetcleaners.com",
  tagline:
    "Carpet, upholstery, rug and tile cleaning for homes and rentals in Conroe, TX and nearby towns.",
  phone: "+19365550100",
  city: "Conroe",
  region: "TX",
  serviceArea: {
    towns: ["Conroe", "Montgomery", "Willis", "Panorama Village", "Shenandoah"],
    zips: ["77301", "77302", "77303", "77304", "77306", "77384", "77385"],
    neighborhoods: [
      "Downtown Conroe",
      "Grand Central Park",
      "Artavia",
      "Harper's Preserve",
      "River Plantation",
      "Woodforest",
      "Lake Conroe",
    ],
  },
  hours: [],
  leadEndpoint: "/api/lead",
  turnstileSiteKey: "0x4AAAAAAF9mIQ55cQuaXFQr",
  // Per-site flag overrides go in the first argument; FLAG_* env vars win at build time.
  flags: resolveFlags({}, process.env),
  theme: { accent: "#0a6672", accentDark: "#064a53" },
  services: [
    {
      slug: "carpet-cleaning",
      name: "Carpet cleaning",
      summary:
        "Deep cleaning for wall-to-wall carpet in bedrooms, living rooms, stairs and hallways.",
      body: [
        "Most carpet in Conroe homes needs a deep clean every 12 to 18 months, and sooner with kids, pets or a lot of foot traffic. Regular vacuuming lifts surface dirt, but the grit and oils that make carpet look dull settle deep in the fibers.",
        "A cleaning starts with a walk-through to spot stains and high-traffic paths, then pre-treatment, a hot water rinse to pull the soil out, and a final grooming so the pile dries evenly. Most rooms are dry enough to walk on in a few hours.",
        "Tell us how many rooms and whether there are stairs, and we'll give you a price before any work starts.",
        "Newer homes in Grand Central Park, Artavia and Harper's Preserve often have builder-grade carpet with a lighter color and a thinner pile. It shows traffic lanes early, and regular deep cleaning keeps it looking newer for longer. Older homes closer to downtown and along the river tend to need more spot and odor work.",
      ],
      faqs: [
        {
          q: "How long does carpet take to dry?",
          a: "Usually 4 to 8 hours, depending on humidity and airflow. Running the AC or ceiling fans speeds it up.",
        },
        {
          q: "Do I need to move furniture first?",
          a: "Clear small items, breakables and anything on the floor. Ask about larger pieces when you book.",
        },
        {
          q: "Does Conroe's humidity slow down drying?",
          a: "It can in summer. Keep the AC on and the doors closed, and run ceiling fans. That pulls moisture out faster than opening windows.",
        },
      ],
    },
    {
      slug: "pet-odor-removal",
      name: "Pet urine and odor removal",
      summary:
        "Treatment for pet urine and odor that soaks below the carpet surface.",
      body: [
        "Pet urine soaks through carpet into the pad, which is why the smell comes back after a surface clean. Odor treatment targets the source with an enzyme or oxidizing treatment where the urine actually went.",
        "Old or repeated spots can leave permanent stains or need the pad replaced. We'll tell you honestly what to expect before we start.",
        "Mention how many spots you know about and how old they are when you ask for a quote. If you are not sure where they all are, ask whether a UV light check can be done during the walk-through to find the ones you can't see.",
      ],
      faqs: [
        {
          q: "Will the smell come back after cleaning?",
          a: "Not if the urine in the pad is treated, not just the carpet surface. Very old or repeated spots sometimes need a section of pad replaced, and you'll hear that before any work starts.",
        },
        {
          q: "Is the treatment safe for my pets?",
          a: "Yes, once it's dry. Keep pets off treated areas until then, usually a few hours.",
        },
      ],
    },
    {
      slug: "upholstery-cleaning",
      name: "Couch and upholstery cleaning",
      summary: "Cleaning for couches, sectionals, recliners, loveseats and dining chairs.",
      body: [
        "Upholstery collects body oils, food spills and pet hair. The right method depends on the fabric, so the cleaning code on the tag (W, S, WS or X) is checked first.",
        "Send a photo of the piece and its tag with your quote request for the fastest price.",
        "Microfiber couches, which are common in family rooms, usually clean up well but can water-spot if handled wrong. Leather is a different process, so mention it if that's what you have.",
      ],
    },
    {
      slug: "tile-and-grout-cleaning",
      name: "Tile and grout cleaning",
      summary:
        "Restores dingy grout lines in kitchens, bathrooms and entryways.",
      body: [
        "Grout is porous, so mopping pushes dirty water into the lines over time. Tile and grout cleaning uses a pressurized rinse to clear what a mop can't, with optional sealing to keep it clean longer.",
        "It works on ceramic and porcelain tile. Natural stone, such as travertine, needs gentler products, so let us know the floor type when you ask for a quote.",
      ],
    },
    {
      slug: "area-rug-cleaning",
      name: "Area rug cleaning",
      summary: "Cleaning for wool, synthetic and machine-made area rugs.",
      body: [
        "Area rugs need gentler handling than wall-to-wall carpet, especially wool and hand-made rugs that can bleed or shrink. Let us know the size and material when you ask for a quote.",
        "Rugs over hardwood or tile collect more grit than you'd expect, because there's no carpet around them to trap it. Cleaning once a year keeps that grit from wearing down the fibers.",
      ],
    },
    {
      slug: "move-out-carpet-cleaning",
      name: "Move-out carpet cleaning",
      summary:
        "Carpet cleaning for renters, landlords and sellers around Lake Conroe.",
      body: [
        "Many leases require professional carpet cleaning at move-out, and a clean carpet helps a listing show well. Tell us your move-out date and we'll fit the cleaning in before the walk-through.",
        "Property managers with several units can ask about scheduling turnovers on a regular basis.",
        "Ask your landlord or property manager whether they need a receipt from the cleaning. Many leases do, and it's easy to request when you book.",
      ],
    },
  ],
  faqs: [
    {
      q: "How much does carpet cleaning cost in Conroe?",
      a: "Price depends on the number of rooms, stairs and any stain or odor treatment. Call or send a quote request with your room count for an exact price before any work starts.",
    },
    {
      q: "What areas do you serve?",
      a: "Conroe and nearby towns including Montgomery, Willis, Panorama Village and Shenandoah, including Grand Central Park, Artavia, Woodforest and homes around Lake Conroe.",
    },
    {
      q: "How often should carpet be cleaned?",
      a: "Most homes should deep clean carpet every 12 to 18 months. Homes with pets, kids or allergies benefit from every 6 to 12 months.",
    },
    {
      q: "Do you clean new-construction homes in Grand Central Park and Artavia?",
      a: "Yes. Builder carpet in new homes is often light colored and shows traffic lanes within the first year or two, so many owners schedule a deep clean early.",
    },
    {
      q: "Can I get carpet cleaned before I move out?",
      a: "Yes. Tell us your move-out date and whether your lease requires a receipt, and the cleaning will be scheduled before your walk-through.",
    },
    {
      q: "Can you get out pet urine smell?",
      a: "Usually, yes. Odor treatment targets urine that has soaked into the pad. Very old or repeated spots may need the pad replaced, and we'll tell you before we start.",
    },
  ],
}
