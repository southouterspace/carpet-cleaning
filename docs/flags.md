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

Turning a flag on, in order of scope:

- **One build:** set an environment variable, e.g. `FLAG_NEIGHBORHOOD_PAGES=true bun run build`. Use this for preview deploys.
- **One site:** pass an override in that site's `site.config.ts`: `flags: resolveFlags({ neighborhoodPages: true }, process.env)`.
- **Every site:** flip the default in `FLAG_DEFAULTS`.

Environment variables win over site overrides, which win over defaults. Accepted values are `true`/`1` and `false`/`0`.

## Lead Worker flags (runtime)

The lead Worker reads plain `vars` from `apps/leads/wrangler.jsonc`, which change on the next deploy without a rebuild of any site. Leaving `NOTIFY_FROM` empty, for example, turns lead emails off while still saving leads.
