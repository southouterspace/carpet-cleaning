import type { PhotoSlot } from "@carpet/ui/photo"

/**
 * Planned photos for Conroe (bright practical close-ups in newer homes).
 * Prompts are in the "Carpet Site Image Prompts" doc. To add a real photo,
 * put it in src/assets, import it at the top of this file and set `image`.
 */
export const photos = {
  hero: { id: "C1", label: "Wand on light carpet in a bright new build", width: 1536, height: 1024, alt: "A carpet cleaning wand working across light carpet in a bright new Conroe home." },
  newBuilds: { id: "C2", label: "New brick-and-stone homes, young trees", width: 1536, height: 1024, alt: "New brick-and-stone homes with young trees in a Conroe subdivision." },
  established: { id: "C3", label: "1980s brick ranch under mature oaks", width: 1536, height: 1024, alt: "A 1980s brick ranch home under mature oaks near downtown Conroe." },
  lake: { id: "C4", label: "Back lawn sloping down to Lake Conroe", width: 1536, height: 1024, alt: "The back lawn of a Lake Conroe home sloping down to the water." },
  price: { id: "C5", label: "Room and stairs cleared, ready to clean", width: 1536, height: 1024, alt: "A living room with a carpeted staircase and furniture moved aside, ready for carpet cleaning." },
} satisfies Record<string, PhotoSlot>

/** One photo per service page, keyed by service slug. */
export const servicePhotos: Record<string, PhotoSlot> = {
  "carpet-cleaning": { id: "CS1", label: "Pre-treating a traffic lane", width: 1536, height: 1024, alt: "A cleaner pre-treating a traffic lane on light carpet." },
  "pet-odor-removal": { id: "CS2", label: "UV light showing hidden pet spots", width: 1536, height: 1024, alt: "A UV flashlight showing hidden pet urine spots on carpet." },
  "upholstery-cleaning": { id: "CS3", label: "Cleaning a grey microfiber couch", width: 1536, height: 1024, alt: "An upholstery tool cleaning a grey microfiber couch." },
  "tile-and-grout-cleaning": { id: "CS4", label: "Rinsing grout on a porcelain kitchen floor", width: 1536, height: 1024, alt: "A pressure rinse tool cleaning grout on a porcelain kitchen floor." },
  "area-rug-cleaning": { id: "CS5", label: "Vacuuming a rug over hardwood", width: 1536, height: 1024, alt: "A synthetic area rug over hardwood being vacuumed before cleaning." },
  "move-out-carpet-cleaning": { id: "CS6", label: "Empty rental bedroom on moving day", width: 1536, height: 1024, alt: "An empty rental bedroom with bare carpet and moving boxes by the door." },
}
