import { ILinkedList } from "./ILinkedList"

//  1.创建Node节点类
class LinkedNode<T>{
  value: T
  next: LinkedNode<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}

// 2.创建LinkedList类
class LinkedList<T> implements ILinkedList<T> {
  head: LinkedNode<T> | null = null
  private size: number = 0
  get length() {
    return this.size
  }

  // 封装私有方法
  // 根据position获取到当前的节点
  private getNode(positoin: number): LinkedNode<T> | null {
    let index = 0
    let current = this.head
    while (index++ < positoin && current) {
      current = current.next
    }

    return current
  }

  // 查看第一个节点的值
  peek(): T | undefined {
    return this.head?.value
  }

  // 追加节点
  append(value: T) {
    // 1.根据values常见一个Node新节点
    const newNode = new LinkedNode(value)

    // 2.列表为空时 head指向节点
    if (!this.head) {
      this.head = newNode
    } else {
      // 如果不为空 拿到最后的节点的next指向下一个Node
      // current记录当前节点 把current遍历到最后一个节点
      let current = this.head
      while (current.next) {
        current = current.next
      }

      // 此时current为最后一个节点
      current.next = newNode
    }

    // 3.将链表长度+1
    this.size++
  }

  // 遍历链表的方法
  traverse() {
    const values: T[] = []

    let current = this.head
    while (current) {
      values.push(current.value)
      current = current.next
    }

    return values.join('->')
  }

  // 插入方法
  insert(value: T, positoin: number) {
    // 1.边界判断
    if (positoin < 0 || positoin > this.size) return false

    // 2.创建新的Node
    const newNode = new LinkedNode(value)

    // 3.插入节点
    if (positoin === 0) {
      // 插入头部
      // 必须先让newNode指向head 如果先让head指向newNode会导致之前的节点没有引用从而被释放
      newNode.next = this.head
      this.head = newNode
    } else {
      // 往中间/最后位置插入节点

      // previous.next为position的节点
      const previous = this.getNode(positoin - 1)

      // 这两个的顺序随便
      newNode.next = previous!.next
      previous!.next = newNode
    }

    // 链表长度+1
    this.size++

    return true
  }

  // 删除方法 删除是从0、1、2开始数起
  removeAt(positoin: number): T | null {
    // 1.边界判断
    if (positoin < 0 || positoin >= this.size) return null

    // 2.删除节点
    let current = this.head
    if (positoin === 0) {
      // 删除第一个节点
      this.head = current?.next ?? null
    } else {
      // 删除其它/最后的节点

      // previous为上一个节点 previous.next为position的节点 previous.next.next为position下一个节点
      const previous = this.getNode(positoin - 1)

      // 需要给 current 重新赋值
      current = previous!.next

      // 找到需要删除的节点并修改指向删除
      previous!.next = previous?.next?.next ?? null
    }

    // 3.链表长度-1
    this.size--

    // 4.返回当前删除的值
    return current?.value ?? null
  }

  // 获取方法 从0、1、2开始获取
  get(positoin: number): T | null {
    // 1.判断是否越界
    if (positoin < 0 || positoin >= this.size) return null

    // 2.查找元素
    return this.getNode(positoin)?.value ?? null
  }

  // 更新方法 从0、1、2开始
  update(value: T, positoin: number) {
    // 1.边界判断
    if (positoin < 0 || positoin >= this.size) return false

    // 2.获取positon位置的节点
    const currentNode = this.getNode(positoin)

    // 3.修改节点值
    currentNode!.value = value

    return true
  }

  // 获取索引的方法
  indexOf(value: T) {
    // 从第一个往后找
    let current = this.head
    let index = 0
    while (current) {
      if (current.value == value) {
        return index
      }

      current = current.next
      index++
    }

    // 如果找到最后都没有 返回-1
    return -1
  }

  // 根据value删除方法
  remove(value: T) {
    // 1.调用indexOf通过value获取下标
    const index = this.indexOf(value)

    // 2.调用removeAt通过下标删除节点
    return this.removeAt(index)
  }

  // 判断链表是否为空
  isEmpty() {
    return this.size == 0
  }
}

