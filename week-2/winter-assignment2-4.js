let header = require('./winter-header.js');

console.log(header.display("Ethan Kenneth", "Winter", "Assignment 2.4 Functions"));

 // 1. Create a function called fullName with two parameters (first and last name) and a return the two parameters as one string.
function fullName (firstName, lastName) {
  return firstName + " " + lastName;
}

// 2. Create a function called dateWriter with three parameters (year, month, and day) and return a new date using the passed-in values.
function dateWriter (year, month, day) {
  let newDate = year + " " + month + " " + day;
  return newDate;
}

// 3. Create a function called formatNumber with two parameters (number and numOfFixedPositions) and return the number with the number of fixed positions you specified in the second parameter.
function formatNumber (number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

// 4. Create a function called convertToInt with one string parameter.  Parse the string parameter and return the value as an integer.
function convertToInt(age) {
  parsedAge = parseInt(age);
  return parsedAge;
}

// 5. Create a function called convertToFloat with one string parameter.  Parse the string parameter and return the value as a float.
function convertToFloat(savings) {
  savingsGoal = parseFloat(savings);
  return savingsGoal;
}

// 6. Test each of these functions by calling them, passing in test values (yes this means you will need to create test variables), and outputting the results to the console window (yes, this means use the console.log() function to output the results).
alert("Hello my name is " + fullName("Ethan Kenneth", "Winter") + "!\nToday's date is " + dateWriter("2020", "November", "1") + " and the current temperature is " + formatNumber(33.6, 1) + " degrees.\nI am " + convertToInt("36") + " years old and my savings account goal is " + convertToFloat("35500") + " dollars.");
