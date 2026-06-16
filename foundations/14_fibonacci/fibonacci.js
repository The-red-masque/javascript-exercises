const fibonacci = function(sequencePlace) {
  const number = parseInt(sequencePlace);
  const isPositive = (number > -1);

  if (isPositive) {
    let number1 = 0;
    let number2 = 1;
    let sum;

    // const isZero = (number === 0);
    // const isOne = (number === 1);
    // let i = 2;


    if (number === 0) {return number1;}
    else if (number === 1) {return number2;}
    else {
      for (let i = 2; i<= number; i++) {
        sum = number1 + number2;
        number1 = number2;
        number2 = sum;
      }
      return number2;
    }
  } else {return "OOPS";}
}
/*if (isPositive) {
    if (fibonacciNumber == 0) {let number = 0;return number;}
    else if (fibonacciNumber == 1) {let number =1;return number;}
    // if(fibonacciNumber == )
  else if (fibonacciNumber == 4) {
    let number = 3;
    return number;
  } else if (fibonacciNumber == 6) {
  let number = 8;
  return number;
} else if (fibonacciNumber == 10) {let number = 55;return number;}
else if (fibonacciNumber == 15) {let number = 610;return number;}
else if (fibonacciNumber == 25) {let number = 75025;return number;}
else {}} else {number = "OOPS";return number;};}*/


// Do not edit below this line
module.exports = fibonacci;
