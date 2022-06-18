/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
  let map = new Map()
  for (let i of s) {
    if (!map.get(i)) {
      map.set(i, 1)
    } else {
      map.set(i, map.get(i) + 1)
    }
  }
  
  let count = 0;
  while (true) {
    for (let t of target) {
      if (!map.get(t) || map.get(t) === 0) {
        return count;
      } else {
        map.set(t, map.get(t) - 1);
      }
    }
    count++
  }
};
