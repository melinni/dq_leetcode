// dp[i]=max(dp[j])+1,其中0≤j<i且num[j]<num[i]

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let dp = [], res = 1;
  dp[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    res = Math.max(res, dp[i])
  }

  return res;
};
