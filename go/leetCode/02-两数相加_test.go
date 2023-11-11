package leetcode

import (
	"fmt"
	"testing"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

func NewListNode(val int) *ListNode {
	return &ListNode{
		Val: val,
	}
}

func (l *ListNode) append(val int) *ListNode {
	newNode := NewListNode(val)

	current := l
	for current.Next != nil {
		current = current.Next
	}
	current.Next = newNode

	return l
}

func (l *ListNode) print() {
	var vals []int
	current := l
	for current.Next != nil {
		vals = append(vals, current.Val)
		current = current.Next
	}
	vals = append(vals, current.Val)
	fmt.Printf("vals: %v\n", vals)
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	dummy := &ListNode{}
	cur := dummy
	t := 0
	for l1 != nil || l2 != nil || t != 0 {
		if l1 != nil {
			t += l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			t += l2.Val
			l2 = l2.Next
		}
		cur.Next = &ListNode{t % 10, nil}
		cur = cur.Next
		t /= 10
	}
	return dummy.Next
}

func TestAddTwoNumbers(t *testing.T) {
	testCases := []struct {
		l1 *ListNode
		l2 *ListNode
	}{
		{
			l1: NewListNode(2).append(4).append(3),
			l2: NewListNode(5).append(6).append(4),
		},
		{
			l1: NewListNode(0),
			l2: NewListNode(0),
		},
		{
			l1: NewListNode(9).append(9).append(9).append(9).append(9).append(9).append(9),
			l2: NewListNode(9).append(9).append(9).append(9),
		},
	}
	for _, tC := range testCases {
		addTwoNumbers(tC.l1, tC.l2).print()
	}
}
