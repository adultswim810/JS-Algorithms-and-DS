const fib = (n, memo = []) => {
  if (memo[n]) {
    return memo[n]
  }
  if (n === 1 || n === 2) {
    return 1
  }

  let result = fib(n - 1, memo) + fib(n - 2, memo)
  memo[n] = result
  return memo[n]
}

console.log(fib(6))
