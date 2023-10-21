package queue

type Queuer interface {
	enqueue(val int)
	dequeue() any
	peek() any
	size() int
	isEmpty() bool
}
