import React, { Component } from 'react';
import { Input } from './Input';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Mortgage Calculator</h1>
        <Input />
      </div>
    );
  }
}

export default App;
