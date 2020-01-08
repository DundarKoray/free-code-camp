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













//--------------------
// Define an Action Creator

/******** Question
Define a function named actionCreator() that returns the action object when called.
*/

/********* Answer
const action = {
  type: 'LOGIN'
}
// Define an action creator here:

const actionCreator = (action) => {
  return action
}
*/








//--------------------
// Dispatch an Action Event

/******** Question
The Redux store in the code editor has an initialized state that's an object containing a login property currently set to false. There's also an action creator called loginAction() which returns an action of type LOGIN. Dispatch the LOGIN action to the Redux store by calling the dispatch method, and pass in the action created by loginAction().
*/

/********* Answer
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction())
*/













//--------------------
// Handle an Action in the Store

/******** Question
The code editor has the previous example as well as the start of a reducer function for you. Fill in the body of the reducer function so that if it receives an action of type 'LOGIN' it returns a state object with login set to true. Otherwise, it returns the current state. Note that the current state and the dispatched action are passed to the reducer, so you can access the action's type directly with action.type.
*/

/********* Answer
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // change code below this line
  if(action.type == 'LOGIN') {
    return {
      login: true
    }
  }else {
    return state
  }
  // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

*/