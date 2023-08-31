// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// 技巧一 排序+双指针
// 时间复杂度O(n^2)
// 空间复杂度O(logn)
var threeSum = function(nums) {
  let ans = [];
  const len = nums.length;
  if(nums == null || len < 3) return ans; // 数组的长度大于3
  nums.sort((a, b) => a - b); // 排序
  for (let i = 0; i < len ; i++) {
    if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
    let L = i+1;
    let R = len-1;
    while(L < R){ //虽然里面还有两个循环，但是整体的L和R移动的时间内复杂度还是o(n)
      const sum = nums[i] + nums[L] + nums[R];
      if (sum == 0) {
        ans.push([nums[i],nums[L],nums[R]]);
        while (L<R && nums[L] == nums[L+1]) L++; // 去重
        while (L<R && nums[R] == nums[R-1]) R--; // 去重
        L++;
        R--;
      }
      else if (sum < 0) L++;
      else if (sum > 0) R--;
    }
  }        
  return ans;
};
