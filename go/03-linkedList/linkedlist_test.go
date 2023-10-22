package linkedlist

import (
	"fmt"
	"testing"
)

func TestListedList(t *testing.T) {
	intLinkedList := NewLinkedList[int]()
	// 追加
	intLinkedList.append(1)
	intLinkedList.append(2)
	intLinkedList.append(3)

	fmt.Printf("intLinkedList.traverse(): %v\n", intLinkedList.traverse())
	fmt.Printf("intLinkedList.size: %v\n", intLinkedList.size)
	fmt.Printf("intLinkedList.length(): %v\n", intLinkedList.length())

	// 插入
	intLinkedList.insert(4, 1)
	fmt.Printf("intLinkedList.traverse(): %v\n", intLinkedList.traverse())
	intLinkedList.insert(5, 0)
	fmt.Printf("intLinkedList.traverse(): %v\n", intLinkedList.traverse())
	fmt.Printf("intLinkedList.length(): %v\n", intLinkedList.length())

	// 根据下标删除
	fmt.Printf("intLinkedList.removeAt(0): %v\n", intLinkedList.removeAt(0))
	fmt.Printf("intLinkedList.traverse(): %v\n", intLinkedList.traverse())
	fmt.Printf("intLinkedList.removeAt(2): %v\n", intLinkedList.removeAt(2))
	fmt.Printf("intLinkedList.traverse(): %v\n", intLinkedList.traverse())
	fmt.Printf("intLinkedList.length(): %v\n", intLinkedList.length())

	// 获取
	fmt.Printf("intLinkedList.get(2): %v\n", intLinkedList.get(2))

	// 更新
	fmt.Printf("intLinkedList.update(10, 2): %v\n", intLinkedList.update(10, 2))
	fmt.Printf("intLinkedList.traverse(): %v\n", intLinkedList.traverse())

	// 查询
	fmt.Printf("intLinkedList.indexOf(10): %v\n", intLinkedList.indexOf(10))

	// 根据内容删除
	fmt.Printf("intLinkedList.remove(10): %v\n", intLinkedList.remove(10))
	fmt.Printf("intLinkedList.traverse(): %v\n", intLinkedList.traverse())

	fmt.Printf("intLinkedList.isEmpty(): %v\n", intLinkedList.isEmpty())
	fmt.Printf("intLinkedList.removeAt(0): %v\n", intLinkedList.removeAt(0))
	fmt.Printf("intLinkedList.removeAt(0): %v\n", intLinkedList.removeAt(0))
	fmt.Printf("intLinkedList.removeAt(0): %v\n", intLinkedList.removeAt(0))
	fmt.Printf("intLinkedList.isEmpty(): %v\n", intLinkedList.isEmpty())
}
