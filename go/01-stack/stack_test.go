package stack

import (
	"fmt"
	"testing"
)

func TestStack(t *testing.T) {
	// 使用 Slice 作为栈
	var stack []int
	// 入栈
	stack = append(stack, 1)
	stack = append(stack, 2)
	stack = append(stack, 3)
	fmt.Printf("stack: %v\n", stack)

	// 获取栈顶
	fmt.Printf("栈顶 stack[len(stack)-1]: %v\n", stack[len(stack)-1])

	// 出栈
	stack = stack[:len(stack)-1]
	stack = stack[:len(stack)-1]
	stack = stack[:len(stack)-1]

	fmt.Println(len(stack) == 0)
}

func TestArrayStack(t *testing.T) {
	intArrayStack := NewArrayStack[int]()
	intArrayStack.push(1)
	intArrayStack.push(2)
	intArrayStack.push(3)

	fmt.Printf("arrayStack.toSlice(): %v\n", intArrayStack.toSlice())
	fmt.Printf("arrayStack.peek(): %v\n", intArrayStack.peek())
	fmt.Printf("arrayStack.isEmpty(): %v\n", intArrayStack.isEmpty())

	fmt.Printf("arrayStack.pop(): %v\n", intArrayStack.pop())
	fmt.Printf("arrayStack.pop(): %v\n", intArrayStack.pop())
	fmt.Printf("arrayStack.pop(): %v\n", intArrayStack.pop())
	fmt.Printf("arrayStack.isEmpty(): %v\n", intArrayStack.isEmpty())

	stringArrayStack := NewArrayStack[string]()
	stringArrayStack.push("a")
	stringArrayStack.push("b")
	stringArrayStack.push("c")

	fmt.Printf("stringArrayStack.toSlice(): %v\n", stringArrayStack.toSlice())
	fmt.Printf("stringArrayStack.peek(): %v\n", stringArrayStack.peek())
	fmt.Printf("stringArrayStack.isEmpty(): %v\n", stringArrayStack.isEmpty())

	fmt.Printf("stringArrayStack.pop(): %v\n", stringArrayStack.pop())
	fmt.Printf("stringArrayStack.pop(): %v\n", stringArrayStack.pop())
	fmt.Printf("stringArrayStack.pop(): %v\n", stringArrayStack.pop())
	fmt.Printf("stringArrayStack.toSlice(): %v\n", stringArrayStack.toSlice())
	fmt.Printf("stringArrayStack.peek(): %v\n", stringArrayStack.peek())
	fmt.Printf("stringArrayStack.isEmpty(): %v\n", stringArrayStack.isEmpty())
}

func TestLinkedListStack(t *testing.T) {
	linkedListStack := NewLinkedListStack()
	linkedListStack.push(1)
	linkedListStack.push(2)
	linkedListStack.push(3)

	fmt.Printf("linkedListStack.toList(): %+v\n", linkedListStack.toList())
	fmt.Printf("linkedListStack.peek(): %v\n", linkedListStack.peek())
	fmt.Printf("linkedListStack.size(): %v\n", linkedListStack.size())

	linkedListStack.pop()
	linkedListStack.pop()
	fmt.Printf("linkedListStack.peek(): %v\n", linkedListStack.peek())
	linkedListStack.pop()
	fmt.Printf("linkedListStack.peek(): %v\n", linkedListStack.peek())
	fmt.Printf("linkedListStack.size(): %v\n", linkedListStack.size())
}
