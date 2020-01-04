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






//--------------------
// Compose React Components

/******** Question
In the code editor, the TypesOfFood component is already rendering a component called Vegetables. Also, there is the Fruits component from the last challenge.

Nest two components inside of Fruits — first NonCitrus, and then Citrus. Both of these components are provided for you in the background. Next, nest the Fruits class component into the TypesOfFood component, below the h1 header and above Vegetables. The result should be a series of nested components, which uses two different component types.
*/

/********* Answer
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus />
        <Citrus />
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};
*/









//--------------------
// Render a Class Component to the DOM

/******** Question
Both the Fruits and Vegetables components are defined for you behind the scenes. Render both components as children of the TypesOfFood component, then render TypesOfFood to the DOM. There is a div with id='challenge-node' available for you to use.
*/

/********* Answer
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};

// change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"))
*/







//--------------------
// Write a React Component from Scratch

/******** Question
Define a class MyComponent that extends React.Component. Its render method should return a div that contains an h1 tag with the text: My First React Component! in it. Use this text exactly, the case and punctuation matter. Make sure to call the constructor for your component, too.

Render this component to the DOM using ReactDOM.render(). There is a div with id='challenge-node' available for you to use.
*/

/********* Answer
// change code below this line
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> 
                <h1>My First React Component!</h1>
            </div>
        )
    }
}

ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"))
*/







//--------------------
// Pass Props to a Stateless Functional Component

/******** Question
There are Calendar and CurrentDate components in the code editor. When rendering CurrentDate from the Calendar component, pass in a property of date assigned to the current date from JavaScript's Date object. Then access this prop in the CurrentDate component, showing its value within the p tags. Note that for prop values to be evaluated as JavaScript, they must be enclosed in curly brackets, for instance date={Date()}.
*/

/********* Answer
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date} </p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} />
      </div>
    );
  }
};
*/





//--------------------
// Pass an Array as Props

/******** Question
There are List and ToDo components in the code editor. When rendering each List from the ToDo component, pass in a tasks property assigned to an array of to-do tasks, for example ["walk dog", "workout"]. Then access this tasks array in the List component, showing its value within the p element. Use join(", ") to display the props.tasksarray in the p element as a comma separated list. Today's list should have at least 2 tasks and tomorrow's should have at least 3 tasks.
*/

/********* Answer
const List = (props) => {
  return <p>{props.tasks.join(", ")}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["walk dog", "make breakfast", "take a shower"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["go for run", "shower", "breakfast"]}/>
      </div>
    );
  }
};
*/







//--------------------
// Use Default Props

/******** Question
The code editor shows a ShoppingCart component. Define default props on this component which specify a prop items with a value of 0.
*/

/********* Answer
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// change code below this line
ShoppingCart.defaultProps = { items: 0}
*/






//--------------------
// Override Default Props

/******** Question
The ShoppingCart component now renders a child component Items. This Items component has a default prop quantity set to the integer 0. Override the default prop by passing in a value of 10 for quantity.

Note: Remember that the syntax to add a prop to a component looks similar to how you add HTML attributes. However, since the value for quantity is an integer, it won't go in quotes but it should be wrapped in curly braces. For example, {100}. This syntax tells JSX to interpret the value within the braces directly as JavaScript.
*/

/********* Answer
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={10} />
  }
};
*/


//--------------------
// Use PropTypes to Define the Props You Expect

/******** Question
Define propTypes for the Items component to require quantity as a prop and verify that it is of type number.
*/

/********* Answer
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// change code below this line
Items.propTypes = {quantity: PropTypes.number.isRequired}
// change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
*/






//--------------------
// Access Props Using this.props

/******** Question
Render an instance of the ReturnTempPassword component in the parent component ResetPassword. Here, give ReturnTempPassword a prop of tempPassword and assign it a value of a string that is at least 8 characters long. Within the child, ReturnTempPassword, access the tempPassword prop within the strong tags to make sure the user sees the temporary password.
*/

/********* Answer
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          <ReturnTempPassword tempPassword="abcdabcd" />
        </div>
    );
  }
};

*/






//--------------------
// Review Using Props with Stateless Functional Components

/******** Question
The code editor has a CampSite component that renders a Camper component as a child. Define the Camper component and assign it default props of { name: 'CamperBot' }. Inside the Camper component, render any code that you want, but make sure to have one p element that includes only the name value that is passed in as a prop. Finally, define propTypes on the Camper component to require name to be provided as a prop and verify that it is of type string.
*/

/********* Answer
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
};
// change code below this line

const Camper = (props) => {
  return (
    <div> 
    <h1>Camper Names</h1>
      <p>{props.name}</p>
    </div>
  )
}

Camper.defaultProps = {
  name: 'CamperBot'
}

Camper.propTypes = {
  name: PropTypes.string.isRequired
}
*/





//--------------------
// Create a Stateful Component

/******** Question
There is a component in the code editor that is trying to render a name property from its state. However, there is no state defined. Initialize the component with state in the constructor and assign your name to a property of name.
*/

/********* Answer
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
      name: 'Koray Dündar'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
*/