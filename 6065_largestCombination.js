// 根据按位与的特性，两个数做与运算，只有当它们存在共同的二进制位都是 1 时，结果才不是 0。
// 要找最多有多少个数做与运算结果不为零，可以转换成最多有多少个数它们有共同的二进制位都是 1。遍历数组统计一下，返回最大结果即可。

/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
  let res = 0
  for (let i = 0; i < 32; i++) {
      let count = 0
      for (let item of candidates) {
          if (item & 1 << i) {
              count++
          }
      }

      res = Math.max(res, count)
  }

  return res
};
