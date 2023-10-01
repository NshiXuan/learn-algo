function lastRemaining(n: number, m: number) {
  let positon = 0

  for (let i = 2; i <= n; i++) {
    positon = (positon + m) % i
  }

  return positon
}

console.log("🚀 ~ file: 面试题2-约瑟夫环.ts:26 ~ lastRemaining(3, 5):", lastRemaining(5, 3)) // 3
console.log("🚀 ~ file: 面试题2-约瑟夫环.ts:28 ~ lastRemaining(10, 17):", lastRemaining(10, 17)) // 2