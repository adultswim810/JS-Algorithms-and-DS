const util = require("util")

//
class MaxBinaryHeap {
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

const mbh = new MaxBinaryHeap()
mbh.insert(1)
mbh.insert(2)
mbh.insert(3)
mbh.insert(4)
mbh.insert(5)
// console.log(mbh.values)

mbh.extractMax()
console.log(mbh.values)
