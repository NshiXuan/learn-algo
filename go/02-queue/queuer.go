package queue

type Queuer interface {
	enqueue(val int)
	dequeue() int
	peek() int
	size() int
	isEmpty() bool
}
