/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let res = new Array(temperatures.length).fill(0)
  let stack = []
  stack.push(0)
  for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] > temperatures[stack[stack.length-1]]) {
      while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]) {
        res[stack[stack.length-1]] = i - stack[stack.length-1]
        stack.pop()
      }
      stack.push(i)
    } else {
      stack.push(i)
    }
  }

  return res
};