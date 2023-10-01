import { ArrayQueue } from "./01-基于数组实现队列结构";

const queue = new ArrayQueue()

queue.enqueue("a")
queue.enqueue("b")
queue.enqueue("c")

console.log("🚀 ~ file: 00-测试队列.ts:10 ~ queue.peek():", queue.peek())
console.log("🚀 ~ file: 00-测试队列.ts:10 ~ queue.dequeue():", queue.dequeue())
console.log("🚀 ~ file: 00-测试队列.ts:10 ~ queue.dequeue():", queue.dequeue())
console.log("🚀 ~ file: 00-测试队列.ts:13 ~ queue.isEmpty():", queue.isEmpty())
console.log("🚀 ~ file: 00-测试队列.ts:14 ~ queue.size:", queue.size())
