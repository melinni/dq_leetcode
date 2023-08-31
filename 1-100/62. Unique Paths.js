// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// 思路:由于在每个位置只能向下或者向右， 所以每个坐标的路径和等于上一行相同位置和上一列相同位置不同路径的总和，状态转移方程：f[i][j] = f[i - 1][j] + f[i][j - 1];
// 时间复杂度O(mn)
// 空间复杂度O(mn)，优化后O(n)

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let dp = new Array(m).fill().map(item => new Array(n))
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
  }
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i][j-1] + dp[i-1][j]
    }
  }

  return dp[m-1][n-1]
};