# Adding a city site

1. Copy the reference site: `cp -r apps/conroe apps/<town>` and remove `dist`, `.astro` and `node_modules` from the copy.
2. In `apps/<town>/package.json`, rename the package to `@carpet/<town>`.
3. In `wrangler.jsonc`, set `name` to `carpet-cleaning-<town>`. That makes the site's URL `https://carpet-cleaning-<town>.southouterspace.workers.dev`.
4. In `astro.config.mjs`, set `site` to the new origin.
5. Rewrite `src/site.config.ts` for the town: id, name, url, phone (only shown once the `phoneCalls` flag is on for that site), service area, neighborhoods, theme colors, and service and FAQ copy written for that town. Don't reuse Conroe's wording; near-duplicate pages across sites hurt all of them.
6. Change the look so it reads as its own business: theme colors, `public/favicon.svg`, hero copy and section order. Site-specific markup and styles go in the app itself: `src/components/Page.astro` wraps the shared Layout and pulls in `src/styles/site.css` (fonts, radius, tints), and the app can have its own hero and local sections. See `apps/woodlands` (serif, rounded, split hero, village grid) and `apps/montgomery` (brick band hero, form first, lake-house section) for two different takes.
7. Add the site to D1 with a new migration in `apps/leads/migrations`:
   `INSERT INTO sites (id, domain, name) VALUES ('<town>', '<domain or workers.dev hostname>', '<name>');`
   Also add that hostname to the `carpet-cleaning` Turnstile widget.
8. `bun install`, `bun run build`, `bun run lighthouse`, then deploy the site.

## Rules for content

- Only state what's true for the renter. No made-up reviews, ratings, years in business, certifications or addresses.
- Add `operator` (legal name, real staffed address, Google Business Profile link) only once a renter signs and confirms it.
- Prices go in `priceFrom` only when the renter commits to them.
