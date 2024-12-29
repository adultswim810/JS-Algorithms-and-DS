function twoSum(nums: number[], target: number): number[] {
  const prevMap = {}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const diff = target - num
    if (prevMap[diff] !== undefined) {
      return [i, prevMap[diff]]
    }
    prevMap[num] = i
  }
  return []
}

console.log(new Array(26).fill(0))
