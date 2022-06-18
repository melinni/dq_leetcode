/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
  let arr = nums.sort((a, b) => {
    return a-b
  });
  let add = 0, count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      add += 1
    }
    count += add
  }

  return count
};