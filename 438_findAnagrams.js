// 技巧一：滑动窗口

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
  if (s.length < p.length) return []
  let arr1 = new Array(26).fill(0), arr2 = new Array(26).fill(0), res = []
  for (let i = 0; i < p.length; i++) {
    arr1[s[i].charCodeAt()-'a'.charCodeAt()]++
    arr2[p[i].charCodeAt()-'a'.charCodeAt()]++
  }
  if (check(arr1, arr2)) res.push(0)
  for (let i = p.length; i < s.length; i++) {
    arr1[s[i-p.length].charCodeAt()-'a'.charCodeAt()]--
    arr1[s[i].charCodeAt()-'a'.charCodeAt()]++
    if (check(arr1, arr2)) res.push(i - p.length + 1)
  }

  return res
};

function check(arr1, arr2) {
  return arr1.toString() === arr2.toString()
}