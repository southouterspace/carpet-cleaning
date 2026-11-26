import { resolveFlags, type SiteConfig } from "@carpet/seo"
import { areas, guides, withMoreContent } from "./content"

/**
 * Conroe garage door site. Everything on the site comes from this file and
 * content.ts.
 *
 * Before launch:
 * - `phone` is a placeholder (555-01xx is reserved fictional) and stays
 *   hidden while the phoneCalls flag is off.
 * - Add `hours`, `priceFrom` and `operator` once a renter confirms them.
 *   Never add an address, reviews, prices or warranties the renter can't
 *   back up.
 */
export const site: SiteConfig = {
  id: "garage-conroe",
  trade: "garage-door",
  name: "Conroe TX Garage Door",
  url: "https://conroetxgaragedoor.com",
  tagline:
    "Garage door repair in Conroe, TX: broken springs, doors off track, openers that won't work, snapped cables and new doors, for homes across Conroe and Lake Conroe.",
  phone: "+19365550150",
  city: "Conroe",
  region: "TX",
  serviceArea: {
    towns: ["Conroe", "Shenandoah", "Oak Ridge North", "Panorama Village", "Cut and Shoot"],
    zips: ["77301", "77302", "77303", "77304", "77306", "77384", "77385"],
    neighborhoods: ["Grand Central Park", "River Plantation", "Artavia"],
  },
  hours: [],
  updated: "2026-11-26",
  facts: [
    { label: "Springs", value: "Most garage door torsion springs are rated for about 10,000 open-and-close cycles, roughly 7 to 10 years for a typical household" },
    { label: "Safety", value: "Springs hold the door's weight under high tension. Adjusting or replacing them is a job for a trained technician" },
    { label: "Sensors", value: "Openers sold in the US since 1993 must have safety sensors that stop and reverse the door" },
    { label: "Urgent jobs", value: "Pick \"Emergency\" on the form, for a door stuck open or a car trapped inside, and the request is flagged as urgent" },
    { label: "Quotes", value: "Free to ask. You hear the price before work starts" },
  ],
  leadEndpoint: "/api/lead",
  turnstileSiteKey: "0x4AAAAAAF9mIQ55cQuaXFQr",
  flags: resolveFlags({ photoUpload: true }, process.env),
  theme: { accent: "#4d6b00", accentDark: "#324500" },
  services: withMoreContent([
    {
      slug: "broken-spring-repair",
      name: "Broken spring repair",
      summary: "Snapped torsion and extension springs replaced, with the door balanced and tested.",
      answer:
        "A loud bang from the garage, then a door that won't lift or an opener that strains and stops, usually means a broken torsion spring. Leave the door where it is, don't try to lift it by hand, and keep the opener off. Most two-spring doors should have both replaced at the same time.",
      body: [
        "Springs do the lifting; the opener only guides the door. When one breaks, the opener is trying to lift the full weight of the door, which can strip its gear or burn out the motor.",
        "Replacement springs are sized to the door's weight and height, then the door is balanced so it stays put halfway open.",
      ],
      faqs: [
        { q: "How do I know if my garage door spring is broken?", a: "Look above the closed door at the bar running across it. A torsion spring with a gap of a couple of inches in the coils is broken. Extension springs run along the tracks on each side and may hang loose or be missing." },
        { q: "Can I replace a garage door spring myself?", a: "It isn't recommended. Torsion springs are wound under enough tension to cause serious injury, and they need specific tools and sizing. This is one job to leave to a technician." },
      ],
    },
    {
      slug: "opener-repair",
      name: "Opener repair and installation",
      summary: "Openers that hum, reverse, click or don't respond, repaired or replaced, including belt, chain and wall-mount units.",
      answer:
        "If the opener hums but the door doesn't move, check whether the door is locked or a spring is broken. If it reverses before closing, check that the safety sensors near the floor are aligned and clean. If nothing happens, check the outlet, the wall button and the remote battery.",
      body: [
        "Belt-drive openers are quieter, which matters with a bedroom over the garage. Wall-mount openers free up the ceiling for storage. Many new openers have phone apps and battery backup.",
      ],
    },
    {
      slug: "off-track-cable-repair",
      name: "Off-track doors and cable repair",
      summary: "Doors that came off the tracks, hang crooked or have snapped or loose cables, reset and repaired.",
      answer:
        "A door hanging crooked or out of its tracks is dangerous to move. Unplug the opener, keep people and cars clear, and don't try to force it back. Off-track doors usually come from a snapped cable, a hit from a car, or worn rollers.",
      body: [
        "Cables, drums and rollers wear together. When one fails, the technician checks the rest so you aren't calling again next month.",
      ],
    },
    {
      slug: "new-garage-doors",
      name: "New garage doors",
      summary: "Steel, insulated and carriage-style doors measured, ordered and installed, with new springs and tracks.",
      answer:
        "Insulated steel doors keep a Conroe garage noticeably cooler in summer, which matters if there's a room above it or a freezer inside. New doors come with springs sized to their weight. Bring the width, height and a photo of the front of the house.",
      body: [
        "Replacing a door is a chance to fix a crooked opening, swap worn tracks and add a quieter opener.",
      ],
    },
  ]),
  areas,
  guides,
  faqs: [
    { q: "My car is stuck in the garage. What do I do?", a: "If the door is closed and a spring is broken, don't pull the emergency release; the door can slam down. Send the request marked Emergency and say the car is trapped." },
    { q: "How long do garage door springs last?", a: "Most are rated for about 10,000 cycles. Opening and closing the door four times a day, that's around seven years." },
    { q: "Why does my door go down and then back up?", a: "Usually the safety sensors near the floor are blocked, dirty or knocked out of line. Wipe the lenses and line them up until both lights are steady." },
    { q: "Do you cover Lake Conroe and Shenandoah?", a: "Yes. The service area covers Conroe's ZIP codes, including the Lake Conroe side, plus Shenandoah, Oak Ridge North, Panorama Village and Cut and Shoot." },
    { q: "What does garage door repair cost in Conroe?", a: "It depends on the part, the door and the opener. Ask for the price before work starts; you're never committed until you agree to it." },
    { q: "Can I send photos?", a: "Yes, up to five. The spring above the door, the opener's label and the whole door from inside are the most useful." },
  ],
}
