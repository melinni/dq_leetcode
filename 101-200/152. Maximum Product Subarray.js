/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let dp = new Array(nums.length)
  let dp2 = new Array(nums.length)

  dp[0] = nums[0]
  dp2[0] = nums[0]

  let res = nums[0]
  let tmp1 = 0, tmp2 = 0

  for (let i = 1; i <nums.length; i++) {
    tmp1 = dp[i-1] * nums[i]
    tmp2 = dp2[i-1] * nums[i]

    dp2[i] = Math.min(tmp1, tmp2, nums[i])
    dp[i] = Math.max(tmp1, tmp2, nums[i])

    res = Math.max(res, dp[i])
  }

  return res
};
