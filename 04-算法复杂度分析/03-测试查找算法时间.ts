import { sequentSearch } from "./01-查找算法-顺序查找";
import { binarySearch } from "./02-查找算法-二分查找";

const MAX_LENGTH = 10000000
const nums = new Array(MAX_LENGTH).fill(0).map((_, i) => i)
const num = MAX_LENGTH / 2


let startTime = performance.now()
let index = sequentSearch(nums, num)
let endTime = performance.now()
console.log("🚀 ~ file: 03-测试查找算法时间.ts:10 ~ index:", index)
console.log("🚀 ~ file: 03-测试查找算法时间.ts:13 ~ endTime-startTime:", endTime - startTime)

startTime = performance.now()
index = binarySearch(nums, num)
endTime = performance.now()
console.log("🚀 ~ file: 03-测试查找算法时间.ts:17 ~ index:", index)
console.log("🚀 ~ file: 03-测试查找算法时间.ts:20 ~ endTime-startTime:", endTime - startTime)

