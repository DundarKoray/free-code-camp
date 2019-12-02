console.log("--------HI FROM INTERMEDIATE ALGORITHM SCRIPTING----------")

//--------------------
// Sum All Numbers in a Range


/* Question
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
    let sortArr = arr.sort((a,b) => a- b)
    
    let smallestNum = sortArr[0]
    console.log(smallestNum) 

    let biggestNum = sortArr[sortArr.length -1];
    console.log(biggestNum)

    let sumNums = 0;
    for(let i = smallestNum; i <= biggestNum; i++){
        sumNums += i
    }

    return sumNums

}
  
  console.log(sumAll([6, 4])); //15
  console.log(sumAll([7, 3])); //25

//--------------------
// Diff Two Arrays


/* Question
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Note
You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    var newArr = [];
    var uniqueArr = []
    // Same, same; but different.
    newArr = [...arr1, ...arr2]

    console.log(newArr)
    newArr.map((num) => {
        if ( newArr.indexOf(num) === newArr.lastIndexOf(num)){
            uniqueArr.push(num)
        }
    })

    return uniqueArr
    
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]


//--------------------
// Seek and Destroy


/* Question
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/

function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
  
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < args.length; j++) {
        if (arr[i] === args[j]) {
          delete arr[i];
        }
      }
    }
    return arr.filter(Boolean);
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//--------------------
// Wherefore art thou


/* Question
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

function whatIsInAName(collection, source) {
    // What's in a name?
    var srcKeys = Object.keys(source);
    console.log(srcKeys)
    // Only change code below this line
    return collection.filter((obj) => {
        return srcKeys.map((key)=> {
            return obj.hasOwnProperty(key) && obj[key] === source[key]
        }).reduce((a,b)=> {
            return a && b
        })
    })

  
    // Only change code above this line
    
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

//--------------------
// Spinal Tap Case


/* Question
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase()
}

console.log(spinalCase('ThisIs_Spinal Tap'));

//--------------------
// Pig Latin


/* Question
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

If a word does not contain a vowel, just add "ay" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

console.log(translatePigLatin("consonant"));


//--------------------
// Search and Replace


/* Question
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
  const myArr = str.split(" ");
  const [wordToReplace] = myArr.filter(item => item === before);
  return wordToReplace[0].toUpperCase() !== wordToReplace[0]
    ? myArr.map(item => (item === before ? after : item)).join(" ")
    : myArr
        .map(item =>
          item === before ? after[0].toUpperCase() + after.slice(1) : item
        )
        .join(" ");
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));


//--------------------
// DNA Pairing


/* Question
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

console.log(pairElement("GCG"));
console.log(pairElement("GTC"));

//--------------------
// Missing letters


/* Question
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);
    // console.log(code)
    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");


//--------------------
// Sorted Union


/* Question
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(...arrays) {
  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);

  // create a Set which clears any duplicates since it's a regulat set and not a multiset
  return [...new Set(flatArray)];
}

// test here

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//--------------------
// Convert HTML Entities


/* Question
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  let temp = str.split("")

  for(let i = 0; i < str.length; i++) {
    switch(temp[i]){
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }

  }
  return temp.join("")
  
}

console.log(convertHTML("Dolce & Gabbana"));



//--------------------
// Sum All Odd Fibonacci Numbers


/* Question
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }

    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
sumFibs(4);

//--------------------
// Sum All Primes


/* Question
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/

function sumPrimes(num) {
  var res = 0;

  // Function to get the primes up to max in an array
  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }

  // Add the primes
  var primes = getPrimes(num);
  for (var p = 0; p < primes.length; p++) {
    res += primes[p];
  }

  return res;
}

// test here
sumPrimes(10);

console.log(sumPrimes(10)); // 17

//--------------------
// Smallest Common Multiple


/* Question
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
  let maxNum = Math.max(...arr) //5
  
  let minNum = Math.min(...arr)  //1
  
  let solution = maxNum
  

  for (let i = maxNum -1; i >= minNum; i--) {
    if(solution % i){
      solution += maxNum
      i = maxNum;
    }
  }

  return solution

}


console.log(smallestCommons([1,5]));

//--------------------
// Drop it


/* Question
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
  // drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});

dropElements([1, 2, 3], function(n) {return n < 3; });



//--------------------
// Steamroller


/* Question
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  while (arr.some(element => Array.isArray(element))) {
    arr = arr.flat();
  }
  return arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
// (4) [1, 2, 3, 4]


//--------------------
// Binary Agents


/* Question
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/


function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = []

  for (let i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }
  return uniString.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//--------------------
// Everything Be True


/* Question
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/

function truthCheck(collection, pre) {
  return collection.every(function(element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

// test here
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


//--------------------
// Arguments Optional


/* Question
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/


function addTogether() {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== "number")
    ? undefined
    : args.length > 1
    ? args.reduce((acc, n) => (acc += n), 0)
    : n => (typeof n === "number" ? n + args[0] : undefined);
}

addTogether(2,3);