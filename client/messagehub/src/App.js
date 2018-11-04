import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Tip from './components/Tip/Tip';
import Messages from './components/Tip/Messages/Message';
import ListofMessages from './components/Tip/Messages/ListofMessages';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ListofMessages />
      </div>
    );
  }
}

export default App;
