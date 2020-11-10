/**
 * Title: Assignment 3.4
 * Author: Ethan Kenneth Winter
 * Date: 10 November 2020
 * Description: Create a loop with 10 iterations
 */

let header = require('../week-2/winter-header.js');

console.log(header.display("Ethan Kenneth", "Winter", "Assignment 3.4 Loops"));

// Create a variable and assign it a value between 1 and 10
let random = 3;

//Take the functions you wrote in exercise 3.2 (match, logMismatch and logMatch) and copy them to this week's Assignment
function match(arg1, arg2) {
  if (arg1 === arg2) {
    return true;
  } else {
    return false;
  }
}

function logMismatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do not match!");
}

function logMatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do match!");
}

// Create a loop with 10 iterations and inside the body of the for loop create a local variable and assign it a random number between 1 and 10 (use the randomNumber function I have provided in the starter code)
for (var i = 0; i < 10; i++) {
  function randomNumber() {
    return Math.floor((Math.random() * 10) + 1)
  }
  if (match(random === randomNumber())) {
    logMatch(random, randomNumber());
  } else {
    logMismatch(random, randomNumber());
  }
}

// end winter-assignment3-4.js
