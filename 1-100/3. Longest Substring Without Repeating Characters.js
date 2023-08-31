/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
  const set = new Set(); //判断滑动窗口内是否有重复元素
  let i = 0 // 滑动窗口右边界
  let j = 0 // 滑动窗口左边界
  let maxLength = 0;
  if (s.length === 0) {//极端情况
    return 0;
  }
  for (i; i < s.length; i++) {
    if (!set.has(s[i])) {
      //当前元素不在set中 就加入set 然后更新最大长度，i++继续下一轮循环
      set.add(s[i]);
      maxLength = Math.max(maxLength, set.size);
    } else {
      //set中有重复元素不断让j++ 并删除窗口之外的元素 直到滑动窗口内没有重复的元素
      while (set.has(s[i])) {
        set.delete(s[j]);
        j++;
      }
      set.add(s[i]);//放心将s[i]加入set中
    }
  }
  return maxLength;
};