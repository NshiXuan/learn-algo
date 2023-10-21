import IStack from "./IStack"

// 基于数组封装一个栈
export class ArrayStack<T = any> implements IStack<T> {
  // 定义一个数组，用于存储元素
  private data: T[] = []

  // push 将一个元素压入栈
  push(element: T): any {
    this.data.push(element)
  }

  // pop 将栈顶元素弹出栈返回出去并从栈顶删除
  pop(): T | undefined {
    return this.data.pop()
  }

  // peek 看一眼栈顶元素 但是不进行任何操作
  peek(): T | undefined {
    return this.data[this.data.length - 1]
  }

  // isEmpty 判断栈是否为空
  isEmpty() {
    return this.data.length === 0
  }

  // 返回栈的数据个数
  size() {
    return this.data.length
  }
}

// 不建议在这里写测试代码 因为其它文件引入改文件的时候会默认运行打印
// const stack1 = new ArrayStack<string>()
// stack1.push('a')
// stack1.push('b')
// stack1.push('c')

// console.log(stack1.peek())
// console.log(stack1.size())
// console.log(stack1.pop())
// console.log(stack1.pop())
// console.log(stack1.pop())
// console.log(stack1.isEmpty())