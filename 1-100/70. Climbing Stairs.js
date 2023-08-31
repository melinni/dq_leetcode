// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// 思路：因为每次可以爬 1 或 2 个台阶，所以到第n阶台阶可以从第n-2或n-1上来，其实就是斐波那契的dp方程
// 时间复杂度O(n)
// 空间复杂度O(1)

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let num;
  let a = 1, b = 2;
  if (n === 1) {
    return 1
  } else if (n === 2) {
    return 2
  } else {
    for (let i = 3; i <= n; i++) {
      num = a + b;
      a = b;
      b = num;
    }
    return num
  }
};