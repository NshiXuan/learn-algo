package bstree

import "fmt"

type Comparable interface {
	~int
	comparable
}

type TreeNode[T Comparable] struct {
	value T
	left  *TreeNode[T]
	right *TreeNode[T]
}

func NewTreeNode[T Comparable](value T) *TreeNode[T] {
	return &TreeNode[T]{value: value}
}

type BSTree[T Comparable] struct {
	root   *TreeNode[T]
	parent *TreeNode[T]
}

func NewBSTree[T Comparable]() *BSTree[T] {
	return &BSTree[T]{}
}

// 插入节点
func (t *BSTree[T]) insert(val T) {
	// 1.创建节点
	newNode := NewTreeNode[T](val)

	if t.root == nil {
		t.root = newNode
	} else {
		t.insertNode(t.root, newNode)
	}
}

func (t *BSTree[T]) insertNode(node, newNode *TreeNode[T]) {
	if newNode.value > node.value {
		// 右边插入
		if node.right == nil {
			node.right = newNode
		} else {
			t.insertNode(node.right, newNode)
		}
	} else {
		// 左边插入
		if node.left == nil {
			node.left = newNode
		} else {
			t.insertNode(node.left, newNode)
		}
	}
}

// 先序遍历 先遍历根节点 再遍历完左子树 最后遍历右子树
func (t *BSTree[T]) preOrderTraverse() {
	t.preOrderTraverseNode(t.root)
}

func (t *BSTree[T]) preOrderTraverseNode(node *TreeNode[T]) {
	if node != nil {
		fmt.Printf("preOrderTraverseNode node.value: %v\n", node.value)
		t.preOrderTraverseNode(node.left)
		t.preOrderTraverseNode(node.right)
	}
}

// 迭代实现前序遍历
func (t *BSTree[T]) preOrderTraverseByIteration() {
	if t.root == nil {
		return
	}

	current := t.root
	stack := make([]*TreeNode[T], 0)
	for len(stack) > 0 || current != nil {
		for current != nil {
			fmt.Printf("preOrderTraverseByIteration current.value: %v\n", current.value)
			stack = append(stack, current)
			current = current.left
		}

		current = stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		current = current.right
	}
}

// 中序遍历 先遍历完左子树 再遍历根节点 最后遍历右子树
func (t *BSTree[T]) inOrderTraverse() {
	t.inOrderTraverseNode(t.root)
}

func (t *BSTree[T]) inOrderTraverseNode(node *TreeNode[T]) {
	if node != nil {
		t.inOrderTraverseNode(node.left)
		fmt.Printf("inOrderTraverseNode node.value: %v\n", node.value)
		t.inOrderTraverseNode(node.right)
	}
}

// 迭代实现中序遍历
func (t *BSTree[T]) inOrderTraverseByIteration() {
	if t.root == nil {
		return
	}

	current := t.root
	stack := make([]*TreeNode[T], 0)
	for len(stack) > 0 || current != nil {
		for current != nil {
			stack = append(stack, current)
			current = current.left
		}

		current = stack[len(stack)-1]
		fmt.Printf("inOrderTraverseByIteration current.value: %v\n", current.value)
		stack = stack[:len(stack)-1]
		current = current.right
	}
}

// 后序遍历 先遍历左子树  再遍历完右子树 最后遍历根节点
func (t *BSTree[T]) postOrderTraverse() {
	t.postOrderTraverseNode(t.root)
}

func (t *BSTree[T]) postOrderTraverseNode(node *TreeNode[T]) {
	if node != nil {
		t.postOrderTraverseNode(node.left)
		t.postOrderTraverseNode(node.right)
		fmt.Printf("postOrderTraverseNode node.value: %v\n", node.value)
	}
}

// 迭代实现后序遍历
func (t *BSTree[T]) postOrderTraverseByIteration() {
	if t.root == nil {
		return
	}

	current := t.root
	stack := make([]*TreeNode[T], 0)
	var pre *TreeNode[T]
	for len(stack) > 0 || current != nil {
		for current != nil {
			stack = append(stack, current)
			current = current.left
		}

		current = stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		if current.right == nil || pre == current.right {
			fmt.Printf("postOrderTraverseByIteration current.value: %v\n", current.value)
			pre = current
			current = nil
		} else {
			stack = append(stack, current)
			current = current.right
		}
	}
}

// 层序遍历 队列实现
func (t *BSTree[T]) levelOrderTraverse() {
	// 1.边界判断
	if t.root == nil {
		return
	}

	// 2.定义队列
	queue := make([]*TreeNode[T], 0)
	queue = append(queue, t.root)

	for len(queue) > 0 {
		current := queue[0]
		fmt.Printf("levelOrderTraverse current.value: %v\n", current.value)

		// 出列
		queue = queue[1:]

		// 左子节点、右子节点依次入列
		if current.left != nil {
			queue = append(queue, current.left)
		}
		if current.right != nil {
			queue = append(queue, current.right)
		}
	}
}

// 获取最大值 右子节点的最深层就是最大值
func (t *BSTree[T]) getMaxValue() any {
	// 1.边界判断
	if t.root == nil {
		return nil
	}

	current := t.root
	for current.right != nil {
		current = current.right
	}

	return current.value
}

// 获取最小值 左子节点的最深层就是最小值
func (t *BSTree[T]) getMinValue() any {
	// 1.边界判断
	if t.root == nil {
		return nil
	}

	current := t.root
	for current.left != nil {
		current = current.left
	}

	return current.value
}

func (t *BSTree[T]) search(val T) bool {
	return t.searchNode(val) != nil
}

// search 根据值搜索节点 二分查找
func (t *BSTree[T]) searchNode(val T) *TreeNode[T] {
	current := t.root
	for current != nil {
		if current.value == val {
			return current
		}

		parent := current
		if current.value < val {
			// 右子树搜索
			current = current.right
		} else {
			current = current.left
		}

		if current != nil {
			t.parent = parent
		}
	}

	return nil
}
