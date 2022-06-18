/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false
  let xx = x
  let str = 0
  let a
  while (x > 0) {
    a = x % 10
    str = str * 10 + a
    x = (x - a) / 10
  }
  return xx === str
};