"use strict";

//1. Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//Для решения задачи необходим использовать рекурсию.

function sumTo(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }
}
console.log(sumTo(4)); // 10
console.log(sumTo(3)); // 6
console.log(sumTo(1)); // 1
