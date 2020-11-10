/**
 * Title: Exercise 3.3
 * Author: Ethan Kenneth Winter
 * Date: 10 November 2020
 * Modified by Ethan Kenneth Winter
 * Description: Replace a series of if...else statements with a switch block.
 **/

let header = require('../week-2/winter-header.js');

console.log(header.display("Ethan Kenneth", "Winter", "Exercise 3.3 Control Statements"));

/*
  Expected output:
  FirstName LastName
  Exercise 3.3
  Today's Date
  // Expected output
  The enter key was pressed
*/

let eventKeyCode = 13;

// if (eventKeyCode === 13) {
//   console.log('The enter key was pressed.')
// } else if (eventKeyCode === 16) {
//   console.log('The shift key was pressed.')
// } else if (eventKeyCode === 32) {
//   console.log('The spacebar key was pressed.')
// } else if (eventKeyCode === 8) {
//   console.log('The backspace / delete key was pressed.')
// } else {
//   console.log('Unrecognized key.')
// }

// Replace the above series of if...else statements with a switch block.
switch (eventKeyCode)
{
  case 13:
    console.log('The enter key was pressed.');
    break;
  case 16:
    console.log('The shift key was pressed.');
    break;
  case 32:
    console.log('The spacebar key was pressed.');
    break;
  case 8:
    console.log('The backspace / delete key was pressed.')
    break;
  default:
    console.log('Unrecognized key.')
    break;
}

// end winter-exercise3-3.js
