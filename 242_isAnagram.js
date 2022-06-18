/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let map1 = new Map()
  for (let i of s) {
    if (map1.get(i)) {
      map1.set(i, map1.get(i) + 1)
    } else {
      map1.set(i, 1)
    }
  }

  for (let i of t) {
    if (map1.get(i)) {
      map1.set(i, map1.get(i) - 1)
    } else {
      return false
    }
  }



  for (let i of map1.keys()) {
    if (map1.get(i) !== 0) {
      return false
    }
  }

  return true
};