package graph

import "testing"

func TestGraph(t *testing.T) {
	graph := NewGraph[string]()
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
	graph.addEdge("A", "B")
	graph.addEdge("A", "C")
	graph.addEdge("A", "D")
	graph.addEdge("C", "D")
	graph.addEdge("C", "G")
	graph.addEdge("D", "G")
	graph.addEdge("D", "G")
	graph.addEdge("B", "E")
	graph.addEdge("B", "F")
	graph.addEdge("E", "I")

	graph.traverse()
}
