const fibonacci = function(sequencePlace) {
  const number = parseInt(sequencePlace);
  const isPositive = (number > -1);

  if (isPositive) {
    let number1 = 0;
    let number2 = 1;
    let sum;

    const isZero = (number === 0);
    const isOne = (number === 1);

    if (isZero) {return number1;}
    else if (isOne) {return number2;}
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


// Do not edit below this line
module.exports = fibonacci;
