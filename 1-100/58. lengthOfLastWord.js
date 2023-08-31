/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (s.length === 1) return !!s
  let right = 0, find = false
  for (let i = s.length-1; i >= 0; i--) {
    if (s[i] !== ' ' && !find) {
      right = i
      find = true
    }
    if (find && s[i] === ' ') {
      return right-i
    }
  }

  return right+1
};