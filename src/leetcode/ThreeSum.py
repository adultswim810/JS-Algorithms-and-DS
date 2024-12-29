from typing import List

class Solution:
    def threeSum(self, numbers: List[int]) -> List[int]:
        # sort, ensure you are not on a dup, two sum thru the rest
        res = []

        numbers.sort()
        for i, num in enumerate(numbers):
            # skip first duplicates
            if i > 0 and num == numbers[i-1]:
                continue
            else:
                l = i + 1
                r = len(numbers) - 1
                while l < r:
                    sum = num + numbers[l] + numbers[r]
                    if sum == 0:
                        res.append([num, numbers[l], numbers[r]])
                        l += 1
                        # skip second duplicates
                        while l < r and numbers[l] == numbers[l-1]:
                            l += 1
                    elif sum < 0:
                        l += 1
                    elif sum > 0:
                        r -= 1
        return res
    
# Test cases
test_cases = [
    # ([1, 2, 3, 4, 5, 6], []),
    ([0, -1, 2, -3, 1], [[-3, 1, 2], [-1, 0, 1]]),
    ([1, 2, -2, -1], [[-2, 1, 1]]),
    ([1, 2, 3, 4, 5], []),
    ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [])
]

sol = Solution()
for numbers, expected in test_cases:
    result = sol.threeSum(numbers)
    print(f"numbers: {numbers}, expected: {expected}, result: {result}")