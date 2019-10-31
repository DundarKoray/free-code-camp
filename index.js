
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

//---------------