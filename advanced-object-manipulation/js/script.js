"use strict";

//1. Create a Date object for your date of birth (for example, February 20, 1995).
// Using the date methods (getMonth, getFullYear, etc.), construct a string in the following format: “20.02.1995”.

// let myBirthday = new Date(2003, 8, 4);

// let day = myBirthday.getDate();
// let month = myBirthday.getMonth() + 1;
// let year = myBirthday.getFullYear();

// if (day < 10) {
//   day = "0" + day;
// }

// if (month < 10) {
//   month = "0" + month;
// }

// let result = `${day}.${month}.${year}`;

// console.log(result);

//2. Write a function called `getDiffDays` that takes two dates (start date and end date)
// and returns the number of days that have passed between those dates.
// If the user enters an invalid date, log an error to the console and stop the function
// If the user enters a start date that is later than the end date, log an error stating that the start date is later than the end date

function getDiffDays(dateStart, dateEnd) {
  let start = new Date(dateStart);
  let end = new Date(dateEnd);
  const dayInMs = 86400000;

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    console.error("invalid date");
    return;
  } else if (start > end) {
    console.error("your start date is later than end");
    return;
  }

  let diffEndOfStart = (end - start) / dayInMs;
  return diffEndOfStart;
}

console.log(getDiffDays("2020-01-01", "2020-01-17")); // 16
console.log(getDiffDays("2020-01-01", "2020-03-15")); // 74
console.log(getDiffDays("2222222222", "2020-03-15")); // Error: invalid date
console.log(getDiffDays("2021-01-02", "2020-03-15")); // Error: your start date is later than end
