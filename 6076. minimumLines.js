/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
var minimumLines = function(stockPrices) {
  if (stockPrices.length === 1) return 0;
  if (stockPrices.length === 2) return 1;
  let arr = stockPrices.sort((a,b)=>a[0]-b[0]), res = 1;
  let line1, line2;
  for (let i = 1; i < arr.length-1; i++) {
    line1 = BigInt(arr[i][1] - arr[i-1][1]) * BigInt(arr[i+1][0] - arr[i][0]);
    line2 = BigInt(arr[i+1][1] - arr[i][1]) * BigInt(arr[i][0] - arr[i-1][0]);
    if (line1 !== line2) res++;
  }
  
  return res;
};