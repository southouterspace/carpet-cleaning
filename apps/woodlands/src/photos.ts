import type { PhotoSlot } from "@carpet/ui/photo"

/**
 * Planned photos for The Woodlands (calm editorial interiors, pine-filtered
 * morning light). Prompts are in the "Carpet Site Image Prompts" doc. To add a
 * real photo, put it in src/assets,
 * import it at the top of this file and set `image`.
 */
export const photos = {
  hero: { id: "W1", label: "Upstairs landing and carpeted stairs, pines in the window", width: 1536, height: 1024, alt: "Freshly cleaned carpet on an upstairs landing and staircase in a two-story Woodlands home." },
  steps: { id: "W2", label: "Socks on freshly groomed carpet", width: 1024, height: 1024, alt: "Feet in wool socks walking across a freshly cleaned carpet." },
  villages: { id: "W3", label: "Pine-lined street of two-story brick homes", width: 2560, height: 1088, alt: "A pine-lined residential street of two-story brick homes in The Woodlands, Texas." },
  faq: { id: "W4", label: "Spring pine pollen on the back patio", width: 1536, height: 1024, alt: "Yellow pine pollen on a back patio by a sliding door, where it gets tracked onto carpet." },
} satisfies Record<string, PhotoSlot>

/** One photo per service page, keyed by service slug. */
export const servicePhotos: Record<string, PhotoSlot> = {
  "carpet-cleaning": { id: "WS1", label: "Wand rinsing carpet in an upstairs game room", width: 1536, height: 1024, alt: "A cleaner's wand rinsing carpet in an upstairs game room." },
  "stair-carpet-cleaning": { id: "WS2", label: "Hand tool cleaning one stair tread", width: 1536, height: 1024, alt: "A hand tool cleaning one carpeted stair tread at a time." },
  "pet-stain-odor-treatment": { id: "WS3", label: "Treating a spot while the dog watches", width: 1536, height: 1024, alt: "A gloved hand treating a carpet spot while a dog watches from the doorway." },
  "upholstery-cleaning": { id: "WS4", label: "Cleaning a cream linen sectional", width: 1536, height: 1024, alt: "An upholstery tool cleaning a cream linen sectional." },
  "area-rug-cleaning": { id: "WS5", label: "Checking a wool rug's fringe and backing", width: 1536, height: 1024, alt: "Hands checking the fringe and backing of a wool rug on oak floors." },
  "tile-and-grout-cleaning": { id: "WS6", label: "Grout brush in a mudroom", width: 1536, height: 1024, alt: "A grout brush working along tile lines in a mudroom." },
}
