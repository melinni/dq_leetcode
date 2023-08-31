// 技巧1 递归
// 思路：先找到中间位置，判断是否是需要寻找的目标值，如果是就返回，不是的话判断目标值和中间元素的大小，然后继续向左右子树递归寻找
// 时间复杂度O(logn)
// 空间复杂度O(logn)，递归栈大小

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

// 技巧2 非递归
// 思路：定义left、right指针，比较目标元素和中间元素的大小，然后不断缩小左右指针的范围继续寻找目标元素
// 时间复杂度O(logn)
// 空间复杂度O(1)
var search = function (nums, target) {
  let left = 0,
      right = nums.length - 1;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
          return mid;
      } else if (target < nums[mid]) {//比较目标和中间元素的大小，然后不断缩小left和rihgt指针的范围
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return -1;
};