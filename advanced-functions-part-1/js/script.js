"use strict";

//1. Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//Для решения задачи необходим использовать рекурсию.

// function sumTo(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n + sumTo(n - 1);
//   }
// }
// console.log(sumTo(4)); // 10
// console.log(sumTo(3)); // 6
// console.log(sumTo(1)); // 1

//2. Написать функцию findShort , которая будет находит самое короткое слово в предложении.
// В случае если длина двух слов совпадает - вернуть первое найденое короткое слово.

function findShort(message) {
  let str = message.split(" ");

  let currentstr = str[0];

  for (let i = 0; i < str.length; i++) {
    if (str[i].length < currentstr.length) {
      currentstr = str[i];
    }
  }
  return currentstr;
}

const sentance = "Lorem ipsum dolor sit amet";

console.log(findShort(sentance)); // sit
console.log(findShort("Hello world")); // Hello
console.log(findShort("Hi")); // Hi
console.log(findShort("She is David's sister")); // is
console.log(findShort("sshe she She")); // she
