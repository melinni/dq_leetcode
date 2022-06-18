/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let map = new Map()
  for (let num of nums) {
    if (map.get(num)) {
      return true
    } else {
      map.set(num, 1)
    }
  }
  return false
};
