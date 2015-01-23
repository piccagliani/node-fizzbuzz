var assert = require("assert");
var FizzBuzz = require(__dirname + "/../src/FizzBuzz.js");

suite('FizzBuzz', function () {
  setup(function () {
  });

  suite('#fizzbuzz()', function () {
    test('3の倍数を与えるとFizzを返す', function () {
      assert.equal('Fizz', FizzBuzz.fizzbuzz(3));
      assert.equal('Fizz', FizzBuzz.fizzbuzz(6));
      assert.equal('Fizz', FizzBuzz.fizzbuzz(9));
    });
    test('5の倍数を与えるとBuzzを返す', function () {
      assert.equal('Buzz', FizzBuzz.fizzbuzz(5));
      assert.equal('Buzz', FizzBuzz.fizzbuzz(10));
      assert.equal('Buzz', FizzBuzz.fizzbuzz(20));
    });
    test('15の倍数を与えるとBuzzを返す', function () {
      assert.equal('FizzBuzz', FizzBuzz.fizzbuzz(15));
      assert.equal('FizzBuzz', FizzBuzz.fizzbuzz(30));
      assert.equal('FizzBuzz', FizzBuzz.fizzbuzz(45));
    });
    test('3の倍数でも5の倍数でもない数を与えるとその数を返す', function () {
      assert.equal(1, FizzBuzz.fizzbuzz(1));
      assert.equal(4, FizzBuzz.fizzbuzz(4));
      assert.equal(8, FizzBuzz.fizzbuzz(8));
    });
  });
});
