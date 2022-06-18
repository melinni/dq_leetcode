// 其实就是从数组倒着查找
// 找到nums[i] 比nums[i+1]小的时候，就将nums[i]跟nums[i+1]到nums[nums.length - 1]当中找到一个最小的比nums[i]大的元素交换。
// 交换后，再把nums[i+1]到nums[nums.length-1]排序，就ok了

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let len = nums.length
  let i = len - 2
  while (i >= 0 && nums[i] >= nums[i+1]) {
      i--
  }

  if (i >= 0) {
      let j = len - 1
      while (j >= 0 && nums[j] <= nums[i]) {
          j--
      }

      [nums[i], nums[j]] = [nums[j], nums[i]]
  }

  let left = i + 1, right = len - 1
  while (right > left) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
  }
}
