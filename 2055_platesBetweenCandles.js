/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function(s, queries) {
  let arr = new Array(s.length).fill(0)
  let a = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      a++
    }
    arr[i] = a
  }

  let left = new Array(s.length).fill(0)
  let l = -1
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "|") {
      l = i
    }
    left[i] = l
  }

  let right = new Array(s.length).fill(0)
  let r = -1
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "|") {
      r = i
    }
    right[i] = r
  }

  let res = []
  for (let query of queries) {
    let x = right[query[0]], y = left[query[1]]
    let num
    if (x === -1 || y === -1 || x >= y) {
      num = 0
    } else {
      num = arr[y] - arr[x]
    }
    res.push(num)
  }

  return res
};