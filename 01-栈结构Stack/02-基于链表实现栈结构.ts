import IStack from "./IStack";

// 基于链表封装一个栈
class LinkedStack<T> implements IStack<T> {
  // 定义一个链表，用于存储元素


  push(element: T): void {
    throw new Error("Method not implemented.");
  }
  pop(): T | undefined {
    throw new Error("Method not implemented.");
  }
  peek(): T | undefined {
    throw new Error("Method not implemented.");
  }
  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
  size(): number {
    throw new Error("Method not implemented.");
  }

}