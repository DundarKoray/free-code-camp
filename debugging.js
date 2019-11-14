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

//--------------------
// Catch Mixed Usage of Single and Double Quotes

/*
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);
*/

/* Question
Fix the string so it either uses different quotes for the href value, or escape the existing ones. Keep the double quote marks around the entire string.
*/

let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml); // <p>Click here to <a href="#Home">return home</a></p>

// Solution Note: Changed "#Home" to '#Home'

//--------------------
// Catch Use of Assignment Operator Instead of Equality Operator

/*
let x = 7;
let y = 9;
let result33 = "to come";

if (x = y) {
    result33 = "Equal!";

} else {
    result33 = "Not equal!";

}

console.log(result33); 
*/

/* Question
Fix the condition so the program runs the right branch, and the appropriate value is assigned to result.
*/
let x = 7;
let y = 9;
let result33 = "to come";

if (x == y) {
    result33 = "Equal!";

} else {
    result33 = "Not equal!";

}

console.log(result33); //Not Equal

//SOLUTION NOTE: Equal mark changed from "=" to "=="

//--------------------
// Catch Missing Open and Closing Parenthesis After a Function Call

/*
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);
*/

/* Question
Fix the code so the variable result is set to the value returned from calling the function getNine.
*/

function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}

let result34 = getNine();
console.log(result34); // 9

// Solution Note: function was called wrong, changed getNine to getNine()

