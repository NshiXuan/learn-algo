package linkedlist

type LinkedLister[T comparable] interface {
	append(val T)
	traverse() []T
	insert(val T, pos int) bool
	removeAt(pos int) any // 根据位置删除
	get(pos int) any
	update(val T, pos int) bool
	indexOf(val T) int
	remove(val T) any // 根据Value删除
	isEmpty() bool
	length() int
}
