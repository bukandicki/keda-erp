import { expect, test } from 'vitest'
import getMaxSumFromAnArray from "./question-2"

test("Should return 700", () => {
  expect(getMaxSumFromAnArray([100, 200, 300, 400], 2)).toBe(700)
})

test("Should return 39", () => {
  expect(getMaxSumFromAnArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39)
})

test("Should return 5", () => {
  expect(getMaxSumFromAnArray([-3, 4, 0, -2, 6, -1], 2)).toBe(5)
})

test("Should return null if array is empty", () => {
  expect(getMaxSumFromAnArray([])).toBe(null)
})

test("Should return null if amount not passed", () => {
  expect(getMaxSumFromAnArray([1, 4, 2, 10, 23, 3, 1, 0, 20])).toBe(null)
})

test("Should return null if some of array element contain non number value", () => {
  expect(getMaxSumFromAnArray([1, 4, 2, 10, 23, 3, 1, 0, "20"], 2)).toBe(null)
})

test("Should return null if amount > array length", () => {
  expect(getMaxSumFromAnArray([1], 2)).toBe(null)
})

