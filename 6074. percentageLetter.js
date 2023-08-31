/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
  let len = s.length, count = 0;
  for (let i = 0; i < len; i++) {
    if (s[i] === letter) count++;
  }
  
  return Math.floor(count/len*100);
};