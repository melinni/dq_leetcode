/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr = [];
  let str = "";
  for (let i of s) {
    if (i !== " ") {
      str += i;
      console.log(str);
    } else {
      if (str.length > 0) {
        arr.push(str);
      }
      str = "";
    }
  }
  if (str.length > 0) {
    arr.push(str);
  }

  arr = arr.reverse();
  return arr.join(" ");
};