class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    this.values.push({ val, priority })
    this.sort()
  }

  dequeue() {
    return this.values.shift()
  }

  // Onlogn
  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertexKey) {
    if (!this.adjacencyList[vertexKey]) this.adjacencyList[vertexKey] = []
    return vertexKey
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight })
    this.adjacencyList[vertex2].push({ node: vertex1, weight })
    return undefined
  }

  dijkstra(start, end) {
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    let path = []
    let smallest = start

    // Build Initial State
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().val
      if (smallest === end) {
        // console.log(distances)
        // console.log(previous)

        while (previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }

        break
      }
      for (let neighbor in this.adjacencyList[smallest]) {
        // Find neighboring node
        let nextNode = this.adjacencyList[smallest][neighbor]
        // console.log(nextNode)
        // calculate new destance to neighboring node
        let smalestDistanceToStart = distances[smallest]
        let candidateDistance = smalestDistanceToStart + nextNode.weight
        let nextNeighbor = nextNode.node
        // our best try gets compared to existing shortest path to next node
        if (candidateDistance < distances[nextNeighbor]) {
          // Update new smallest distance to neighbor
          distances[nextNeighbor] = candidateDistance
          // update previous - how we got to neighbor
          previous[nextNeighbor] = smallest
          // enqueue in priority queue with new priority
          nodes.enqueue(nextNeighbor, candidateDistance)
        }
      }
    }
    return path.concat(smallest).reverse()
  }
}

let g = new WeightedGraph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addVertex("F")

g.addEdge("A", "B", 4)
g.addEdge("A", "C", 2)
g.addEdge("B", "E", 3)
g.addEdge("C", "D", 2)
g.addEdge("C", "F", 4)
g.addEdge("D", "E", 3)
g.addEdge("D", "F", 1)
g.addEdge("E", "F", 1)

// console.log(g.dfsRecursive("A"))
// console.log(g.dfsIterative("A"))
//nodes in order
console.log(g.dijkstra("A", "E"))
