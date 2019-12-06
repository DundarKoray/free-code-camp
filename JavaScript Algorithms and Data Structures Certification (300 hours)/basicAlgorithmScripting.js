console.log("--------HELLO FROM BASIC ALGORITHM SCRIPTING----------")

//--------------------
// Convert Celsius to Fahrenheit


/* Question
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
*/

function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = (celsius * 9 / 5) + 32
    return `${celsius}°C is ${fahrenheit}°F.`;
}

console.log(convertToF(30)); // 30°C is 86°F.

//--------------------
// Reverse a String


/* Question
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/


function reverseString(str) {
    let reversedArray = [];
    reversedArray = str.split("").reverse().join("");

    return `Here is reverse of "${str}": ${reversedArray}`;
}

console.log(reverseString("hello")); // olleh

//--------------------
// Factorialize a Number


/* Question
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

function factorialize(num) {
    for (var product = 1; num > 0; num--) {
        product *= num;
    }
    return product;
}

factorialize(5);

//--------------------
// Find the Longest Word in a String


/* Question
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

// SOLUTION ONE

function findLongestWordLength1(str) {
    let strArray = []


    let strArrayLength = Math.max(...str.split(" ").map(item => {
        return item.length
    }))

    return strArrayLength
}

console.log(findLongestWordLength1("The quick brown fox jumped over the lazy dog")); // 6

// SOLUTION TWO

function findLongestWordLength2(str) {
    let words = str.split(" ");
    var maxLength = 0;

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length
        }
    }

    return maxLength;
}

console.log(findLongestWordLength2("The quick brown fox jumped over the lazy dog")); // 6


//--------------------
// Return Largest Numbers in Arrays


/* Question
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

function largestOfFour(arr) {
    // You can do this!
    let results = []

    for (let i = 0; i < arr.length; i++) {
        let largetsNumber = arr[i][0]
        console.log(largetsNumber)
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largetsNumber) {
                largetsNumber = arr[i][j]
            }
        }

        results[i] = largetsNumber;
    }
    return results;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); //(4) [5, 27, 39, 1001]

//--------------------
// Repeat a String Repeat a String


/* Question
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

// SOLUTION 1
function confirmEnding(str, target) {

    return str.slice(str.length - target.length) === target;

}

console.log(confirmEnding("Bastian", "n")); // true 
console.log(confirmEnding("Koray", "ray")); // true
console.log(confirmEnding("Emma", "say")); // false

// SOLUTION 2
function confirmEnding2(str, target) {
    return str.endsWith(target)
}

console.log(confirmEnding2("Koray", "ay")); // true

//--------------------
/* Question
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

*/

// SOLUTION 1
function repeatStringNumTimes(str, num) {
    // repeat after me
    let userInput = "";

    while (num > 0) {
        userInput += str
        num--
    }

    return userInput
}

console.log(repeatStringNumTimes("abc", 3)); // abcabcabc

// SOLUTION 2
function repeatStringNumTimes2(str, num) {
    return str.repeat(num)
}

console.log(repeatStringNumTimes2("Koray", 5)) //KorayKorayKorayKorayKoray


//--------------------
// Truncate a String

/* Question
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {
        return str.slice(0, num) + "...";
    }

    return str
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


//--------------------
// Finders Keepers

/* Question
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
*/

function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num
        }
    }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//--------------------
// Boo who

/* Question
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

// SOLUTION 1
function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    if (bool === true | bool === false) {
        return true;
    }
    return false;
}

console.log(booWho(null)); // false
console.log(booWho(false)); // true
console.log(booWho(true)); // true

// SOLUTION 2
function booWho2(bool) {
    if (typeof (bool) === "boolean") {
        return true;
    }
    return false;
}

console.log(booWho2(null)); // false
console.log(booWho2(true)); // true
console.log(booWho2(false)); // true


//--------------------
// Title Case a Sentence

/* Question
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/


function titleCase(str) {
    let strArray = str.toLowerCase().split(" ");
    let result = strArray.map((item => {
        return item.replace(item.charAt(0), item.charAt(0).toUpperCase())
    }))

    return result.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
// I'm A Little Tea Pot


//--------------------
// Slice and Splice

/* Question
You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/


function frankenSplice(arr1, arr2, n) {
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// [4, 1, 2, 3, 5, 6]

//--------------------
// Falsy Bouncer

/* Question
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

// SOLUTION 1
function bouncer(arr) {

    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArray.push(arr[i])
        }
    }

    return newArray
}

console.log(bouncer([7, "ate", "", false, 9])); // (3) [7, "ate", 9]
console.log(bouncer([undefined, null, 0, "", false, NaN])); // [ ]

// SOLUTION 2
function bouncer2(arr) {
    return arr.filter(Boolean)
}

console.log(bouncer2([7, "ate", "", false, 9])); // (3) [7, "ate", 9]
console.log(bouncer2([undefined, null, 0, "", false, NaN])); // [ ]


//--------------------
// Where do I Belong

/* Question
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/


function getIndexToIns(arr, num) {
    // Find my place in this sorted array.

    arr.sort((a, b) => {
        return a - b;
    })

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            return i
        }
    }

    return arr.length
}

console.log(getIndexToIns([40, 60], 50)); //1
console.log(getIndexToIns([40, 60, 70], 65)); //2
console.log(getIndexToIns([40, 60, 70], 40)); //2
console.log(getIndexToIns([40, 60, 70], 90)); //2

//--------------------
//Mutations

/* Question
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/


function mutation(arr) {
    let convertArr1 = arr[0].toLowerCase();
    let convertArr2 = arr[1].toLowerCase();

    for (let i = 0; i < convertArr2.length; i++) {
        if (convertArr1.indexOf(convertArr2[i]) < 0) {
            return false
        }
    }
    return true
}

console.log(mutation(["hello", "hel"])); // true
console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["Noel", "oel"])); // true
console.log(mutation(["Noel", "OEL"])); // true


//--------------------
//Chunky Monkey

/* Question
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
    // Break it up.
    var newArr = [];
    while (arr.length) {
        newArr.push(arr.splice(0, size));
    }
    return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

