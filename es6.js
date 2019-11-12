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

//--------------------
// Use Destructuring Assignment to Assign Variables from Objects

/* Question
Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
*/

const HIGH_TEMPERATURES2 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
  
// change code below this line
    
// const highToday = HIGH_TEMPERATURES2.today;
// const highTomorrow = HIGH_TEMPERATURES2.tomorrow; 

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES2

// change code above this line
  
//console.log(yesterday) // should be not defined
console.log(highToday); // should be 77
console.log(HIGH_TEMPERATURES2.today); // should be 77
console.log(highTomorrow); // should be 80

//--------------------
// Use Destructuring Assignment to Assign Variables from Nested Objects

/* Question
Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.
*/

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
  
// change code below this line
    
//   const lowToday = LOCAL_FORECAST.today.low;
const {today:{ low: lowToday2, high: highToday2 }} = LOCAL_FORECAST
//   const highToday = LOCAL_FORECAST.today.high;
  
// change code above this line
  
console.log(lowToday2); // should be 64
console.log(highToday2); // should be 77

//--------------------
// Use Destructuring Assignment to Assign Variables from Arrays

/* Question
Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
*/

let a = 8, b = 6;
// change code below this line
[b, a] = [8, 6]
// change code above this line
console.log(a); // should be 6
console.log(b); // should be 8

//--------------------
// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

/* Question
Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.
*/

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a,b,...arr] = list

  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

//--------------------
// Use Destructuring Assignment to Pass an Object as a Function's Parameters

/* Question
Use destructuring assignment within the argument to the function half to send only max and min inside the function.
*/

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
  
// change code below this line
// const half = (stats) => (stats.max + stats.min) / 2.0; // use function argument destructuring
const half = ({max, min}) => (max + min) / 2;
// change code above this line
  
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

//--------------------
// Create Strings using Template Literals

/* Question
Use template literal syntax with backticks to display each entry of the result object's failure array. Each entry should be wrapped inside an li element with the class attribute text-warning, and listed within the resultDisplayArray.

Use an iterator method (any kind of loop) to get the desired output.
*/

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
  
    // change code below this line
  const resultDisplayArray = arr.map(item => {
      return `<li class="text-warning">${item}</li>`
  })
    // change code above this line
  
    return resultDisplayArray;
  }
  /**
   * makeList(result.failure) should return:
   * [ `<li class="text-warning">no-var</li>`,
   *   `<li class="text-warning">var-on-top</li>`,
   *   `<li class="text-warning">linebreak</li>` ]
   **/
  const resultDisplayArray = makeList(result.failure);
  console.log(resultDisplayArray)

//--------------------
// Write Concise Object Literal Declarations Using Object Property Shorthand

/* Question
Use object property shorthand with object literals to create and return an object with name, age and gender properties.
*/

const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
    /*
    return {
      name: name,
      age: age,
      gender: gender
    };
    */

    return ({
        name,
        age,
        gender
    })
    // change code above this line
  };
  console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

//--------------------
// Write Concise Declarative Functions with ES6

/* Question
Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.
*/

// change code below this line
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
      this.gear = newGear;
    }
  };
  // change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);

//--------------------
// Use class Syntax to Define a Constructor Function

/* Question
Use class keyword and write a proper constructor to create the Vegetable class.

The Vegetable lets you create a vegetable object, with a property name, to be passed to constructor.
*/

/* Alter code below this line */
class Vegetable {
    constructor(name){
        this.sebzeIsmi = name;
    }
}
/* Alter code above this line */


const carrot = new Vegetable('carrot');
console.log(carrot) // => should be an object
console.log(carrot.sebzeIsmi); // => should be 'carrot'

//--------------------
// Use getters and setters to Control Access to an Object

/* Question
Use class keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.

Now create getter and setter in the class, to obtain the temperature in Celsius scale.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit scale, and C is the value of the same temperature in Celsius scale

Note:
When you implement this, you would be tracking the temperature inside the class in one scale - either Fahrenheit or Celsius.

This is the power of getter or setter - you are creating an API for another user, who would get the correct result, no matter which one you track.

In other words, you are abstracting implementation details from the consumer.
*/

/* Alter code below this line */
class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }

    //getter
    get temperature() {
        return 5/9 * (this.fahrenheit - 32)
    }
    
    //setter
    set temperature(celsius) {
        this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}
/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale

console.log(thermos)
let temp = thermos.temperature; // 24.44 in C
console.log(temp); // 24.44

thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

//--------------------
// Create a Module Script

/* Question
Add a script to the HTML document of type module and give it the source file of index.js
*/

/*
<html>
  <body>
    <!-- add your code below -->
    <script type="module" src="index.js"></script>
    <!-- add your code above -->
  </body>
</html>
*/

//--------------------
// Use export to Share a Code Block

/* Question
There are two functions related to strings in the editor. Export both of them using the method of your choice.
*/

const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }

  //export { uppercaseString, lowercaseString}

  //--------------------
// Reuse Javascript Code Using import

/* Question
Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in the same directory as the current file.
*/

//import {uppercaseString, lowercaseString} from './string_functions.js'
// add code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

//--------------------
// Use * to Import Everything from a File

/* Question
The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. Use the import * as syntax to import everything from the file into an object called stringFunctions.
*/

//import * as stringFunctions from './string_functions.js'
// add code above this line

//stringFunctions.uppercaseString("hello");
//stringFunctions.lowercaseString("WORLD!");

//--------------------
// Create an Export Fallback with export default

/* Question
The following function should be the fallback value for the module. Please add the necessary code to do so.
*/

export default function subtract(x, y) {
    return x - y;
  }

//--------------------
// Import a Default Export

/* Question
In the following code, import the default export from the math_functions.js file, found in the same directory as this file. Give the import the name subtract.
*/

// import subtract from './math_functions.js'
// add code above this line

// subtract(7,4);

//--------------------
// Create a JavaScript Promise

/* Question
Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters to the constructor.
*/

const makeServerRequest = new Promise((resolve, reject) =>{
    
})

//--------------------
// Complete a Promise with resolve and reject

/* Question
Make the promise handle success and failure. If responseFromServer is true, call the resolve method to successfully complete the promise. Pass resolve a string with the value We got the data. If responseFromServer is false, use the reject method instead and pass it the string: Data not received.
*/


const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data")
    } else {  
      reject("Data not received")
    }
  });