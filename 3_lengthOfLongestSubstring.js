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