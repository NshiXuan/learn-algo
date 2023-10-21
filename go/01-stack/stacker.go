package stack

type Stacker interface {
	push(element int)
	pop() any
	peek() any
	isEmpty() bool
	size() int
}
