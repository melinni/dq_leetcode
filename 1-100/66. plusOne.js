/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let len = digits.length
  let curry = 1
  for (let i = len - 1; i >= 0; i--) {
    let num = digits[i] + curry
    if (num === 10) {
      digits[i] = 0
      curry = 1
    } else {
      digits[i] = num
      return digits
    }
    if (i === 0 && num === 10) {
      digits.unshift(1)
    }
  }
  return digits
};