/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let pre = 0, maxNum = nums[0];
  nums.forEach(x => {
    pre = Math.max(pre + x, x);
    maxNum = Math.max(maxNum, pre);
  })
  return maxNum;
};