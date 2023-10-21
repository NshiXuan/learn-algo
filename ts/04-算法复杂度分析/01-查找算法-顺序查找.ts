/**
 * 顺序查找的算法
 * @param array 查找的数组
 * @param num 查找的元素
 * @returns 找到元素的索引，未找到返回-1
 */
export function sequentSearch(array: number[], num: number) {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (item == num) {
      return i
    }
  }

  return -1
}

console.log("🚀 ~ file: 01-查找算法-顺序查找.ts:6 ~ sequentSearch([1,3,5,10,100,222,333],222:", sequentSearch([1, 3, 5, 10, 100, 222, 333], 222))
