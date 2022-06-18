/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i+1] && nums[i] === nums[i+1]) {
          nums.splice(i+1, 1);
          i -= 1;
      }
  }
  return nums.length;
};

let a = [1,2,3,3,4,4,4,5]
console.log(removeDuplicates(a), a)