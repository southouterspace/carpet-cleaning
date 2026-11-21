import type { Fact, Section, SiteConfig } from "./types"

/** Sections whose `requires` flag is on (or that need no flag). */
export function visibleSections(site: SiteConfig, sections: Section[] = []): Section[] {
  return sections.filter((s) => !s.requires || site.flags[s.requires])
}

/** Facts whose `requires` flag is on (or that need no flag). */
export function visibleFacts(site: SiteConfig): Fact[] {
  return (site.facts ?? []).filter((f) => !f.requires || site.flags[f.requires])
}

/** The page's direct answer: the priced one when price ranges are shown. */
export function answerOf(
  site: SiteConfig,
  item: { answer?: string; pricedAnswer?: string }
): string | undefined {
  return (site.flags.priceRanges && item.pricedAnswer) || item.answer
}

/** The date a page was last reviewed: its own date, else the site's. */
export function updatedOf(site: SiteConfig, item?: { updated?: string }): string | undefined {
  return item?.updated ?? site.updated
}

/** "2026-11-19" -> "November 19, 2026". */
export function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
}

type AnswerEntry = string | { answer: string; pricedAnswer?: string }

/** Attaches each item's direct answer from a slug-keyed map (see answers.ts in each app). */
export function withAnswers<T extends { slug: string }>(items: T[], map: Record<string, AnswerEntry>): T[] {
  return items.map((item) => {
    const entry = map[item.slug]
    if (!entry) return item
    return { ...item, ...(typeof entry === "string" ? { answer: entry } : entry) }
  })
}
