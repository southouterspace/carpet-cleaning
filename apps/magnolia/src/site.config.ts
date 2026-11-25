import { resolveFlags, withAnswers, type SiteConfig } from "@carpet/seo"
import { answers } from "./answers"
import { areas, guides, withMoreContent } from "./content"

/**
 * Magnolia city site. Everything on the site comes from this file.
 *
 * Before launch:
 * - `phone` is a placeholder (555-01xx is reserved fictional) and stays
 *   hidden while the phoneCalls flag is off. Set the renter's forwarding
 *   number before turning that flag on.
 * - Add `hours`, `priceFrom` and `operator` once a renter confirms them.
 *   Never add an address, reviews or prices the renter can't back up.
 */
export const site: SiteConfig = {
  id: "magnolia",
  name: "Magnolia Carpet Cleaning",
  url: "https://magnoliatxcarpetcleaning.com",
  tagline:
    "Carpet, couch and rug cleaning for Magnolia, TX, from new homes in Audubon to farmhouses on acreage off FM 1488 and FM 1774.",
  phone: "+19365550120",
  city: "Magnolia",
  region: "TX",
  serviceArea: {
    towns: ["Magnolia", "Pinehurst", "Stagecoach", "Todd Mission", "Decker Prairie"],
    zips: ["77354", "77355"],
    neighborhoods: [
      "Downtown Magnolia",
      "Audubon",
      "High Meadow Ranch",
      "Lake Windcrest",
      "Mostyn Manor",
      "Magnolia Ridge",
    ],
  },
  hours: [],
  // Date the copy was last reviewed. Bump it when the content changes.
  updated: "2026-11-25",
  // Short, specific facts for the home page "At a glance" block and llms.txt.
  facts: [
    { label: "Homes we see most", value: "New builds in master-planned communities and older homes on acreage" },
    { label: "Typical drying time", value: "5 to 8 hours; run the AC and ceiling fans to speed it up" },
    { label: "Mud and sand", value: "Long drives and pastures track in grit, so entries and halls get pre-treated" },
    { label: "How often to clean", value: "Once a year for most homes, every 6 months with dogs that go in and out" },
    {
      label: "Advertised local prices",
      value: "$88 to $225 for three rooms, most near $140, from 13 of 54 local cleaners' websites (Nov 2026); other companies' prices, not a quote",
      requires: "priceRanges",
    },
    { label: "Getting a price", value: "Send the rooms, stairs and spots online and get one price before anyone drives out" },
    { label: "Photos", value: "Add up to 5 photos to the quote form for a firmer price", requires: "photoUpload" },
  ],
  leadEndpoint: "/api/lead",
  turnstileSiteKey: "0x4AAAAAAF9mIQ55cQuaXFQr",
  // Per-site flag overrides go in the first argument; FLAG_* env vars win at build time.
  flags: resolveFlags({ photoUpload: true }, process.env),
  theme: { accent: "#7a2a57", accentDark: "#561b3c" },
  // Longer sections and the extra services live in content.ts.
  services: withAnswers(withMoreContent([
    {
      slug: "carpet-cleaning",
      name: "Carpet cleaning",
      summary: "Deep carpet cleaning for bedrooms, living rooms, halls and game rooms in Magnolia homes.",
      body: [
        "Out here, dirt comes in from more places: a gravel drive, a pasture, a back porch that opens onto a big yard. Most of it is fine sand that settles at the base of the carpet and wears the fibers down where people walk most.",
        "A deep cleaning starts with pre-treating the entries, halls and any spots, then rinses the carpet with hot water and pulls the soil back out. The pile gets groomed at the end so it dries evenly and stands up again.",
        "Tell us the number of rooms, any stairs and the spots that bother you, and you'll get a price before anyone drives out.",
      ],
      faqs: [
        {
          q: "Will cleaning make my carpet get dirty faster?",
          a: "Not when it's rinsed well. Carpet gets dirty fast after a cleaning when soap is left behind, which is common with rental machines. A proper hot water rinse leaves nothing sticky in the fibers.",
        },
      ],
    },
    {
      slug: "new-home-carpet-care",
      name: "New home carpet care",
      summary: "First cleanings and protector for builder-grade carpet in Audubon and Magnolia's other newer communities.",
      body: [
        "Builder-grade carpet looks fine on move-in day but tends to mat down in the first few years, especially on stairs and in the main hall. A first cleaning before the traffic lanes show, and once a year after that, keeps it looking newer longer.",
        "Most new carpet warranties ask for professional hot water cleaning at set intervals, often every 12 to 24 months. Check your warranty paperwork, and keep the receipt from each cleaning in case you ever need to make a claim.",
      ],
      faqs: [
        {
          q: "Do I need to clean new carpet to keep the warranty?",
          a: "Many carpet warranties require professional hot water extraction every 12 to 24 months. The exact rule is in your warranty papers, and a dated receipt is usually the proof they ask for.",
        },
      ],
    },
    {
      slug: "pet-urine-odor",
      name: "Pet urine and odor",
      summary: "Treatment that reaches pet urine in the pad, for dogs, cats and the smells that come back on humid days.",
      body: [
        "Pet urine doesn't stay on top of the carpet. It runs into the pad and sometimes the subfloor, and the smell comes back each time the house gets humid. Surface shampoo can't reach it.",
        "Treatment starts by finding the spots, often with a UV light, then puts an enzyme or oxidizing treatment down to the depth the urine went. Pad that has been soaked over and over may need replacing, and you'll know that, and the cost, before work starts.",
      ],
    },
    {
      slug: "upholstery-cleaning",
      name: "Couch and upholstery cleaning",
      summary: "Cleaning for couches, sectionals, recliners and dining chairs, matched to the fabric's cleaning code.",
      body: [
        "Couches collect body oil on the arms and headrests, crumbs in the seams and pet hair everywhere. The tag under the cushion has a code (W, S, WS or X) that says which cleaning methods the fabric can take.",
        "Send a photo of the couch and its tag with your request and you'll get the quickest, most accurate quote.",
      ],
    },
    {
      slug: "tile-and-grout-cleaning",
      name: "Tile and grout cleaning",
      summary: "Hot rinse cleaning for tile and grout in kitchens, baths, mudrooms and entries.",
      body: [
        "Mop water carries dirt into grout lines, so grout slowly turns darker than the tile around it. A hot, high-pressure rinse with a recovery tool lifts that dirt out. Sealing afterward helps the grout stay lighter for longer.",
        "Back doors and mudrooms that see boots and dogs every day usually show the biggest change.",
      ],
    },
    {
      slug: "area-rug-cleaning",
      name: "Area rug cleaning",
      summary: "Cleaning for wool, cotton, jute and synthetic area rugs, with fiber and dye checked first.",
      body: [
        "Area rugs vary a lot. Wool, cotton, jute and synthetic rugs each need a different approach, and some older or hand-made rugs can bleed dye if they get too wet. Send the size and material, or a photo of the label, when you ask for a quote.",
      ],
    },
  ]), answers.services),
  areas: withAnswers(areas, answers.areas),
  guides: withAnswers(guides, answers.guides),
  faqs: [
    {
      q: "How much does carpet cleaning cost in Magnolia, TX?",
      a: "It depends on how many rooms, whether there are stairs, and how much spot or pet work is needed. Send those details through the quote form and you'll get one price for the whole job before anyone comes out.",
    },
    {
      q: "Do you come out to homes on acreage outside town?",
      a: "Yes. The service area covers Magnolia's ZIP codes 77354 and 77355, including homes off FM 1488, FM 1774 and the county roads around them. Mention a gate code or a long drive in your request.",
    },
    {
      q: "Do you clean in Audubon and High Meadow Ranch?",
      a: "Yes, along with Lake Windcrest, Mostyn Manor, Magnolia Ridge, downtown Magnolia, and nearby Pinehurst, Stagecoach and Todd Mission.",
    },
    {
      q: "How long does carpet take to dry?",
      a: "Usually 5 to 8 hours. Running the AC and ceiling fans helps, and socks are fine on it sooner. Wait to put furniture back until it's dry.",
    },
    {
      q: "Can you get mud and red dirt out of carpet?",
      a: "Most of the time. Let dried mud harden completely, vacuum up as much as you can, and don't scrub it while it's wet. Red dirt stains get a treatment made for them before the rinse.",
    },
    {
      q: "Can I send photos instead of having someone come look?",
      a: "Yes. The quote form takes up to five photos. Photos of stains, rugs and furniture tags make a firm price possible without a visit.",
    },
  ],
}
