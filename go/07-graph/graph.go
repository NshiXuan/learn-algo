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
