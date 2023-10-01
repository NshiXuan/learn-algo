class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  // 1.边界判断 如果没有节点或者只有一个节点 直接返回
  if (!head || !head.next) return head

  // 2.反转链表结构
  let newHead: ListNode | null = null
  while (head) {
    let current: ListNode | null = head.next
    head.next = newHead
    newHead = head
    head = current
  }

  return newHead
}

export { }