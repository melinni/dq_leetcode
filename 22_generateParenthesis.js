/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = []
  gen('', n, n, res)
  return res
};

function gen(str, left, right, res) {
  if (left === 0 && right === 0) {
    res.push(str)
    return
  }
  if (right > left) {
    if (left > 0) gen(str+'(', left-1, right,res)
    
    gen(str+')', left, right-1, res)
  } else {
    gen(str+'(', left-1, right, res)
  }
}