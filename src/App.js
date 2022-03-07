import React, { Component } from 'react';
import MainArea from './components/MainArea';
import SideArea from './components/SideBar';
import './App.scss';

class App extends Component {
  state = {
    text: null,
  }

  render() {
    return (
      <div className="App">
        <h1>Word Counter</h1>
        <main>
          <MainArea text={this.state.text} />
          <SideArea text={this.state.text} />
        </main>
      </div>
    );
  }
}

export default App;