// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

/**
 * @param {number[]} height
 * @return {number}
 */

// 技巧一 对撞指针
// 时间复杂度O(n)，n是数组height的长度，遍历一次
// 空间复杂度O(1)
var maxArea = function(height) {
  let max = 0;
  for (let i = 0, j = height.length - 1; i < j;) {//双指针i，j循环height数组
    //i，j较小的那个先向内移动 如果高的指针先移动，那肯定不如当前的面积大
    const minHeight = height[i] < height[j] ? height[i++] : height[j--];
    const area = (j - i + 1) * minHeight;//计算面积
    max = Math.max(max, area);//更新最大面积
  }
  return max;
};
