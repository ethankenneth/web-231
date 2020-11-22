/**
 * Title: Exercise 5.2
 * Author: Ethan Kenneth Winter
 * Date: 22 November 2020
 * Description: Create a string array of five foods and iterate over the array
 */

let header = require('../week-2/winter-header.js');

console.log(header.display("Ethan Kenneth", "Winter", "Exercise 5.2 Built-In Functions"));

// Start program

// Create string array
let foods = [
	"Vegan Pizza",
	"Vegan Cake",
	"General Tso's Tofu",
	"Watermelon Juice",
	"Vegan Croissants"
];

// iterate over foods array
foods.forEach(function (food) {
	console.log(food);
});

// End program
