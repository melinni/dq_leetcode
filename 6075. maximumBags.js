/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
  let res = 0;
  let arr = [], map = new Map(), addRock = additionalRocks;
  for (let i = 0; i < capacity.length; i++) {
    if (capacity[i]-rocks[i]=== 0) {
      res += 1;
    } else {
      arr.push(capacity[i]-rocks[i])
    }
  }
  arr.sort((a,b)=>a-b);
  for (let i = 0; i < arr.length; i++) {
    if (addRock - arr[i] >= 0) {
      addRock = addRock - arr[i];
      res += 1
    } else {
      return res;
    }
  }
  
  return res;
};