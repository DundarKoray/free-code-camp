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
let result3 = waldoRegex.test(waldoIsHiding); 

console.log(result3) // true

//--------------------
// Match a Literal String with Different Possibilities

/* Question
Complete the regex petRegex to match the pets "dog", "cat", "bird", or "fish".
*/

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result4 = petRegex.test(petString);

console.log(result4) // true

//--------------------
// Ignore Case While Matching

/* Question
Write a regex fccRegex to match "freeCodeCamp", no matter its case. Your regex should not match any abbreviations or variations with spaces.
*/

let myString1 = "freeCodeCamp";
let fccRegex = /FREEcOdEcaMP/i; // Change this line
let result5 = fccRegex.test(myString1);

console.log(result5) // true

//--------------------
// Extract Matches

/* Question
Apply the .match() method to extract the word coding.
*/

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result6 = extractStr.match(codingRegex); // Change this line

console.log(result6) // ["coding", index: 18, input: "Extract the word 'coding' from this string.", groups: undefined]

//--------------------
// Find More Than the First Match

/* Question
Using the regex starRegex, find and extract both "Twinkle" words from the string twinkleStar.

Note
You can have multiple flags on your regex like /search/gi
*/

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result7 = twinkleStar.match(starRegex); // Change this line

console.log(result7) // (2) ["Twinkle", "twinkle"]

//--------------------
// Match Anything with Wildcard Period

/* Question
Complete the regex unRegex so that it matches the strings "run", "sun", "fun", "pun", "nun", and "bun". Your regex should use the wildcard character.
*/

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let result8 = unRegex.test(exampleStr);

console.log(result8) //true