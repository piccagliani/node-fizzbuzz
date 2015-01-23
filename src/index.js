var FizzBuzz = require(__dirname + "/FizzBuzz.js");

var result = FizzBuzz.generate(100);
result.forEach(function(r) {
  console.log(r);
});
