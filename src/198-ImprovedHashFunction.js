const util = require("util")

// not constant time, linear with key length
// only hashes strings
// could be more random

// between 0 and 10
const hash = (key, arrayLen) => {
    let total = 0
    const WEIRD_PRIME = 31
    for (let i; i < Math.min(key.length, 100); i++) {
        let value = i.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLen
    }
    return total
}

console.log(hash('pink', 13))

