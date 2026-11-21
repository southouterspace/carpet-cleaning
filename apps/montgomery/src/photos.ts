import type { PhotoSlot } from "@carpet/ui/photo"

/**
 * Planned photos for Montgomery (documentary lake-house life, golden hour).
 * Prompts are in the "Carpet Site Image Prompts" doc. To add a real photo,
 * put it in src/assets, import it at the top of this file and set `image`.
 */
export const photos = {
  // Decorative: sits behind the hero text under a brick overlay, so no alt.
  hero: { id: "M1", label: "Lake house living room at golden hour", width: 2048, height: 1152, alt: "" },
  services: { id: "M2", label: "Sand and red clay grit in carpet fibers", width: 1024, height: 1024, alt: "Close-up of sand and red clay grit at the base of carpet fibers." },
  lake: { id: "M3", label: "Rental porch and living room between guests", width: 1536, height: 1024, alt: "A lake rental's screened porch and living room being cleaned between guests." },
  areas: { id: "M4", label: "Docks on the west shore of Lake Conroe at sunset", width: 2560, height: 1088, alt: "Private boat docks and pine-lined shoreline on the west side of Lake Conroe at sunset." },
} satisfies Record<string, PhotoSlot>

/** One photo per service page, keyed by service slug. */
export const servicePhotos: Record<string, PhotoSlot> = {
  "carpet-cleaning": { id: "MS1", label: "Wand rinsing a hallway traffic lane", width: 1536, height: 1024, alt: "A carpet wand rinsing a worn traffic lane in a hallway." },
  "lake-house-rental-cleaning": { id: "MS2", label: "Bringing equipment into a lake rental", width: 1536, height: 1024, alt: "A cleaner bringing equipment into a lake rental through a keypad-locked door." },
  "pet-odor-removal": { id: "MS3", label: "Treating a spot as a lab mix rests nearby", width: 1536, height: 1024, alt: "A cleaner treating a carpet spot as a lab mix rests nearby." },
  "upholstery-cleaning": { id: "MS4", label: "Cleaning a denim-blue lake house sofa", width: 1536, height: 1024, alt: "An upholstery tool cleaning a denim-blue lake house sofa." },
  "tile-and-grout-cleaning": { id: "MS5", label: "Rinsing grout on a lake-house kitchen floor", width: 1536, height: 1024, alt: "Rinsing grout on a tiled lake-house kitchen floor." },
  "area-rug-cleaning": { id: "MS6", label: "Rolling up a jute rug on the porch", width: 1536, height: 1024, alt: "Hands rolling up a jute rug on a covered porch." },
}
