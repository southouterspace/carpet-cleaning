# Carpet cleaning city sites

A monorepo of standalone carpet cleaning websites, one per town, built to rank in local search, read cleanly to AI agents, and turn visits into calls and quote requests. Each site is rented to a local cleaner (rank-and-rent).

Everything runs on Cloudflare: each site is a static Astro build served by Workers static assets, and one shared Worker takes quote requests and stores them in D1.

## Layout

```
apps/
  conroe/        Astro site for conroetxcarpetcleaners.com (the reference site)
  leads/         Shared lead Worker: validates, stores in D1, emails the renter
packages/
  seo/           SiteConfig type, JSON-LD builders, llms.txt and robots.txt
  ui/            Shared Astro components: layout, hero, services, quote form, FAQ
```

Each site's content lives in one file, `apps/<site>/src/site.config.ts`. Pages, structured data, `llms.txt` and the sitemap are all generated from it.

## How a lead flows

1. A visitor submits the quote form: contact details plus rooms, stairs, pets and timing, so a cleaner can price the job before calling back. Sites are form-only for now; the phone number shows only when a site turns on the `phoneCalls` flag (docs/flags.md), for when a renter's forwarding number rings them directly.
2. The form posts same-origin to `/api/lead`. The site's tiny edge Worker (`apps/<site>/worker.ts`) hands `/api/*` to the `carpet-leads` Worker through a service binding; every other request is served straight from static assets.
3. `carpet-leads` checks the honeypot and Turnstile, saves the lead in D1, and emails the renter and you through Cloudflare Email Service.
4. Without JavaScript the form still works: the Worker redirects to `/thanks`.

## Commands

```bash
bun install
bun run dev          # all apps
bun run build        # build every site
bun run check        # astro check + tsc
bun run test         # unit tests
bun run lighthouse   # Lighthouse CI, fails below 100 in any category
```

Run one site and the lead Worker together, with a local D1:

```bash
cd apps/leads && bunx wrangler d1 migrations apply carpet-leads --local
cd ../conroe && bun run build && bunx wrangler dev -c wrangler.jsonc -c ../leads/wrangler.jsonc --persist-to ../leads/.wrangler/state
```

## Performance rules

These keep every page at 100 in Lighthouse and pass Core Web Vitals:

- No web fonts (system font stack), no images above the fold unless sized and optimized through `astro:assets`.
- CSS is inlined (`build.inlineStylesheets: "always"`); no stylesheet requests.
- No client JS except the quote form's small inline script. Turnstile loads only after the visitor touches the form.
- No third-party tags (analytics, chat widgets, pixels) without measuring them first. Use Cloudflare Web Analytics if needed.
- CI runs Lighthouse CI against the built site on every PR.

## How we work

Trunk-based: small branches merge to `main` fast, `main` deploys, and unfinished work ships dark behind feature flags. See [docs/flags.md](docs/flags.md).

## Adding a site

See [docs/new-site.md](docs/new-site.md).

## First deploy

1. `bunx wrangler d1 create carpet-leads`, then paste the id into `apps/leads/wrangler.jsonc`.
2. `cd apps/leads && bun run db:migrate`
3. Onboard a sending domain: `bunx wrangler email sending enable <domain>`, then set `NOTIFY_FROM` and `OWNER_EMAIL` in `apps/leads/wrangler.jsonc`.
4. Create a Turnstile widget for the site's domain. Put the site key in `site.config.ts` and run `bunx wrangler secret put TURNSTILE_SECRET` in `apps/leads`.
5. `bun run deploy` deploys the lead Worker, then every site. The site attaches to its domain as a Workers custom domain, so the domain must be a zone in the same Cloudflare account.

After the first manual deploy works, set the repository variable `DEPLOY_ENABLED=true` and the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets so every push to `main` deploys.
