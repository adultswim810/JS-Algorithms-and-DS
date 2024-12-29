from typing import List

class Solution:
    def encode(self, strs: List[str]) -> str:
        res = ''
        for s in strs:
            res += f"{len(s)}#{s}"
        return res

    def decode(self, s: str) -> List[str]:
        res = []
        i = 0
        while i < len(s):
            hash_index = s.find('#', i)
            count = int(s[i:hash_index])
            sub_str = s[hash_index + 1:hash_index + count + 1]
            res.append(sub_str)
            i += count + len(str(count)) + 1 
        return res
    




import logging


def test_encode_and_decode():
    logging.basicConfig(level=logging.INFO)
    solution = Solution()
    
    # Test case 1
    input_data = ["hello", "world"]
    logging.info(f"Testing with input: {input_data}")
    encoded = solution.encode(input_data)
    logging.info(f"Encoded result: {encoded}")
    decoded = solution.decode(encoded)
    logging.info(f"Decoded result: {decoded}")
    assert decoded == input_data, f"Test failed: {decoded} != {input_data}"
    
    # Test case 2
    input_data = ["", "a", "abc"]
    logging.info(f"Testing with input: {input_data}")
    encoded = solution.encode(input_data)
    logging.info(f"Encoded result: {encoded}")
    decoded = solution.decode(encoded)
    logging.info(f"Decoded result: {decoded}")
    assert decoded == input_data, f"Test failed: {decoded} != {input_data}"
    
    # Test case 3
    input_data = ["123", "456", "789"]
    logging.info(f"Testing with input: {input_data}")
    encoded = solution.encode(input_data)
    logging.info(f"Encoded result: {encoded}")
    decoded = solution.decode(encoded)
    logging.info(f"Decoded result: {decoded}")
    assert decoded == input_data, f"Test failed: {decoded} != {input_data}"
    
    # Test case 4
    input_data = ["", "", ""]
    logging.info(f"Testing with input: {input_data}")
    encoded = solution.encode(input_data)
    logging.info(f"Encoded result: {encoded}")
    decoded = solution.decode(encoded)
    logging.info(f"Decoded result: {decoded}")
    assert decoded == input_data, f"Test failed: {decoded} != {input_data}"

    # Test case 5
    input_data = ["we", "say", ":", "yes", "!@#$%^&*()"]
    logging.info(f"Testing with input: {input_data}")
    encoded = solution.encode(input_data)
    logging.info(f"Encoded result: {encoded}")
    decoded = solution.decode(encoded)
    logging.info(f"Decoded result: {decoded}")
    assert decoded == input_data, f"Test failed: {decoded} != {input_data}"
    logging.info("All tests passed!")

test_encode_and_decode()

