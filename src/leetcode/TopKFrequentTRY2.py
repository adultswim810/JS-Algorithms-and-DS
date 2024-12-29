from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        res = []

        count = {}
        for n in nums:
            count[n] = count.get(n, 0) + 1
        
        invertCount = [[] for i in range(len(nums) + 1)]

        for key in count:
            invertCount[count[key]].append(key)
        
        i = len(invertCount) - 1
        while len(res) < k:
            if len(invertCount[i]):
                for n in invertCount[i]:
                    res.append(n)
                    if len(res) == k:
                        return res
            i -= 1

s = Solution()

s.topKFrequent([7,7], 1)