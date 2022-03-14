import React, { Component } from 'react';
import MainArea from './components/MainArea';
import SideBar from './components/SideBar';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      words: []
    }; 
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    const newText = event.target.value
    const newWords = newText.match(/[a-zA-Z_-]+/g) || []
    this.setState({
      text: newText, 
      words: newWords,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Word Counter</h1>
        <div className="container">
          <MainArea 
            text={this.state.text}
            words={this.state.words} 
            handleTextChange={this.handleTextChange} />
          <SideBar words={this.state.words}  />
        </div>
      </div>
    );
  }
}

export default App;