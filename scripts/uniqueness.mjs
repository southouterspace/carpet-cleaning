#!/usr/bin/env bun
/**
 * Content uniqueness check for every built site (run after `bun run build`).
 *
 * Google's spam policies treat near-identical city pages and copies spread
 * across several domains as doorway and scaled-content abuse. This compares
 * the main text of every indexable page, as 5-word shingles, and fails when:
 *
 * - two pages on different sites share too much text (CROSS_MAX), or
 * - two pages on the same site share too much text (SAME_MAX), or
 * - too little of a page is its own text, not found on any other page of
 *   its site (UNIQUE_MIN as a share, OWN_MIN as a count).
 *
 * Skipped: the FAQ page (it gathers every page's questions on purpose), the
 * privacy page (legal text), and the shared quote form, which is the same
 * component everywhere and is measured as boilerplate by search engines.
 * Usage: bun scripts/uniqueness.mjs [--report] [site ...]
 * --report also lists every page with its share and count of own text.
 */
import { readdirSync, readFileSync, statSync } from "node:fs"
import { join, relative } from "node:path"

const CROSS_MAX = 0.25
const SAME_MAX = 0.55
const UNIQUE_MIN = 0.45
/** Minimum count of 5-word phrases found on no other page of the site. */
const OWN_MIN = 120
const K = 5
/**
 * Sites that aren't live yet: their thin pages are reported as warnings, not
 * failures. Take a site off this list (and fix what it reports) before launch.
 */
const DRAFT_SITES = new Set([
  "magnolia",
  "tomball",
  "spring",
  // Trade sites in waves 2 and 3. Fill in local detail (src/local.ts) before each launches.
  "hvac-conroe",
  "electric-woodlands",
  "electric-spring",
  "plumbing-magnolia",
  "plumbing-montgomery",
  "plumbing-willis",
  "garage-conroe",
])

const root = new URL("..", import.meta.url).pathname
const args = process.argv.slice(2)
const report = args.includes("--report")
const only = args.filter((a) => a !== "--report")
const rows = []

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    return statSync(p).isDirectory() ? htmlFiles(p) : p.endsWith(".html") ? [p] : []
  })
}

function mainText(html) {
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? html
  return main
    .replace(/<section[^>]*\bid="quote"[\s\S]*?<\/section>/g, " ")
    .replace(/<(script|style|form|nav|header|footer)\b[\s\S]*?<\/\1>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .toLowerCase()
    .replace(/[^a-z0-9 ]+/g, " ")
    .split(/\s+/)
    .filter(Boolean)
}

function shingles(words) {
  const out = new Set()
  for (let i = 0; i + K <= words.length; i++) out.add(words.slice(i, i + K).join(" "))
  return out
}

function jaccard(a, b) {
  let inter = 0
  const [small, big] = a.size < b.size ? [a, b] : [b, a]
  for (const s of small) if (big.has(s)) inter++
  return inter / (a.size + b.size - inter || 1)
}

const sites = readdirSync(join(root, "apps")).filter(
  (s) => s !== "leads" && (!only.length || only.includes(s)) && statSync(join(root, "apps", s)).isDirectory()
)

const pages = []
for (const site of sites) {
  const dist = join(root, "apps", site, "dist")
  try {
    statSync(dist)
  } catch {
    console.error(`apps/${site}/dist is missing; run bun run build first`)
    process.exit(2)
  }
  for (const file of htmlFiles(dist)) {
    const html = readFileSync(file, "utf8")
    if (/<meta name="robots" content="noindex"/.test(html)) continue
    const path = "/" + relative(dist, file).replace(/(index)?\.html$/, "")
    if (path === "/faq" || path === "/privacy") continue
    pages.push({ site, path, sh: shingles(mainText(html)) })
  }
}

const failures = []
const warnings = []
let worstCross = { j: 0 }
let worstSame = { j: 0 }
let worstUnique = { u: 1 }

for (let i = 0; i < pages.length; i++) {
  for (let k = i + 1; k < pages.length; k++) {
    const a = pages[i]
    const b = pages[k]
    const j = jaccard(a.sh, b.sh)
    const cross = a.site !== b.site
    const label = `${a.site}${a.path} ~ ${b.site}${b.path} share ${(j * 100).toFixed(0)}%`
    if (cross) {
      if (j > worstCross.j) worstCross = { j, label }
      if (j > CROSS_MAX) failures.push(`across sites: ${label} (max ${CROSS_MAX * 100}%)`)
    } else {
      if (j > worstSame.j) worstSame = { j, label }
      if (j > SAME_MAX) failures.push(`same site: ${label} (max ${SAME_MAX * 100}%)`)
    }
  }
}

for (const site of sites) {
  const own = pages.filter((p) => p.site === site)
  for (const p of own) {
    if (p.sh.size < 100) continue
    const others = new Set()
    for (const o of own) if (o !== p) for (const s of o.sh) others.add(s)
    let mine = 0
    for (const s of p.sh) if (!others.has(s)) mine++
    const u = mine / p.sh.size
    const label = `${site}${p.path} is ${(u * 100).toFixed(0)}% its own text`
    rows.push({ u, mine, label })
    if (u < worstUnique.u) worstUnique = { u, label }
    if (u < UNIQUE_MIN || mine < OWN_MIN) {
      const msg = `thin: ${label}, ${mine} own 5-word phrases (min ${UNIQUE_MIN * 100}% and ${OWN_MIN})`
      ;(DRAFT_SITES.has(site) ? warnings : failures).push(msg)
    }
  }
}

if (report) {
  for (const r of rows.sort((a, b) => a.u - b.u)) console.log(`${r.label} (${r.mine} own 5-word phrases)`)
  console.log("")
}
console.log(`Checked ${pages.length} pages on ${sites.length} sites.`)
console.log(`Most shared across sites: ${worstCross.label ?? "none"}`)
console.log(`Most shared on one site:  ${worstSame.label ?? "none"}`)
console.log(`Least unique page:        ${worstUnique.label ?? "none"}`)
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s) on sites not live yet:\n- ${warnings.join("\n- ")}`)
}
if (failures.length) {
  console.error(`\n${failures.length} problem(s):\n- ${failures.join("\n- ")}`)
  process.exit(1)
}
console.log("OK: every page has enough text of its own.")
