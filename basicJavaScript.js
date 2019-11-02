
// Manipulate Arrays With shift()

/* Question 
Use the .shift() function to remove the first item from myArray, assigning the "shifted off" value to removedFromMyArray.
*/


// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray;
removedFromMyArray = myArray.shift()
console.log(removedFromMyArray)

//--------------------
// Manipulate Arrays With unshift()

/* Question
Add ["Paul",35] to the beginning of the myArray variable using unshift().
*/

// Example
var ourArray2 = ["Stimpson", "J", "cat"];
ourArray2.shift(); // ourArray now equals ["J", "cat"]
ourArray2.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray2 = [["John", 23], ["dog", 3]];
myArray2.shift();

// Only change code below this line.
myArray2.unshift(["Paul", 35])
console.log(myArray2)

//---------------------
// Shopping List

/* Question
Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

["Chocolate Bar", 15]

There should be at least 5 sub-arrays in the list.
*/

var myList = [];
myList = [["Garlic Bread", 1], ["Tomato", 5], ["Egg", 12], ["Sliced Salmon", 6], ["Cream Cheese", 1]]

console.log(myList)

//---------------
// Write Reusable JavaScript with Functions

/* Question 
1. Create a function called reusableFunction which prints "Hi World" to the dev console.
2. Call the function.
*/

// Example
function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();

// Only change code below this line
function reusableFunction() {
  console.log("Hi World")
}

reusableFunction()

//-----------------
// Passing Values to Functions with Arguments

/* Question 
1. Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.

2.Call the function with two numbers as arguments.
*/

// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.
function functionWithArgs(num1, num2) {
  console.log(num1 + num2)
}
functionWithArgs(25, 10) // Outputs 35

//-----------------
// Global Scope and Functions

/* Question
Using var, declare a global variable myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var keyword.
*/

// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here  
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1()
fun2() // outputs: myGlobal: 10 oopsGlobal: 5

//-------------------
// Local Scope and Functions 

/*  Question
Declare a local variable myVar inside myLocalScope. Run the tests and then follow the instructions commented out in the editor.
*/

function myLocalScope() {
  var myVar = "myVar is not defined outside of myLocalScope";
  'use strict'; // you shouldn't need to edit this line  
  console.log(myVar);
}


myLocalScope(); // outputs: myVar is not defined outside of myLocalScope
// console.log(myVar); this would give an error because my var is not in global scope

//---------------------
// Local Scope and Functions

/*  Question
Declare a local variable myVar1 inside myLocalScope. Run the tests and then follow the instructions commented out in the editor.
*/

function myLocalScope1() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "Hello from myLocalScope function"
  console.log(myVar);
}

myLocalScope1(); // outputs: Hello from myLocalScope function    
// console.log(myVar);  gives an error myVar is defined

//---------------------
// Global vs. Local Scope in Functions

/* Question
Add a local variable to myOutfit function to override the value of outerWear with "sweater".
*/

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";

  // Only change code above this line
  console.log(outerWear);
}
console.log(outerWear) // outputs "T-Shirt" before it cannot see local scope
myOutfit(); // outputs "sweater" as it communicates with local scope

//-------------
// Return a Value from a Function with Return

/* Question
Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value. See the last line in the editor for an example of how you can test your timesFive function.
*/

// Example
function minusSeven(num) {
  return num - 7;
}

console.log(minusSeven(10)); // 3

// Only change code below this line
function timesFive(number) {
  return number * 5
}

console.log(timesFive(5)) // 25

//--------------
// Understanding Undefined Value returned from a Function

/* Question
Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.
*/

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
  console.log(sum)
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
  console.log(sum)
}

// Only change code above this line
addThree(); // 3
addFive(); // 8  (sum was not 0 but 3 at first as addThree function is called before)

//------------
// Assignment with a Returned Value

/* Question
Call the processArg function with an argument of 7 and assign its return value to the variable processed.
*/

// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7)
console.log(processed) // 2

//--------------
// Stand in Line

/* Question
Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
Add the number to the end of the array, then remove the first element of the array.
The nextInLine function should then return the element that was removed.
*/

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var elementThatIsRemoved = arr.shift()

  return elementThatIsRemoved;  // Change this line
}

// Test Setup
var testArr = [1, 2, 3, 4, 5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

//-----------------------
// Understanding Boolean Values

/* Question
Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.
*/

function welcomeToBooleans() {

  // Only change code below this line.

  return true; // Change this line

  // Only change code above this line.
}

console.log(welcomeToBooleans())

/* Question
Create an if statement inside the function to return "Yes, that was true" if the parameter wasThatTrue is true and return "No, that was false" otherwise.
*/

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue) {
    return "Yes that was true";
  }
  return "No, that was false";
  // Only change code above this line.
}

// Change this value to test
console.log(trueOrFalse(true)); // Yes that was true
console.log(trueOrFalse(false)); // No, that was false

//---------------
// Comparison with the Equality Operator ==

/* Question
Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12.
*/

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
console.log(testEqual(10)); // Not Equal
console.log(testEqual(12)); // Equal

//---------------
// Comparison with the Strict Equality Operator ===

/* Question
Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7
*/

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Yes, it is equal";
  }
  return "Not, it is not equal";
}

// Change this value to test
console.log("is it equal?", testStrict(7)); // is it equal? Yes, it is equal
console.log("is it equal?", testStrict("seven")); // is it equal? Not, it is not equal

//---------------
// Practice comparing different values

/* Question
The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns "Equal" only when the values are strictly equal.
*/

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
console.log(compareEquality(10, "10")); // Not Equal

//---------------
// Comparison with the Inequality Operator

/* Question
Add the inequality operator != in the if statement so that the function will return "Not Equal" when val is not equivalent to 99
*/

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
console.log("Is this number equal to 99?", testNotEqual(10)); // Not Equal

//---------------
// Comparison with the Inequality Operator

/* Question
Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17
*/

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);

//--------------------
// Comparison with the Greater Than Operator

/* Question
Add the greater than operator to the indicated lines so that the return statements make sense.
*/

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
console.log(testGreaterThan(10)); // 10 or Under

//--------------------
// Comparison with the Greater Than Or Equal To Operator

/* Question
Add the greater than or equal to operator to the indicated lines so that the return statements make sense.
*/

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
console.log(testGreaterOrEqual(10)); // 10 or Over

//--------------------
// Comparison with the Less Than Operator

/* Question
Add the less than operator to the indicated lines so that the return statements make sense.
*/

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
console.log(testLessThan(10)); // Under 25

//--------------------
// Comparison with the Less Than Or Equal To Operator

/* Question
Add the less than or equal to operator to the indicated lines so that the return statements make sense.
*/

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
console.log(testLessOrEqual(10)); // Smaller Than or Equal to 12

