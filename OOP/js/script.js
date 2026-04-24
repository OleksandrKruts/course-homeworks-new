"use strict";

class Person {
  constructor(firstName, lastName, age, birthDayDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthDayDate = new Date(birthDayDate);
  }

  celebrate() {
    return "Happy Birthday, let`s celebrate";
  }
}

class Employee extends Person {
  #salary;

  constructor(firstName, lastName, age, birthDayDate, jobPosition, salary) {
    super(firstName, lastName, age, birthDayDate);
    this.jobPosition = jobPosition;
    this.#salary = salary;
  }

  getYearSalary() {
    return this.#salary * 12;
  }

  celebrate() {
    const now = new Date();
    const currentYear = now.getFullYear();

    const birthdayThisYear = new Date(this.birthDayDate);
    birthdayThisYear.setFullYear(currentYear);

    const day = birthdayThisYear.getDay();

    if (day === 6 || day === 0) {
      return "Happy Birthday, let`s celebrate";
    } else {
      return "Happy Birthday, but I need to work";
    }
  }
}

const firstPerson = new Person("Alex", "Smith", 22, "2003-08-04");
console.log(firstPerson.celebrate());

const firstEmployee = new Employee(
  "Bob",
  "Slow",
  35,
  "2000-05-15",
  "programmer",
  2000,
);

console.log(firstEmployee.celebrate());
console.log(firstEmployee.getYearSalary());
