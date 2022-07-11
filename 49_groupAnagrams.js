// 技巧一：map

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map()
  for (let str of strs) {
    let strstr = str.split('').sort().toString()
    if (map.get(strstr)) {
      let list = map.get(strstr)
      list.push(str)
      map.set(strstr, list)
    } else {
      let arr = new Array()
      arr.push(str)
      map.set(strstr, arr)
    }
  }
  return Array.from(map.values())
};
