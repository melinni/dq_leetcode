/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
  let o = {}
  s.split('').forEach(i => {
    o[i] = (o[i] || 0) + 1
  })
  return Object.entries(o)
    .sort((a, b) => b[1] - a[1])
    .reduce((s,i) => s + i[0].repeat(i[1]), '')
};
