/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let minus = false
  if (x < 0) minus = true

  x = Math.abs(x)

  let str = ''
  while (x > 0) {
    let a = x % 10
    str = str + a
    x = parseInt(x / 10)
  }

  if(Number(str)>2**31-1){
    return 0;
  }

  if (minus) str = '-' + str
  return Number(str)  
};

console.log(reverse(123))