package stack

type Stacker[T any] interface {
	push(element T)
	pop() any
	peek() any
	isEmpty() bool
	size() int
}
