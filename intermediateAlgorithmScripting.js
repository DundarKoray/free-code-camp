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
