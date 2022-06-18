/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let num;
  let a = 1, b = 2;
  if (n === 1) {
    return 1
  } else if (n === 2) {
    return 2
  } else {
    for (let i = 3; i <= n; i++) {
      num = a + b;
      a = b;
      b = num;
    }
    return num
  }
};