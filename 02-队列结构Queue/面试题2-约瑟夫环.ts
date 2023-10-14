import { ArrayQueue } from "./01-基于数组实现队列结构";

function lastRemaining(n: number, m: number) {
  // 1.创建一个队列
  const queue = new ArrayQueue<number>()

  // 2.将数字放到队列中
  for (let i = 0; i < n; i++) {
    queue.enqueue(i)
  }

  // 3.循环队列 把下标为m的数字删除，留下最后一个
  while (queue.size() > 1) {
    // 下标小于m的数 出队再入队
    for (let i = 1; i < m; i++) {
      const num = queue.dequeue()
      queue.enqueue(num!)
    }

    // 下标为m的出列
    queue.dequeue()
  }

  return queue.dequeue()
}

console.log("🚀 ~ file: 面试题2-约瑟夫环.ts:26 ~ lastRemaining(3, 5):", lastRemaining(5, 3))
console.log("🚀 ~ file: 面试题2-约瑟夫环.ts:28 ~ lastRemaining(10, 17):", lastRemaining(10, 17))
