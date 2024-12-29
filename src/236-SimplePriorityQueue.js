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

let q = new PriorityQueue()
q.enqueue("B", 3)
q.enqueue("D", 2)
q.enqueue("C", 5)
q.enqueue("Q", 20)
console.log(q)
