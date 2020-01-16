console.log("--------HELLO FROM REACT AND REDUX----------")





//--------------------
// Getting Started with React Redux

/******** Question
Start with a DisplayMessages component. Add a constructor to this component and initialize it with a state that has two properties: input, that's set to an empty string, and messages, that's set to an empty array.
*/

/********* Answer
class DisplayMessages extends React.Component {
  // change code below this line
  constructor(props) {
    super(props)

    this.state = {
      input:'',
      messages: []
    }
  }

  
  // change code above this line
  render() {
    return <div />
  }
};

*/