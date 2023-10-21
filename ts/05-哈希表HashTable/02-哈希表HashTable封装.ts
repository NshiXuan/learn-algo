class HashTable<T> {
  // 创建一个数组 用来存放链地址法中的链（数组）
  // [string,T][] 代表元组类型的数组
  storage: [string, T][][] = []
  // private storage: [string, T][][] = []

  // 定义数组长度
  private length: number = 7

  // 记录已经存到元素的个数
  private count: number = 0

  // 封装key转成索引的哈希函数
  private hashFunc(key: string, max: number) {
    // 1.计算hashCode cats => 60337(27为底的时候)
    let hashCode = 0

    const length = key.length
    for (let i = 0; i < length; i++) {
      // 霍纳法则计算hashCode
      // charCodeAt可以跟下标获取到对应字符串的ASCII码
      hashCode = 31 * hashCode + key.charCodeAt(i)
    }

    // 2.求出索引值
    const index = hashCode % max

    return index
  }

  //判断是否为质数
  isPrime(num: number) {
    const sqrt = Math.sqrt(num)

    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) {
        return false
      }
    }

    return true
  }

  // 获取最近的下一个质数
  private getNextPrime(num: number) {
    // 确定newLength是一个质数
    let newPrime = num

    while (!this.isPrime(newPrime)) {
      newPrime++
    }

    return newPrime
  }

  // 扩容或缩容
  private resize(newLength: number) {
    // 设置新的长度
    // 获取最近的质数
    let newPrime = this.getNextPrime(newLength)
    // 最小为7
    if (newPrime < 7) newPrime = 7

    console.log("🚀 ~ file: 02-哈希表HashTable封装.ts:61 ~ HashTable<T> ~ resize ~ newPrime:", newPrime)
    this.length = newPrime

    // 获取原来所有的数据 并且重新放入到新的容器数组中 
    // 以为length改变了 通过hashFunc获取到索引不是之前的索引
    // 1.对数据进行初始化操作
    const oldStorage = this.storage
    this.storage = []
    this.count = 0

    // 2.获取原来的数据 放入新的数组中
    oldStorage.forEach(bucket => {
      if (!bucket) return

      for (let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i]
        this.put(tuple[0], tuple[1])
      }
    })
  }

  // 插入和修改
  put(key: string, value: T) {
    // 1.根据key获取数组对应的索引值
    const index = this.hashFunc(key, this.length)

    // 2.取出索引值对应位置的数组（桶）
    let bucket = this.storage[index]

    // 3.判断bucket是否有值 没有值赋值为空数组
    if (!bucket) {
      bucket = []
      this.storage[index] = bucket
    }

    // 4.确定已经有一个数组，但是数组中是否已经存在key是不确定的
    let isUpdate = false
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      // 数组中[0,1] 0存是key 1存的是value
      const tupleKey = tuple[0]
      if (tupleKey == key) {
        // 修改/更新操作
        tuple[1] = value
        isUpdate = true
      }
    }

    // 5.如果上面的代码没有进行覆盖，那么再该位置进行添加
    if (!isUpdate) {
      bucket.push([key, value])
      this.count++

      // 如果loadFactor比例大于0.75 那么会直接扩容
      const loadFactor = this.count / this.length
      if (loadFactor > 0.75) {
        this.resize(this.length * 2)
      }
    }
  }

  // 获取数据
  get(key: string): T | undefined {
    // 1.根据key获取对应的索引index
    const index = this.hashFunc(key, this.length)

    // 2.获取bucket
    const bucket = this.storage[index]
    // 如果bucket不存在 直接返回undefined
    if (!bucket) return undefined

    // 3.对bucket进行遍历
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      // tuple[0,1] 0存的是key 1存的是value
      const tupleKey = tuple[0]
      const tupleValue = tuple[1]

      // 如果tuple数组key 返回值
      if (tupleKey == key) {
        return tupleValue
      }
    }

    // 4.如果遍历完都拿不到 返回undefined
    return undefined
  }

  // 删除数据
  // bucket为 [ [ key, value ] ]
  delete(key: string): T | undefined {
    // 1.获取索引值的位置
    const index = this.hashFunc(key, this.length)

    // 2.获取bucket
    const bucket = this.storage[index]
    // 如果桶不存在 返回undefined
    if (!bucket) return undefined

    // 3.遍历桶数组
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      // tuple数组存两个值 0存key,1存value
      const tupleKey = tuple[0]
      const tupleValue = tuple[1]

      if (tupleKey == key) {
        // 如果找到有相同key的tuple 从桶中删除
        bucket.splice(i, 1)
        // hash表的数量（不是长度）-1
        this.count--

        // 如果loadFactor小于0.25并且不能小于最小长度7 缩容操作
        const loadFactor = this.count / this.length
        if (loadFactor < 0.25 && this.length > 7) {
          this.resize(Math.floor(this.length / 2))
        }

        return tupleValue
      }
    }

    // 4.如果遍历到最后都没有找到 返回undefined
    return undefined
  }
}

