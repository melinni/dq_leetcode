/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let left = 0, right = 0
  
  if (add(nums, 0, nums.length-1) < target) return 0;
  let res = nums.length
  let sum = 0
  while (right < nums.length) {
    sum += nums[right]
    while (sum >= target) {
      res = Math.min(res, right - left + 1)
      sum -= nums[left]
      left++
    }
    right++
  }

  return res
};

function add(nums, left, right) {
  let res = 0
  for (let i = left; i <= right; i++) {
    res += nums[i]
  }
  return res
}