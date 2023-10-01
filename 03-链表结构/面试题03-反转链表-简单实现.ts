class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  // 1.边界判断 如果head或者只有一个节点 就直接返回
  if (!head || !head.next) return head

  // 2.创建栈
  const stack: ListNode[] = []

  // 3.将链表节点放入栈中
  let current: ListNode | null = head
  while (current) {
    stack.push(current)
    current = current.next
  }

  // 4.创建新的链表 为栈中最后一个节点
  const newHead: ListNode = stack.pop()!

  // 5.遍历栈 把里面的节点放到新链表中
  let newHeadCurrent = newHead
  while (stack.length) {
    const node = stack.pop()!
    newHeadCurrent.next = node
    newHeadCurrent = newHeadCurrent.next
  }

  // 6.新链表最后一个节点的引用修改
  // 未反转之前的第一个节点，next指向之前的第二个节点，会造成循环引用 
  newHeadCurrent.next = null

  return newHead
}

export { }