const hashTable = new HashTable()

// 测试插入/更新方法 
console.log("🚀 ~ file: 02-哈希表HashTable封装.ts:94 ~ 测试插入/更新方法:", '测试插入/更新方法')
hashTable.put('aaa', 100)
hashTable.put('aaa', 200)
hashTable.put('bbb', 300)
hashTable.put('ccc', 400)
hashTable.put('444', 444)
hashTable.put('555', 555)
// 此时的loadFactor为5/7 0.71
console.log("🚀 ~ file: 02-哈希表HashTable封装.ts:165 ~ 此时的loadFactor为5/7 0.71:", '此时的loadFactor为5/7 0.71')
console.log("🚀 ~ file: 02-哈希表HashTable封装.ts:166 ~ hashTable.storage:", hashTable.storage)

hashTable.put('666', 666)
// 此时的loadFactor为6/7 大于0.75 扩容
console.log("🚀 ~ file: 02-哈希表HashTable封装.ts:170 ~ 此时的loadFactor为6/7 大于0.75 扩容:", '此时的loadFactor为6/7 大于0.75 扩容')
console.log("🚀 ~ file: 02-哈希表HashTable封装.ts:170 ~ hashTable.storage:", hashTable.storage)


// 测试获取数据方法
console.log("🚀 ~ file: 02-哈希表HashTable封装.ts:100 ~ 测试获取数据方法:", '测试获取数据方法')
console.log("🚀 ~ file: 02-哈希表HashTable封装.ts:103 ~ hashTable.get('aaa'):", hashTable.get('aaa'))
console.log("🚀 ~ file: 02-哈希表HashTable封装.ts:104 ~ hashTable.get('bbb'):", hashTable.get('bbb'))
console.log("🚀 ~ file: 02-哈希表HashTable封装.ts:105 ~ hashTable.get('ccc'):", hashTable.get('ccc'))
console.log("🚀 ~ file: 02-哈希表HashTable封装.ts:106 ~ hashTable.get('ddd'):", hashTable.get('ddd'))

// 测试删除数据方法
console.log("🚀 ~ file: 02-哈希表HashTable封装.ts:139 ~ 测试删除数据方法:", '测试删除数据方法')
console.log("🚀 ~ file: 02-哈希表HashTable封装.ts:141 ~ hashTable.delete('aaa'):", hashTable.delete('aaa'))
console.log("🚀 ~ file: 02-哈希表HashTable封装.ts:142 ~ hashTable.get('aaa'):", hashTable.get('aaa'))

// 测试缩容方法
hashTable.delete('aaa')
hashTable.delete('bbb')
hashTable.delete('ccc')
hashTable.delete('444')
hashTable.delete('555')
// 此时loadFactor为1/7 小于0.25 缩容
console.log("🚀 ~ file: 02-哈希表HashTable封装.ts:200 ~ 此时loadFactor为1/7 小于0.25 缩容:", '此时loadFactor为1/7 小于0.25 缩容')
console.log("🚀 ~ file: 02-哈希表HashTable封装.ts:202 ~ hashTable.storage:", hashTable.storage)