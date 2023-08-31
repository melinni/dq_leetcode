/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if (num === 0) return "0";
  let n;
  if (num < 0) {
    n = Math.abs(num)
  } else {
    n = num
  }
  let arr = []

  while (n) {
    arr.push(n % 7)
    n = Math.floor(n / 7)
  }

  let res = arr.reverse().join('')

  if (num < 0) {
    res = '-' + res
  }

  return res
};