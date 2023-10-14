export interface ILinkedList<T> {
  // 追加节点
  append(value: T): void
  // 遍历链表的方法
  traverse(): void
  // 插入方法
  insert(value: T, positon: number): boolean
  // 删除方法 删除是从0、1、2开始数起
  removeAt(positon: number): T | null
  // 获取方法 从0、1、2开始获取
  get(positon: number): T | null
  // 更新方法 从0、1、2开始
  update(value: T, positon: number): boolean
  // 获取索引的方法
  indexOf(value: T): number
  // 根据value删除方法
  remove(value: T): T | null
  // 判断链表是否为空
  isEmpty(): boolean
  // 获取链表长度
  get length(): number
}