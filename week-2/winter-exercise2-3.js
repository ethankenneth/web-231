let header = require('./winter-header.js');

console.log(header.display("Ethan Kenneth", "Winter", "Exercise 2.3 Function Properties"));


/*
  Expected output:

  FirstName LastName
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!

  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/

//function properties
myName.ethan = "Ethan Kenneth";

//function
function myName(){
  return myName.ethan;
}

//output
console.log("Hello " + myName() = " Winter!");
