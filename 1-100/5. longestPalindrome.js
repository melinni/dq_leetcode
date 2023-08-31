/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length === 1) return s
  
  let res = ""

  for (let i = 0; i < s.length; i++) {
    let res1 = resolve(s, i, i+1)
    let res2 = resolve(s, i, i)
    let max = res1.length > res2.length ? res1 : res2
    res = max.length > res.length ? max : res    
  }

  return res
};

function resolve(s, i, j) {
  let res = ""
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    res = s.substr(i ,j-i+1)
    i--
    j++
  }
  return res
}