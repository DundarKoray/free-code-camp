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

//(5)["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurqoise", "FireBrick"]

//--------------------
// Copy Array Items Using slice()


/* Question
We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the elements 'warm' and 'sunny'.
*/

function forecast(arr) {
    // change code below this line
    let newArr = arr.slice(2, 4)

    return newArr;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//--------------------
// Copy an Array with the Spread Operator


/* Question
We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).
*/

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // change code below this line
        newArr.push([...arr]);
        // change code above this line
        num--;
    }
    return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

//--------------------
// Combine Arrays with the Spread Operator


/* Question
We have defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].
*/

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'] // change this line
    return sentence;
}

// do not change code below this line
console.log(spreadOut());
// (5) ["learning", "to", "code", "is", "fun"]

//--------------------
// Check For The Presence of an Element With indexOf()


/* Question
indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not..
*/

function quickCheck(arr, elem) {
    // change code below this line
    return arr.indexOf(elem) !== -1;
    // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); // false

console.log(quickCheck(['squash', 'onions', 'shallots'], 'onions')); // true

//--------------------
// Iterate Through All an Array's Items Using For Loops


/* Question
We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
*/

function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i])
        }
    }
    // change code above this line
    return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9], [20, 4]], 3));

//--------------------
// Create complex multi-dimensional arrays



/* Question
We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string 'deep', on the fourth level, include the string 'deeper', and on the fifth level, include the string 'deepest'.
*/