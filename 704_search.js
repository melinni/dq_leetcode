/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  return searchTarget(nums, 0, nums.length - 1, target)
};

var searchTarget = function(nums, start, end, target) {
  if (start > end) return -1

  let mid = Math.floor(start + (end - start) / 2)
  if (nums[mid] === target) {
    return mid
  } else if (nums[mid] > target) {
    return searchTarget(nums, start, mid - 1, target)
  } else {
    return searchTarget(nums, mid + 1, end, target)
  }
}