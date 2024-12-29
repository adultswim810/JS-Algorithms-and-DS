function maxSubArray(nums: number[]): number {
  let index1 = 0
  let index2 = 0
  let highestSum = nums[0]
  let currentSum = nums[0]

  while (index1 < nums.length && index2 < nums.length) {
    if (index1 !== index2) {
      currentSum = currentSum + nums[index2]
    }
    if (currentSum > highestSum) {
      highestSum = currentSum
    }
    if (currentSum > 0) {
      index2++
    } else {
      index1 = index2 + 1
      index2 = index1
      currentSum = nums[index1]
    }
  }
  return highestSum
}
