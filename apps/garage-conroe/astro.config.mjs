// @ts-check
import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import { site } from "./src/site.config.ts"

export default defineConfig({
  site: "https://conroetxgaragedoor.com",
  trailingSlash: "never",
  build: {
    format: "file",
    // Inline all CSS so there's no render-blocking stylesheet request.
    inlineStylesheets: "always",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/thanks"),
      // Tells crawlers when the copy last changed; guides carry their own date.
      serialize(item) {
        const guide = site.guides?.find((g) => item.url.endsWith(`/guides/${g.slug}`))
        const updated = guide?.updated ?? site.updated
        return updated ? { ...item, lastmod: `${updated}T12:00:00.000Z` } : item
      },
    }),
  ],
})
