/**
 * Title: Exercise 6.4
 * Author: Ethan Kenneth Winter
 * Date: 29 November 2020
 * Description: Create an object literal
 */

let header = require('../week-2/winter-header.js');

console.log(header.display("Ethan Kenneth", "Winter", "Exercise 6.4 Nested Object Literals"));

// Start of program.

// Create nested object literal of ticket with a nested object literal of person.
let ticket = {
   id: 105,
   name: "John Doe",
   dateCreated: new Date (),
	 priority: "low",
   person: {
      id: 11683,
      firstName: "Bob",
		  lastName: "Jones",
		  jobTitle: "Programmer I"
   }
};
//  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " +  ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ").");

// End of program.
