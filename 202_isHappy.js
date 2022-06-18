/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let map = new Map()
  let num = n
  while (1) {
    let res = calc(num)
    if (map.get(res)) {
      return false
    } else {
      map.set(res, 1)
    }
    num = res

    if (res === 1) return true
  }
};

function calc(num) {
  let sum = 0
  let p = 0
  while (num > 0) {
    p = num % 10
    sum += p * p
    num = Math.floor(num / 10)
  }
  return sum
}