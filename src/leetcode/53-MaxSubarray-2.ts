function maxSubArray(nums: number[]): number {
  let highestSum = -Infinity
  let currentSum = -Infinity

  for (const num of nums) {
    if (currentSum > 0) {
      currentSum += num
    } else {
      currentSum = num
    }
    if (currentSum > highestSum) {
      highestSum = currentSum
    }
  }
  return highestSum
}
