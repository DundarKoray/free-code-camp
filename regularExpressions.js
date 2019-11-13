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

//--------------------
// Match Single Character with Multiple Possibilities

/* Question
Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

Note
Be sure to match both upper- and lowercase vowels.
*/

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result9 = quoteSample.match(vowelRegex); // Change this line

console.log(result9)
//(25) ["e", "a", "e", "o", "u", "i", "e", "a", "o", "e", "o", "e", "I", "a", "e", "o", "o", "e", "i", "o", "e", "o", "i", "e", "i"]

/* Question
you want to match "bag", "big", and "bug" but not "bog". Create the regex /to do this. 

Note
The [aiu] is the character class that will only match the characters "a", "i",or "u".
*/

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[iau]g/

console.log(bigStr.match(bgRegex)); // Returns ["big"]
console.log(bagStr.match(bgRegex)); // Returns ["bag"]
console.log(bugStr.match(bgRegex)); // Returns ["bug"]
console.log(bogStr.match(bgRegex)); // Returns null

//--------------------
// Match Letters of the Alphabet

/* Question
Match all the letters in the string quoteSample.

Note
Be sure to match both upper- and lowercase letters.
*/

let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result10 = quoteSample1.match(alphabetRegex); // Change this line

console.log(result10);


//--------------------
// Match Numbers and Letters of the Alphabet

/* Question
Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.
*/

let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/ig; // Change this line
let result11 = quoteSample2.match(myRegex2); // Change this line

console.log(result11)
// (17) ["l", "r", "r", "3", "4", "5", "2", "6", "5", "3", "s", "r", "l", "i", "i", "o", "s"]

//--------------------
// Match Single Characters Not Specified

/* Question
Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
*/

let quoteSample3 = "3 blind mice.";
let myRegex3 = /[^0-9aeoui]/g; // Change this line
let result12 = quoteSample3.match(myRegex3); // Change this line

console.log(result12) // (9) [" ", "b", "l", "n", "d", " ", "m", "c", "."]

//--------------------
// Match Characters that Occur One or More Times

/* Question
You want to find matches when the letter s occurs one or more times in "Mississippi". Write a regex that uses the + sign.
*/

let difficultSpelling = "Mississippi";
let myRegexA = /s+/gi; // Change this line
let myRegexB = /s/gi; // Change this line
let result13 = difficultSpelling.match(myRegexA);
let result14 = difficultSpelling.match(myRegexB);


console.log(result13) // (2) ["ss", "ss"]
console.log(result14) // (2) ["s", "s", "s", "s"]