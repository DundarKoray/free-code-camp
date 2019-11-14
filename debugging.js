console.log("Hello from Debugging.")

//--------------------
// Use the JavaScript Console to Check the Value of a Variable

/* Question
Use the console.log() method to print the value of the variable a where noted in the code.
*/

let a1 = 5;
let b1 = 1;
a1++;
// Add your code below this line


let sumAB = a + b1;
console.log(sumAB); // 7
console.log(a1) // 6

//--------------------
// Use typeof to Check the Type of a Variable

/* Question
Add two console.log() statements to check the typeof each of the two variables seven and three in the code.
*/

let seven = 7;
let three = "3";
// Add your code below this line
console.log(typeof seven) // number
console.log(typeof three) // string

//--------------------
// Catch Misspelled Variable and Function Names

/*
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);

*/

/* Question
Fix the two spelling errors in the code so the netWorkingCapital calculation works.
*/

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;

console.log(`Net working capital is: ${netWorkingCapital}`)

//NOTE "s" was missing at the end of payable line 39

//--------------------
// Catch Unclosed Parentheses, Brackets, Braces and Quotes

/*
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current => previous + current);
console.log(`Sum of array values is: ${arraySum}`);
*/

/* Question
Fix the two pair errors in the code.
*/

let myArray1 = [1, 2, 3];
let arraySum = myArray1.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`); // Sum of array values is: 6