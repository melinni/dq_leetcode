/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let arr = s.split('');
  const list = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let l = 0, r = arr.length - 1;

  while (r > l) {
    while (list.indexOf(arr[l]) < 0 && l < arr.length - 1) {
      l++;
    }
    while (list.indexOf(arr[r]) < 0 && r > 0) {
      r--;
    }
    if (r > l) {
      [arr[l] , arr[r]] = [arr[r], arr[l]];
      r--;
      l++;
    }
  }

  return arr.join('');
};