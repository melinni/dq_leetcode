/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let len1 = s1.length, len2 = s2.length
  let arr1 = new Array(26).fill(0), arr2 = new Array(26).fill(0)
  for (let i = 0; i < s1.length; i++) {
    arr1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++
  }
  for (let i = 0; i < len2; i++) {
    arr2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++
    
    if (i >= len1) {
      arr2[s2.charCodeAt(i-len1) - 'a'.charCodeAt(0)]--
    }

    if (isSame(arr1, arr2)) return true
  }
  return false
};

function isSame(arr1, arr2) {
  return arr1.toString() === arr2.toString()
}