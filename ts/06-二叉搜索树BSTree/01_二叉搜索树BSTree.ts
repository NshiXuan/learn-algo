import Node from "../types/INode";
import { btPrint } from "hy-algokit";

export class TreeNode<T> extends Node<T> {
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;

    // 当前节点的父节点
    parent: TreeNode<T> | null = null;

    // 当前节点是父节点的左子节点
    get isLeft(): boolean {
        return !!(this.parent && this.parent.left === this)
    }

    // 当前节点是父节点的右子节点
    get isRight(): boolean {
        return !!(this.parent && this.parent.right === this)
    }
}


export class BSTree<T>{
    root: TreeNode<T> | null = null;

    // 打印树
    print() {
        btPrint(this.root)
    }

    // 插入数据
    insert(value: T) {
        // 1.根据传入的 value 创建 Node(TreeNode) 节点
        const newNode = new TreeNode(value);

        // 2.判断当前是否有根节点
        if (!this.root) {
            this.root = newNode;
        } else { // 如果树中有其它节点
            this.insertNode(this.root, newNode);
        }
    }

    // 插入多个
    inserts(...values: T[]) {
        values.forEach(value => this.insert(value))
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
        return !!this.searchNode(value)
    }

    private searchNode(value: T): TreeNode<T> | null {
        // 父结点为 Null 一定为根节点
        let current = this.root
        let parent: TreeNode<T> | null = null
        while (current) {
            // 1.如果找到 current 直接返回
            if (value === current.value) {
                return current
            }

            // 2.继续向下查找
            parent = current
            if (value > current.value) {
                current = current.right
            } else {
                current = current.left
            }

            // 3.如果current存在 保存它的父节点
            if (current) current.parent = parent
        }

        return null
    }

    // 获取后继节点
    private getSuccessor(delNode: TreeNode<T>) {
        // 获取右子树
        let current = delNode.right
        let successor: TreeNode<T> | null = null
        while (current) {
            successor = current
            current = current.left
            if (current) {
                current.parent = successor
            }
        }

        // 拿到了后继节点
        if (successor !== delNode.right) {
            // 顺序不能乱
            successor!.parent!.left = successor!.right
            successor!.right = delNode.right
        }

        // 一定要做的 将删除节点的 left 赋值给后继节点的 left
        successor!.left = delNode.left

        return successor!
    }

    // 删除
    remove(value: T) {
        // 1.搜索： 当前是否有这个 value
        const current = this.searchNode(value)
        if (!current) return false

        // 2.获取到三个东西：当前节点 / 父节点 / 属于父节点的左子节点，还是右子节点
        // 2.如果删除的是叶子节点
        if (current.left === null && current.right === null) {
            if (current === this.root?.right) { // 根节点
                this.root = null
            } else if (current.isLeft) { // 父节点的左子节点
                current.parent!.left = null
            } else { // 父节点的右子节点
                current.parent!.right = null
            }
        }


        // 3.删除当前节点只有一个子节点
        // 删除只有一个左子节点
        else if (current.right === null) {
            /* 如果是根节点
                    11
            ┌───────┴───────┐ 
            7              
        ┌───┴───┐       
        5       9      

            删除后如下

                7              
            ┌───┴───┐       
            5       9   

            */
            if (current === this.root) {
                this.root = current.left
            } else if (current.isLeft) {
                current.parent!.left = current.left
            } else {
                current.parent!.right = current.left
            }
        }
        // 删除只有一个右子节点
        else if (current.left === null) {
            if (current === this.root) {
                this.root = current.right
            } else if (current.isLeft) {
                current.parent!.left = current.right
            } else {
                current.parent!.right = current.right
            }
        }

        // 4.删除当前节点有两个子节点的情况
        else {
            const successor = this.getSuccessor(current)
            if (current == this.root) {
                this.root = successor
            } else if (current.isLeft) {
                current.parent!.left = successor
            } else {
                current.parent!.right = successor
            }
        }

        return true
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

// 删除
// 1.删除叶子节点
// bst.remove(3)
// bst.remove(8)
// bst.remove(12)
// bst.print()
// bst.remove(6)
// bst.remove(10)
// bst.remove(25)
// bst.print()

// // 2.只有一个节点
// bst.remove(20)
// bst.print()
// bst.remove(13)
// bst.print()

// 3.当前节点有两个节点
bst.print()
bst.remove(11)
const info1 = '删除11'
console.log("🚀 ~ file: 01_二叉搜索树BSTree.ts:337 ~ info1:", info1)
bst.print()
const info2 = '删除15'
bst.remove(15)
console.log("🚀 ~ file: 01_二叉搜索树BSTree.ts:340 ~ info2:", info2)
bst.print()
const info3 = '删除9'
console.log("🚀 ~ file: 01_二叉搜索树BSTree.ts:344 ~ info3:", info3)
bst.remove(9)
bst.print()


export { }