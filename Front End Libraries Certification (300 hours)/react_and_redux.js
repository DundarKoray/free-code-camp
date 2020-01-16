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














//--------------------
// Extract State Logic to Redux

/******** Question
First, define an action type 'ADD' and set it to a const ADD. Next, define an action creator addMessage() which creates the action to add a message. You'll need to pass a message to this action creator and include the message in the returned action.

Then create a reducer called messageReducer() that handles the state for the messages. The initial state should equal an empty array. This reducer should add a message to the array of messages held in state, or return the current state. Finally, create your Redux store and pass it the reducer.
*/

/********* Answer
// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

const addMessage = (message) => {
    return {
        type: ADD,
        message
    }
}

const messageReducer = (previousState = [], action) => {
    switch(action.type){
        case ADD:
            return [action.message]
            break;

        default:
            return previousState
    }
} 


const store = Redux.createStore(messageReducer);
*/
















//--------------------
// Use Provider to Connect Redux to React

/******** Question
The code editor now shows all your Redux and React code from the past several challenges. It includes the Redux store, actions, and the DisplayMessages component. The only new piece is the AppWrapper component at the bottom. Use this top level component to render the Provider from ReactRedux, and pass the Redux store as a prop. Then render the DisplayMessages component as a child. Once you are finished, you should see your React component rendered to the page.

Note: React Redux is available as a global variable here, so you can access the Provider with dot notation. The code in the editor takes advantage of this and sets it to a constant Provider for you to use in the AppWrapper render method.
*/

/********* Answer
// Redux Code:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React Code:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const currentMessage = this.state.input;
    this.setState({
      input: '',
      messages: this.state.messages.concat(currentMessage)
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // render the Provider here
  render() {
    return(
      <Provider store={store}> 
        <DisplayMessages/>
      </Provider>
    )
  }
  // change code above this line
};

*/