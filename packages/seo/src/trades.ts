/**
 * What changes between trades: the schema.org business type, how the pro is
 * named in copy, which quote-form fields make sense, and how urgent jobs are
 * handled. A site picks one with `trade` in site.config.ts (default carpet).
 *
 * Keep this to wording and structure. Anything specific to a town or a
 * renter belongs in that site's config.
 */
export type Trade = "carpet" | "plumbing" | "electrical" | "hvac" | "garage-door"

/** Quote-form detail fields. Each maps to a column in the lead Worker's `leads` table. */
export type QuoteField = "rooms" | "stairs" | "pets" | "property" | "built"

export interface TradeInfo {
  /** schema.org LocalBusiness subtype for the business node. */
  schemaType: string
  /** The trade as a service, for headings and structured data: "Plumbing". */
  service: string
  /** The person who does the work, in a sentence: "a local plumber". */
  pro: string
  /** Detail fields on the quote form, in order. */
  fields: QuoteField[]
  /** Timing choices on the form, first is the default. Keys must exist in the lead Worker's CHOICES.timing. */
  timing: { value: string; label: string }[]
  /** Label for the checkbox-style extra question (carpet only uses pets). */
  petsLabel?: string
  /** Placeholder hint for the message box. */
  messageHint: string
  /**
   * Phone-first trades get most of their jobs by phone. With the phoneCalls
   * flag on, these sites lead with the call button and show an urgent strip.
   */
  phoneFirst: boolean
  /**
   * Shown on the form and the thanks page when someone picks the emergency
   * timing: what to do before help arrives. Safety steps only, no promises.
   */
  safety?: string
}

const CARPET_TIMING = [
  { value: "asap", label: "As soon as possible" },
  { value: "week", label: "Within a week" },
  { value: "month", label: "Within a month" },
  { value: "pricing", label: "Just comparing prices" },
]

const REPAIR_TIMING = [
  { value: "today", label: "Today if possible" },
  { value: "emergency", label: "Emergency: it can't wait" },
  { value: "week", label: "This week" },
  { value: "planning", label: "Planning ahead or comparing prices" },
]

export const TRADES: Record<Trade, TradeInfo> = {
  carpet: {
    schemaType: "HomeAndConstructionBusiness",
    service: "Carpet cleaning",
    pro: "a local carpet cleaner",
    fields: ["rooms", "stairs", "pets"],
    timing: CARPET_TIMING,
    petsLabel: "Pet stains or odor",
    messageHint: "stains, furniture, gate code",
    phoneFirst: false,
  },
  plumbing: {
    schemaType: "Plumber",
    service: "Plumbing",
    pro: "a local plumber",
    fields: ["property", "built"],
    timing: REPAIR_TIMING,
    messageHint: "what's leaking or not working, and where",
    phoneFirst: true,
    safety:
      "If water is leaking, turn off the main shut-off valve (often near the street or where the line enters the house) and switch off the water heater. If you smell gas, leave the house and call 911 from outside.",
  },
  electrical: {
    schemaType: "Electrician",
    service: "Electrical",
    pro: "a local electrician",
    fields: ["property", "built"],
    timing: REPAIR_TIMING,
    messageHint: "what's happening, which rooms, any breakers tripping",
    phoneFirst: true,
    safety:
      "If you see sparks or smoke or smell burning, switch off that circuit at the panel if it's safe to reach. If there's fire, or a downed power line, get out and call 911.",
  },
  hvac: {
    schemaType: "HVACBusiness",
    service: "Air conditioning",
    pro: "a local AC technician",
    fields: ["property", "built"],
    timing: REPAIR_TIMING,
    messageHint: "what the system is doing, its age if you know it, any error codes",
    phoneFirst: true,
    safety:
      "If the AC is out in the heat, keep blinds closed, run fans and check on anyone elderly, very young or sick. If you smell gas near the furnace, leave and call 911 from outside.",
  },
  "garage-door": {
    schemaType: "HomeAndConstructionBusiness",
    service: "Garage door repair",
    pro: "a local garage door technician",
    fields: ["property"],
    timing: REPAIR_TIMING,
    messageHint: "what the door is doing, single or double, opener brand if you know it",
    phoneFirst: true,
    safety:
      "If a spring or cable has broken, leave the door where it is and keep people and cars clear. Don't try to lift it by hand or adjust the springs yourself.",
  },
}

export const PROPERTY_CHOICES = [
  { value: "house", label: "House I own" },
  { value: "rental", label: "Home I rent" },
  { value: "landlord", label: "Rental I own" },
  { value: "business", label: "Business" },
]

export const BUILT_CHOICES = [
  { value: "", label: "Not sure" },
  { value: "pre1980", label: "Before 1980" },
  { value: "1980-2000", label: "1980 to 2000" },
  { value: "post2000", label: "After 2000" },
]

/** The trade info for a site (carpet when the site doesn't say). */
export const tradeOf = (site: { trade?: Trade }): TradeInfo => TRADES[site.trade ?? "carpet"]
