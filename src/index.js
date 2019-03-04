module.exports = function getZerosCount(number, base) {

  let divisor = [];
  let pow = [];
  let count = 0;
  let index = 0;
  for(let i = 2; i<=base; i++) {
    while(base > 1 && base >=i && base%i === 0) {
      base /= i;
      count++;
      divisor[index] = i;
      pow[index] = count;
      if(base > 1 && base >=i && base%i != 0) {
        index++;
        count = 0;
      }
    }
  }

 let total = [];
 let sum = 0;
 let j = 1;

 for(let i = 0; i < divisor.length; i++) {
   while(number >= Math.pow(divisor[i], j)) {
    sum += Math.floor(number / Math.pow(divisor[i], j));
    j++;
   }
   total[i] = Math.floor(sum / pow[i]);
   sum = 0; 
   j = 1;
 }

  let min = total[0]; 
  for(let i = 0; i < total.length; i++) {
    if(total[i] < min) {
      min = total[i];
    }
  }

  return min;

}