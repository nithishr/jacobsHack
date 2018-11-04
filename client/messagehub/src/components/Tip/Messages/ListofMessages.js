import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './ListofMessage.css';
import Message from './Message';
class ListofMessages extends Component {
  constructor(){
    super();
  }
  componentWillMount(){

  }
  render() {
    return (
        <div>
        <div class = "row">
            <Message name = "John Doe" message = "Hello Mark!" time = "Sun Nov  4 00:23:02 CET 2018" />
            <Message name = "Jennie Jenner" message = "Nothing particular" time = "Sun Nov  4 00:23:02 CET 2018" />
        </div>

        <div class = "row">
            <Message name = "Mark Domani" message = "I know it is boring" time = "Sun Nov  4 00:23:02 CET 2018" />
            <Message name = "Jeff Bezos" message = "I am giving away amazon" time = "Sun Nov  4 00:23:02 CET 2018" />
        </div>

        <div class = "row">
            <Message name = "Kalinda Reut" message = "Wednesday!" time = "Sun Nov  4 00:23:02 CET 2018" />
            <Message name = "Makur Teia" message = "Teach me." time = "Sun Nov  4 00:23:02 CET 2018" />
        </div>

        <div class = "row">
            <Message name = "Naomi Doe" message = "yeah" time = "Sun Nov  4 00:23:02 CET 2018" />
            <Message name = "Tim Tatman" message = "ok" time = "Sun Nov  4 00:23:02 CET 2018" />
        </div>

        <div class = "row">
            <Message name = "Ekyus Eod" message = "I am sorry" time = "Sun Nov  4 00:23:02 CET 2018" />
            <Message name = "Ratatoulie Nature" message = "Not a legit name" time = "Sun Nov  4 00:23:02 CET 2018" />
        </div>

        </div>
    );
  }
}

export default ListofMessages;