// 时间复杂度O(logn)
// 空间复杂度O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let start = 0, end = nums.length
  while (end > start) {
    let mid = start + ((end-start) >> 1)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      end = mid
    } else {
      start = mid + 1
    }
  }

  return end
};