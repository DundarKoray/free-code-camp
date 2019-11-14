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

//--------------------
// Match Characters that Occur Zero or More Times

/* Question
For this challenge, chewieQuote has been initialized as "Aaaaaaaaaaaaaaaarrrgh!" behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase "A" character immediately followed by zero or more lowercase "a" characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.
*/

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Only change this line
let result15 = chewieQuote.match(chewieRegex);

console.log(result15)
// ["Aaaaaaaaaaaaaaaa", index: 0, input: "Aaaaaaaaaaaaaaaarrrgh!", groups: undefined]

//--------------------
// Find Characters with Lazy Matching

/* Question
Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.
*/

let text = "<h1>Winter is coming</h1>";
let myRegex16 = /<h1>?/; // Change this line
let result16 = text.match(myRegex16);

console.log(result16)
// ["<h1>", index: 0, input: "<h1>Winter is coming</h1>", groups: undefined]

//--------------------
// Match Beginning String Patterns

/* Question
Use the caret character in a regex to find "Cal" only in the beginning of the string rickyAndCal.
*/

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let calRegex1 = /^Ricky/; // Change this line
let result17 = rickyAndCal.match(calRegex);
let result18 = rickyAndCal.match(calRegex1);

console.log(result17)
console.log(result18) // null

//--------------------
// Match All Letters and Numbers

/* Question
Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
*/

let quoteSample4 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result19 = quoteSample4.match(alphabetRegexV2).length;

console.log(result19)  // 31

//--------------------
// Match Everything But Letters and Numbers

/* Question
Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.
*/

let quoteSample5 = "The five % boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result20 = quoteSample5.match(nonAlphabetRegex).length;

console.log(result20) // 8 (7spaces plus %)

//--------------------
// Match All Numbers

/* Question
Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.
*/

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result21 = movieName.match(numRegex).length;

console.log(result21) // 4

//--------------------
// Match All Non-Numbers

/* Question
Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.
*/

let movieName1 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result22 = movieName1.match(noNumRegex).length;

console.log(result22) // 17

//--------------------
// Specify Upper and Lower Number of Matches

/* Question
Change the regex ohRegex to match the entire phrase "Oh no" only when it has 3 to 6 letter h's.
*/

let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i; // Change this line
let result23 = ohRegex.test(ohStr);

console.log(result23) // true

//--------------------
// Specify Only the Lower Number of Matches

/* Question
Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.
*/

let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/i; // Change this line
let result24 = haRegex.test(haStr);

console.log(result24); // true

//--------------------
// Specify Exact Number of Matches

/* Question
Change the regex timRegex to match the word "Timber" only when it has four letter m's.
*/

let timStr = "Timmmmber";
let timRegex = /tim{4}ber/i; // Change this line
let result25 = timRegex.test(timStr);

console.log(result25) // true   

//--------------------
// Check for All or None

/* Question
Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.
*/

let favWordAmerican = "favorite";
let favWordBritish = "favourite";
let favRegex = /favou?rite/; // Change this line
let result26 = favRegex.test(favWordAmerican);
let result27 = favRegex.test(favWordBritish);

console.log(result26) //ture
console.log(result27) //ture

//--------------------
// Positive and Negative Lookahead

/* Question
Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.
*/

let sampleWord28 = "astronaut";
let pwRegex = /^(?=\w{6,})(?=\D*\d{2})/; // Change this line
let result28 = pwRegex.test(sampleWord28);

//--------------------
// Check For Mixed Grouping of Characters

/* Question
Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.
*/

let myString29 = "Eleanor D. Roosevelt";
let myRegex29 = /(Franklin|Eleanor)*Roosevelt/g; // Change this line
let result29 = myRegex29.test(myString29); // Change this line

console.log(result29)
// After passing the challenge experiment with myString and see how the grouping works

//--------------------
// Reuse Patterns Using Capture Groups

/* Question
Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.
*/

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result30 = reRegex.test(repeatNum);

console.log(result30)

//--------------------
// Use Capture Groups to Search and Replace

/* Question
Write a regex so that it will search for the string "good". Then update the replaceText variable to replace "good" with "okey-dokey".
*/

let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result31 = huhText.replace(fixRegex, replaceText);

console.log(result31) // This sandwich is okey - dokey.