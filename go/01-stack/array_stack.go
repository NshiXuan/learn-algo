package stack

type ArrayStack struct {
	data []int
}

func NewArrayStack() *ArrayStack {
	return &ArrayStack{
		data: make([]int, 0, 16), // 设置栈的长度为0 容量为16
	}
}

var _ Stacker = &ArrayStack{}

// 入栈
func (s *ArrayStack) push(val int) {
	s.data = append(s.data, val)
}

// 获取栈顶元素
func (s *ArrayStack) peek() any {
	if s.isEmpty() {
		return nil
	}

	return s.data[len(s.data)-1]
}

// 判断栈是否为空
func (s *ArrayStack) isEmpty() bool {
	return len(s.data) == 0
}

// 出栈
func (s *ArrayStack) pop() any {
	val := s.peek()
	s.data = s.data[:len(s.data)-1]
	return val
}

func (s *ArrayStack) size() int {
	return len(s.data)
}

// 获取 Slice 用于打印
func (s *ArrayStack) toSlice() []int {
	return s.data
}
