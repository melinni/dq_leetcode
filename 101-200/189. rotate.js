/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let len = nums.length
  k = len - k % len

  let newNums = nums.concat(nums)
  for (let i = 0; i < nums.length; i++) {
    nums[i] = newNums[k+i]
  }
  return nums
};