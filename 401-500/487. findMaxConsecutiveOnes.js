/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
  let len = nums.length, dp0 = 0, dp1 = 0, ans = 0
  for (let i = 0; i < len; ++i) {
    if (nums[i]) {
      dp0++
      dp1++
    } else {
      dp1 = dp0 + 1
      dp0 = 0 // 这个还不能理解
    }

    ans = Math.max(ans, Math.max(dp0, dp1));
  }

  return ans
};

console.log(findMaxConsecutiveOnes([1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1]))