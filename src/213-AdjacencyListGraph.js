class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertexKey) {
    if (!this.adjacencyList[vertexKey]) this.adjacencyList[vertexKey] = []
    return vertexKey
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
    return undefined
  }

  removeEdge(vertex1, vertex2) {
    const index1 = this.adjacencyList[vertex1].indexOf(vertex2)
    this.adjacencyList[vertex1].splice(index1, 1)
    const index2 = this.adjacencyList[vertex2].indexOf(vertex1)
    this.adjacencyList[vertex2].splice(index2, 1)

    return undefined
  }
  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((edge) => {
      this.removeEdge(edge, vertex)
    })
    delete this.adjacencyList[vertex]
  }

  dfsRecursive(vertex) {
    let result = []
    let visited = {}

    const dfs = (v) => {
      if (!v) return
      visited[v] = true
      result.push(v)
      for (let i = 0; i < this.adjacencyList[v].length; i++) {
        let v2 = this.adjacencyList[v][i]
        if (!visited[v2]) {
          dfs(v2)
        }
      }
    }
    dfs(vertex)
    return result
  }

  dfsIterative(start) {
    let s = [start]
    let result = []
    let visited = {}

    while (s.length !== 0) {
      let vertex = s.pop()
      if (!visited[vertex]) {
        result.push(vertex)
        visited[vertex] = true
        this.adjacencyList[vertex].reverse().forEach((v) => {
          s.push(v)
        })
      }
    }

    return result
  }

  bfs(start) {
    let q = [start]
    let result = []
    let visited = {}
    while (q.length !== 0) {
      let shifted = q.shift()
      if (!visited[shifted]) {
        visited[shifted] = true
        result.push(shifted)
        this.adjacencyList[shifted].forEach((v) => {
          q.push(v)
        })
      }
    }
    return result
  }
}

let g = new Graph()
// g.addVertex("tokyo")
// g.addVertex("tokyo")
// g.addVertex("sanfran")
// g.addEdge("tokyo", "sanfran")
// console.log(g)
// g.removeVertex("tokyo")
// console.log(g)
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

// console.log(g.dfsRecursive("A"))
// console.log(g.dfsIterative("A"))
console.log(g.bfs("A"))
