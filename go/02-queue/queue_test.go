package queue

import (
	"fmt"
	"testing"
)

func TestArrayQueue(t *testing.T) {
	arrayQueue := NewArrayQueue()
	arrayQueue.enqueue(1)
	arrayQueue.enqueue(2)
	arrayQueue.enqueue(3)

	fmt.Printf("arrayQueue.toSlice(): %v\n", arrayQueue.toSlice())
	fmt.Printf("arrayQueue.size(): %v\n", arrayQueue.size())
	fmt.Printf("arrayQueue.isEmpty(): %v\n", arrayQueue.isEmpty())
	fmt.Printf("arrayQueue.peek(): %v\n", arrayQueue.peek())

	fmt.Printf("arrayQueue.dequeue(): %v\n", arrayQueue.dequeue())
	fmt.Printf("arrayQueue.dequeue(): %v\n", arrayQueue.dequeue())

	fmt.Printf("arrayQueue.toSlice(): %v\n", arrayQueue.toSlice())
	fmt.Printf("arrayQueue.size(): %v\n", arrayQueue.size())

	fmt.Printf("arrayQueue.dequeue(): %v\n", arrayQueue.dequeue())
	fmt.Printf("arrayQueue.toSlice(): %v\n", arrayQueue.toSlice())
	fmt.Printf("arrayQueue.size(): %v\n", arrayQueue.size())
	fmt.Printf("arrayQueue.isEmpty(): %v\n", arrayQueue.isEmpty())
	fmt.Printf("arrayQueue.peek(): %v\n", arrayQueue.peek())
}
