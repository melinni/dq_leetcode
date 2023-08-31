/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function(sentence, discount) {
  let arr = sentence.split(' ');
  for (let i in arr) {
    if (isPrice(arr[i])) {
      arr[i] = doDiscount(arr[i], discount)
    }
  }
  
  return arr.join(' ');
};

function isPrice(str) {
  return str[0] === "$" && Number(str.substr(1, str.length-1) >= 0) && str.length > 1
}  
  
function doDiscount(price, discount) {
  if (discount === 100) return "$0.00";
  else {
    let p = price.substr(1, price.length - 1);
    return "$" + (Number(p) / 100 * (100 - discount)).toFixed(2);
  }
}