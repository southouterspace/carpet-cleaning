# CLAUDE.md

Monorepo of rank-and-rent carpet cleaning city sites. Read README.md first.

- Package manager is Bun (workspaces + Turborepo). Don't use npm, pnpm or `npx` for project tools; use `bunx` or the package's own `node_modules/.bin`.
- Stack is Cloudflare only: Astro static builds on Workers static assets, D1, Email Service, Turnstile. Ask before adding another service.
- Every site must stay at 100 in all Lighthouse categories. Run `bun run lighthouse` after UI changes. Follow the performance rules in README.md.
- Site content lives in `apps/<site>/src/site.config.ts`. Shared markup goes in `packages/ui`, structured data and llms.txt logic in `packages/seo`.
- Never invent reviews, ratings, addresses, licenses or prices on a site. Those come from a signed renter.
- Sites must not look or read like copies of each other; vary copy, theme and layout per site.
