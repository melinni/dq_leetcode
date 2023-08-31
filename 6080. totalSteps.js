/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function(nums) {
  return loop(nums, 0);
};

function loop(nums, count) {
  let needLoop = false, flag = 0;
  let arr = [];
  arr[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (BigInt(nums[i]) >= BigInt(nums[i-1])) {
      arr.push(nums[i]);
    } else {
      flag = 1;
    }
  }
  
  for (let i = 1; i < arr.length; i++) {
    if (BigInt(arr[i]) < BigInt(arr[i-1])) {
      needLoop = true;
    }
  }
  
  if (needLoop) return loop(arr, count+1);
  else {
    return count + flag;
  }
}