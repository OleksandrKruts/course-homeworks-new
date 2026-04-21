"use strict";

//1. This function must accept an unlimited number of arguments and return the sum of the two smallest numbers in the given array.
// If fewer than two arguments are passed, an error must be logged to the console, and the function must not continue execution.

// function sumTwoSmallestNumbers(...array) {
//   if (array.length < 2) {
//     console.error("you need more than arguments");
//     return;
//   }
//   const sortedArray = array.sort((a, b) => a - b);
//   return sortedArray[0] + sortedArray[1];
// }

// console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
// console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
// console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")
// console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3

//2.  Write a function called `createCalculator`. You must use closure to implement it.

function createCalculator(value) {
  let defaultValue = value;

  return {
    sum: (result) => (defaultValue += result),
    mult: (result) => (defaultValue *= result),
    sub: (result) => (defaultValue -= result),
    div: (result) => (defaultValue /= result),
  };
}

const calc = createCalculator(10);
console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
