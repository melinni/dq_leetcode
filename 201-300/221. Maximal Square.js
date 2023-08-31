/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let res = 0
  let dp = new Array(matrix.length)

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(matrix[0].length).fill(0)
  }

  for (let i = 0; i < matrix.length; i++) {
    dp[i][0] = matrix[i][0]
    if (matrix[i][0] > res) res = matrix[i][0]
  }

  for (let j = 1; j < matrix[0].length; j++) {
    dp[0][j] = matrix[0][j]
    if (matrix[0][j] > res) res = matrix[0][j]
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === '1') {
        dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
        if (dp[i][j] > res) res = dp[i][j]
      } else {
        dp[i][j] = 0
      }
    }
  }

  return res * res
};