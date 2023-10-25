package bstree

import (
	"fmt"
	"testing"
)

func TestBsTree(t *testing.T) {
	bst := NewBSTree[int]()
	bst.insert(11)
	bst.insert(7)
	bst.insert(15)
	bst.insert(5)
	bst.insert(3)
	bst.insert(9)
	bst.insert(8)
	bst.insert(10)
	bst.insert(13)
	bst.insert(12)
	bst.insert(14)
	bst.insert(20)
	bst.insert(18)
	bst.insert(25)
	bst.insert(6)

	// 先序遍历
	bst.preOrderTraverse()
	// 中序遍历
	bst.inOrderTraverse()
	// 后序遍历
	bst.postOrderTraverse()
	// 层序遍历
	bst.levelOrderTraverse()

	fmt.Printf("bst.getMaxValue(): %v\n", bst.getMaxValue())
	fmt.Printf("bst.getMinValue(): %v\n", bst.getMinValue())
}
