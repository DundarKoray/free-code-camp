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