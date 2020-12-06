/**
 * Title: Discussion 7.1
 * Author: Ethan Kenneth Winter
 * Date: 6 December 2020
 * Description: Create an employee constructor.
 */

let header = require('../week-2/winter-header.js');

console.log(header.display("Ethan Kenneth", "Winter", "Exercise 7.1 Constructor Functions"));


// Employee constructor with id, first & last name and title.
function Employee(id, firstName, lastName, title) {
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.title = title;
}

// Employee information for id, first & last name and title.
var employees = [
	new Employee(1, "Thomas", "Edison", "Software Engineer"),
	new Employee(2, "Benjamin", "Franklin", "Programmer"),
	new Employee(3, "Nikola", "Tesla", "Project Manager"),
	new Employee(4, "Charles", "Babbage", "Product Manager"),
	new Employee(5, "Alexander", "Bell", "Business Analyst")
];

// Loop over employees and display information.
employees.forEach(function (Employee) {
	console.log(this.employees);
});
