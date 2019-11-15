console.log("--------HELLO FROM BASIC DATA STRUCTURES----------")

//--------------------
// Use an Array to Store a Collection of Data

//let yourArray; // change this line

/* Question
We have defined a variable called yourArray. Complete the statement by assigning an array of at least 5 elements in length to the yourArray variable. Your array should contain at least one string, one number, and one boolean.
*/

let yourArray = ["This", "is", "a", true, "story", "based", "in Helsinki", 1993] // change this line

console.log(yourArray.length) //8

//--------------------
// Access an Array's Contents Using Bracket Notation

//let yourArray; // change this line

/*
let myArray = ["a", "b", "c", "d"];
// change code below this line

//change code above this line
console.log(myArray);
*/

/* Question
In order to complete this challenge, set the 2nd position (index 1) of myArray to anything you want, besides "b".
*/

let myArray5 = ["a", "b", "c", "d"];
// change code below this line
myArray5[1] = "BRO!"
//change code above this line

console.log(myArray5); //(4) ["a", "BRO!", "c", "d"]

//--------------------
// Add Items to an Array with push() and unshift()


/* Question
We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.
*/

function mixedNumbers(arr) {
    // change code below this line
    arr.unshift('I', 2, 'three')
    arr.push(7, 'VII', 9)
    // change code above this line
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
//["I", 2, "three", "IV", 5, "six", 7, "VII", 9]

//--------------------
// Remove Items from an Array with pop() and shift()


/* Question
We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.
*/

function popShift(arr) {
    let popped = arr.pop(arr[0]); // change this line
    let shifted = arr.shift(arr[arr.length - 1]); // change this line
    return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));

//(2)["challenge", "complete"]


//--------------------
// Remove Items Using splice()


/* Question
We've defined a function, sumOfTen, which takes an array as an argument and returns the sum of that array's elements. Modify the function, using splice(), so that it returns a value of 10.
*/

function sumOfTen(arr) {
    // change code below this line
    arr.splice(1, 2);
    // change code above this line
    return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));
// 10

//--------------------
// Add Items Using splice()


/* Question
We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
*/

function htmlColorNames(arr) {
    // change code below this line
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond")
    // change code above this line
    return arr;
}

// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

(5)["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurqoise", "FireBrick"]