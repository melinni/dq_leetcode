// 思路：如果中间的数小于最右边的数，则右半段是有序的，若中间数大于最右边数，则左半段是有序的
// 我们只要在有序的半段里用首尾两个数组来判断目标值是否在这一区域内，这样就可以确定保留哪半边了

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let len = nums.length
  let left = 0, right = len - 1
  while (right >= left) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < nums[right]) {
      if (nums[mid] < target && nums[right] >= target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    } else {
      if (nums[left] <= target && nums[mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
  }

  return -1
};
