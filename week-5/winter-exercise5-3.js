/**
 * Title: Exercise 5.3
 * Author: Ethan Kenneth Winter
 * Date: 22 November 2020
 * Description: Create an array of composer objects and iterate over the array
 */

let header = require('../week-2/winter-header.js');

console.log(header.display("Ethan Kenneth", "Winter", "Exercise 5.3 Object Collections"));

// Start program

// Create array of composer objects.
let composers = [
	{
		firstName: "Ludwig van",
		lastName: "Beethoven",
		genre: "Classical",
		rating: 8
	},
	{
		firstName: "Wolfgang Amadeus",
		lastName: "Mozart",
		genre: "Classical",
		rating: 10
	},
	{
		firstName: "Johann Sebastian",
		lastName: "Bach",
		genre: "Classical",
		rating: 9
	},
	{
		firstName: "Joseph",
		lastName: "Haydn",
		genre: "Classical",
		rating: 6
	},
	{
		firstName: "Franz",
		lastName: "Schubert",
		genre: "Classical",
		rating: 5
	}
];

// Console log a header.
console.log("-- Composers --");
// Iterate over composers and console log last name, genre, and rating.
composers.forEach(function (composer) {
	console.log(
		"Last Name: " +
			composer.lastName +
			", Genre: " +
			composer.genre +
			", Rating: " +
			composer.rating
	);
});

// End program
