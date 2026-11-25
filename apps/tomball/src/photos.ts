import type { PhotoSlot } from "@carpet/ui/photo"

/**
 * Planned photos for Tomball (warm older homes, wood floors and rugs,
 * afternoon light, ochre and walnut). To add a real photo, put it in
 * src/assets, import it at the top of this file and set `image`.
 */
export const photos = {
  hero: { id: "T1", label: "Older home living room with a wool rug on wood", width: 1536, height: 1024, alt: "An older Tomball living room with a wool area rug on wood floors in afternoon light." },
  homes: { id: "T2", label: "Upstairs landing and stairs in a family home", width: 1024, height: 1024, alt: "Carpeted stairs and an upstairs landing in a two-story family home." },
} satisfies Record<string, PhotoSlot>

/** One photo per service page, keyed by service slug. */
export const servicePhotos: Record<string, PhotoSlot> = {}
