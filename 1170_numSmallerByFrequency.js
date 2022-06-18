/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
  let arr = []
  for (let query of queries) {
    arr.push(getS(query))
  }

  let arr1 = []
  for (let word of words) {
    arr1.push(getS(word))
  }
  let res = []
  for (let i of arr) {
    let count = 0
    for (let j of arr1) {
      if (j > i) count++
    }
    res.push(count)
  }

  return res
};

function getS(word) {
  let tmp = "", count = 0
  for (let w of word) {
    if (!tmp || w < tmp) {
      tmp = w
      count = 0
    } else if (tmp === w) {
      count++
    }
  }
  return count
}