import { ArrayStack } from "./01-基于数组实现栈结构"

// 栈实现
function decimalToBinary(decimal: number) {
  // 1.创建一个栈，存放余数
  const stack = new ArrayStack<number>()

  // 2.使用循环
  while (decimal > 0) {
    const res = decimal % 2
    stack.push(res)

    decimal = Math.floor(decimal / 2)
  }

  // 3.将栈中存余数取出
  let binary = ''
  while (!stack.isEmpty()) {
    binary += stack.pop()
  }

  return binary
}

// 数组实现
function decimalToBinaryByArr(decimal: number) {
  // 1.创建数组，存放余数
  const arr: number[] = []

  // 2.使用循环
  while (decimal > 0) {
    const res = decimal % 2
    arr.push(res)

    decimal = Math.floor(decimal / 2)
  }

  // 3.反转数组拼接成字符串
  return arr.reverse().join('')
}

// 10 0011
console.log("🚀 ~ file: 面试题1-十进制转二进制.ts:25 ~ decimalToBinary(35):", decimalToBinary(35))
console.log("🚀 ~ file: 面试题1-十进制转二进制.ts:43 ~ decimalToBinaryByArr(35):", decimalToBinaryByArr(35))
// decimalToBinary(100) // 1100100