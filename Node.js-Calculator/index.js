"use strict";

//Create a calculator module in Node.js. Include this module in the main index.js file.

const calculator = require("./calculator/calculator.js");

calculator.set(10);
console.log(calculator.add(2)); // 12
console.log(calculator.sub(5)); // 7
console.log(calculator.mult(4)); // 28
console.log(calculator.div(2)); // 14
