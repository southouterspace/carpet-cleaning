import type { PhotoSlot } from "@carpet/ui/photo"

/**
 * Planned photos for Magnolia (bright farmhouse interiors, late morning,
 * plum and cream). To add a real photo, put it in src/assets, import it
 * at the top of this file and set `image`.
 */
export const photos = {
  hero: { id: "G1", label: "Farmhouse living room with a cream rug", width: 1536, height: 1024, alt: "A bright farmhouse living room with clean cream carpet and a plum throw on the couch." },
  acreage: { id: "G2", label: "Back door mudroom with boots on a tray", width: 1536, height: 1024, alt: "A mudroom by the back door with boots on a tray and a runner over the carpet edge." },
} satisfies Record<string, PhotoSlot>

/** One photo per service page, keyed by service slug. */
export const servicePhotos: Record<string, PhotoSlot> = {}
