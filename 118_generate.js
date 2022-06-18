/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = []
  res[0] = [1]
  for (let i = 1; i < numRows; i++) {
    let arr = new Array(i+1).fill(1)
    for (let j = 1; j < res[i-1].length; j++) {
      arr[j] = res[i-1][j-1] + res[i-1][j]
    }
    res.push(arr)
  }

  return res
};