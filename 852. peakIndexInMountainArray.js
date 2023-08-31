/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  let left = 0, right = arr.length - 2
  while (right >= left) {
    let mid = Math.floor(left + (right - left) / 2)
    if (arr[mid] > arr[mid + 1]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left
};