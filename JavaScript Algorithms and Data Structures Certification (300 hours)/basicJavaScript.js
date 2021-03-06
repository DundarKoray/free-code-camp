
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

//--------------------
// Comparisons with the Logical And Operator

/* Question
Combine the two if statements into one statement which will return "Yes" if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return "No".
*/

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
console.log(testLogicalAnd(10)); // No

//--------------------
// Comparisons with the Logical Or Operator

/* Question
Combine the two if statements into one statement which returns "Outside" if val is not between 10 and 20, inclusive. Otherwise, return "Inside".
*/

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
console.log(testLogicalOr(15)); // Inside

//--------------------
// Introducing Else Statements

/* Question
Combine the if statements into a single if/else statement.
*/

function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
console.log(testElse(4)); // 5 or Smaller

/*Question
Convert the logic to use else if statements.
*/

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
    return "Between 5 and 10";
  }
}

// Change this value to test
console.log(testElseIf(7)); // Between 5 and 10

/*Question
Change the order of logic in the function so that it will return the correct statements in all cases.
*/

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
console.log(orderMyLogic(7)); // Less than 10

/*Question
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny"
  } else if (num < 10) {
    return "Small"
  } else if (num < 15) {
    return "Medium"
  } else if (num < 20) {
    return "Large"
  } else if (num >= 20) {
    return "Huge"
  }

  return "Change Me";
  // Only change code above this line
}

// Change this value to test
testSize(7);

//--------------------
// GOLF Challange

/*Task
In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest
*/

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return "Hole-in-one!"
  } else if (strokes <= par - 2) {
    return "Eagle"
  } else if (strokes == par - 1) {
    return "Birdie"
  } else if (strokes == par) {
    return "Par"
  } else if (strokes == par + 1) {
    return "Bogey"
  } else if (strokes == par + 2) {
    return "Double Bogey"
  } else if (strokes >= par + 3) {
    return "Go Home!"
  }

  return "Change Me";
  // Only change code above this line
}

// Change these values to test
console.log(golfScore(5, 4)); // Birdie

//--------------------
// Selecting from Many Options with Switch Statements

/* Question
Write a switch statement which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {

    case 1:
      answer = "alpha"
      break;
    case 2:
      answer = "beta"
      break;
    case 3:
      answer = "gamma"
      break;
    case 4:
      answer = "delta"
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(caseInSwitch(1)); // alpha

//--------------------
// Adding a Default Option in Switch Statements

/* Question
Write a switch statement to set answer for the following conditions:
"a" - "apple"
"b" - "bird"
"c" - "cat"
default - "stuff"
*/

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line

  switch (val) {
    case "a":
      answer = "apple"
      break;
    case "b":
      answer = "bird"
      break;
    case "c":
      answer = "cat"
      break;
    default:
      answer = "stuff"
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(switchOfStuff(1)); // stuff
console.log(switchOfStuff("c")); // cat

//--------------------
// Multiple Identical Options in Switch StatementsPassed

/* Question
Write a switch statement to set answer for the following ranges:
1-3 - "Low"
4-6 - "Mid"
7-9 - "High"

Note
You will need to have a case statement for each number in the range.
*/

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low"
      break;

    case 4:
    case 5:
    case 6:
      answer = "Mid"
      break;
    case 7:
    case 8:
    case 9:
      answer = "High"
      break;
  }
  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(sequentialSizes(1)); // Low
console.log(sequentialSizes(8)); // High

//--------------------
// Replacing If Else Chains with Switch

/* Question
Change the chained if/else if statements into a switch statement.
*/

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(chainToSwitch(7)); // Ate Nine
console.log(chainToSwitch("bob")); // Marley

//--------------------
// Returning Boolean Values from Functions

/* Question
Fix the function isLess to remove the if/else statements.
*/

function isLess(a, b) {
  // Fix this code
  return a < b;
}

// Change these values to test
console.log(isLess(10, 15)); // true
console.log(isLess(15, 10)); // false

//--------------------
// Return Early Pattern for Functions

/* Question
Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

Hint
Remember that undefined is a keyword, not a string.
*/

// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined
  }


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
console.log(abTest(2, 2)); // 8
console.log(abTest(4, 3)); // 14
console.log(abTest(-2, 2)); // undefined

//--------------------
// Counting Cards

/* Question
In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	      Cards
+1	                2, 3, 4, 5, 6
0	                  7, 8, 9
-1	                10, 'J', 'Q', 'K', 'A'

You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Output
-3 Hold
5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.
*/

