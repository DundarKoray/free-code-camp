/*
import React from "react";
import "./styles.css";
import data from "./data";
import Drum from "./drum";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Press a key to make a sound, or click one of the buttons"
    };

    this.handleText = this.handleText.bind(this);
  }

  handleText(text) {
    this.setState({
      text: text
    });
  }

  render() {
    return (
      <div id="drum-machine">
        <h1 id="display">{this.state.text}</h1>
        <div className="drum-pads">
          {data.map((item, key) => (
            <Drum
              id={item.id}
              key={item.id}
              letter={item.letter}
              url={item.src}
              handleText={this.handleText}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default DrumMachine;




import React from "react";
import "./styles.css";

class Drum extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick() {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleText(this.props.id);
  }

  handleKeyDown(event) {
    if (event.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleText(this.props.letter);
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div
        className="drum-pad"
        id={this.props.id}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
      >
        <p>{this.props.letter}</p>
        <audio
          className="clip"
          ref={input => (this.audio = input)}
          id={this.props.id}
          src={this.props.url}
        />
      </div>
    );
  }
}

export default Drum;




*/