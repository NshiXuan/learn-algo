package bstree

import (
	"fmt"
	"testing"
)

type Product struct {
	name  string
	price int64
}

func TestBsTree(t *testing.T) {
	bst := NewBSTree[int]()
	// bst.insert(11)
	// bst.insert(7)
	// bst.insert(15)
	// bst.insert(5)
	// bst.insert(3)
	// bst.insert(9)
	// bst.insert(8)
	// bst.insert(10)
	// bst.insert(13)
	// bst.insert(12)
	// bst.insert(14)
	// bst.insert(20)
	// bst.insert(18)
	// bst.insert(25)
	// bst.insert(6)
	bst.inserts(11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6)

	// 先序遍历
	bst.preOrderTraverse()
	bst.preOrderTraverseByIteration()
	// 中序遍历
	bst.inOrderTraverse()
	bst.inOrderTraverseByIteration()
	// 后序遍历
	bst.postOrderTraverse()
	bst.postOrderTraverseByIteration()
	// 层序遍历
	bst.levelOrderTraverse()

	fmt.Printf("bst.getMaxValue(): %v\n", bst.getMaxValue())
	fmt.Printf("bst.getMinValue(): %v\n", bst.getMinValue())

	fmt.Printf("bst.searchNode(11): %v\n", bst.searchNode(11))
	fmt.Printf("bst.search(6): %v\n", bst.search(6))
	fmt.Printf("bst.search(100): %v\n", bst.search(100))
}
