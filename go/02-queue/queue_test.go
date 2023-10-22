package queue

import (
	"fmt"
	"testing"
)

func TestArrayQueue(t *testing.T) {
	intArrayQueue := NewArrayQueue[int]()
	intArrayQueue.enqueue(1)
	intArrayQueue.enqueue(2)
	intArrayQueue.enqueue(3)

	fmt.Printf("intArrayQueue.toSlice(): %v\n", intArrayQueue.toSlice())
	fmt.Printf("intArrayQueue.size(): %v\n", intArrayQueue.size())
	fmt.Printf("intArrayQueue.isEmpty(): %v\n", intArrayQueue.isEmpty())
	fmt.Printf("intArrayQueue.peek(): %v\n", intArrayQueue.peek())

	fmt.Printf("intArrayQueue.dequeue(): %v\n", intArrayQueue.dequeue())
	fmt.Printf("intArrayQueue.dequeue(): %v\n", intArrayQueue.dequeue())

	fmt.Printf("intArrayQueue.toSlice(): %v\n", intArrayQueue.toSlice())
	fmt.Printf("intArrayQueue.size(): %v\n", intArrayQueue.size())

	fmt.Printf("intArrayQueue.dequeue(): %v\n", intArrayQueue.dequeue())
	fmt.Printf("intArrayQueue.toSlice(): %v\n", intArrayQueue.toSlice())
	fmt.Printf("intArrayQueue.size(): %v\n", intArrayQueue.size())
	fmt.Printf("intArrayQueue.isEmpty(): %v\n", intArrayQueue.isEmpty())
	fmt.Printf("intArrayQueue.peek(): %v\n", intArrayQueue.peek())

	stringArrayQueue := NewArrayQueue[string]()
	stringArrayQueue.enqueue("a")
	stringArrayQueue.enqueue("b")
	stringArrayQueue.enqueue("c")

	fmt.Printf("stringArrayQueue.toSlice(): %v\n", stringArrayQueue.toSlice())
	fmt.Printf("stringArrayQueue.size(): %v\n", stringArrayQueue.size())
	fmt.Printf("stringArrayQueue.isEmpty(): %v\n", stringArrayQueue.isEmpty())

	fmt.Printf("stringArrayQueue.dequeue(): %v\n", stringArrayQueue.dequeue())
	fmt.Printf("stringArrayQueue.dequeue(): %v\n", stringArrayQueue.dequeue())

	fmt.Printf("stringArrayQueue.toSlice(): %v\n", stringArrayQueue.toSlice())
	fmt.Printf("stringArrayQueue.size(): %v\n", stringArrayQueue.size())
	fmt.Printf("stringArrayQueue.isEmpty(): %v\n", stringArrayQueue.isEmpty())
}
