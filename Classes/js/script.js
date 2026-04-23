"use strict";

class Employee {
  static vacationDays = 18;

  constructor(firstName, lastName, age, jobPosition, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.jobPosition = jobPosition;
    this.salary = salary;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  salaryOfYear() {
    return `${"salaryOfYear:"} ${this.salary * 12}`;
  }
}

const firstEmployee = new Employee("Alex", "Smith", 20, "programmer", 2000);
const secondEmployee = new Employee("Bob", "Slow", 35, "team-lead", 5000);

firstEmployee.fullName;
secondEmployee.fullName;

firstEmployee.salaryOfYear();
secondEmployee.salaryOfYear();

console.log(firstEmployee);
console.log(secondEmployee);
