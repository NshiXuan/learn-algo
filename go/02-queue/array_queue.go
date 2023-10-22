package queue

// 队列 先进先出
type arrayQueue[T any] struct {
	data []T
}

func NewArrayQueue[T any]() *arrayQueue[T] {
	return &arrayQueue[T]{
		data: make([]T, 0, 16),
	}
}

var _ Queuer[any] = &arrayQueue[any]{}

// enqueue 入列
func (q *arrayQueue[T]) enqueue(val T) {
	q.data = append(q.data, val)
}

// dequeue 出列
func (q *arrayQueue[T]) dequeue() any {
	if q.isEmpty() {
		return nil
	}

	res := q.data[0]
	q.data = q.data[1:]
	return res
}

func (q *arrayQueue[T]) isEmpty() bool {
	return len(q.data) == 0
}

func (q *arrayQueue[T]) size() int {
	return len(q.data)
}

func (q *arrayQueue[T]) peek() any {
	if q.isEmpty() {
		return nil
	}

	return q.data[len(q.data)-1]
}

func (q *arrayQueue[T]) toSlice() []T {
	return q.data
}
