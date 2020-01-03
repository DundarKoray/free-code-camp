console.log("--------HELLO FROM JQUERY----------")



//--------------------
// Create a Simple JSX Element

/******** Question
The current code uses JSX to assign a div element to the constant JSX. Replace the div with an h1 element and add the text Hello JSX! inside it.
*/

/********* Answer
const JSX = <h1>Hello JSX!</h1>;
*/



//--------------------
// Create a Complex JSX Element

/******** Question
The current code uses JSX to assign a div element to the constant JSX. Replace the div with an h1 element and add the text Hello JSX! inside it.
*/

/********* Answer
// write your code here
const JSX = <div> 
    <h1>TOGG electric car</h1>
    <p>Turkey introduces its first electric car which will be available by 2021</p>
    <ul>
        <li>Sedan</li>
        <li>SUV</li>
        <li>Hatchback</li>
    </ul>
</div>
*/





//--------------------
// Render HTML Elements to the DOM

/******** Question
The code editor has a simple JSX component. Use the ReactDOM.render() method to render this component to the page. You can pass defined JSX elements directly in as the first argument and use document.getElementById() to select the DOM node to render them to. There is a div with id='challenge-node' available for you to use. Make sure you don't change the JSX constant.
*/

/********* Answer
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line
ReactDOM.render(JSX, document.getElementById("challenge-node"))
*/





//--------------------
// Define an HTML Class in JSX

/******** Question
Apply a class of myDiv to the div provided in the JSX code.
*/

/********* Answer
const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);
*/





//--------------------
// Learn About Self-Closing JSX Tags

/******** Question
Fix the errors in the code editor so that it is valid JSX and successfully transpiles. Make sure you don't change any of the content - you only need to close tags where they are needed.
*/

/********* Answer
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);
*/






//--------------------
// Create a Stateless Functional Component

/******** Question
The code editor has a function called MyComponent. Complete this function so it returns a single div element which contains some string of text.

Note: The text is considered a child of the div element, so you will not be able to use a self-closing tag.
*/

/********* Answer
const MyComponent = function() {
  // change code below this line
  return (
  <div>Hello React</div>
  )

  // change code above this line
}

*/




//--------------------
// Create a React Component

/******** Question
MyComponent is defined in the code editor using class syntax. Finish writing the render method so it returns a div element that contains an h1 with the text Hello React!.
*/

/********* Answer
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
    return (
        <div><h1>Hello React!</h1></div>
    )


    // change code above this line
  }
};
*/








//--------------------
// Create a Component with Composition

/******** Question
In the code editor, there is a simple functional component called ChildComponent and a class component called ParentComponent. Compose the two together by rendering the ChildComponent within the ParentComponent. Make sure to close the ChildComponent tag with a forward slash.

Note: ChildComponent is defined with an ES6 arrow function because this is a very common practice when using React. However, know that this is just a function. If you aren't familiar with the arrow function syntax, please refer to the JavaScript section.
*/

/********* Answer
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent/>
      </div>
    );
  }
};
*/








//--------------------
// Use React to Render Nested Components

/******** Question
There are two functional components defined in the code editor, called TypesOfFruit and Fruits. Take the TypesOfFruit component and compose it, or nest it, within the Fruits component. Then take the Fruits component and nest it within the TypesOfFood component. The result should be a child component, nested within a parent component, which is nested within a parent component of its own!
*/

/********* Answer
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit/>
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits/>
      </div>
    );
  }
};

*/