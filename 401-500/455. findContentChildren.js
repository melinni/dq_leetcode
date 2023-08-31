/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)
  index = 0
  res = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= g[index] && index < g.length) {
      res++
      index++
    }
  }

  return res
};