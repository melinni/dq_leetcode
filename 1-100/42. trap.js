/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let leftArr = [], rightArr = []
  let max = 0
  for (let i = 0; i < height.length; i++) {
    if (height[i] > max) {
      max = height[i]
    }
    leftArr[i] = max
  }
  console.log(leftArr)
  max = 0
  for (let i = height.length - 1; i >= 0; i--) {
    if (height[i] > max) {
      max = height[i]
    }
    rightArr[i] = max
  }
  console.log(rightArr)

  let res = 0
  for (let i = 0; i < height.length; i++) {
    let min = Math.min(leftArr[i], rightArr[i])
    res += min - height[i]
  }
  return res
};