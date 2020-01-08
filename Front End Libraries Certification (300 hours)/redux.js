console.log("--------HELLO FROM REDUX----------")




//--------------------
// Create a Redux Store

/******** Question
The Redux store is an object which holds and manages application state. There is a method called createStore() on the Redux object, which you use to create the Redux store. This method takes a reducer function as a required argument. The reducer function is covered in a later challenge, and is already defined for you in the code editor. It simply takes state as an argument and returns state.

Declare a store variable and assign it to the createStore() method, passing in the reducer as an argument.

Note: The code in the editor uses ES6 default argument syntax to initialize this state to hold a value of 5. If you're not familiar with default arguments, you can refer to the ES6 section in the Curriculum which covers this topic.
*/

/********* Answer
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store = Redux.createStore(reducer)
*/










//--------------------
// Get State from the Redux Store

/******** Question
The code from the previous challenge is re-written more concisely in the code editor. Use store.getState() to retrieve the state from the store, and assign this to a new variable currentState.
*/

/********* Answer
const store = Redux.createStore(
  (state = 5) => state
);

// change code below this line
const currentState = store.getState()
}
*/









//--------------------
// Define a Redux Action

/******** Question
Writing a Redux action is as simple as declaring an object with a type property. Declare an object action and give it a property type set to the string 'LOGIN'.
*/

/********* Answer
// Define an action here:
const action = {
    type: 'LOGIN'
}
*/