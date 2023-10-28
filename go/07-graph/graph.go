package graph

import (
	"fmt"
)

// 实现图的两种方式 邻接矩阵与邻接表 这里采用邻接表
type Graph[T comparable] struct {
	// 顶点
	verteces []T

	// 边：邻接表记录
	adjList map[T][]T
}

func NewGraph[T comparable]() *Graph[T] {
	return &Graph[T]{
		verteces: make([]T, 0),
		adjList:  make(map[T][]T),
	}
}

// addVertex 添加顶点与初始化邻接表
func (g *Graph[T]) addVertex(vertex T) {
	g.verteces = append(g.verteces, vertex)

	g.adjList[vertex] = make([]T, 0)
}

func (g *Graph[T]) addEdge(v1, v2 T) {
	_, ok := g.adjList[v1]
	if ok {
		g.adjList[v1] = append(g.adjList[v1], v2)
	}
	_, ok = g.adjList[v2]
	if ok {
		g.adjList[v2] = append(g.adjList[v2], v1)
	}
}

func (g *Graph[T]) traverse() {
	for _, v := range g.verteces {
		edges := g.adjList[v]
		fmt.Printf("%v ->  %v\n", v, edges)
	}
}

// bfs 广度优先搜索 queue实现
func (g *Graph[T]) bfs() {
	// 1.边界判断
	if len(g.verteces) <= 0 {
		return
	}

	// 2.获取根节点进行bfs
	var queue []T
	// 记录被访问过的节点
	var visited []T

	// 2.1 将节点放入队列
	root := g.verteces[0]
	queue = append(queue, root)
	visited = append(visited, root)
	for len(queue) > 0 {
		vertex := queue[0]
		fmt.Printf("vertex: %v\n", vertex)
		queue = queue[1:]

		neighbors := g.adjList[vertex]
		if len(neighbors) <= 0 {
			continue
		}
		for _, nei := range neighbors {
			if !g.contains(visited, nei) {
				queue = append(queue, nei)
				visited = append(visited, nei)
			}
		}
	}
}

// bfs2 广度优先搜索 queue实现
func (g *Graph[T]) bfs2() {
	// 1.边界判断
	if len(g.verteces) <= 0 {
		return
	}

	// 2.获取根节点进行bfs
	var queue []T
	// 记录被访问过的节点
	var visited []T

	// 2.1 将节点放入队列
	root := g.verteces[0]
	queue = append(queue, root)
	for len(queue) > 0 {
		vertex := queue[0]
		queue = queue[1:]

		if !g.contains(visited, vertex) {
			visited = append(visited, vertex)
			fmt.Printf("bfs2 vertex: %v\n", vertex)
			neighbors := g.adjList[vertex]
			if len(neighbors) <= 0 {
				continue
			}
			queue = append(queue, neighbors...)
		}
	}
}

// dfs 深度优先搜索
func (g *Graph[T]) dfs() {
	// 1.边界判断
	if len(g.verteces) <= 0 {
		return
	}

	// 2.
	var stack []T
	var visited []T
	stack = append(stack, g.verteces[0])

	for len(stack) > 0 {
		vertex := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		fmt.Printf("vertex: %v\n", vertex)

		neighbors := g.adjList[vertex]
		if len(neighbors) <= 0 {
			continue
		}
		for i := len(neighbors) - 1; i >= 0; i-- {
			nei := neighbors[i]
			if !g.contains(visited, nei) {
				visited = append(visited, nei)
				stack = append(stack, nei)
			}
		}
	}
}

func (g *Graph[T]) contains(slice []T, val T) bool {
	for _, v := range slice {
		if v == val {
			return true
		}
	}

	return false
}
