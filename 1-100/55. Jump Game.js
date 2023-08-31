/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let dp = new Array(nums.length-1).fill(false)

  dp[0] = nums[0]
  if (nums.length === 1) return true
  if (nums[0] === 0) return false

  for (let i = 1; i < nums.length-1; i++) {
    dp[i] = Math.max(dp[i-1] - 1, nums[i])
    if (dp[i] <= 0) {
      return false
    }
  }

  return true
};