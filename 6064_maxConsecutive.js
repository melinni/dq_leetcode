// 简单模拟，先将 special 从小到大排序，然后依次遍历找到最大的间隔就行。
// 我将 bottom 理解为下一个连续楼层的开始，出现一个 special[i]，就用它减去 bottom 算出间隔，之后 bottom = special[i] + 1。

/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function(bottom, top, special) {
  let res = 0, tmp = bottom
  special = special.sort((a, b) => a - b)
  for (let i = 0; i < special.length; i++) {
      res = Math.max(res, special[i] - tmp)
      tmp = special[i] + 1
  }

  if (top > special[special.length - 1]) {
      res = Math.max(res, top - special[special.length - 1])
  }

  return res
};