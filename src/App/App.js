import React, { Component } from 'react';
import './App.css';

import Welcome from '../Welcome/Welcome';

class App extends Component {
  state = {
    currentQuestion: null
  };


  render() {
    return (
      <div className="App">
        <Welcome />
        <h3>{this.state.hell}</h3>
      </div>
    );
  }
}

export default App;
