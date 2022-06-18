/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) || map.get(nums[i]) === 0) {
      if (Math.abs(i - map.get(nums[i])) <= k) {
        return true
      } else {
        map.set(nums[i], i)
      }
    } else {
      map.set(nums[i], i)
    }
  }

  return false
};