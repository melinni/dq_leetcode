// Given a triangle array, return the minimum path sum from top to bottom.
// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.


/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let len = triangle.length
  let dp = new Array(len);

  for (let i = 0; i < len; i++) {
    dp[i] = new Array(triangle[i].length).fill(0)
  }

  for (let i in dp[len-1]) {
    dp[len-1][i] = triangle[len-1][i];
  }

  for (let i = len - 2; i >= 0; i--) {
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j]
    }
   }

  return dp[0][0];
};