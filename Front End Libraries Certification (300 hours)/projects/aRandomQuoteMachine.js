/*
import React from "react";

class RandomQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      quotes: [
        {
          quote:
            "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
          author: "Dr. Suess"
        },
        {
          quote:
            "I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.",
          author: "Marilyn Monroe"
        },
        {
          quote: "Get busy living or get busy dying.",
          author: "Stephen King"
        },
        {
          quote:
            "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
          author: "Mark Caine"
        },
        {
          quote:
            "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
          author: "Helen Keller"
        }
      ]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.quotes.length);
    // change code below this line
    if (this.state.count >= this.state.quotes.length - 1) {
      this.setState({
        count: 0
      });
    } else {
      this.setState({
        count: this.state.count + 1
      });
    }

    // change code above this line
  }

  render() {
    return (
      <div id="quote-box">
        <h1 id="text">"{this.state.quotes[this.state.count].quote}"</h1>
        <h1 id="author">-{this.state.quotes[this.state.count].author}</h1>
        <button id="new-quote" onClick={this.handleClick}>
          Next Quote
        </button>
        <a href="twitter.com/intent/tweet" id="tweet-quote">
          Share
        </a>
      </div>
    );
  }
}

export default RandomQuote;
*/