/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  let minLen = Infinity, minStr;
  for (let str of strs) {
    if (str.length < minLen) {
      minLen = str.length;
      minStr = str;
    }
  }
  if (minStr.length === 0) return "";
  for (let i = 1; i <= minStr.length; i++) {
    let tmpStr = minStr.substr(0, i);
    for (let str of strs) {
      if (str.indexOf(tmpStr) !== 0) return tmpStr.substr(0, tmpStr.length-1)
    }
  }
  return minStr;
};

let strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs))