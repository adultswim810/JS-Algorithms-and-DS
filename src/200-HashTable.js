const util = require("util")

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }

  get(key) {
    // hash the key
    // retrieve the key value pair
    // youll have to search thru the separate chaining
    // if not found return undefined
    let hashedKey = this._hash(key)
    let returnVal = undefined
    if (this.keyMap[hashedKey]) {
      this.keyMap[hashedKey].forEach((subArray) => {
        if (subArray[0] === key) returnVal = subArray
      })
    }
    return returnVal
  }

  set(key, val) {
    // hash the key
    // store via separate chaining [[key, val]]
    let hashedKey = this._hash(key)
    if (!this.keyMap[hashedKey]) {
      this.keyMap[hashedKey] = []
    }
    this.keyMap[hashedKey].push([key, val])
    return hashedKey
  }

  keys() {
    let allKeys = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          allKeys.push(this.keyMap[i][j][0])
        }
      }
    }
    return allKeys
  }

  values() {
    let allValues = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!allValues.includes(this.keyMap[i][j][1])) {
            allValues.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return allValues
  }
}

let ht = new HashTable(17)
ht.set("maroon", "#800000")
ht.set("yellow", "#FFFF00")
ht.set("olive", "#808000")
ht.set("salmon", "#FA8072")
ht.set("lightcoral", "#F08080")
ht.set("mediumvioletred", "#C71585")
ht.set("plum", "#DDA0DD")
ht.set("pum", "#DDA0DD")
console.log(ht.keys())
console.log(ht.values())
