import type { Flags } from "./flags"

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
  /** Canonical origin, no trailing slash: "https://carpet-cleaning-conroe.southouterspace.workers.dev". */
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
  services: Service[]
  faqs: Faq[]
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
  /** Body paragraphs for the service page. */
  body: string[]
  faqs?: Faq[]
}

export interface Faq {
  q: string
  a: string
}
