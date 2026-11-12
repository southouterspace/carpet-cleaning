// @ts-check
import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: "https://woodlandscarpetcleaning.com",
  trailingSlash: "never",
  build: {
    format: "file",
    // Inline all CSS so there's no render-blocking stylesheet request.
    inlineStylesheets: "always",
  },
  integrations: [
    sitemap({ filter: (page) => !page.includes("/thanks") }),
  ],
})
