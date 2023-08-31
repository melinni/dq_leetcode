/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const len = nums.length;
  if(len < 3) return [];
  nums.sort((a, b) => a - b);
  let x = Infinity;
  let res = 0;
  for(let i = 0; i < len - 2; i++) {
    // a去重
    if(i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1, r = len - 1;
    while(l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      const minus = sum - target;
      const minusAbs = Math.abs(minus);
      if(minus < 0) {
        l++;
        if (minusAbs < x) {
          x = minusAbs;
          res = sum;
        }
        continue
      };
      if(minus > 0) {
        r--;
        if (minusAbs < x) {
          x = minusAbs;
          res = sum;
        }
        continue
      };
      if (minus === 0) return sum;
      // b c 去重 （亮眼操作）
      while(l < r && nums[l] === nums[++l]);
      while(l < r && nums[r] === nums[--r]);
    }
  }
  return res;
};

console.log(threeSumClosest([1,1,1,1], 0))