class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  getParentIndex(childIndex) {
    const parentIndex = Math.floor((childIndex - 1) / 2)
    return parentIndex
  }

  getChildIndices(parentIndex) {
    const leftChildIndex = 2 * parentIndex + 1
    const rightChildIndex = 2 * parentIndex + 2
    const leftChildExists = this.values[leftChildIndex] !== undefined
    const rightChildExists = this.values[rightChildIndex] !== undefined
    const childIndices = []
    if (leftChildExists) childIndices.push(leftChildIndex)
    if (rightChildExists) childIndices.push(rightChildIndex)
    return childIndices
  }

  insert(val) {
    this.values.push(val) // Add new value to the end of the array
    let index = this.values.length - 1 // Get the index of the newly added value
    let parentIndex = this.getParentIndex(index) // Find the parent index

    // Swap as long as the inserted value is greater than its parent's value
    while (index > 0 && this.values[parentIndex] < val) {
      // Swap the values at index and parentIndex
      ;[this.values[parentIndex], this.values[index]] = [
        this.values[index],
        this.values[parentIndex],
      ]
      // Move up the tree
      index = parentIndex
      parentIndex = this.getParentIndex(index)
    }
  }

  enqueue(val, priority) {
    let node = new Node(val, priority) // create new node
    this.values.push(node) //add to values
    let index = this.values.length - 1 // Get the index of the newly added value
    let parentIndex = this.getParentIndex(index) // Find the parent index
    //bubble up to appropriate position
    while (true) {
      let child = this.values[index]
      let parent = this.values[parentIndex]
      if (parent && parent.priority >= child.priority) {
        ;[this.values[parentIndex], this.values[index]] = [
          this.values[index],
          this.values[parentIndex],
        ]
        index = parentIndex
        parentIndex = this.getParentIndex(index)
      } else {
        break
      }
    }
  }

  dequeue() {
    let newest = this.values[this.values.length - 1] // Get the index of the newly added value
    let oldRoot = this.values[0]
    this.values[0] = newest // set root to newest
    let index = 0
    let val = this.values[index]
    this.values.pop()
    // bubble down
    while (true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let leftChild = this.values[leftChildIndex]
      let rightChild = this.values[rightChildIndex]
      let swapIndex = null
      if (leftChildIndex < this.values.length) {
        leftChild = this.values[leftChildIndex]
        if (leftChild.priority < val.priority) {
          swapIndex = leftChildIndex
        }
      }
      if (rightChildIndex < this.values.length) {
        rightChild = this.values[rightChildIndex]
        if (
          (swapIndex === null && rightChild.priority < val.priority) ||
          (swapIndex !== null && rightChild.priority < leftChild.priority)
        ) {
          swapIndex = rightChildIndex
        }
      }
      if (swapIndex === null) break
      ;[this.values[index], this.values[swapIndex]] = [
        this.values[swapIndex],
        this.values[index],
      ]
      index = swapIndex
      val = this.values[index]
    }
    return oldRoot
  }

  extractMax() {
    let newest = this.values[this.values.length - 1] // Get the index of the newly added value
    let oldRoot = this.values[0]
    this.values[0] = newest // set root to newest
    let index = 0
    let val = this.values[index]
    this.values.pop()

    while (true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let leftChild = this.values[leftChildIndex]
      let rightChild = this.values[rightChildIndex]
      let swapIndex = null
      if (leftChildIndex < this.values.length) {
        leftChild = this.values[leftChildIndex]
        if (leftChild > val) {
          swapIndex = leftChildIndex
        }
      }
      if (rightChildIndex < this.values.length) {
        rightChild = this.values[rightChildIndex]
        if (
          (swapIndex === null && rightChild > val) ||
          (swapIndex !== null && rightChild > leftChild)
        ) {
          swapIndex = rightChildIndex
        }
      }
      if (swapIndex === null) break
      ;[this.values[index], this.values[swapIndex]] = [
        this.values[swapIndex],
        this.values[index],
      ]
      index = swapIndex
      val = this.values[index]
    }
    return oldRoot
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
