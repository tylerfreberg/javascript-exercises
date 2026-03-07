const add = function(x, y) {
  return(x+y);
};

const subtract = function(x, y) {
  return(x-y)
};

const sum = function(arr) {
	return(arr.reduce((total, val) => total + val, 0));
};

const multiply = function(arr) {
  return(arr.reduce((total, val) => total * val, 1));
};

const power = function(x, y) {
	return(x**y);
};

const factorial = function(num) {
  let factorial = 1;
	for(i = 1; i <= num; i++) {
    factorial *= i;
  }

  return(factorial);
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
