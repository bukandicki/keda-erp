import { expect, test } from 'vitest'
import sumNumInsideObject from "./question-3"

const objSample = {
  a: 2,
  b: {
    b: 2,
    bb: {
      b: 3,
      bb: {
        b: 2
      }
    }
  },
  c: {
    c: {
      c: 2
    },
    cc: 'ball',
    ccc: 5
  },
  d: 1,
  e: {
    e: {
      e: 4
    },
    ee: 'car'
  }
}

test("Should return 12", () => {
  expect(sumNumInsideObject(objSample)).toBe(12)
})

test("Should return 0 ", () => {
  expect(sumNumInsideObject(1)).toBe(0)
  expect(sumNumInsideObject([1])).toBe(0)
})
