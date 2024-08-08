import { expect, test } from 'vitest'
import sortNumber from './question-1';

test("Should Return [5, 4, 3, 3, 2, 2, 1, 1]", () => {
  expect(sortNumber([1, 2, 4, 3, 5, 3, 2, 1])).toStrictEqual([5, 4, 3, 3, 2, 2, 1, 1])
})

test("Should return null if not an array", () => {
  expect(sortNumber(null)).toBe(null)
})

test("Should return null if array is empty", () => {
  expect(sortNumber([])).toBe(null)
})

