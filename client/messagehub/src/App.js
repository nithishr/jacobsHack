import React, { Component } from 'react';
import './App.css';
import Main from './components/Main.js';
import Header from './components/Header.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