var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet";
  }


  return count + " " + holdbet;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
console.log(cc(2)) // 1 BET
console.log(cc(3)) // 2 BET
console.log(cc(7)) // 0 HOLD
console.log(cc("K")) // -1 HOLD
console.log(cc("A")) // -2 HOLD

//--------------------
// Build JavaScript Objects

/* Question
Make an object that represents a dog called myDog which contains the properties "name" (a string), "legs", "tails" and "friends".

You can set these object properties to whatever values you want, as long "name" is a string, "legs" and "tails" are numbers, and "friends" is an array.
*/

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

// Only change code below this line.

var myDog = {
  "name": "Tarzan",
  "legs": 4,
  "tails": 1,
  "friends": ["Jane"]
};

console.log("koiran nimi:", myDog.name, "koiran vaimon nimi:", myDog.friends[0])
//koiran nimi: Tarzan koiran vaimon nimi: Jane

//--------------------
// Accessing Object Properties with Dot Notation

/* Question
Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.
*/

// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line

console.log(hatValue) //ballcap
console.log(shirtValue) // jersey

//--------------------
// Accessing Object Properties with Bracket Notation

/* Question
Read the values of the properties "an entree" and "the drink" of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.
*/

// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "thedrink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["thedrink"];    // Change this line

console.log(entreeValue) // hamburger 
console.log(drinkValue) // water

//--------------------
// Accessing Object Properties with Variables

/* Question
Use the playerNumber variable to look up player 16 in testObj using bracket notation. Then assign that name to the player variable.
*/

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line

console.log(player) // Montana

//--------------------
// Updating Object Properties

/* Question
Update the myDog object's name property. Let's change her name from "Coder" to "Happy Coder". You can use either dot or bracket notation.
*/

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.
console.log(myDog.name) // Coder
myDog.name = "Happy Coder"
console.log(myDog.name) // Happy Coder

//--------------------
// Add New Properties to a JavaScript Object

/* Question
Add a "bark" property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.
*/

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof"
console.log(myDog.bark) // woof

//--------------------
// Delete Properties from a JavaScript Object

/* Question
Delete the "tails" property from myDog. You may use either dot or bracket notation.
*/

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line.
console.log(myDog.tails) // 1
delete myDog.tails
console.log(myDog.tails) // undefined


//--------------------
// Using Objects for Lookups

/* Question
Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
*/

// Setup
function phoneticLookup(val) {

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  var result = lookup[val];

  // Only change code above this line
  return result;
}

// Change this value to test
console.log(phoneticLookup("charlie")); // Chicago

//--------------------
// Using Objects for Lookups

/* Question
Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, return "Not Found".
*/

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp]
  } else {
    return "Not Found"
  }
}

// Test your code by modifying these values
console.log(checkObj("gift")); // pony
console.log(checkObj("food")); // not found

//--------------------
// Manipulating Complex Objects

/* Question
Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
*/

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  // Add record here
  , {
    "artist": "Bon Jovi",
    "title": "It's My Life",
    "release_year": 1999,
    "formats": [
      "DVD",
      "CD",
      "VHS"
    ]
  }
];

//--------------------
// Accessing Nested Objects

/* Question
Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.
*/

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line
console.log(gloveBoxContents) // maps

//--------------------
// Accessing Nested Arrays

/* Question
Retrieve the second tree from the variable myPlants using object dot and array bracket notation.
*/

// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line
var secondTree = myPlants[1].list[1]; // Change this line
console.log(secondTree) // pine

//--------------------
// Challange: Record Collection

/* Question
You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.

Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.

If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.

Your function must always return the entire collection object.

There are several rules for handling incomplete data:

If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.

If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.

If value is empty (""), delete the given prop property from the album.
*/

// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    album: "ABBA Gold",
    hello: "moi"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    //if prop tracks does not exist create an empty array
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value
  }


  return collection;
}


// Alter values below to test your code
console.log(collection[5439].hello) // moi
updateRecords(5439, "hello", "") // deleting hello prop
console.log(collection[5439].hello) // undefined 

console.log(updateRecords(2548, "tracks", "Living On A Prayer"));
console.log(updateRecords(5439, "tracks", "Hello There"));
console.log(updateRecords(5439, "tracks", "November Dance"));
console.log(updateRecords(5439, "artist", "ABBA"));

//--------------------
// Iterate with JavaScript While Loops

/* Question
Push the numbers 0 through 4 to myArray using a while loop.
*/

// Setup
var myArray = [];

// Only change code below this line.
console.log(myArray) // [] (empty array) 

var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}

