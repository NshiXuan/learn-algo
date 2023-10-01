/**
 * 哈希函数，将key映射为索引
 * @param key 要转换的key
 * @param max 素组长度
 * @returns 索引值
 */
export function hashFunc(key: string, max: number): number {
  // 1.计算hashCode cats => 60337(27为底的时候)
  let hashCode = 0
  const length = key.length
  for (let i = 0; i < length; i++) {
    // 霍纳法则计算hashCode
    // charCodeAt可以通过下标获取到对应的字符的ASCII码
    hashCode = 31 * hashCode + key.charCodeAt(i)
  }

  // 2.求出索引值
  const index = hashCode % max

  return index
}


// 测试哈希函数
console.log("🚀 ~ file: 01-哈希函数hashFunc.ts:23 ~ hashFunc('abc', 8):", hashFunc('abc', 7))
console.log("🚀 ~ file: 01-哈希函数hashFunc.ts:24 ~ hashFunc('cba', 8):", hashFunc('cba', 7))
console.log("🚀 ~ file: 01-哈希函数hashFunc.ts:25 ~ hashFunc('nba', 8):", hashFunc('nba', 7))
console.log("🚀 ~ file: 01-哈希函数hashFunc.ts:26 ~ hashFunc('mba', 8):", hashFunc('mba', 7))

console.log("🚀 ~ file: 01-哈希函数hashFunc.ts:31 ~ hashFunc('aaa', 7):", hashFunc('aaa', 7))
console.log("🚀 ~ file: 01-哈希函数hashFunc.ts:32 ~ hashFunc('bbb', 7):", hashFunc('bbb', 7))
