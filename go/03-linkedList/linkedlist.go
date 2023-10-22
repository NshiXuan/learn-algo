package linkedlist

type ListNode[T comparable] struct {
	Val  T
	Next *ListNode[T]
}

func NewListNode[T comparable](val T) *ListNode[T] {
	return &ListNode[T]{
		Val:  val,
		Next: nil,
	}
}

type LinkedList[T comparable] struct {
	head *ListNode[T]
	size int
}

func NewLinkedList[T comparable]() *LinkedList[T] {
	return &LinkedList[T]{
		head: nil,
		size: 0,
	}
}

var _ LinkedLister[any] = &LinkedList[any]{}

// 追加节点
func (l *LinkedList[T]) append(val T) {
	// 1.创建一个新节点
	newNode := NewListNode(val)

	// 2.列表为空 head指向节点
	if l.head == nil {
		l.head = newNode
	} else {
		// 如果不为空 拿到当前链表的最后一个节点指向新节点
		current := l.head

		for current.Next != nil {
			current = current.Next
		}

		current.Next = newNode
	}

	// 3.将链表长度+1
	l.size++
}

// 遍历链表
func (l *LinkedList[T]) traverse() []T {
	var vals []T
	current := l.head

	for current != nil {
		vals = append(vals, current.Val)
		current = current.Next
	}

	return vals
}

func (l *LinkedList[T]) length() int {
	return l.size
}

// 插入方法
func (l *LinkedList[T]) insert(val T, pos int) bool {
	// 1.边界判断
	if pos < 0 || pos >= l.size {
		return false
	}

	// 2.创建新的node
	newNode := NewListNode[T](val)

	// 3.获取位置插入
	// 3.1如果是 pos = 0 插入头部
	if pos == 0 {
		newNode.Next = l.head
		l.head = newNode
	} else {
		// 3.2 往中间/最后位置插入
		current := l.getNode(pos)

		newNode.Next = current.Next
		current.Next = newNode
	}

	// 4.链表长度+1
	l.size++

	return true
}

// 根据 pos 获取节点
func (l *LinkedList[T]) getNode(pos int) *ListNode[T] {
	index := 0
	current := l.head
	for index < pos && current != nil {
		current = current.Next
		index++
	}

	return current
}

// removeAt 根据位置删除节点
func (l *LinkedList[T]) removeAt(pos int) any {
	// 1.边界判断
	if pos < 0 || pos >= l.size {
		return nil
	}

	// 2.删除节点
	current := l.head
	if pos == 0 {
		// 2.1删除头部节点
		l.head = current.Next
	} else {
		// 2.2删除其它/最后的节点
		// 获取 pos 位置的上一个节点
		previous := l.getNode(pos - 1)
		current = previous.Next
		previous.Next = current.Next
	}

	// 3.链表长度-1
	l.size--

	// 4.返回当前返回的值
	return current.Val
}

func (l *LinkedList[T]) get(pos int) any {
	// 1.边界判断
	if pos < 0 || pos >= l.size {
		return nil
	}

	node := l.getNode(pos)
	return node.Val
}

func (l *LinkedList[T]) update(val T, pos int) bool {
	// 1.边界判断
	if pos < 0 || pos >= l.size {
		return false
	}

	node := l.getNode(pos)
	node.Val = val
	return true
}

// 根据 Val 查找Node节点 返回下标 找不到返回 -1
func (l *LinkedList[T]) indexOf(val T) int {
	current := l.head
	index := 0
	for current != nil {
		// 如果要比较 current.Val == val ，需要泛型是 comparable 类型
		// 如果泛型 T 不是 comparable ，也可以使用反射进行比较，但反射有一些性能开销
		// if reflect.DeepEqual(current.Val, val) {
		if current.Val == val {
			return index
		}
		current = current.Next
		index++
	}

	return -1
}

// 根据 Val 删除 Node 节点
func (l *LinkedList[T]) remove(val T) any {
	// 1.获取节点
	current := l.head
	var previous *ListNode[T]
	for current.Val != val {
		previous = current
		current = current.Next
	}

	// 2.删除节点
	previous.Next = current.Next

	// 3.长度-1
	l.size--

	return current.Val
}

func (l *LinkedList[T]) isEmpty() bool {
	return l.size == 0
}
