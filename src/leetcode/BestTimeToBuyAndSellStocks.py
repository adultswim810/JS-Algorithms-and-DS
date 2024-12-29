from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        res = 0
        curr = 0

        # start with l = 0 r = 1
        # if prices[r] < prices[l], l = r
        #keep on moving r += 1 till end
        #store new highs

        if len(prices) > 1:
            l = 0
            r = 1

            while r < len(prices):
                curr = prices[r] - prices[l]

                if curr > res:
                    res = curr

                if prices[r] < prices[l]:
                    l = r
                r += 1
                
        return res