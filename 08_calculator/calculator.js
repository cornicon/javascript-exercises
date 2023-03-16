const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

// return sum of an array
const sum = function(arrayNumbers) {
  let sum = 0;
	for(let number of arrayNumbers)
  {
    sum += number;
  }
  return sum;
};

const multiply = function(arrayNumbers) {
  let result = 1;
  for(let number of arrayNumbers)
  {
    result *= number; 
  }
  return result;
};

const power = function(base, exponent) {
	let result = 1;
  for (let i = 0; i < exponent; i++)
  {
    result *= base;
  }
  return result;
};

const factorial = function(number) {
	let result = 1;
  for(number; number > 1; i--)
  {
    result *= number;
  }
  return result;
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
