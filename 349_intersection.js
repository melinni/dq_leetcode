/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let set = new Set()
  let map = new Map()
  for (let item of nums1) {
    map.set(item, 1)
  }

  for (let item of nums2) {
    if (map.get(item)) {
      set.add(item)
    }
  }

  return [...set]
};