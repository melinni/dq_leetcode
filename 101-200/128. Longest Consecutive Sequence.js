/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let set = new Set()
  for (let num of nums) {
    set.add(num)
  }

  let res = 0
  let count
  for (let num of nums) {
    if (!set.has(num-1)) {
      count = 0
      let n = num
      while (set.has(n)) {
        count++
        n++
      }

      res = Math.max(res, count)
    }
  }

  return res
};