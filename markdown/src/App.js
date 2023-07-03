// https://github.com/remarkjs/react-markdown#use
import React from "react";
import ReactMarkdown from "react-markdown";
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown:"# 🌸 Welcome to PinkMark! 🌸",
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    return (
      <div className="App" >
        <div className="input-div">
          <textarea
            className="input"
            value={this.state.markdown}
            onChange={(e) => {
              this.updateMarkdown(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="verLine"></div>
        <div className="output-div">
        <ReactMarkdown>{this.state.markdown}</ReactMarkdown>
        </div>
      </div>
    );
  }
}
