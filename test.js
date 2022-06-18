/**
 * @param {string[]} words
 * @return {string[]}
 */
 var removeAnagrams = function(words) {
  let arr = []
  let tmpLen = words.length
  while (tmpLen !== words.length) {
      tmpLen = words.length
      for (let i = 1; i < words.length; i++) {
          if (compare1(words[i], words[i-1])) {
              words.splice(i, 1)
          }
      }
  }
  
  return words
};

function compare1(a, b) {
  console.log(a, b)
  if (a.length !== b.length) return false
  return [...a].sort().join() === [...b].sort().join()
}

console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]))