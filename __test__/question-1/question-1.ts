export default function sortNumber(arr: Array<number>): Array<number> | null {
  if (!Array.isArray(arr) || !arr.length) return null

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]
    let previous = i - 1

    while (previous >= 0 && arr[previous] < current) {
      arr[previous + 1] = arr[previous]
      previous = previous - 1
    }

    arr[previous + 1] = current
  }

  return arr
}
