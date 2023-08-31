/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let dp = new Array(s.length+1).fill(false)
  dp[0] = true
  let set = new Set()
  for (let word of wordDict) {
    set.add(word)
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.substr(j, i-j))) {
        dp[i] = true
        break
      }
    }
  }

  return dp[s.length]
};