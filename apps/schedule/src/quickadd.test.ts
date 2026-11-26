import { describe, expect, test } from "bun:test"
import { parseQuickAdd } from "./quickadd"

const TODAY = "2026-11-26" // a Thursday

describe("parseQuickAdd", () => {
  test("the example from the mockup", () => {
    expect(parseQuickAdd("Lee 4 rooms pets Thu 1pm", TODAY)).toMatchObject({
      name: "Lee", rooms: 4, pets: true, stairs: 0, day: TODAY, start: 13 * 60,
    })
  })
  test("stairs, ZIP, phone and notes", () => {
    const q = parseQuickAdd("Maria Gomez 3 rooms stairs tomorrow 9:30am 77304 936-555-0142, gate code 4411", TODAY)
    expect(q).toMatchObject({
      name: "Maria Gomez", rooms: 3, stairs: 1, day: "2026-11-27", start: 9 * 60 + 30,
      zip: "77304", phone: "9365550142", notes: "gate code 4411",
    })
  })
  test("weekday names find the next one", () => {
    expect(parseQuickAdd("Ann mon", TODAY).day).toBe("2026-11-30")
    expect(parseQuickAdd("Ann next thursday", TODAY).day).toBe("2026-12-03")
    expect(parseQuickAdd("Ann Saturday", TODAY).day).toBe("2026-11-28")
  })
  test("number words, bare afternoon hours and dates", () => {
    expect(parseQuickAdd("Bo two rooms 12/3 at 2", TODAY)).toMatchObject({
      name: "Bo", rooms: 2, day: "2026-12-03", start: 14 * 60,
    })
    expect(parseQuickAdd("Cy 1/8 noon", TODAY)).toMatchObject({ day: "2027-01-08", start: 12 * 60 })
    expect(parseQuickAdd("Di 2 flights 10a", TODAY)).toMatchObject({ stairs: 2, start: 10 * 60 })
  })
  test("keeps what it can't read", () => {
    const q = parseQuickAdd("Brooks rug only", TODAY)
    expect(q).toMatchObject({ name: "Brooks rug only", rooms: 0, day: null, start: null })
  })
})
