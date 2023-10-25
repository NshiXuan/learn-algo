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
	root *TreeNode[T]
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
