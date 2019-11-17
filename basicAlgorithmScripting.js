console.log("--------HELLO FROM BASIC ALGORITHM SCRIPTING----------")

//--------------------
// Convert Celsius to Fahrenheit


/* Question
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
*/

function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = (celsius * 9/5) + 32
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
    reversedArray= str.split("").reverse().join("");
    
    return `Here is reverse of "${str}": ${reversedArray}`;
}
  
console.log(reverseString("hello")); // olleh