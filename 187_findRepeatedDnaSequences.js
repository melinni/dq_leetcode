/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  let map = new Map(), len = s.length, res = []
  for (let i = 0; i < len - 9; i++) {
    if (map.get(s.substr(i, 10))) {
      res.push(s.substr(i, 10))
    } else {
      map.set(s.substr(i, 10), 1)
    }
  }
  
  return [...new Set(res)];
};