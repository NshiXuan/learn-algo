package linkedlist

import (
	"fmt"
	"testing"
)

func TestListedList(t *testing.T) {
	linkedList := NewListedList()
	linkedList.Append(1)
	linkedList.Append(2)
	linkedList.Append(3)

	fmt.Printf("linkedList.traverse(): %v\n", linkedList.traverse())

	fmt.Printf("linkedList.length: %v\n", linkedList.length)
}
