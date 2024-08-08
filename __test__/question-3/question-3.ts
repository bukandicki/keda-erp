type ObjType = {
  [key: string]: any
}

export default function sumNumInsideObject(obj: ObjType): number {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return 0

  let sum = 0

  for (const key in obj) {
    if (typeof obj[key] === "object") sum += sumNumInsideObject(obj[key])
    else if (typeof obj[key] === "number" && obj[key] % 2 === 0) sum += obj[key]
  }

  return sum
}
