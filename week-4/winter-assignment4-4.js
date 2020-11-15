/**
 * Title: Assignment 4.4
 * Author: Ethan Kenneth Winter
 * Date: 12 November 2020
 * Description: Create an array of five states; use filter() to test if state in array matches chosen state
 */

let header = require('../week-2/winter-header.js');

console.log(header.display("Ethan Kenneth", "Winter", "Assignment 4. Predicates"));

// Array of five states
let states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

// Alphabetize states array with filter()
function filter(states, index, letter)
{
  var filteredStates = states.filter(function(word)
  {
    return word.charAt(index) === letter;
  });
  return filteredNames;
}

function getState(arr, filterVal)
{
  return (arr === filterVal)
}

// Output original array
console.log("-- ORIGINAL ARRAY --");
states.forEach(state => console.log(state));

// Output array sorted alphabetically
console.log("");
console.log("-- SORTED ARRAY --");
states.sort().forEach(state => console.log(state))


// Output selected state
console.log("");
console.log("-- SELECTED VALUE --");
console.log(states.filter(function(arr)
{
  return getState(arr, "Iowa")
})[0]);
