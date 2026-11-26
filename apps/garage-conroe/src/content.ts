import type { Area, Guide, Service } from "@carpet/seo"

/**
 * Longer Conroe garage door copy: extra services, area pages and guides.
 * Written for this site only. No claims about crew size, years in business,
 * reviews, prices, warranties or response times until a renter confirms them.
 */

export const moreServices: Service[] = [
  {
    slug: "tune-ups",
    name: "Tune-ups and noisy doors",
    summary: "Lubrication, roller and hinge checks, balance tests and safety-reverse tests for doors that grind, squeal or shake.",
    answer:
      "A tune-up lubricates springs, hinges and rollers, tightens hardware, checks the balance and cables, and tests the safety reverse. A noisy door is often worn nylon or steel rollers, which are cheap to replace.",
    body: [
      "Conroe's humidity and summer heat are hard on rollers and weatherstripping. A yearly check catches a fraying cable or a tired spring before it fails.",
    ],
  },
]

export const withMoreContent = (core: Service[]): Service[] => [...core, ...moreServices]

export const areas: Area[] = [
  {
    slug: "grand-central-park",
    name: "Grand Central Park",
    kind: "neighborhood",
    summary: "Garage door service in Grand Central Park: openers, sensors, springs coming due and insulated door upgrades.",
    answer:
      "Grand Central Park's builder-installed doors and openers are reaching the age when the first spring breaks and openers start acting up. Insulated doors are a popular upgrade where there's a room over the garage.",
    intro: ["Grand Central Park is a newer master-planned community south of downtown Conroe along I-45."],
    highlight: ["broken-spring-repair", "opener-repair", "new-garage-doors"],
  },
  {
    slug: "river-plantation",
    name: "River Plantation",
    kind: "neighborhood",
    summary: "Garage door repair in River Plantation's older homes: worn springs, old openers, sagging doors and replacements.",
    answer:
      "River Plantation's homes are mostly from the 1970s and 1980s, so many garage doors and openers are on their second or third set of springs, and some openers predate modern safety sensors. If yours has no sensors near the floor, it's time to replace it.",
    intro: ["River Plantation sits south of downtown Conroe along the West Fork of the San Jacinto River."],
    highlight: ["opener-repair", "new-garage-doors", "off-track-cable-repair"],
  },
  {
    slug: "artavia",
    name: "Artavia",
    kind: "neighborhood",
    summary: "Garage door service in Artavia: openers, smart controls, sensor alignment and spring replacement for newer homes.",
    answer:
      "Artavia homes are recent, so the usual calls are sensor alignment, opener and keypad setup, and the first broken spring. Keep the opener's model number handy; a photo of its label helps.",
    intro: ["Artavia is a newer community off Highway 242 on the east side of Conroe."],
    highlight: ["opener-repair", "tune-ups", "broken-spring-repair"],
  },
]

export const guides: Guide[] = [
  {
    slug: "broken-garage-door-spring",
    title: "Broken garage door spring: what to do (and not do)",
    summary: "How to tell a spring has broken, why you shouldn't lift the door or run the opener, and what replacement involves.",
    updated: "2026-11-26",
    answer:
      "If you heard a bang and the door won't lift, a spring has probably broken. Don't run the opener, don't lift the door by hand, and don't pull the emergency release if the door is open, since it can drop. Keep people and cars clear and request a technician. Replacing both springs on a two-spring door is usually best.",
    intro: ["Springs break most often in cold snaps and after years of daily cycles."],
    sections: [
      {
        heading: "Do",
        howTo: true,
        paragraphs: [],
        list: [
          "Unplug the opener so nobody presses the button",
          "Keep people, pets and cars away from the door",
          "Take a photo of the spring above the door",
          "Send a request marked Emergency if a car is trapped",
        ],
      },
      {
        heading: "Don't",
        paragraphs: [],
        list: [
          "Lift the door by hand",
          "Pull the red emergency cord with the door open",
          "Loosen or adjust the spring or its set screws",
        ],
      },
    ],
  },
  {
    slug: "garage-door-wont-close",
    title: "Garage door won't close? Check the sensors first",
    summary: "The most common reasons a door reverses or won't close, and the five-minute checks to try.",
    updated: "2026-11-26",
    answer:
      "Most doors that won't close have blocked, dirty or misaligned safety sensors, the small eyes on each side near the floor. Clear anything in the way, wipe the lenses, and nudge them until both lights are steady. If it still reverses, the close force or travel limits may need adjusting, or something is binding in the track.",
    intro: ["Since 1993, openers sold in the US must reverse when something breaks the sensor beam."],
    sections: [
      {
        heading: "Checks",
        howTo: true,
        paragraphs: [],
        list: [
          "Remove anything near the sensors or in the door's path",
          "Wipe both sensor lenses with a soft cloth",
          "Check that both sensor lights are on and steady, not blinking",
          "Look for sunlight hitting one sensor directly",
          "Hold the wall button down to close it once while you watch for binding",
        ],
      },
    ],
  },
]
