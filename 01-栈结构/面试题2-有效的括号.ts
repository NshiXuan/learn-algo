import { ArrayStack } from "./01-基于数组实现栈结构"

function isValid(s: string) {
  // 1.创建一个栈结构
  const stack = new ArrayStack<string>()

  // 2.遍历s中所有的括号
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c == '(') {
      stack.push(')')
    } else if (c == '[') {
      stack.push(']')
    } else if (c == '{') {
      stack.push('}')
    } else {
      if (c != stack.pop()) return false
    }
  }

  // 3.判断栈是否为空
  return stack.isEmpty()
}

console.log("🚀 ~ file: 面试题2-有效的括号.ts:7 ~ isValid('()'):", isValid('()'))
console.log("🚀 ~ file: 面试题2-有效的括号.ts:8 ~ isValid('()[]{}'):", isValid('([]){}'))
console.log("🚀 ~ file: 面试题2-有效的括号.ts:9 ~ isValid('(]'):", isValid('(]'))
