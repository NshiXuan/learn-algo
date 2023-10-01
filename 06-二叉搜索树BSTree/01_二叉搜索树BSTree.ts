import Node from "../types/INode";
import { btPrint } from "hy-algokit";

class TreeNode<T> extends Node<T> {
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;
}


class BSTree<T>{
    root: TreeNode<T> | null = null;

    // 打印树
    print() {
        btPrint(this.root)
    }

    // 插入数据
    insert(value: T): void {
        // 1.根据传入的 value 创建 Node(TreeNode) 节点
        const newNode = new TreeNode(value);

        // 2.判断当前是否有根节点
        if (!this.root) {
            this.root = newNode;
        } else { // 如果树中有其它节点
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
        if (newNode.value < node.value) { // 去左边查找空白位置
            if (node.left === null) { // node 节点为空白 插入节点
                node.left = newNode
            } else { // node 节点不为空 继续递归
                this.insertNode(node.left, newNode)
            }
        } else { // 去右边查找空白位置
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    // 遍历操作
    // 1.先序遍历
    preOrderTraverse() {
        this.preOrderTraverseNode(this.root)
    }

    private preOrderTraverseNode(node: TreeNode<T> | null) {
        if (node) {
            console.log("🚀 ~ file: 01_二叉搜索树BSTree.ts:57 ~ BSTree<T> ~ preOrderTraverseNode ~ node.value:", node.value)
            // 递归访问左节点
            this.preOrderTraverseNode(node.left)

            // 左节点访问完后 递归访问右节点
            this.preOrderTraverseNode(node.right)

        }
    }

    // 2.中序遍历
    inOrderTraverse() {
        this.inOrderTraverseNode(this.root)
    }

    private inOrderTraverseNode(node: TreeNode<T> | null) {
        if (node) {
            // 先访问左节点 在访问根节点 最后访问右节点
            this.inOrderTraverseNode(node.left)
            console.log("🚀 ~ file: 01_二叉搜索树BSTree.ts:75 ~ BSTree<T> ~ inOrderTraverseNode ~ node.value:", node.value)
            this.inOrderTraverseNode(node.right)
        }
    }

    // 3.后序遍历
    postOrderTraverse() {
        this.postOrderTraverseNode(this.root)
    }

    private postOrderTraverseNode(node: TreeNode<T> | null) {
        if (node) {
            this.postOrderTraverseNode(node.left)
            this.postOrderTraverseNode(node.right)
            console.log("🚀 ~ file: 01_二叉搜索树BSTree.ts:89 ~ BSTree<T> ~ postOrderTraverseNode ~ node.value:", node.value)
        }
    }

    // 4.层序遍历
    levelOrderTraverse() {
        // 1.如果没有根节点，那么不需要遍历
        if (!this.root) return

        // 2.创建队列结构
        const queue: TreeNode<T>[] = []
        queue.push(this.root)

        // 3.遍历队列中所有的节点(一次出列)
        while (queue.length) {
            // 3.1访问节点的过程
            const current = queue.shift()!
            console.log("🚀 ~ file: 01_二叉搜索树BSTree.ts:105 ~ BSTree<T> ~ levelOrderTraverse ~ current.value:", current.value)

            // 3.2将左节点放入队列
            if (current.left) {
                queue.push(current.left)
            }

            // 3.3将右节点放入队列
            if (current.right) {
                queue.push(current.right)
            }
        }
    }

    // 获取最大值
    getMaxValue() {
        let current = this.root
        while (current && current.right) {
            current = current.right
        }

        return current?.value ?? null
    }

    // 获取最小值
    getMinValue() {
        let current = this.root
        while (current && current.left) {
            current = current.left
        }

        return current?.value ?? null
    }

    // 搜索
    search(value: T) {
        let current = this.root

        while (current) {
            if (value === current?.value) return true

            if (value > current.value) {
                current = current.right
            } else {
                current = current.left
            }
        }

        return false
    }
}

const bst = new BSTree<number>()

// 测试插入
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
bst.print()

// 遍历
// 1.先序遍历
bst.preOrderTraverse()
// 2.中序遍历
bst.inOrderTraverse()
// 3.后序遍历
bst.postOrderTraverse()
// 4.层序遍历
bst.levelOrderTraverse()

// 最大最小值
console.log("🚀 ~ file: 01_二叉搜索树BSTree.ts:172 ~ bst.getMaxValue():", bst.getMaxValue())
console.log("🚀 ~ file: 01_二叉搜索树BSTree.ts:173 ~ bst.getMinValue():", bst.getMinValue())

// 搜索
console.log("🚀 ~ file: 01_二叉搜索树BSTree.ts:193 ~ bst.search(20):", bst.search(20))
console.log("🚀 ~ file: 01_二叉搜索树BSTree.ts:193 ~ bst.search(21):", bst.search(21))

export { }