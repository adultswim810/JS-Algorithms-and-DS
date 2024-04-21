const util = require("util")

class Node {
  constructor(value) {
    this.val = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    let newNode = new Node(val)
    if (!this.root) {
      this.root = newNode
      return this
    }
    let curr = this.root
    while (true) {
      if (newNode.val === curr.val) return undefined
      // Go right
      if (newNode.val > curr.val) {
        if (curr.right) {
          curr = curr.right
        } else {
          curr.right = newNode
          return this
        }
      } else if (newNode.val < curr.val) {
        // Go left
        if (curr.left) {
          curr = curr.left
        } else {
          curr.left = newNode
          return this
        }
      }
    }
  }

  find(val) {
    if (!this.root) {
      return null
    }
    let curr = this.root
    while (true) {
      if (curr.val === val) return curr
      // Go right
      if (val > curr.val) {
        if (curr.right) {
          curr = curr.right
        } else {
          return null
        }
      } else if (val < curr.val) {
        // Go left
        if (curr.left) {
          curr = curr.left
        } else {
          return null
        }
      }
    }
  }

  BreadthFirstSearch() {
    let queue = []
    let visited = []
    if (!this.root) return visited
    let curr = this.root
    queue.push(this.root)
    while (queue.length) {
      curr = queue.shift()
      visited.push(curr.val)
      // in a non binary tree we could iterate over all children here
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    }
    return visited
  }

  DepthFirstSearchPreOrder() {
    let visited = []
    if (!this.root) return visited
    let curr = this.root

    function traverse(node) {
      visited.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(curr)
    return visited
  }

  DepthFirstSearchPostOrder() {
    let visited = []
    if (!this.root) return visited
    let curr = this.root

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      visited.push(node.val)

    }

    traverse(curr)
    return visited
  }

  DepthFirstSearchInOrder() {
    let visited = []
    if (!this.root) return visited
    let curr = this.root

    function traverse(node) {
      if (node.left) traverse(node.left)
      visited.push(node.val)
      if (node.right) traverse(node.right)
    }

    traverse(curr)
    return visited
  }
}

let tree = new BinarySearchTree()
// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

// console.log(tree.find(7))

// console.log(util.inspect(tree, false, null, false))
// console.log(tree.BreadthFirstSearch())
// console.log(tree.DepthFirstSearchPreOrder())
// console.log(tree.DepthFirstSearchPostOrder())
console.log(tree.DepthFirstSearchInOrder())