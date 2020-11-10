/**
 * Title: Exercise 3.2
 * Author: Ethan Kenneth Winter
 * Date: 10 November 2020
 * Modified by Ethan Kenneth Winter
 * Description: Demonstrate how one might incorporate logical error handling in an application
**/

let header = require('../week-2/winter-header.js');

console.log(header.display("Ethan Kenneth", "Winter", "Exercise 3.2 Pattern Matching Functions"));

/*
  Expected output:

  FirstName LastName
  Exercise 3.2
  Today's Date

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

// Create six local test variables with default values.
let testVar1 = "Truck";
let testVar2 = "Car";
let testVar3 = "Bike";
let testVar4 = "Bike";
let testVar5 = "Four";
let testVar6 = "Three";

// Create a function called match with two parameters, compare the parameters using the equality operation (===).  If they match return true if they do not match return false.
function match(arg1, arg2) {
  if (arg1 === arg2) {
    return true;
  } else {
    return false;
  }
}

// Create a function called logMismatch with two parameters, create a string message with the two parameters saying they do not match.  Use the parameters as the values you display in the string message.
function logMismatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do not match!");
}

// Create a function called logMatch with two parameters, create a string message with the two parameters saying they do match.  Use the parameters as the values you display in the string message.
function logMatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do match!");
}

// Using if...else statements call the match function and pass-in two of the test variables.  In the body of the "true" statement call the logMatch function and pass-in these same two variables.  In the body of the "false" statement call the logMismatch function and pass-in these same two variables.  Repeat this process until all 6 variables have been tested.
if (match(testVar1, testVar2)) {
  logMatch(testVar1, testVar2);
} else {
  logMismatch(testVar1, testVar2);
}
