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

  // 2.获取递归的结果
  const newHead = reverseList(head.next)

  // 3.让剩下的head节点的next节点指向head
  head.next.next = head
  // head本身的next指向null
  head.next = null

  return newHead
}

export { }