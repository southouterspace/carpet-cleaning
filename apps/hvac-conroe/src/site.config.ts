import { resolveFlags, type SiteConfig } from "@carpet/seo"
import { areas, guides, withMoreContent } from "./content"

/**
 * Conroe air conditioning site. Everything on the site comes from this file
 * and content.ts.
 *
 * Before launch:
 * - `phone` is a placeholder (555-01xx is reserved fictional) and stays
 *   hidden while the phoneCalls flag is off.
 * - Add `hours`, `priceFrom` and `operator` (and the renter's TDLR ACR
 *   license number in the copy) once a renter confirms them. Never add an
 *   address, reviews, prices or a license number the renter can't back up.
 */
export const site: SiteConfig = {
  id: "hvac-conroe",
  trade: "hvac",
  name: "Conroe TX AC",
  url: "https://conroetxac.com",
  tagline:
    "AC repair and replacement in Conroe, TX: systems that blow warm, freeze up or won't turn on, tune-ups before summer, heat pumps, furnaces and attic ductwork.",
  phone: "+19365550144",
  city: "Conroe",
  region: "TX",
  serviceArea: {
    towns: ["Conroe", "Shenandoah", "Oak Ridge North", "Panorama Village", "Cut and Shoot"],
    zips: ["77301", "77302", "77303", "77304", "77306", "77384", "77385"],
    neighborhoods: ["Downtown Conroe", "River Plantation", "Artavia", "Harper's Preserve"],
  },
  hours: [],
  updated: "2026-11-26",
  facts: [
    { label: "Licensing", value: "Air conditioning contractors in Texas are licensed by TDLR (an ACR license); look up the number on TDLR's website" },
    { label: "Refrigerants", value: "R-22 production ended in 2020, and new systems built since 2025 use newer refrigerants such as R-454B or R-32 instead of R-410A" },
    { label: "Efficiency ratings", value: "Since 2023, new systems are rated in SEER2, which reads lower than the old SEER for the same equipment" },
    { label: "Urgent jobs", value: "Pick \"Emergency\" on the form and the request is flagged as urgent" },
    { label: "Quotes", value: "Free to ask. You hear the price before work starts" },
  ],
  leadEndpoint: "/api/lead",
  turnstileSiteKey: "0x4AAAAAAF9mIQ55cQuaXFQr",
  flags: resolveFlags({ photoUpload: true }, process.env),
  theme: { accent: "#5b3a8c", accentDark: "#3b2560" },
  services: withMoreContent([
    {
      slug: "ac-repair",
      name: "AC repair",
      summary: "AC blowing warm, not turning on, freezing up, leaking water or tripping the breaker in Conroe, TX.",
      answer:
        "Check the easy things first: the thermostat is on Cool and set below room temperature, the breaker and the outdoor disconnect are on, and the filter isn't clogged. If the outdoor fan isn't spinning, ice is on the lines, or water is overflowing the drain pan, turn the system off and get a technician.",
      body: [
        "The most common summer failures are a capacitor that can't start the outdoor motor, a clogged condensate drain that shuts the system off, a frozen coil from low airflow or low refrigerant, and a burned-out contactor.",
        "Tell the technician what the system is doing (indoor fan running? outdoor unit humming? ice? water?) and its age if you know it. That decides what they bring.",
      ],
      faqs: [
        { q: "My AC is running but blowing warm air. What should I do?", a: "Check the filter and that the outdoor unit's fan is spinning. If the outdoor unit is silent or humming without the fan turning, switch the system off at the thermostat so the compressor isn't damaged, and request a technician." },
        { q: "Why is there ice on my AC lines?", a: "Usually low airflow (a dirty filter or coil) or low refrigerant. Turn the system to Off and the fan to On to thaw it, change the filter, and have it checked; running it frozen can damage the compressor." },
      ],
    },
    {
      slug: "ac-replacement",
      name: "AC replacement",
      summary: "Replacing worn-out or R-22 systems with properly sized, matched equipment, including heat pumps.",
      answer:
        "Replacement usually makes sense when a system is 12 to 15 or more years old and needs a compressor or coil, still uses R-22, or keeps breaking every summer. Ask for a load calculation (Manual J) so the new system is sized to the house, not just matched to the old one.",
      body: [
        "Bigger isn't better. An oversized AC cools the air quickly but shuts off before it pulls humidity out, which leaves a Conroe house cold and clammy.",
        "A new outdoor unit should be matched with a new indoor coil. Newer systems use different refrigerants and the old coil isn't compatible.",
      ],
    },
    {
      slug: "ac-maintenance",
      name: "AC tune-ups",
      summary: "Spring tune-ups: coil cleaning, drain line flush, electrical checks and refrigerant readings before the heat.",
      answer:
        "A tune-up before summer cleans the outdoor coil, flushes the condensate drain, tests the capacitor and contactor, and checks refrigerant and airflow. It catches the parts most likely to fail on the first 95-degree day.",
      body: [
        "Conroe's pollen, pine needles and cottonwood fluff pack outdoor coils, and the humidity keeps drain lines growing algae. Both are cheap to clean and expensive to ignore.",
      ],
      sections: [
        {
          heading: "Between tune-ups",
          howTo: true,
          paragraphs: ["A few things you can do yourself."],
          list: [
            "Change or wash the filter every one to three months",
            "Keep two feet clear around the outdoor unit",
            "Hose the outdoor coil gently from the inside out with the power off",
            "Pour a cup of vinegar down the condensate drain access every few months",
          ],
        },
      ],
    },
    {
      slug: "heating-repair",
      name: "Heating and heat pump repair",
      summary: "Furnaces that won't light, heat pumps stuck in defrost, and emergency heat that runs up the bill.",
      answer:
        "If a gas furnace won't light, check the filter, the thermostat and that the furnace door is closed tight (a safety switch keeps it off otherwise). A heat pump that frosts over briefly is normal; one that stays iced or runs on emergency heat all day needs service.",
      body: [
        "Most Conroe homes have a gas furnace or a heat pump with electric backup strips. A failed igniter or flame sensor is the most common furnace call; a bad defrost board or reversing valve is common on heat pumps.",
      ],
    },
  ]),
  areas,
  guides,
  faqs: [
    { q: "How do I get AC repair in Conroe today?", a: "Send the form with \"Today\" or \"Emergency\" picked, what the system is doing and its age if you know it. If anyone in the house is elderly, very young or sick, say so; that's a real emergency in Texas heat." },
    { q: "Is the technician licensed?", a: "AC work in Texas must be done by or under a contractor licensed by TDLR. Ask for the ACR license number and check it on TDLR's website." },
    { q: "What does AC repair cost in Conroe?", a: "It depends on the part and the system. Ask for the price before work starts; you're never committed until you agree to it." },
    { q: "How long should an AC last in Conroe?", a: "Many systems here last about 12 to 15 years. Long, humid cooling seasons wear them faster than in milder climates, and regular tune-ups help." },
    { q: "My system uses R-22. Can it still be repaired?", a: "Yes, but R-22 hasn't been produced since 2020, so it's expensive and getting scarcer. A big refrigerant leak on an R-22 system is usually the point to replace it." },
    { q: "Can I send photos?", a: "Yes, up to five. A photo of the outdoor unit's data plate, the thermostat and any ice or water helps the technician come ready." },
  ],
}
