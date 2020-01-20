/*
https://codesandbox.io/embed/markdown-previewer-di6ys?fontsize=14&hidenavigation=1&theme=dark
*/

/*
import React from "react";

import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

let marked = require("marked");

class MarkedDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: ""
    };

    this.updateMarkdown = this.updateMarkdown.bind(this);
  }

  updateMarkdown(event) {
    event.preventDefault();
    this.setState({
      markdown: event.target.value
    });
  }

  render() {
    let { markdown } = this.state;
    console.log(markdown);

    return (
      <div>
        <div>
          <h1>Markdown Input</h1>

          <textarea
            placeholder="Enter Markdown such as ## (H1 size)"
            id="editor"
            value={markdown}
            onChange={this.updateMarkdown}
            type="text"
          />
        </div>
        <div>
          <h1>Markdown Output</h1>
          <div id="preview">{marked(this.state.markdown)}</div>
          <div />
        </div>
      </div>
    );
  }
}

export default MarkedDown;
*/