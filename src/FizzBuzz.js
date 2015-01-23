var FizzBuzz = function () {

};
module.exports = FizzBuzz;

FizzBuzz.generate = function (max) {
  var result = [];
  for (var i = 1; i <= max; i++) {
    result.push(FizzBuzz.fizzbuzz(i));
  }
  return result;
};

FizzBuzz.fizzbuzz = function (n) {
  if ((n % 3 === 0) && (n % 5 === 0)) {
    return 'FizzBuzz';
  } else if (n % 3 === 0) {
    return 'Fizz';
  } else if (n % 5 === 0) {
    return 'Buzz';
  } else {
    return n;
  }
};
