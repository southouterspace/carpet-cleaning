import type { FlagName, Flags } from "./flags"

/**
 * Everything a city site knows about itself. Each app has one `site.config.ts`
 * that exports a `SiteConfig`; pages, components, JSON-LD and llms.txt all
 * read from it so facts are written once.
 */
export interface SiteConfig {
  /** Stable id used by the lead Worker to route leads (e.g. "conroe"). */
  id: string
  /** Brand name shown on the site and in structured data. */
  name: string
  /** Canonical origin, no trailing slash: "https://conroetxcarpetcleaners.com". */
  url: string
  /** One-line description used for meta description and llms.txt. */
  tagline: string
  /**
   * E.164 forwarding number that rings the renter, e.g. "+19365550100".
   * Shown only when the `phoneCalls` flag is on; use `callNumber(site)`.
   */
  phone?: string
  /** Optional email shown on the contact section. */
  email?: string
  /** Primary town the site targets. */
  city: string
  /** Two-letter state code. */
  region: string
  /** Towns and ZIPs served. Used for areaServed and on-page lists. */
  serviceArea: { towns: string[]; zips: string[]; neighborhoods: string[] }
  /** Hours as schema.org openingHours strings, e.g. "Mo-Sa 08:00-18:00". */
  hours: string[]
  /** Optional starting price, e.g. { amount: 99, unit: "3 rooms" }. Leave out until a renter confirms it. */
  priceFrom?: { amount: number; unit: string }
  /**
   * ISO date the site's copy was last reviewed, e.g. "2026-11-19". Shown as
   * "Updated" on pages and used for dateModified and sitemap lastmod.
   */
  updated?: string
  /** Short, true facts for the home page "At a glance" block and llms.txt. */
  facts?: Fact[]
  services: Service[]
  faqs: Faq[]
  /** Neighborhood and town pages at /areas/<slug>. */
  areas?: Area[]
  /** Long-form help pages at /guides/<slug>. */
  guides?: Guide[]
  /** Where the quote form posts. The shared lead Worker. */
  leadEndpoint: string
  /** Cloudflare Turnstile site key (public). Empty disables the widget in dev. */
  turnstileSiteKey: string
  /**
   * Real business that answers the phone, once a renter signs. Until then the
   * site describes the service without claiming an address or reviews.
   */
  operator?: {
    legalName: string
    /** Only set when the renter has a real, staffed location. */
    address?: { street: string; city: string; region: string; postalCode: string }
    /** The renter's own Google Business Profile URL, for sameAs. */
    profiles?: string[]
  }
  /** Resolved feature flags. Build with `resolveFlags()` in site.config.ts. */
  flags: Flags
  theme: {
    /** CSS color for buttons and accents. Must pass 4.5:1 contrast on white. */
    accent: string
    /** Darker variant used on hover and for headings. */
    accentDark: string
  }
}

export interface Service {
  slug: string
  name: string
  /** Short summary for cards and meta descriptions (under 160 characters). */
  summary: string
  /**
   * Two or three sentences that answer the page's main question outright.
   * Shown first under the H1 so search and AI tools can quote it whole.
   */
  answer?: string
  /** ISO date this page was last reviewed, when it differs from `site.updated`. */
  updated?: string
  /** Body paragraphs for the service page. */
  body: string[]
  /** Extra sections under the body, each with its own heading. */
  sections?: Section[]
  faqs?: Faq[]
}

/** A headed block of copy. `requires` hides it unless that flag is on. */
export interface Section {
  heading: string
  paragraphs: string[]
  /** Optional bullet list shown after the paragraphs. */
  list?: string[]
  requires?: FlagName
  /** Marks the list as ordered steps, published as HowTo structured data. */
  howTo?: boolean
  /** Optional link to a related page on the same site, shown after the section. */
  link?: { href: string; text: string }
}

/** One line of the "At a glance" block. `requires` hides it unless that flag is on. */
export interface Fact {
  label: string
  value: string
  requires?: FlagName
}

/** A neighborhood or nearby town with its own page. */
export interface Area {
  slug: string
  /** "Grand Central Park". */
  name: string
  /** A neighborhood inside `site.city`, or a separate town nearby. */
  kind: "neighborhood" | "town"
  /** Meta description and card text, under 160 characters. */
  summary: string
  /** Direct answer shown first under the H1 (see Service.answer). */
  answer?: string
  /** ISO date this page was last reviewed, when it differs from `site.updated`. */
  updated?: string
  intro: string[]
  sections?: Section[]
  /** Service slugs to feature first on the page. */
  highlight?: string[]
  faqs?: Faq[]
}

/** A help article, e.g. what carpet cleaning costs locally. */
export interface Guide {
  slug: string
  title: string
  /** Meta description, under 160 characters. */
  summary: string
  /** ISO date the content was last reviewed, e.g. "2026-11-18". */
  updated: string
  /** Direct answer shown first under the H1 (see Service.answer). */
  answer?: string
  /** Replaces `answer` when the priceRanges flag is on. */
  pricedAnswer?: string
  intro: string[]
  sections: Section[]
  faqs?: Faq[]
}

export interface Faq {
  q: string
  a: string
}
