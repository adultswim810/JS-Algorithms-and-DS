from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = {}
        for s in strs:
            count = []
            for i in range(26):
                count.append(0)
            for c in s:
                count[ord(c) - ord('a')] += 1
            key = str(count)
            if key not in res:
                res[key] = []
            res[key].append(s)
        return list(res.values())
    
def test_groupAnagrams():
    solution = Solution()
    input_data = ["eat", "tea", "tan", "ate", "nat", "bat"]
    expected_output = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
    output = solution.groupAnagrams(input_data)
    assert sorted([sorted(group) for group in output]) == sorted([sorted(group) for group in expected_output]), f"Test failed: {output} != {expected_output}"
    print("Test passed!")

test_groupAnagrams()