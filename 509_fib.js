/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  let res = [0, 1]
  if (n === 0) return 0
  if (n === 1) return 1
  for (let i = 2; i <= n; i++) {
    res[i] = res[i-2] + res[i-1]
  }
  return res[n]
};