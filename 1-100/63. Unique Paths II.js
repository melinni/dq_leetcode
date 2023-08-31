// You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down or right at any point in time.
// An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.
// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
// The testcases are generated so that the answer will be less than or equal to 2 * 109.

// 思路：和62题一样，区别就是遇到障碍直接返回0
// 时间复杂度O(mn)
// 空间复杂度O(mn)，状态压缩之后是o(n)


/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  let dp = new Array(m).fill().map(item => new Array(n))

  let start = 1
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      start = 0
    }
    dp[i][0] = start
  }
  start = 1
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === 1) {
      start = 0
    }
    dp[0][i] = start
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
      } else {
        dp[i][j] = dp[i-1][j] + dp[i][j-1]
      }
    }
  }

  return dp[m-1][n-1]
};