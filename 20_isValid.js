/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let arr = []
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  for (let i = 0; i < s.length; i++) {
    if (Object.keys(map).includes(s[i])) {
      arr.push(s[i])
    } else {
      if (map[arr[arr.length - 1]] === s[i]) {
        arr.pop()
      } else {
        return false
      }
    }
  }

  return arr.length === 0
};