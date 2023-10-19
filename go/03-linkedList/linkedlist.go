package linkedlist

import (
	"strconv"
	"strings"
)

type LinkedLister interface {
	append(val int)
}

type ListNode struct {
	Val  int
	Next *ListNode
}

func NewListNode(val int) *ListNode {
	return &ListNode{
		Val:  val,
		Next: nil,
	}
}

type ListedList struct {
	head   *ListNode
	length int
}

func NewListedList() *ListedList {
	return &ListedList{
		head:   nil,
		length: 0,
	}
}

// Append 追加节点
func (l *ListedList) Append(val int) {
	// 1.创建一个新节点
	newNode := NewListNode(val)

	// 2.列表为空 head指向节点
	if l.head == nil {
		l.head = newNode
	} else {
		// 如果不为空 拿到当前链表的最后一个节点指向新节点
		current := l.head

		for current.Next != nil {
			current = current.Next
		}

		current.Next = newNode
	}

	// 3.将链表长度+1
	l.length += 1
}

// 遍历链表
func (l *ListedList) traverse() string {
	var vals []string
	current := l.head

	for current != nil {
		vals = append(vals, strconv.Itoa(current.Val))
		current = current.Next
	}

	return strings.Join(vals, " -> ")
}
