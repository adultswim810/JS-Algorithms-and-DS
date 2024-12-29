from typing import List

# nums = [1,1,1,2,2,3], k = 2
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        freq = [[] for i in range(len(nums) + 1)]
        # Build out the count
        # {1: 3, 2: 2, 3: 1}
        for n in nums:
            count[n] = count.get(n, 0) + 1
        # Invert and map to freq array
        for num, cnt in count.items():
            freq[cnt].append(num)
        # Iterate thru freq from last to first until we have k numbers
        res = []
        for i in range(len(freq) - 1, 0, -1):
            if len(freq[i]):
                for num in freq[i]:
                    res.append(num)
                    if len(res) == k:
                        return res


