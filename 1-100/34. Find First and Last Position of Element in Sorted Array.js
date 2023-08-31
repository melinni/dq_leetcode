/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let res = []
  res = search(nums, 0, nums.length, target, res)
  return res || [-1, -1]
};

function search(nums, start, end, target, res) {
  if (start > end) return
  let mid = (start + end) >> 1
  if (nums[mid] === target) {
    let l = mid, r = mid
    while (l >= 0 && nums[l] === target) {
      l--
    }
    while (r <= nums.length - 1 && nums[r] === target) {
      r++
    }
    res = [l+1, r-1]
    return res
  } else if (nums[mid] > target) {
    return search(nums, start, mid - 1, target, res)
  } else {
    return search(nums, mid + 1, end, target, res)
  }
}