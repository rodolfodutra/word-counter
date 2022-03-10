import React, { Component } from 'react';
import MainArea from './components/MainArea';
import SideBar from './components/SideBar';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
    }; 
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>Word Counter</h1>
        <div className="container">
          <MainArea text={this.state.text} 
            handleTextChange={this.handleTextChange} />
          <SideBar text={this.state.text} />
        </div>
      </div>
    );
  }
}

export default App;