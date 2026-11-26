import type { PhotoSlot } from "@carpet/ui/photo"

/**
 * Planned photos for this site. None are made yet; turn on the
 * photoPlaceholders flag on a preview build to see where they'd go. To add a
 * real photo, put it in src/assets, import it here and set `image`.
 */
export const photos: Record<string, PhotoSlot> = {}

/** One photo per service page, keyed by service slug. */
export const servicePhotos: Record<string, PhotoSlot> = {}
