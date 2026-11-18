import { visibleSections } from "./sections"
import type { Section, SiteConfig } from "./types"

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
  if (site.areas?.length) {
    lines.push("", "## Areas", "")
    for (const a of site.areas) lines.push(`- [${a.name}](${site.url}/areas/${a.slug}): ${a.summary}`)
  }
  if (site.guides?.length) {
    lines.push("", "## Guides", "")
    for (const g of site.guides) lines.push(`- [${g.title}](${site.url}/guides/${g.slug}): ${g.summary}`)
  }
  if (site.faqs.length) {
    lines.push("", "## Common questions", "")
    for (const f of site.faqs) lines.push(`- **${f.q}** ${f.a}`)
  }
  lines.push(
    "",
    "## Optional",
    "",
    `- [All questions and answers](${site.url}/faq): every FAQ on the site in one page`,
    `- [Full text](${site.url}/llms-full.txt): every service, area and guide page as plain text`
  )
  return lines.join("\n") + "\n"
}

const sectionText = (site: SiteConfig, sections?: Section[]) =>
  visibleSections(site, sections).flatMap((sec) => [
    `### ${sec.heading}`,
    "",
    ...sec.paragraphs.flatMap((p) => [p, ""]),
    ...(sec.list?.length ? [...sec.list.map((l) => `- ${l}`), ""] : []),
  ])

const faqText = (faqs?: { q: string; a: string }[]) =>
  faqs?.length ? ["### Questions", "", ...faqs.flatMap((f) => [`**${f.q}** ${f.a}`, ""])] : []

/**
 * Builds /llms-full.txt: the whole site as one Markdown file, so an AI agent
 * can answer from the content without crawling every page.
 */
export function buildLlmsFullTxt(site: SiteConfig): string {
  const out: string[] = [buildLlmsTxt(site).trimEnd(), "", "# Services", ""]
  for (const s of site.services) {
    out.push(`## ${s.name}`, "", `URL: ${site.url}/services/${s.slug}`, "")
    out.push(...s.body.flatMap((p) => [p, ""]), ...sectionText(site, s.sections), ...faqText(s.faqs))
  }
  if (site.areas?.length) {
    out.push("# Areas", "")
    for (const a of site.areas) {
      out.push(`## ${a.name}`, "", `URL: ${site.url}/areas/${a.slug}`, "")
      out.push(...a.intro.flatMap((p) => [p, ""]), ...sectionText(site, a.sections), ...faqText(a.faqs))
    }
  }
  if (site.guides?.length) {
    out.push("# Guides", "")
    for (const g of site.guides) {
      out.push(`## ${g.title}`, "", `URL: ${site.url}/guides/${g.slug}`, `Last reviewed: ${g.updated}`, "")
      out.push(...g.intro.flatMap((p) => [p, ""]), ...sectionText(site, g.sections), ...faqText(g.faqs))
    }
  }
  return out.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n"
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
