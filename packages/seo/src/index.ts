import type { SiteConfig } from "./types"

export type { Faq, Service, SiteConfig } from "./types"
export {
  breadcrumbs,
  faqPage,
  graph,
  localBusiness,
  service,
  website,
} from "./jsonld"
export { buildLlmsTxt, buildRobotsTxt } from "./llms"
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
