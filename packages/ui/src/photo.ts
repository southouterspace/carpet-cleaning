import type { ImageMetadata } from "astro"
import type { SiteConfig } from "@carpet/seo"

/**
 * One planned photo on a site. Until `image` is set, the slot renders a sized
 * placeholder when the photoPlaceholders flag is on, and nothing when it's
 * off, so live pages don't change until real photos arrive.
 */
export interface PhotoSlot {
  /** Slot code from the image plan doc, e.g. "W1". */
  id: string
  /** Short description of the planned shot, shown on the placeholder. */
  label: string
  /** Planned display size; sets the aspect ratio, so there's no layout shift. */
  width: number
  height: number
  /** Alt text. Leave empty for decorative images (e.g. behind a heading). */
  alt: string
  /** The real photo, imported from the site's src/assets folder. */
  image?: ImageMetadata
}

/** Whether a slot renders anything on this build. */
export const showPhoto = (site: SiteConfig, photo?: PhotoSlot): photo is PhotoSlot =>
  !!photo && (!!photo.image || site.flags.photoPlaceholders)
