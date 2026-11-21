import type { Section, SiteConfig } from "./types"

/** Sections whose `requires` flag is on (or that need no flag). */
export function visibleSections(site: SiteConfig, sections: Section[] = []): Section[] {
  return sections.filter((s) => !s.requires || site.flags[s.requires])
}
