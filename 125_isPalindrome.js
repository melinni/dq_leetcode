/**
 * @param {string} s
 * @return {boolean}
 */

// 技巧一 用charCodeAt判断，不太优雅
var isPalindrome = function(s) {
  let ss = s.toLowerCase()
  let arr = ss.split("")
  arr = arr.filter(item => {
    return item.charCodeAt()-'a'.charCodeAt() >= 0 &&
    item.charCodeAt()-'a'.charCodeAt() < 26 || 
    item.charCodeAt()-'0'.charCodeAt() >= 0 &&
    item.charCodeAt()-'0'.charCodeAt() <= 9
  })

  let str = arr.join("")

  let left = 0, right = str.length-1
  while (right > left) {
    if (str[right--] !== str[left++]) return false
  }
  return true
};

// 技巧二 用正则优雅！！！
var isPalindrome = function(s) {
  const str = s.replace(/[^A-Za-z0-9]/g, '').toLocaleLowerCase()

  let left = 0, right = str.length-1
  while (right > left) {
    if (str[right--] !== str[left++]) return false
  }
  return true
};
