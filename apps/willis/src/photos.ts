import type { PhotoSlot } from "@carpet/ui/photo"

/**
 * Planned photos for Willis (clean modern new builds and lake cottages,
 * blue hour and overcast light, navy accents). To add a real photo, put it
 * in src/assets, import it at the top of this file and set `image`.
 */
export const photos = {
  hero: { id: "L1", label: "New-build living room with fresh carpet lines", width: 1536, height: 1024, alt: "A new-build living room with fresh, even carpet lines after cleaning." },
  local: { id: "L2", label: "Lake cottage screened porch door into a carpeted den", width: 1536, height: 864, alt: "A screened porch door opening into a carpeted den in a Lake Conroe cottage." },
} satisfies Record<string, PhotoSlot>

/** One photo per service page, keyed by service slug. */
export const servicePhotos: Record<string, PhotoSlot> = {}
