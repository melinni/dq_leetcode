/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (nums.length === 1) return 1
  let res = 1, left = 0, right = 1
  while (right < nums.length) {
    if (nums[right] > nums[right - 1]) {
      res = Math.max(res, right - left + 1)
    } else {
      left = right
    }
    right++
  }
  return res
};
