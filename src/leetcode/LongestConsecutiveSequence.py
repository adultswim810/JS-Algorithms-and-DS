from typing import List

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 1
        longest = 0
        s = set(nums)

        for num in s:
            j = 1
            count = 1
            while num + j in s:
                count += 1
                j += 1
            longest = max(longest, count)

        return longest
            




def test_longestConsecutive():
    solution = Solution()
    
    # Test case 1: Normal case
    # nums = [100, 4, 200, 1, 3, 2]
    # assert solution.longestConsecutive(nums) == 4, f"Test case 1 failed: {solution.longestConsecutive(nums)}"
    
    # # Test case 2: Empty array
    # nums = []
    # assert solution.longestConsecutive(nums) == 0, f"Test case 2 failed: {solution.longestConsecutive(nums)}"
    
    # # Test case 3: Single element
    # nums = [1]
    # assert solution.longestConsecutive(nums) == 1, f"Test case 3 failed: {solution.longestConsecutive(nums)}"
    
    # # Test case 4: Two elements
    # nums = [1, 2]
    # assert solution.longestConsecutive(nums) == 2, f"Test case 4 failed: {solution.longestConsecutive(nums)}"
    
    # Test case 5: Unordered elements
    nums = [9, 1, 4, 7, 3, 2, 6, 5]
    assert solution.longestConsecutive(nums) == 5, f"Test case 5 failed: {solution.longestConsecutive(nums)}"
    
    # Test case 6: Duplicates
    nums = [1, 2, 2, 3, 4]
    assert solution.longestConsecutive(nums) == 4, f"Test case 6 failed: {solution.longestConsecutive(nums)}"
    
    print("All test cases passed!")

test_longestConsecutive()