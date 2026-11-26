import { visibleSections } from "./sections"
import { tradeOf } from "./trades"
import type { Area, Faq, Guide, Section, Service, SiteConfig } from "./types"

const phoneOf = (site: SiteConfig) =>
  site.flags.phoneCalls && site.phone ? site.phone : undefined

type JsonLd = Record<string, unknown>

const businessId = (site: SiteConfig) => `${site.url}/#business`

/**
 * The business node. Uses the trade's LocalBusiness subtype (Plumber,
 * Electrician, HVACBusiness, or HomeAndConstructionBusiness) and only includes an address when a renter with a real location is set, so the
 * site never claims a place it doesn't have.
 */
export function localBusiness(site: SiteConfig): JsonLd {
  const node: JsonLd = {
    "@type": tradeOf(site).schemaType,
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${tradeOf(site).service} services in ${site.city}, ${site.region}`,
      itemListElement: site.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@id": `${site.url}/services/${s.slug}#service` },
      })),
    },
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
    url: `${site.url}/services/${s.slug}`,
    serviceType: s.name,
    description: s.summary,
    provider: { "@id": businessId(site) },
    areaServed: site.serviceArea.towns.map((name) => ({
      "@type": "City",
      name: `${name}, ${site.region}`,
    })),
  }
}

/** A place node for an area page: a neighborhood sits inside the site's city. */
export function place(site: SiteConfig, area: Area): JsonLd {
  const city = { "@type": "City", name: `${site.city}, ${site.region}` }
  return area.kind === "town"
    ? { "@type": "City", name: `${area.name}, ${site.region}` }
    : { "@type": "Place", name: `${area.name}, ${site.city}, ${site.region}`, containedInPlace: city }
}

/** The site's service as offered in one neighborhood or nearby town. */
export function areaService(site: SiteConfig, area: Area): JsonLd {
  const trade = tradeOf(site).service
  return {
    "@type": "Service",
    "@id": `${site.url}/areas/${area.slug}#service`,
    name: `${trade} in ${area.name}`,
    serviceType: trade,
    description: area.summary,
    provider: { "@id": businessId(site) },
    areaServed: place(site, area),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${trade} services`,
      itemListElement: site.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: `${site.url}/services/${s.slug}` },
      })),
    },
  }
}

/** A guide page as an Article published by the site's business. */
export function article(site: SiteConfig, guide: Guide): JsonLd {
  const url = `${site.url}/guides/${guide.slug}`
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: guide.title,
    description: guide.summary,
    url,
    mainEntityOfPage: url,
    dateModified: guide.updated,
    inLanguage: "en-US",
    author: { "@id": businessId(site) },
    publisher: { "@id": businessId(site) },
    about: { "@type": "Thing", name: tradeOf(site).service },
    contentLocation: { "@type": "City", name: `${site.city}, ${site.region}` },
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

/**
 * The page itself, with the date its copy was last reviewed. AI answer tools
 * and search engines use dateModified to judge how fresh a source is.
 */
export function webPage(
  site: SiteConfig,
  page: { path: string; title: string; description: string; updated?: string; answer?: string }
): JsonLd {
  const url = `${site.url}${page.path}`
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: "en-US",
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": businessId(site) },
    dateModified: page.updated ?? site.updated,
    abstract: page.answer,
  }
}

/**
 * HowTo nodes for sections marked `howTo` that have a list of steps, so a
 * page's step-by-step advice is machine-readable.
 */
export function howTos(site: SiteConfig, path: string, sections: Section[] = []): JsonLd[] {
  return visibleSections(site, sections)
    .filter((sec) => sec.howTo && sec.list?.length)
    .map((sec, i) => ({
      "@type": "HowTo",
      "@id": `${site.url}${path}#howto-${i + 1}`,
      name: sec.heading,
      description: sec.paragraphs[0],
      step: sec.list!.map((text, n) => ({ "@type": "HowToStep", position: n + 1, text })),
    }))
}

/**
 * The standard graph for a page: the business, the website and the page
 * itself, plus whatever page-specific nodes are passed in. Every page gets
 * the business node so its @id references resolve on that page.
 */
export function pageGraph(
  site: SiteConfig,
  page: Parameters<typeof webPage>[1],
  ...nodes: (JsonLd | JsonLd[] | undefined)[]
): string {
  return graph(localBusiness(site), website(site), webPage(site, page), ...nodes.flat())
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
