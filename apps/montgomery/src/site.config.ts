import { resolveFlags, type SiteConfig } from "@carpet/seo"

/**
 * Montgomery city site. Everything on the site comes from this file.
 *
 * Before launch:
 * - `phone` is a placeholder (555-01xx is reserved fictional) and stays
 *   hidden while the phoneCalls flag is off. Set the renter's forwarding
 *   number before turning that flag on.
 * - Add `hours`, `priceFrom` and `operator` once a renter confirms them.
 *   Never add an address, reviews or prices the renter can't back up.
 */
export const site: SiteConfig = {
  id: "montgomery",
  name: "Montgomery Carpet Cleaning",
  url: "https://montgomerycarpetcleaning.com",
  tagline:
    "Carpet and upholstery cleaning for Montgomery, TX homes, lake houses and rentals on the west side of Lake Conroe.",
  phone: "+19365550110",
  city: "Montgomery",
  region: "TX",
  serviceArea: {
    towns: ["Montgomery", "Conroe", "Willis", "Magnolia", "Dobbin"],
    zips: ["77316", "77356"],
    neighborhoods: [
      "Historic downtown Montgomery",
      "Walden on Lake Conroe",
      "Bentwater",
      "April Sound",
      "Del Lago",
      "Grand Harbor",
      "Woodforest",
    ],
  },
  hours: [],
  leadEndpoint: "/api/lead",
  turnstileSiteKey: "0x4AAAAAAF9mIQ55cQuaXFQr",
  // Per-site flag overrides go in the first argument; FLAG_* env vars win at build time.
  flags: resolveFlags({}, process.env),
  theme: { accent: "#9a3a1b", accentDark: "#6b2610" },
  services: [
    {
      slug: "carpet-cleaning",
      name: "Carpet cleaning",
      summary:
        "Hot water extraction for living rooms, bedrooms and hallways in Montgomery, TX homes.",
      body: [
        "Sandy soil, red clay and a lot of time outdoors mean carpet in Montgomery picks up grit fast. That grit acts like sandpaper at the base of the fibers, which is why traffic lanes turn gray long before the rest of the room.",
        "Each cleaning starts with spot and lane pre-treatment, then a hot water rinse that pulls the loosened soil out of the carpet. A final grooming pass lifts the pile so it dries evenly. With the AC on, most carpet is ready to walk on the same afternoon.",
        "Use the quote form to tell us how many rooms and any problem spots, and you'll have a price before anyone comes out.",
      ],
      faqs: [
        {
          q: "Steam cleaning or dry cleaning: which is better?",
          a: "Most carpet manufacturers recommend hot water extraction, often called steam cleaning, because it rinses soil out instead of leaving it in the fibers. Low-moisture methods have a place for quick touch-ups between deep cleans.",
        },
      ],
    },
    {
      slug: "lake-house-rental-cleaning",
      name: "Lake house and rental turnovers",
      summary:
        "Carpet and upholstery cleaning between guests or seasons for Lake Conroe weekend homes and short-term rentals.",
      body: [
        "Lake houses take a beating: wet feet, sunscreen, sand and a new group of guests every weekend in summer. Carpet and furniture in a rental also show up in guest reviews and photos, so they need cleaning more often than a primary home.",
        "Tell us your check-out and check-in times and we'll fit the cleaning into the gap. Owners and managers with more than one property can ask about a regular schedule through the season.",
        "If you're closing up a lake house for the winter or opening it in spring, a cleaning then keeps musty smells from settling into the carpet and cushions.",
      ],
      faqs: [
        {
          q: "Can the cleaning be done when I'm not there?",
          a: "Often, yes. Many owners share a door code or lockbox. Let us know in your request and we'll confirm the details with you before the day.",
        },
        {
          q: "Will the carpet be dry before my next guests?",
          a: "Usually within 4 to 8 hours with the AC running. Mention your check-in time so the job is scheduled early enough.",
        },
      ],
    },
    {
      slug: "pet-odor-removal",
      name: "Pet odor and urine treatment",
      summary: "Finds and treats pet urine in the pad and subfloor, where the lasting smell comes from.",
      body: [
        "When a pet has an accident, most of it soaks past the carpet into the pad. That's why a spot can look clean and still smell, and why the odor gets stronger on humid days. Treatment goes to where the urine actually went, with an enzyme or oxidizing product made to break it down.",
        "Spots that have been soaked many times may need a section of pad replaced. You'll know what to expect and what it costs before work starts.",
      ],
    },
    {
      slug: "upholstery-cleaning",
      name: "Upholstery and couch cleaning",
      summary: "Cleaning for couches, sectionals, recliners and patio cushions.",
      body: [
        "Fabric furniture holds onto body oils, spills and pet hair, and lake-house furniture adds sunscreen and damp swimsuits. The cleaning code on the tag (W, S, WS or X) tells us what method the fabric can handle.",
        "Send a photo of the piece and the tag with your request for the quickest quote.",
      ],
    },
    {
      slug: "tile-and-grout-cleaning",
      name: "Tile and grout cleaning",
      summary: "Deep cleaning for tile floors and grout lines in kitchens, baths and entryways.",
      body: [
        "Grout soaks up mop water and the dirt in it, so it slowly turns darker than the tile. A hot pressure rinse clears it out, and sealing afterward helps it stay clean. It's a common add-on for lake houses with tile throughout.",
      ],
    },
    {
      slug: "area-rug-cleaning",
      name: "Area rug cleaning",
      summary: "Cleaning for wool, cotton, jute and synthetic area rugs.",
      body: [
        "Rugs vary more than wall-to-wall carpet. Wool and natural fibers need care so they don't shrink, brown or bleed. Tell us the size and material, or send a photo of the label, when you ask for a quote.",
      ],
    },
  ],
  faqs: [
    {
      q: "How much does carpet cleaning cost in Montgomery, TX?",
      a: "Price comes down to the number of rooms, any stairs, and whether spots need pet or stain treatment. Send the details through the quote form and you'll get an exact price before any work is done.",
    },
    {
      q: "Do you come out to Walden, Bentwater and April Sound?",
      a: "Yes. We cover Montgomery and the communities along the west side of Lake Conroe, including Walden, Bentwater, April Sound, Del Lago and Grand Harbor, plus nearby Conroe, Willis, Magnolia and Dobbin.",
    },
    {
      q: "Can you clean a rental between guests?",
      a: "Yes. Tell us the check-out and check-in times and we'll schedule the cleaning in between, with time for the carpet to dry.",
    },
    {
      q: "How long until I can walk on the carpet?",
      a: "Most carpet is dry in 4 to 8 hours. Running the AC and ceiling fans helps. Socks are fine sooner; wait on shoes and furniture until it's dry.",
    },
    {
      q: "What should I do before the cleaners arrive?",
      a: "Pick up small items, toys and anything breakable from the floor. Larger furniture can be discussed when you book.",
    },
  ],
}
