class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        res = 0
        l = 0
        count = {}   
        maxf = 0         

        for r in range(len(s)):
            # increment count with new char at r
            count[s[r]] = count.get(s[r], 0) + 1
            # if we have a new maxf set it
            maxf = max(count[s[r]], maxf)

            # Scoot up l and remove its counts while we are over the limit
            while (r - l + 1) - maxf > k:
                count[s[l]] = count.get(s[l], 0) - 1
                l += 1
            res = max(r - l + 1, res)

        return res

solution = Solution()

print(solution.characterReplacement("A", 2)) #4
            
            
