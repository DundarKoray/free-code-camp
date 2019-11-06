
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
    "echo" : "Easy",
    "foxtrot": "Frank"
  }
  var result = lookup[val];
  
  // Only change code above this line
  return result;
}

// Change this value to test
console.log(phoneticLookup("charlie")); // Chicago