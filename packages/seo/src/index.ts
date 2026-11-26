import type { Faq, SiteConfig } from "./types"

export type { Area, Fact, Faq, Guide, Section, Service, SiteConfig } from "./types"
export {
  areaService,
  article,
  breadcrumbs,
  place,
  faqPage,
  graph,
  howTos,
  localBusiness,
  pageGraph,
  webPage,
  service,
  website,
} from "./jsonld"
export { answerOf, formatDate, updatedOf, visibleFacts, visibleSections, withAnswers } from "./sections"
export { DESCRIPTION_MAX, TITLE_MAX, metaDescription, metaTitle, withAreaDetail, type AreaDetail } from "./meta"
export { AI_CRAWLERS, buildLlmsFullTxt, buildLlmsTxt, buildRobotsTxt } from "./llms"
export {
  BUILT_CHOICES,
  PROPERTY_CHOICES,
  TRADES,
  tradeOf,
  type QuoteField,
  type Trade,
  type TradeInfo,
} from "./trades"
export { FLAG_DEFAULTS, flagEnvName, resolveFlags, type FlagName, type Flags } from "./flags"

/** The number to show and call, or undefined when calls are off or no number is set. */
export function callNumber(site: SiteConfig): string | undefined {
  return site.flags.phoneCalls && site.phone ? site.phone : undefined
}

/** Formats "+19365550100" as "(936) 555-0100" for display. */
export function formatPhone(e164: string): string {
  const d = e164.replace(/\D/g, "").replace(/^1/, "")
  if (d.length !== 10) return e164
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
}

/**
 * Every FAQ on the site, grouped for the /faq page: general questions first,
 * then each service's and area's own questions, each with the page it's from.
 */
export function allFaqs(site: SiteConfig): { heading: string; path?: string; faqs: Faq[] }[] {
  const groups: { heading: string; path?: string; faqs: Faq[] }[] = [
    { heading: "General questions", faqs: site.faqs },
    ...site.services
      .filter((s) => s.faqs?.length)
      .map((s) => ({ heading: s.name, path: `/services/${s.slug}`, faqs: s.faqs! })),
    ...(site.guides ?? [])
      .filter((g) => g.faqs?.length)
      .map((g) => ({ heading: g.title, path: `/guides/${g.slug}`, faqs: g.faqs! })),
    ...(site.areas ?? [])
      .filter((a) => a.faqs?.length)
      .map((a) => ({ heading: a.name, path: `/areas/${a.slug}`, faqs: a.faqs! })),
  ]
  return groups.filter((g) => g.faqs.length)
}
