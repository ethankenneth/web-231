/**
 * Title: Exercise 4.2
 * Author: Ethan Kenneth Winter
 * Date: 12 November 2020
 * Description: Create an array of five fruits & iterate over the array in a function
 */

let header = require('../week-2/winter-header.js');

console.log(header.display("Ethan Kenneth", "Winter", "Exercise 4.2 Arrays"));

// Array of five fruits
let fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

// function accepts one dimensional array, and output results
function getFruit(arr) {
    for (var k = 0; k < arr.length; k++) {
      console.log(arr[k]);
    }
}

// Output from getFruit function
getFruit(fruits);
