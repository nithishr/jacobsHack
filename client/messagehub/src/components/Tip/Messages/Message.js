import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Message.css';

class Message extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){

  }

  render() {
    return (
        <div className="messageContainer">
            <div class = "row" className="dateofRec">
            {this.props.time}
            </div>
            <div class = "row" className="senderName">
            {this.props.name}
            </div>
            <div class = "row" className="recMessage">
            {this.props.message}
            </div>
        </div>
    );
  }
}

export default Message;