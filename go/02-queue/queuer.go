package queue

type Queuer[T any] interface {
	enqueue(val T)
	dequeue() any
	peek() any
	size() int
	isEmpty() bool
}
