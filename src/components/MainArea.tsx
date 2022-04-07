import React, { Component } from "react";
import InformationBar from "./InformationBar";
import "./MainArea.scss";

type MainAreaProps = {
  text: string, 
  words: string[],
  handleTextChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

class MainArea extends Component<MainAreaProps> {
  render() {
    return (
      <div className="MainArea">
        <InformationBar text={this.props.text} words={this.props.words} />
        <textarea
          autoFocus
          placeholder="Write or post here your text."
          value={this.props.text}
          onChange={this.props.handleTextChange}
        />
      </div>
    );
  }
}

export default MainArea;
