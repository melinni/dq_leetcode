// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// 思路：循环数组，不断将元素加入滑动窗口中，也就是加入set，如果set中存在重复元素并且窗口大小小于指定大小就返回，否则加入set中，当滑动窗口超过了指定大小，缩小窗口
// 时间复杂度O(n)
// 空间复杂度O(min(n, k))

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const set = new Set();
  for(let i = 0; i < nums.length; i++) {
    if(set.has(nums[i])) {//找到了重复的元素
      return true;
    }
    set.add(nums[i]);//没找到就加入set中 扩大窗口
    if(set.size > k) {//滑动窗口超过了指定大小，缩小窗口
      set.delete(nums[i - k]);
    }
  }
  return false;
};