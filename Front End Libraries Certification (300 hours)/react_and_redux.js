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










//--------------------
// Manage State Locally First

/******** Question
First, in the render() method, have the component render an input element, button element, and ul element. When the input element changes, it should trigger a handleChange() method. Also, the input element should render the value of input that's in the component's state. The button element should trigger a submitMessage() method when it's clicked.

Second, write these two methods. The handleChange() method should update the input with what the user is typing. The submitMessage() method should concatenate the current message (stored in input) to the messages array in local state, and clear the value of the input.

Finally, use the ul to map over the array of messages and render it to the screen as a list of li elements.
*/

/********* Answer
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      messages: []
    }

    this.submitMessage = this.submitMessage.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  // add handleChange() and submitMessage() methods here
  submitMessage(event) {
    event.preventDefault()
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    })
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        
        <ul>{this.state.messages.map(message => {
            return <li>{message}</li>
          })}</ul>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type='submit' onClick={this.submitMessage}>Submit</button>
          
        </div>
      );
    }
  };
  
*/