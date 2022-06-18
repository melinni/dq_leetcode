/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let res = []
  let left = 0, right = nums.length - 1
  while (right >= left) {
    if (nums[left] * nums[left] > nums[right] * nums[right]) {
      res.unshift(nums[left] * nums[left])
      left++
    } else {
      res.unshift(nums[right] * nums[right])
      right--
    }
  }

  return res
};
