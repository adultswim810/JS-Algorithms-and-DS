const util = require("util")

// not constant time, linear with key length
// only hashes strings
// could be more random

// between 0 and 10
const hash = (str, arrayLen) => {
    let total = 0
    for (let char of str) {
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen
    }
    return total
}

console.log(hash('pink', 10))

