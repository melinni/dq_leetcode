// 技巧一：滑动窗口

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let need = {};//需要的字符
  let win = {};//窗口中的字符
  for (let a of p) {//统计异位词的数量
    need[a] = (need[a] || 0) + 1;
  }
  //左右指针
  let left = 0, right = 0;
  let val = 0;//窗口中和need中字符数量一致的字符种类
  let res = [];
  while (right < s.length) {
    let c = s[right];
    right++;//右边的字符进入窗口
    if (need[c]) {
      win[c] = (win[c] || 0) + 1;//当前字符在need中，更新窗口中的字符数量
      if (win[c] == need[c]) {
        val++;//该字符在窗口中和need中的字符匹配时，字符种类+1
      }
    }
    while (right - left >= p.length) {//不断出窗口
      if (val == Object.keys(need).length) {//如果此时窗口中的子串和p是异位词则将左边界加入res中
        res.push(left);
      }
      let d = s[left];
      left++;//出窗口
      if (need[d]) {//如果该字符在need中 更新窗口中的字符数量 和字符种类
        if (win[d] == need[d]) {
          val--;
        }
        win[d]--;
      }
    }
  }
  return res;
 };