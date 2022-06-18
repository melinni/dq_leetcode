/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 1) {
    return 0
  } else {
    let profit = 0, maxProfit = 0, min = prices[0]
    for (let i = 1; i < prices.length; i++) {
      profit = Math.max(prices[i] - min, profit)
      maxProfit = Math.max(maxProfit, profit)
      min = min > prices[i] ? prices[i] : min
    }
    return maxProfit
  }
};