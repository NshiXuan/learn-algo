package queue

// 队列 先进先出
type arrayQueue struct {
	data []int
}

func NewArrayQueue() *arrayQueue {
	return &arrayQueue{
		data: make([]int, 0, 16),
	}
}

var _ Queuer = &arrayQueue{}

// enqueue 入列
func (q *arrayQueue) enqueue(val int) {
	q.data = append(q.data, val)
}

// dequeue 出列
func (q *arrayQueue) dequeue() any {
	if q.isEmpty() {
		return nil
	}

	res := q.data[0]
	q.data = q.data[1:]
	return res
}

func (q *arrayQueue) isEmpty() bool {
	return len(q.data) == 0
}

func (q *arrayQueue) size() int {
	return len(q.data)
}

func (q *arrayQueue) peek() any {
	if q.isEmpty() {
		return nil
	}

	return q.data[len(q.data)-1]
}

func (q *arrayQueue) toSlice() []int {
	return q.data
}
