/**
 * 根据传入的数字 判断是否为一个质数
 * @param num 要判断的数字
 * @returns 是否为一个质数
 */
function isPrime(num: number): boolean {
  // 质数的特点：只能被1和自己本身整除
  // 11是否为一个质数
  // 平方根3.xxx
  // 16 = 2x8
  // 16 = 4x4
  // 如上的16 其实我们只需要判断平方根前面的值即可
  const sqrt = Math.sqrt(num)

  for (let i = 2; i <= sqrt; i++) {
    if (num % i == 0) {
      return false
    }
  }

  return true
}


console.log("🚀 ~ file: 03-判断是否为质数.ts:11 ~ isPrime(8):", isPrime(8))
console.log("🚀 ~ file: 03-判断是否为质数.ts:12 ~ isPrime(14):", isPrime(14))
console.log("🚀 ~ file: 03-判断是否为质数.ts:13 ~ isPrime(17):", isPrime(17))
console.log("🚀 ~ file: 03-判断是否为质数.ts:21 ~ isPrime(23):", isPrime(23))