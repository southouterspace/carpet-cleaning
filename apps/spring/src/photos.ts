import type { PhotoSlot } from "@carpet/ui/photo"

/**
 * Planned photos for Spring (two-story family homes, stairs and game rooms,
 * cool daylight, indigo accents). To add a real photo, put it in
 * src/assets, import it at the top of this file and set `image`.
 */
export const photos = {
  hero: { id: "S1", label: "Carpeted staircase and landing in a two-story home", width: 1024, height: 1280, alt: "A carpeted staircase leading up to a landing in a two-story Spring home." },
  upstairs: { id: "S2", label: "Upstairs game room with clean carpet", width: 1536, height: 1024, alt: "An upstairs game room with freshly cleaned carpet." },
} satisfies Record<string, PhotoSlot>

/** One photo per service page, keyed by service slug. */
export const servicePhotos: Record<string, PhotoSlot> = {}
