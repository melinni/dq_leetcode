/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  let res = 0;
  for (let num of nums) {
    res = res ^ num // 异或，相同等于0，不相同为原数字
  }
  return res
};