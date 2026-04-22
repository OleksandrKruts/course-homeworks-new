"use strict";

//1. Create a Date object for your date of birth (for example, February 20, 1995).
// Using the date methods (getMonth, getFullYear, etc.), construct a string in the following format: “20.02.1995”.

let myBirthday = new Date(2003, 8, 4);

let day = myBirthday.getDate();
let month = myBirthday.getMonth() + 1;
let year = myBirthday.getFullYear();

if (day < 10) {
  day = "0" + day;
}

if (month < 10) {
  month = "0" + month;
}

let result = `${day}.${month}.${year}`;

console.log(result);
