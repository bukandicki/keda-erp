export default function getMaxSumFromAnArray(arr: Array<number>, amount: number) {
  if (!Array.isArray(arr) || arr.some(v => typeof v !== "number") || typeof amount !== "number" || amount > arr.length) return null

  let max = 0
  let tempMax = 0

  for (let i = 0; i < amount; i++) { // run x time based on "amount"
    max += arr[i]
  }

  tempMax = max

  for (let i = amount; i < arr.length; i++) { // initial index start with 2
    tempMax = tempMax - arr[i - amount] + arr[i]

    if (tempMax > max) max = tempMax
  }

  return max
}
