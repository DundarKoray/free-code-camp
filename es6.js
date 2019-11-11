console.log("--------HI FROM ES6----------")
//--------------------
// Explore Differences Between the var and let Keywords

/* Question
Update the code so it only uses the let keyword.
*/

let catName;
let quote;
function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

}
catTalk();

//--------------------
// Compare Scopes of the var and let Keywords

/* Question
Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.

This exercise is designed to illustrate the difference between how var and let keywords assign scope to the declared variable. When programming a function similar to the one used in this exercise, it is often better to use different variable names to avoid confusion.
*/

function checkScope() {
    'use strict';
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

//--------------------
// Declare a Read-Only Variable with the const Keyword

/* Question
Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices, meaning constants should be in all caps.
*/

function printManyTimes(str) {
    "use strict";

    // change code below this line

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }

    // change code above this line

}
printManyTimes("freeCodeCamp");

//--------------------
// Mutate an Array Declared with const

/* Question
An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignment.
*/

const s = [5, 7, 2];
function editInPlace() {
    'use strict';
    // change code below this line

    // s = [2, 5, 7]; <- this is invalid
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    // change code above this line
}
editInPlace();
console.log(s) // (3) [2, 5, 7]

//--------------------
// Prevent Object Mutation

/* Question
In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignment.
*/

function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // change code below this line
    Object.freeze(MATH_CONSTANTS)

    // change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//--------------------
// Use Arrow Functions to Write Concise Anonymous Functions

/* Question
Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also make sure nothing is defined using the keyword var.
*/

const magic = () => {
    "use strict";
    return new Date();
};

//--------------------
// Write Arrow Functions with Parameters

/* Question
Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.
*/

const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
};

// test your code
console.log(myConcat([1, 2], [3, 4, 5])); // (5) [1, 2, 3, 4, 5]

//--------------------
// Set Default Parameters for Your Functions

/* Question
Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
*/

const increment = (number, value = 1) => number + value;

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

//--------------------
// Use the Rest Parameter with Function Parameters

/* Question
Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(10, 20, 30)); // 60
*/

const sum1 = (...args) => {
    return args.reduce((a,b) => a + b, 0);
}
  
console.log(sum1(10, 20, 30)) // 60

//--------------------
// Use the Spread Operator to Evaluate Arrays In-Place

/* Question
Copy all contents of arr1 into another array arr2 using the spread operator.
*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // change this line

console.log(arr2); // (5) ["JAN", "FEB", "MAR", "APR", "MAY"]

//--------------------
// Use Destructuring Assignment to Extract Values from Objects

/* Question
Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
*/

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // change code below this line
  
//   const today = HIGH_TEMPERATURES.today;
const {today, tomorrow} = HIGH_TEMPERATURES
//   const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
  // change code above this line
  
  //console.log(yesterday) // should be not defined
  console.log(today); // should be 77
  console.log(tomorrow); // should be 80