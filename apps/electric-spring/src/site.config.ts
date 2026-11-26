import { resolveFlags, type SiteConfig } from "@carpet/seo"
import { areas, guides, withMoreContent } from "./content"

/**
 * Spring electrician site. Everything on the site comes from this file and
 * content.ts.
 *
 * Before launch:
 * - `phone` is a placeholder (555-01xx is reserved fictional) and stays
 *   hidden while the phoneCalls flag is off.
 * - Add `hours`, `priceFrom` and `operator` (and the renter's TECL number in
 *   the copy) once a renter confirms them. Never add an address, reviews,
 *   prices or a license number the renter can't back up.
 */
export const site: SiteConfig = {
  id: "electric-spring",
  trade: "electrical",
  name: "Spring TX Electric",
  url: "https://springtxelectric.com",
  tagline:
    "Electrical repairs and upgrades in Spring, TX: outlets and breakers, panel replacements, surge protection, generator hookups, EV charging and lighting.",
  phone: "+12815550146",
  city: "Spring",
  region: "TX",
  serviceArea: {
    towns: ["Spring", "Klein", "The Woodlands", "Tomball", "Humble"],
    zips: ["77373", "77379", "77386", "77388", "77389"],
    neighborhoods: ["Gleannloch Farms", "Champion Forest", "Northgate Forest"],
  },
  hours: [],
  updated: "2026-11-26",
  facts: [
    { label: "Licensing", value: "Texas electricians are licensed by TDLR; contractors carry a TECL number you can check online" },
    { label: "Outages", value: "CenterPoint Energy runs the lines and meters across Spring. Area-wide outages go to CenterPoint; problems inside the house go to an electrician" },
    { label: "Flood water", value: "Outlets, panels or equipment that sat in flood water need to be checked by an electrician before power goes back on" },
    { label: "Urgent jobs", value: "Pick \"Emergency\" on the form and the request is flagged as urgent" },
    { label: "Quotes", value: "Free to ask. You hear the price before work starts" },
  ],
  leadEndpoint: "/api/lead",
  turnstileSiteKey: "0x4AAAAAAF9mIQ55cQuaXFQr",
  flags: resolveFlags({ photoUpload: true }, process.env),
  theme: { accent: "#7a5c00", accentDark: "#4a3800" },
  services: withMoreContent([
    {
      slug: "electrical-repairs",
      name: "Electrical repairs",
      summary: "Outlets and switches that stopped working, breakers that trip, flickering lights and buzzing fixtures in Spring homes.",
      answer:
        "Start with the breaker panel and every GFCI outlet (kitchen, baths, garage, outside): a tripped one explains most dead outlets. A breaker that trips again right away, a warm outlet or switch, buzzing, or a burning smell needs an electrician the same day.",
      body: [
        "Describe what happened, which rooms are affected and what was running at the time. That narrows it down to a device, a circuit or the panel before anyone arrives.",
      ],
      faqs: [
        { q: "Why do my lights dim when the dryer runs?", a: "A small dip when a big load starts can be normal. Lights that dim a lot, or flicker on their own, can mean a loose neutral connection, which is worth having checked soon." },
      ],
    },
    {
      slug: "panel-replacement",
      name: "Panel replacement",
      summary: "Replacing old, damaged or full panels, and upgrading service for EV chargers, pools and additions.",
      answer:
        "Replace a panel that's rusted, scorched or buzzing, a Federal Pacific or Zinsco panel, or one that's full when you're adding an EV charger, pool or generator. The job needs a permit and a CenterPoint disconnect, and the house is without power for most of a day.",
      body: [
        "Many homes in Spring's established neighborhoods are on their original panel. A load calculation shows whether you need a bigger service or just a new panel.",
      ],
    },
    {
      slug: "whole-home-surge",
      name: "Whole-home surge protection",
      summary: "Surge protectors at the panel to shield appliances, AC boards and electronics from spikes.",
      answer:
        "A whole-home surge protector at the panel clips voltage spikes from nearby lightning and from power switching back on after an outage. Pair it with plug-in surge strips for TVs and computers. It won't stop a direct strike.",
      body: [
        "Spring's summer thunderstorms and the on-off flicker when power is restored are hard on AC control boards, refrigerators and electronics.",
      ],
    },
    {
      slug: "generator-hookups",
      name: "Generator hookups",
      summary: "Inlet boxes and interlocks for portable generators, and transfer switches for standby units.",
      answer:
        "An inlet box outside plus an interlock on the panel lets a portable generator power the circuits you choose, safely. A standby generator with an automatic transfer switch is the hands-off option. Never plug a generator into a wall or dryer outlet.",
      body: [
        "Hurricane Beryl in July 2024 left much of the Spring area without power for days. A generator plan made before storm season is cheaper and calmer than one made during it.",
      ],
    },
    {
      slug: "ev-charging",
      name: "EV charging",
      summary: "Level 2 chargers and 240-volt outlets for electric cars, with a panel check first.",
      answer:
        "A Level 2 charger usually needs a 40- to 60-amp 240-volt circuit. The price depends on panel space and how far the panel is from where you park. Send a photo of the open panel and the garage.",
      body: [
        "If the panel is full, a load-management device can let a charger share capacity with other big loads instead of upgrading the whole service.",
      ],
    },
  ]),
  areas,
  guides,
  faqs: [
    { q: "How do I get an electrician in Spring today?", a: "Send the form with \"Today\" or \"Emergency\" picked and describe what's happening. If something is sparking, smoking or smells hot, turn that circuit off at the panel first if it's safe." },
    { q: "Power's out on my street. Who do I call?", a: "CenterPoint Energy. An electrician can't restore utility power. If it's only your house, check the main breaker, then request an electrician." },
    { q: "Is the electrician licensed?", a: "Electrical work in Texas must be done by or under a TDLR-licensed electrician. Ask for the TECL number and check it on TDLR's website." },
    { q: "My outlets got wet in a flood. Can I turn the power back on?", a: "Not until an electrician has checked them. Water-damaged outlets, wiring and panels can short or shock. Leave the main off and request an inspection." },
    { q: "What does an electrician cost in Spring?", a: "It depends on the job, parts and permits. Ask for the price before work starts; you're never committed until you agree to it." },
    { q: "Can I send photos?", a: "Yes, up to five. The open panel and its label, the outlet or fixture, or where a charger would go are the most useful." },
  ],
}
