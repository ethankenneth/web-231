/**
 * Title: Assignment 1.5
 * Author: Ethan Kenneth Winter
 * Date: 25 October 2020
 * Description: Create three employees with firstName, lastName, address, payRate, and hireDate. Use .toFixed(2) for payRate, and .toLocaleDateString() for hireDate.
 */


function Employee(firstName, lastName, address, payRate, hireDate) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.address = address;
 this.payRate = payRate; //.toFixed(2)
 this.hireDate = new Date (); //.toLocaleDateString()
}

let Ethan = new Employee(
 "Ethan Kenneth",
 "Winter",
 "1253 Simon Blvd",
 45
);

console.log(Ethan.firstName + " " + Ethan.lastName + " lives at " + Ethan.address + ", makes $" + Ethan.payRate.toFixed(2) + " per hour. And was originally hired on " + Ethan.hireDate.toLocaleDateString());

let Penelope = new Employee(
 "Penelope",
 "Pittstop",
 "5 Compact Pussycat Dr",
 55
);

console.log(Penelope.firstName + " " + Penelope.lastName + " lives at " + Penelope.address + ", makes $" + Penelope.payRate.toFixed(2) + " per hour. And was originally hired on " + Penelope.hireDate.toLocaleDateString());

let John = new Employee(
 "John",
 "Doe",
 "123 Main St",
 65
);

console.log(John.firstName + " " + John.lastName + " lives at " + John.address + ", makes $" + John.payRate.toFixed(2) + " per hour. And was originally hired on " + John.hireDate.toLocaleDateString());
