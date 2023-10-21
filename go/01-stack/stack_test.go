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
	arrayStack := NewArrayStack()
	arrayStack.push(1)
	arrayStack.push(2)
	arrayStack.push(3)

	fmt.Printf("arrayStack.toSlice(): %v\n", arrayStack.toSlice())
	fmt.Printf("arrayStack.peek(): %v\n", arrayStack.peek())
	fmt.Printf("arrayStack.isEmpty(): %v\n", arrayStack.isEmpty())

	fmt.Printf("arrayStack.pop(): %v\n", arrayStack.pop())
	fmt.Printf("arrayStack.pop(): %v\n", arrayStack.pop())
	fmt.Printf("arrayStack.pop(): %v\n", arrayStack.pop())
	fmt.Printf("arrayStack.isEmpty(): %v\n", arrayStack.isEmpty())
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
