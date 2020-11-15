/**
 * Title: Exercise 4.3
 * Author: Ethan Kenneth Winter
 * Date: 12 November 2020
 * Description: Create an array of five vehicles and loop through values to test if values match
 */

let header = require('../week-2/winter-header.js');

console.log(header.display("Ethan Kenneth", "Winter", "Exercise 4.3 Filtering"));

// Array of five vehicles
let vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

// filter through vehicles array and compare
function getValue(arr, val) {
  for (var k = 0; k < arr.length; k++) {
    if (arr[k] === val) {
      console.log(arr[k]);
    }
  }
}

// Output to display array
console.log("-- DISPLAYING ARRAY ITEMS --");
for (var i = 0; i < vehicles.length; i++) {
  console.log(vehicles[i]);
}

// Output selected value from vehicles array
console.log("");
console.log("-- SELECTED VALUE --");
getValue(vehicles, "Motorcycle");

console.log("");
console.log("-- SELECTED VALUE --");
getValue(vehicles, "Bus");
