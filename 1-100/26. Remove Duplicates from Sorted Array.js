/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let slow = 0, fast = 1
  while (fast <= nums.length - 1) {
    if (nums[slow] !== nums[fast]) {
      slow++
      nums[slow] = nums[fast]
    }
    fast++
  }
  return slow+1
};