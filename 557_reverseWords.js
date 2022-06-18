/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let a = s.split(" ")
  for (let i in a) {
    a[i] = reverse(a[i])
  }
  return a.join(" ")
};

function reverse(str) {
  let arr = str.split("")
  let l = 0, r = arr.length
  while (r > l) {
    [arr[l] ,arr[r]] = [arr[r], arr[l]]
    r--
    l++
  }

  return arr.join("")
}