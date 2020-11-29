/**
 * Title: Exercise 6.2
 * Author: Ethan Kenneth Winter
 * Date: 29 November 2020
 * Description: Create a try/catch with an error
 */

let header = require('../week-2/winter-header.js');

console.log(header.display("Ethan Kenneth", "Winter", "Exercise 6.2 Exception Handling"));

// Start of program.

// Try to see if x + y is 9.
try
{
  let x = 10;
  let y = 100;
  let sum = x + y;

  if (sum == 9) throw "Your sum is 9";
  console.log(sum);
}
catch (sum)
{
  console.log("Catch clause: Your sum is " + sum);
}
finally
{
  console.log("Finally clause: End of program ...");
}

// End of program.
