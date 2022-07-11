// 技巧一：二分查找

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let left = 1, right = nums.length
  while (right > left) {
    let mid = (right + left) >> 1
    let count = 0
    for (let num of nums) {
      if (num <= mid) count++
    }

    if (count <= mid) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return right
};