import type { Faq, Service, SiteConfig } from "./types"

const phoneOf = (site: SiteConfig) =>
  site.flags.phoneCalls && site.phone ? site.phone : undefined

type JsonLd = Record<string, unknown>

const businessId = (site: SiteConfig) => `${site.url}/#business`

/**
 * The business node. Uses the generic LocalBusiness subtype for cleaners and
 * only includes an address when a renter with a real location is set, so the
 * site never claims a place it doesn't have.
 */
export function localBusiness(site: SiteConfig): JsonLd {
  const node: JsonLd = {
    "@type": "HomeAndConstructionBusiness",
    "@id": businessId(site),
    name: site.operator?.legalName ?? site.name,
    alternateName: site.operator ? site.name : undefined,
    url: site.url,
    telephone: phoneOf(site),
    email: site.email,
    description: site.tagline,
    openingHours: site.hours.length ? site.hours : undefined,
    areaServed: [
      ...site.serviceArea.towns.map((name) => ({
        "@type": "City",
        name: `${name}, ${site.region}`,
      })),
      ...site.serviceArea.zips.map((postalCode) => ({
        "@type": "PostalCodeSpecification",
        postalCode,
      })),
    ],
    knowsAbout: site.services.map((s) => s.name),
    priceRange: site.priceFrom ? `From $${site.priceFrom.amount}` : undefined,
    sameAs: site.operator?.profiles,
  }
  const address = site.operator?.address
  if (address) {
    node.address = {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: "US",
    }
  }
  return node
}

export function website(site: SiteConfig): JsonLd {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": businessId(site) },
  }
}

export function service(site: SiteConfig, s: Service): JsonLd {
  return {
    "@type": "Service",
    "@id": `${site.url}/services/${s.slug}#service`,
    name: `${s.name} in ${site.city}, ${site.region}`,
    serviceType: s.name,
    description: s.summary,
    provider: { "@id": businessId(site) },
    areaServed: site.serviceArea.towns.map((name) => ({
      "@type": "City",
      name: `${name}, ${site.region}`,
    })),
  }
}

export function faqPage(faqs: Faq[]): JsonLd | undefined {
  if (!faqs.length) return undefined
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}

export function breadcrumbs(
  site: SiteConfig,
  trail: { name: string; path: string }[]
): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${site.url}${t.path}`,
    })),
  }
}

/** Wraps nodes in one @graph, dropping empty ones and undefined fields. */
export function graph(...nodes: (JsonLd | undefined)[]): string {
  const doc = {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  }
  // JSON.stringify drops undefined; escape "<" so the script tag can't be closed early.
  return JSON.stringify(doc).replace(/</g, "\\u003c")
}