const linkedList = new LinkedList<string>()
// 测试往最后添加节点
console.log("🚀 ~ file: 01-实现链表.ts:144 ~ 测试往最后添加节点:", '测试往最后添加节点')
linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')

console.log("🚀 ~ file: 01-实现链表.ts:22 ~ linkedList.head:", linkedList.head)
console.log("🚀 ~ file: 01-实现链表.ts:100 ~ linkedList.length:", linkedList.length)

// 测试插入节点
console.log("🚀 ~ file: 01-实现链表.ts:151 ~ 插入节点:", '测试插入节点')
console.log("🚀 ~ file: 01-实现链表.ts:103 ~ linkedList.insert('ddd', 0):", linkedList.insert('ddd', 0))
console.log("🚀 ~ file: 01-实现链表.ts:107 ~ linkedList.traverse():", linkedList.traverse())

console.log("🚀 ~ file: 01-实现链表.ts:105 ~ linkedList.insert('fff', 2):", linkedList.insert('fff', 2))

console.log("🚀 ~ file: 01-实现链表.ts:108 ~ linkedList.insert('ggg',5):", linkedList.insert('ggg', 5))
console.log("🚀 ~ file: 01-实现链表.ts:107 ~ linkedList.traverse():", linkedList.traverse())

console.log("🚀 ~ file: 01-实现链表.ts:105 ~ linkedList.length:", linkedList.length)

// 测试删除节点
console.log("🚀 ~ file: 01-实现链表.ts:162 ~ 删除节点:", '测试删除节点')
console.log("🚀 ~ file: 02-重构链表.ts:216 ~ linkedList.removeAt(0):", linkedList.removeAt(0))
console.log("🚀 ~ file: 02-重构链表.ts:218 ~ linkedList.removeAt(0):", linkedList.removeAt(0))
console.log("🚀 ~ file: 01-实现链表.ts:131 ~ linkedList.traverse():", linkedList.traverse())
console.log("🚀 ~ file: 01-实现链表.ts:149 ~ linkedList.removeAt(3):", linkedList.removeAt(3))
console.log("🚀 ~ file: 01-实现链表.ts:149 ~ linkedList.traverse():", linkedList.traverse())
console.log("🚀 ~ file: 01-实现链表.ts:132 ~ linkedList.length:", linkedList.length)

// 测试获取节点的值
console.log("🚀 ~ file: 01-实现链表.ts:170 ~ 测试获取节点的值:", '测试获取节点的值')
console.log("🚀 ~ file: 01-实现链表.ts:171 ~ linkedList.get(0):", linkedList.get(0))
console.log("🚀 ~ file: 01-实现链表.ts:172 ~ linkedList.get(1):", linkedList.get(1))
console.log("🚀 ~ file: 01-实现链表.ts:171 ~ linkedList.get(2):", linkedList.get(2))

// 测试更新节点方法
console.log("🚀 ~ file: 02-重构链表.ts:206 ~ 测试更新节点方法:", '测试更新节点方法')
console.log("🚀 ~ file: 02-重构链表.ts:207 ~ linkedList.update('codersx', 2):", linkedList.update('codersx', 2))
console.log("🚀 ~ file: 02-重构链表.ts:208 ~ linkedList.traverse():", linkedList.traverse())

// 测试获取下标的方法
console.log("🚀 ~ file: 02-重构链表.ts:211 ~ 测试获取下标的方法:", '测试获取下标的方法')
console.log("🚀 ~ file: 02-重构链表.ts:213 ~ linkedList.indexOf('codersx'):", linkedList.indexOf('codersx'))

// 测试根据value删除节点的方法
linkedList.remove('codersx')
console.log("🚀 ~ file: 02-重构链表.ts:230 ~ linkedList.traverse():", linkedList.traverse())

// 测试判断链表是否为空的方法
console.log("🚀 ~ file: 02-重构链表.ts:232 ~ 测试判断链表是否为空的方法:", '测试判断链表是否为空的方法')
console.log("🚀 ~ file: 02-重构链表.ts:234 ~ linkedList.isEmpty():", linkedList.isEmpty())


export { }