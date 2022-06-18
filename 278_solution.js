/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let start = 1;
    let end = n;
     
    while(start < end) {
      let mid = start + ((end - start) >> 1)
      let flag = isBadVersion(mid)
      if (flag) {
        end = mid
      } else {
        start = mid + 1
      }
    }
    return end
  };
};
