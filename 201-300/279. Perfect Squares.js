// Given an integer n, return the least number of perfect square numbers that sum to n.
// A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let dp = []
  for (let i = 0; i < n; i++) {
    dp[i] = i
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; i - j * j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
    }
  }

  return dp[n]
};