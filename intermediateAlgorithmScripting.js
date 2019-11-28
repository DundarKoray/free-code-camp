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