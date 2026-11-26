# Trunk-based development and feature flags

All work lands on `main` in small pieces. `main` is always deployable, and every push to it deploys once deploys are turned on in CI.

## Workflow

1. Branch from `main`, keep the branch to a day or less, and open a PR. CI must be green, including Lighthouse at 100.
2. Merge as soon as it's green. Don't stack long-lived branches.
3. Anything not ready for visitors ships behind a flag that is off by default.
4. Turn the flag on per site, check it, then make it the default.
5. Once it's on everywhere, delete the flag and the dead branch of code in the same PR.

## Site flags (build time)

Flags live in `packages/seo/src/flags.ts`. Because the sites are static, flags resolve at build time, so a flag that's off ships no markup and no JavaScript and can't cost Lighthouse points.

To add one:

```ts
// packages/seo/src/flags.ts
export const FLAG_DEFAULTS = {
  quoteForm: true,
  mobileCallBar: true,
  neighborhoodPages: false, // new work starts off
}
```

Then gate the code with `site.flags.neighborhoodPages`.

Current flags:

| Flag | Default | What it does |
| --- | --- | --- |
| `quoteForm` | on | The quote form and every "free quote" button. |
| `mobileCallBar` | on | The sticky button bar on phones. |
| `phoneCalls` | off | Shows the site's `phone` in the header, hero, call bar, footer, JSON-LD and llms.txt. On phone-first trades (plumbing, electrical, AC, garage door) it also adds a call strip above the header and puts the call button first. Turn it on per site once a renter's forwarding number is live; until then the sites are form-only, so nobody calls a number that can't quote. |
| `photoUpload` | off | Lets customers add up to 5 photos to a quote request. The browser shrinks them before upload, the lead Worker stores them in R2 (`carpet-cleaning-lead-photos`, deleted after 180 days) and links them in the lead email. |
| `priceRanges` | on | Shows the "advertised prices nearby" section on each site's cost guide (and in llms-full.txt): the November 2026 survey of 54 local cleaners' websites. It's market data, not a quote, labeled as other companies' advertised prices. Justin approved showing it on 2026-11-19. Refresh the numbers (and the guides' `updated` date) when the survey is redone. |
| `photoPlaceholders` | off | Shows a labeled, correctly sized box in every planned photo slot that has no image yet (slots are listed in each site's `src/photos.ts`). Use it on preview builds to review placement. A slot with a real image renders whether this is on or off. |

Turbo passes `FLAG_*` variables through to builds (`turbo.json`), so they work through `bun run build` too.

Turning a flag on, in order of scope:

- **One build:** set an environment variable, e.g. `FLAG_NEIGHBORHOOD_PAGES=true bun run build`. Use this for preview deploys.
- **One site:** pass an override in that site's `site.config.ts`: `flags: resolveFlags({ neighborhoodPages: true }, process.env)`.
- **Every site:** flip the default in `FLAG_DEFAULTS`.

Environment variables win over site overrides, which win over defaults. Accepted values are `true`/`1` and `false`/`0`.

## Lead Worker flags (runtime)

The lead Worker reads plain `vars` from `apps/leads/wrangler.jsonc`, which change on the next deploy without a rebuild of any site. Leaving `NOTIFY_FROM` empty, for example, turns lead and confirmation emails off while still saving leads.

## Scheduling app (`apps/schedule`)

The renter scheduling app ships dark. It has no `deploy` script, so `bun run deploy` skips it, `workers_dev` is off and it has no route, and its D1 database id in `wrangler.jsonc` is a placeholder. Nothing on the city sites links to it or posts to it yet. Turning it on is a deliberate step, listed in `apps/schedule/README.md`. When the city sites start offering "Pick a time", that will be a new site flag here, off by default.
