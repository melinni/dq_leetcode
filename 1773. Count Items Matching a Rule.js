/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
  let res = 0
  for (let item of items) {
    if (ruleKey === 'type') {
      if (item[0] === ruleValue) res++
    } else if (ruleKey === 'color') {
      if (item[1] === ruleValue) res++
    } else if (ruleKey === 'name') {
      if (item[2] === ruleValue) res++
    }
  }

  return res
};