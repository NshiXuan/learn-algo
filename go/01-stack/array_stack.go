package stack

type ArrayStack[T any] struct {
	data []T
}

func NewArrayStack[T any]() *ArrayStack[T] {
	return &ArrayStack[T]{
		data: make([]T, 0, 16), // 设置栈的长度为0 容量为16
	}
}

var _ Stacker[any] = &ArrayStack[any]{}

// 入栈
func (s *ArrayStack[T]) push(val T) {
	s.data = append(s.data, val)
}

// 获取栈顶元素
func (s *ArrayStack[T]) peek() any {
	if s.isEmpty() {
		return nil
	}

	return s.data[len(s.data)-1]
}

// 判断栈是否为空
func (s *ArrayStack[T]) isEmpty() bool {
	return len(s.data) == 0
}

// 出栈
func (s *ArrayStack[T]) pop() any {
	val := s.peek()
	s.data = s.data[:len(s.data)-1]
	return val
}

func (s *ArrayStack[T]) size() int {
	return len(s.data)
}

// 获取 Slice 用于打印
func (s *ArrayStack[T]) toSlice() []T {
	return s.data
}
