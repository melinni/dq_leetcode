/**
 * @param {string[]} words
 * @return {string[]}
 */
 var removeAnagrams = function(words) {
  let tmpLen = 0
  while (tmpLen !== words.length) {
      tmpLen = words.length
      for (let i = 1; i < words.length; i++) {
          if (compare(words[i], words[i-1])) {
              words.splice(i, 1)
          }
      }
  }
  
  return words
};

function compare(a, b) {
  if (a.length !== b.length) return false
  return [...a].sort().join() === [...b].sort().join()
}
