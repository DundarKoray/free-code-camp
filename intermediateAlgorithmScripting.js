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
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


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