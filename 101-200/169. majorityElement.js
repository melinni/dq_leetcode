/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (!map.get(nums[i])) {
      map.set(nums[i], 1)
    } else {
      map.set(nums[i], map.get(nums[i]) + 1)
    }
  }

  for (let item of map) {
    if (item[1] > Math.floor(nums.length / 2)) {
      return item[0]
    }
  }
};