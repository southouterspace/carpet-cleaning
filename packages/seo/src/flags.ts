/**
 * Build-time feature flags. Work lands on main behind a flag that is off by
 * default, ships dark, and is turned on per site (in site.config.ts) or per
 * build (FLAG_* environment variables, e.g. on a preview deploy).
 *
 * Flags are resolved at build time, so a flag that is off ships no markup and
 * no JavaScript. Remove a flag and its dead branch once the feature is on
 * everywhere.
 */
export const FLAG_DEFAULTS = {
  /** Quote form on the home and service pages. */
  quoteForm: true,
  /** Sticky call and quote bar on phones. */
  mobileCallBar: true,
  /**
   * Phone number and call buttons. Off until a renter's forwarding number is
   * live, so the site never shows a number nobody answers.
   */
  phoneCalls: false,
  /** Photo picker on the quote form. Needs the lead Worker's PHOTOS bucket. */
  photoUpload: false,
  /**
   * Sized placeholder boxes where planned photos will go. For previews only;
   * slots with a real image render regardless of this flag.
   */
  photoPlaceholders: false,
} satisfies Record<string, boolean>

export type Flags = { [K in keyof typeof FLAG_DEFAULTS]: boolean }
export type FlagName = keyof Flags

/** "mobileCallBar" -> "FLAG_MOBILE_CALL_BAR" */
export const flagEnvName = (name: string) =>
  `FLAG_${name.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toUpperCase()}`

/**
 * Resolves flags in order: defaults, then the site's overrides, then
 * FLAG_* variables from the build environment ("true"/"1" or "false"/"0").
 */
export function resolveFlags(
  siteOverrides: Partial<Flags> = {},
  env: Record<string, string | undefined> = {}
): Flags {
  const flags: Flags = { ...FLAG_DEFAULTS, ...siteOverrides }
  for (const name of Object.keys(flags) as FlagName[]) {
    const raw = env[flagEnvName(name)]?.trim().toLowerCase()
    if (raw === "true" || raw === "1") flags[name] = true
    else if (raw === "false" || raw === "0") flags[name] = false
  }
  return flags
}
