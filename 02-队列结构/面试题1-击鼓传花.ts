import { ArrayQueue } from "./01-基于数组实现队列结构"

// num代表names数到num时被淘汰的
function hotPotato(names: string[], num: number) {
  if (names.length == 0) return '参数不正确'

  // 1.创建队列
  const queue = new ArrayQueue()

  // 2.将所有的name入队
  for (const name of names) {
    queue.enqueue(name)
  }

  // 3.循环淘汰 弹出队列 只留一个
  while (queue.size() > 1) {
    // 小于num的不淘汰 且出列在入列
    for (let i = 1; i < num; i++) {
      const name = queue.dequeue()
      if (name) queue.enqueue(name)
    }

    // 等于num的淘汰
    queue.dequeue()
  }

  return queue.dequeue()
}

const lastName = hotPotato(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3)
console.log("🚀 ~ file: 面试题1-击鼓传花.ts:27 ~ lastName:", lastName)
