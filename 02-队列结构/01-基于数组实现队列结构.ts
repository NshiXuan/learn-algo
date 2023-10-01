import { IQueue } from "./IQueue";

export class ArrayQueue<T> implements IQueue<T>{
  private data: T[] = []

  enqueue(element: T): void {
    this.data.push(element)
  }
  dequeue(): T | undefined {
    // 第一个元素出列
    return this.data.shift()
  }
  peek(): T | undefined {
    return this.data[0]
  }
  isEmpty(): boolean {
    return this.data.length == 0
  }
  size(): number {
    return this.data.length
  }
}