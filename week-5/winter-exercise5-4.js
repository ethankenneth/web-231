/**
 * Title: Exercise 5.4
 * Author: Ethan Kenneth Winter
 * Date: 22 November 2020
 * Description: Create an array of composer objects and iterate over the array by genre and rating
 */

let header = require('../week-2/winter-header.js');

console.log(header.display("Ethan Kenneth", "Winter", "Exercise 5.4 Filtering/Reducing Complex Data Structures"));

// Start of program.
// Create array of composer objects.
let composersList = [
	{
		name: "Beethoven",
		genre: "Classical",
		rating: 8
	},
	{
		name: "Mozart",
		genre: "Classical",
		rating: 10
	},
	{
		name: "Bach",
		genre: "Classical",
		rating: 9
	},
	{
		name: "Haydn",
		genre: "Classical",
		rating: 6
	},
	{
		name: "Shubert",
		genre: "Classical",
		rating: 5
	}
];

// Console log header.
console.log("-- COMPOSER BY RATING --");

// Iterate over composers by rating.
let ratings = composersList.map(function(composer){
	console.log("Rating: " + composer.rating);
	console.log("Composer: " + composer.name);
	console.log("");
});

// Console log header.
console.log("-- COMPOSER BY GENRE --");

// Iterate over composers by genre.
let genres = composersList.map(function(composer){
	console.log("Genre: " + composer.genre);
	console.log("Composer: "+ composer.name);
	console.log("");
});

// End of program.