console.log(myArray) // (5) [0, 1, 2, 3, 4]

//--------------------
// Iterate with JavaScript For Loops

/* Question
Use a for loop to work to push the values 1 through 5 onto myArray.
*/

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray2 = [];

// Only change code below this line.
for (var i = 1; i < 6; i++) {
  myArray2.push(i);
}

console.log(myArray2) // (5) [1, 2, 3, 4, 5]

//--------------------
// Iterate Odd Numbers With a For Loop

/* Question
Push the odd numbers from 1 through 9 to myArray using a for loop.
*/

// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray3 = [];

// Only change code below this line.

for (var i = 1; i < 10; i += 2) {
  myArray3.push(i)
}

console.log(myArray3); // (5) [1, 3, 5, 7, 9]

//--------------------
// Count Backwards With a For Loop

/* Question
Push the odd numbers from 9 through 1 to myArray using a for loop.
*/

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray4 = [];

// Only change code below this line.
for (var i = 9; i > 0; i -= 2) {
  myArray4.push(i)
}

console.log(myArray4) // (5) [9, 7, 5, 3, 1]

//--------------------
// Iterate Through an Array with a For Loop

/* Question
Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
*/

// Example
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr7 = [2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;

for (var i = 0; i < myArr7.length; i++) {
  total = total + myArr7[i];
}

console.log(total) // 20

//--------------------
// Nesting For Loops

/* Question
Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr
*/

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

//--------------------
// Iterate with JavaScript Do...While Loops

/* Question
Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.
*/

// Setup
var myArray7 = [];
var i = 10;

// Only change code below this line
do {
  myArray7.push(i)
  i++;
}
while (i < 5)

console.log(myArray7) // [10]

//--------------------
// Challange: Profile Lookup

/* Question
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return "No such contact".

If prop does not correspond to any valid properties of a contact found to match name then return "No such property".
*/

//Setup
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property"
    }
  }
  return "No such contact"
}
// Only change code above this line


// Change these values to test your function
console.log(lookUpProfile("Akira", "likes")); //(3) ["Pizza", "Coding", "Brownie Points"]
console.log(lookUpProfile("Akira", "nationality")); // No such property
console.log(lookUpProfile("Koray", "likes")); // No such contact

//--------------------
// Generate Random Fractions with JavaScript

/* Question
Change randomFraction to return a random number instead of returning 0.
*/

function randomFraction() {

  // Only change code below this line.

  return Math.random();

  // Only change code above this line.
}

//--------------------
// Generate Random Whole Numbers with JavaScript

/* Question
Generate and return a random whole number between 0 and 9.
*/

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum())

//--------------------
// Generate Random Whole Numbers with JavaScript

/* Question
Create a function called randomRange that takes a range myMin and myMax and returns a random number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
*/

// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin)

}

// Change these values to test your function
var myRandom = randomRange(5, 15); // 5

//--------------------
// Use the parseInt Function

/* Question
Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.
*/

function convertToInteger(str) {
  return parseInt(str)
}

console.log(convertToInteger("56")); // 56

//--------------------
// Use the parseInt Function

/* Question
Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.
*/

function convertToInteger2(str) {
  return parseInt(str, 2)
}

console.log(convertToInteger2("10011"));

//--------------------
// Use the Conditional (Ternary) Operator

/* Question
Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either "Equal" or "Not Equal".
*/

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

console.log(checkEqual(1, 2)); // Not Equal
console.log(checkEqual(2, 2)); // Equal

//--------------------
// Use Multiple Conditional (Ternary) Operators

/* Question
Use multiple conditional operators in the checkSign function to check if a number is positive, negative or zero. The function should return "positive", "negative" or "zero".
*/

function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

console.log(checkSign(10)); // positive
console.log(checkSign(-10)); // negative
console.log(checkSign(0)); // zero

//--------------------
// Use Recursion to Create a Range of Numbers

/* Question
We have defined a function named rangeOfNumbers2 with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.
*/

function rangeOfNumbers2(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers2(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

//--------------------
// Use Recursion to Create a Countdown

/* Question
We have defined a function called countdown with two parameters. The function should take an array in the myArray parameter and append the numbers n through 1 based on the n parameter.
For example, calling this function with n = 5 will pad the array with the numbers [5, 4, 3, 2, 1] inside of it. Your function must use recursion by calling itself and must not use loops of any kind.
*/

//Only change code below this line
function countdown(myArray, n) {
  if (n <= 0) {
    return;
  }
  else {
    myArray.push(n);
    countdown(myArray, n - 1);
  }
}