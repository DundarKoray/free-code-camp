console.log("--------HI FROM REGULAR EXPRESSIONS----------")

//--------------------
// Using the Test Method

/* Question
Apply the regex myRegex on the string myString using the .test() method.
*/

let myString = "Hello, World!";
let myRegex = /Hello/;
let result2 = myRegex.test(myString); // Change this line

console.log("Does Hello exists in myString?: ", result2) // true

//--------------------
// Match Literal Strings

/* Question
Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.
*/

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result3 = waldoRegex.test(waldoIsHiding); // true

console.log(result3)