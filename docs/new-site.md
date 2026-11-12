# Adding a city site

1. Copy the reference site: `cp -r apps/conroe apps/<town>` and remove `dist`, `.astro` and `node_modules` from the copy.
2. In `apps/<town>/package.json`, rename the package to `@carpet/<town>`.
3. In `wrangler.jsonc`, set `name` to `carpet-<town>` and the custom domain route to the new domain.
4. In `astro.config.mjs`, set `site` to the new origin.
5. Rewrite `src/site.config.ts` for the town: id, name, url, phone (tracked number), service area, neighborhoods, theme colors, and service and FAQ copy written for that town. Don't reuse Conroe's wording; near-duplicate pages across sites hurt all of them.
6. Change the look so it reads as its own business: theme colors, `public/favicon.svg`, hero copy and section order.
7. Add the site to D1 with a new migration in `apps/leads/migrations`:
   `INSERT INTO sites (id, domain, name) VALUES ('<town>', '<domain>', '<name>');`
8. `bun install`, `bun run build`, `bun run lighthouse`, then deploy the site.

## Rules for content

- Only state what's true for the renter. No made-up reviews, ratings, years in business, certifications or addresses.
- Add `operator` (legal name, real staffed address, Google Business Profile link) only once a renter signs and confirms it.
- Prices go in `priceFrom` only when the renter commits to them.
