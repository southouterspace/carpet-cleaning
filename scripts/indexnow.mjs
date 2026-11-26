#!/usr/bin/env node
/**
 * Tells Bing (and the other IndexNow engines: Yandex, Seznam, Naver) about
 * every URL in each site's sitemap, so new and changed pages get crawled in
 * hours instead of weeks. Bing's index also feeds ChatGPT search and Copilot.
 *
 * Each site proves it owns its host with a key file in apps/<site>/public
 * (a 32-hex-character name whose content is the same string).
 *
 * Run after a deploy, once the new pages are live:
 *   node scripts/indexnow.mjs            # all sites
 *   node scripts/indexnow.mjs conroe     # one site
 * Uses the built sitemap in apps/<site>/dist, so build first.
 */
import { readdirSync, readFileSync, existsSync } from "node:fs"
import { join } from "node:path"

const root = new URL("..", import.meta.url).pathname
const only = process.argv.slice(2)
const sites = readdirSync(join(root, "apps")).filter(
  (a) => a !== "leads" && a !== "schedule" && (only.length === 0 || only.includes(a)),
)

for (const app of sites) {
  const pub = join(root, "apps", app, "public")
  const keyFile = readdirSync(pub).find((f) => /^[0-9a-f]{32}\.txt$/.test(f))
  const sitemap = join(root, "apps", app, "dist", "sitemap-0.xml")
  if (!keyFile || !existsSync(sitemap)) {
    console.error(`${app}: missing key file or built sitemap, skipped`)
    continue
  }
  const key = keyFile.slice(0, -4)
  const urlList = [...readFileSync(sitemap, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  const host = new URL(urlList[0]).host
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key, keyLocation: `https://${host}/${keyFile}`, urlList }),
  })
  // 200 = accepted, 202 = accepted and key check pending.
  console.log(`${app}: ${urlList.length} URLs -> HTTP ${res.status}`)
}
