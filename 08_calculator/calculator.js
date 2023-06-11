const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(arrayOfNumbers) {
	let totalSum = 0;
  for (const iterator of arrayOfNumbers) {
    totalSum += iterator;
  }
  return totalSum;
};

const multiply = function(arrayOfNumbers) {
  let total;
  for (const number of arrayOfNumbers) {
    if (arrayOfNumbers[0] === number) {
      total = number;
    } else {
      total *= number;
    }
  }
  return total;
};

const power = function(number1, number2) {
	return number1 ** number2;
};

const factorial = function(number) {
  if (number == 0) return 1;
  
	return number * factorial(number-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
