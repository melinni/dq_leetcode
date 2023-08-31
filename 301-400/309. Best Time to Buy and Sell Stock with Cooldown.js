/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 1) return 0
  if (prices.length === 2) return prices[1] > prices[0] ? prices[1] - prices[0] : 0

  let dp = new Array(prices.length)
  for (let i = 0; i < prices.length; i++) {
    dp[i] = new Array(3).fill(0)
  }

  // dp[i][0]表示当天持有股票
  // dp[i][1]表示当天未持有股票，且第二天不可买
  // dp[i][2]表示当天未持有股票，且第二天可买
  dp[0][0] = -prices[0]
  dp[0][1] = 0
  dp[0][2] = 0

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][2] - prices[i])
    dp[i][1] = dp[i-1][0] + prices[i]
    dp[i][2] = Math.max(dp[i-1][1], dp[i-1][2])

  }

  return Math.max(dp[prices.length-1][1], dp[prices.length-1][2])
};