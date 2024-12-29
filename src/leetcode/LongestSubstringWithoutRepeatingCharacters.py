class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        longest = 0
        l = 0
        letterSet = set()

        for r in range(len(s)):
            while s[r] in letterSet:
                letterSet.remove(s[l])
                l += 1
            else:
                letterSet.add(s[r])
            if r - l + 1 > longest:
                longest = r - l + 1
        return longest
    
# Test case
s = "dvdf"
solution = Solution()
print(solution.lengthOfLongestSubstring(s))  # Expected output: 3