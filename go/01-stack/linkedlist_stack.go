package stack

import "container/list"

// 使用内置包 list 链表来实现栈
type linkedListStack struct {
	data *list.List
}

func NewLinkedListStack() *linkedListStack {
	return &linkedListStack{data: list.New()}
}

// var _ Stacker = &linkedListStack{}

// 入栈
func (s *linkedListStack) push(val int) {
	s.data.PushBack(val)
}

// 获取栈顶元素
func (s *linkedListStack) peek() any {
	if s.isEmpty() {
		return nil
	}

	e := s.data.Back()
	return e.Value
}

// 判断栈是否为空
func (s *linkedListStack) isEmpty() bool {
	return s.data.Len() == 0
}

// 出栈
func (s *linkedListStack) pop() any {
	if s.isEmpty() {
		return nil
	}

	e := s.data.Back()
	s.data.Remove(e)
	return e.Value
}

func (s *linkedListStack) size() int {
	return s.data.Len()
}

// 获取 Slice 用于打印
func (s *linkedListStack) toList() *list.List {
	return s.data
}
