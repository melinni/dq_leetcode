/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let i = 0, j = height.length - 1, res = 0;
  while(i < j) {
      let h = Math.min(height[i], height[j]);
      res = Math.max(res, h * (j - i));
      if (height[i] < height[j]) {
          i += 1;
      } else {
          j -= 1;
      }
  }
  return res;
};
