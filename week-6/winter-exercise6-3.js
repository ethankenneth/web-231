/**
 * Title: Exercise 6.3
 * Author: Ethan Kenneth Winter
 * Date: 29 November 2020
 * Description: Create an object literal
 */

let header = require('../week-2/winter-header.js');

console.log(header.display("Ethan Kenneth", "Winter", "Exercise 6.3 Object Literals"));

// Start of program.

// Create object literal for ticketing system.
let ticket = {
	id: 101,

	name: "Help Desk Support",

	requestor: "Bob Jones"
};

// Output the ticket information from the object literal.
console.log("id: " + ticket.id + ", name: " + ticket.name + ", requester: " + ticket.requestor);
// Instructions say "requestor" while github repo starter code says "requester."

// End of progam.
