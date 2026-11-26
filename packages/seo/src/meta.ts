import type { Area, Faq, Section } from "./types"

/** Google shows about 60 characters of a title on most screens. */
export const TITLE_MAX = 60
/** Google shows about 155 to 160 characters of a description. */
export const DESCRIPTION_MAX = 158
const DESCRIPTION_MIN = 120

/**
 * The title tag: the page title plus " | Site name", unless that runs past
 * what Google shows. Then the brand is dropped so the city and service words
 * aren't cut off.
 */
export function metaTitle(title: string, siteName: string): string {
  const suffix = ` | ${siteName}`
  if (title.endsWith(suffix)) {
    return title.length > TITLE_MAX ? title.slice(0, -suffix.length) : title
  }
  return title
}

/**
 * The meta description. A summary of 120 characters or more is used as is.
 * A shorter one is topped up with whole sentences from the page's direct
 * answer; if the answer's first sentences alone make a longer snippet, they
 * are used instead. Never cuts a sentence in half or passes DESCRIPTION_MAX.
 */
export function metaDescription(summary: string, answer?: string): string {
  const base = summary.trim()
  if (base.length >= DESCRIPTION_MIN || !answer) return base
  const sentences = (answer.match(/[^.!?]+[.!?]+/g) ?? []).map((s) => s.trim())
  const fill = (start: string) => {
    let out = start
    for (const s of sentences) {
      if (out.includes(s)) continue
      const next = out ? `${out} ${s}` : s
      if (next.length > DESCRIPTION_MAX) break
      out = next
    }
    return out
  }
  const topped = fill(base)
  const fromAnswer = fill("")
  return fromAnswer.length > topped.length ? fromAnswer : topped
}

/** Extra local detail for a neighborhood or town page, keyed by area slug. */
export type AreaDetail = Record<string, { sections?: Section[]; faqs?: Faq[] }>

/**
 * Appends each area's extra sections and FAQs (see local.ts in each app).
 * `updated` marks the pages that got detail as reviewed on that date.
 */
export function withAreaDetail(areas: Area[], detail: AreaDetail, updated?: string): Area[] {
  return areas.map((a) => {
    const d = detail[a.slug]
    if (!d) return a
    return {
      ...a,
      ...(updated ? { updated } : {}),
      sections: [...(a.sections ?? []), ...(d.sections ?? [])],
      faqs: [...(a.faqs ?? []), ...(d.faqs ?? [])],
    }
  })
}
