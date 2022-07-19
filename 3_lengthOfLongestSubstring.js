/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//   let res = 0, minIndex = 0
//   for (let i = 0; i < s.length; i++) {
//     if (s.indexOf(s[i], minIndex) < i) minIndex = s.indexOf(s[i], minIndex) + 1
//     else res = Math.max(res, i - minIndex + 1)
//   }
//   return res
// };

var lengthOfLongestSubstring = function(s) {
  let res = 0, curIndex = 0;
  for (let i  = 0; i < s.length; i++) {
    if (s.indexOf(s[i], curIndex) < i) {
      curIndex = s.indexOf(s[i], curIndex) + 1
    } else {
      res = Math.max(res, i - curIndex + 1)
    }
  }
}

var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0
  if (s.length === 1) return 1
  let fast = 0, str = [], res = 0
  while (fast < s.length) {
    if (str.indexOf(s[fast]) >= 0) {
      res = Math.max(res, str.length)
      let index = str.indexOf(s[fast])
      while (index >= 0) {
        str.shift()
        index--
      }
      str.push(s[fast])
    } else {
      str.push(s[fast])
    }
    fast++
  }
  res = Math.max(res, str.length)
  return res
};

var lengthOfLongestSubstring = function(s) {
  let set = new Set()
  let i = 0, maxLength = 0, j = 0
  for (i; i < s.length; i++) {
    if (set.has(s[i])) {
      while (set.has(s[i])) {
        set.delete(s[j++])
      }
      set.add(s[i])
    } else {
      set.add(s[i])
      maxLength = Math.max(maxLength, set.size)
    }
  }

  return maxLength
};