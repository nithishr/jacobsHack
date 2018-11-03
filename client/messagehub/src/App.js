import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tooltip from './components/Tooltip.js';
import Main from './components/Main.js';
import Header from './components/Header.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Tooltip />

      </div>
    );
  }
}

export default App;
