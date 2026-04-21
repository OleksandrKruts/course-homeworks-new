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

function createCalculator(number) {
  return {
    sum: (n) => number + n,
    mult: (n) => number * n,
    sub: (n) => number - n,
    div: (n) => number / n,
  };
}

const calc = createCalculator(50);

console.log(calc.sum(5)); /// 55
console.log(calc.mult(2)); // 100
console.log(calc.sub(40)); // 10
console.log(calc.div(10)); // 5
