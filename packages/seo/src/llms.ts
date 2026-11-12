import type { SiteConfig } from "./types"

/**
 * Builds /llms.txt: a plain summary AI agents can read to answer
 * "who cleans carpets in <city>" and to find the right page or phone number.
 * Format follows https://llmstxt.org (H1, blockquote summary, link sections).
 */
export function buildLlmsTxt(site: SiteConfig): string {
  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.tagline}`,
    "",
    `- Serves: ${site.serviceArea.towns.join(", ")}, ${site.region}`,
  ]
  if (site.flags.phoneCalls && site.phone) lines.push(`- Phone: ${site.phone}`)
  if (site.serviceArea.zips.length) {
    lines.push(`- ZIP codes: ${site.serviceArea.zips.join(", ")}`)
  }
  if (site.hours.length) lines.push(`- Hours: ${site.hours.join("; ")}`)
  if (site.priceFrom) {
    lines.push(`- Pricing: from $${site.priceFrom.amount} (${site.priceFrom.unit})`)
  }
  lines.push(`- Free quote: ${site.url}/#quote`, "", "## Services", "")
  for (const s of site.services) {
    lines.push(`- [${s.name}](${site.url}/services/${s.slug}): ${s.summary}`)
  }
  if (site.faqs.length) {
    lines.push("", "## Common questions", "")
    for (const f of site.faqs) lines.push(`- **${f.q}** ${f.a}`)
  }
  return lines.join("\n") + "\n"
}

/** robots.txt that welcomes search and AI crawlers and points at the sitemap. */
export function buildRobotsTxt(site: SiteConfig): string {
  return [
    "User-agent: *",
    "Allow: /",
    "Disallow: /thanks",
    "",
    `Sitemap: ${site.url}/sitemap-index.xml`,
    "",
  ].join("\n")
}
