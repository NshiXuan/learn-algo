class Graph<T>{
    // 顶点
    private verteces: T[] = []

    // 边：邻接表 adj代表邻接的缩写
    private adjList: Map<T, T[]> = new Map()

    // 创建顶点和边
    addVertex(vertex: T) {
        // 将顶点添加到数组中保存
        this.verteces.push(vertex)
        // 创建一个邻接表中的数组
        this.adjList.set(vertex, [])
    }

    // 添加边
    addEdge(v1: T, v2: T) {
        this.adjList.get(v1)?.push(v2)
        this.adjList.get(v2)?.push(v1)
    }

    // 简单的遍历
    traverse() {
        this.verteces.forEach(vertex => {
            // 获取当前顶点的边
            const edges = this.adjList.get(vertex)
            console.log(`🚀 ~ file: 01_图结构Graph.ts:28 ~ Graph<T> ~ traverse ~ vertex: ${vertex} -> ${edges?.join(" ")}`)
        })
    }

    // 广度优先搜索
    bfs() {
        // 1.判断是否有顶点
        if (this.verteces.length === 0) return

        // 2.创建队列结构访问每一个顶点
        const queue: T[] = []
        queue.push(this.verteces[0])

        // 3.创建Set结构，记录某一个顶点是否被访问过
        const visited = new Set<T>()
        visited.add(this.verteces[0])

        // 4.遍历队列中的每一个顶点
        while (queue.length) {
            // 访问队列中的第一个顶点
            const vertex = queue.shift()!
            console.log("🚀 ~ file: 01_图结构Graph.ts:47 ~ Graph<T> ~ bsf ~ vertex:", vertex)

            // 相邻的顶点
            const neighbors = this.adjList.get(vertex)
            if (!neighbors) continue
            for (const nei of neighbors) {
                // 如果没有访问过
                if (!visited.has(nei)) {
                    visited.add(nei)
                    queue.push(nei)
                }
            }
        }
    }

    // 深度优先搜索
    dfs() {
        // 1.判断是否有顶点 没有直接返回
        if (this.verteces.length === 0) return

        // 2.创建栈结构
        const stack: T[] = []
        stack.push(this.verteces[0])

        // 3.创建Set结构
        const visited = new Set<T>()

        // 4.从一个顶点开始访问
        while (stack.length) {
            const vertex = stack.pop()!
            console.log("🚀 ~ file: 01_图结构Graph.ts:78 ~ Graph<T> ~ dfs ~ vertex:", vertex)

            const neighbors = this.adjList.get(vertex)
            if (!neighbors) continue // 类型缩小
            for (let i = neighbors.length - 1; i >= 0; i--) {
                const nei = neighbors[i]
                if (!visited.has(nei)) {
                    visited.add(nei)
                    stack.push(nei)
                }
            }
        }
    }
}

const graph = new Graph()
// 创建顶点
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addVertex("G")
graph.addVertex("H")
graph.addVertex("I")

// 添加边
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

// 简单的遍历
graph.traverse()

console.log("🚀 ~ file: 01_图结构Graph.ts:121 ~ 广度优先搜索遍历:")
graph.bfs()
console.log("🚀 ~ file: 01_图结构Graph.ts:123 ~ 深度优先遍历:")
graph.dfs()

export { }