import React, { Component } from 'react';
// import './ListofMessage.css';
import Message from './Message';
class ListofMessages extends Component {
  constructor(){
    super();

    this.name = "mark";
    this.rawMessages = [
    {
      from:"mark",
      message:"Hi Amy",
      timestamp: "Sun Nov  4 00:23:02 CET 2018"
    },
    {
      from:"amy",
      message:"Hi how is it going",
      timestamp: "Sun Nov  5 00:23:02 CET 2018"
    },
    {
      from:"mark",
      message:"Good",
      timestamp: "Sun Nov  6 00:23:02 CET 2018"
    }
  ]

}

  componentWillMount(){

  }

  composeMessages(){
    /*var modalString;
    var counter = 0
    for(var r in this.rawMessages){

      messageDiv = (<Message from={(this.name = r.from ) ? "send" : "rec"} name = {this.r.from} message = {this.r.message} time = {this.r.timestamp} />


      if(counter % 2){
        modalString = (
          <div class = "row">
          {messageDiv}
          </div>)
      }

      counter++
    }*/
    //return modalString;
    return ""
  }

  render() {
    return (
        <div>
        {this.composeMessages()}
        <div class = "row">
            <Message from="send" name = "John Doe" message = "Hello Mark!" time = "Sun Nov  4 00:23:02 CET 2018" />
            <Message from="rec" name = "Jennie Jenner" message = "Nothing particular" time = "Sun Nov  4 00:23:02 CET 2018" />
        </div>

        <div class = "row">
            <Message from="send" name = "Mark Domani" message = "I know it is boring" time = "Sun Nov  4 00:23:02 CET 2018" />
            <Message from="rec" name = "Jeff Bezos" message = "I am giving away amazon" time = "Sun Nov  4 00:23:02 CET 2018" />
        </div>

        <div class = "row">
            <Message from="send" name = "Kalinda Reut" message = "Wednesday!" time = "Sun Nov  4 00:23:02 CET 2018" />
            <Message from="rec" name = "Makur Teia" message = "Teach me." time = "Sun Nov  4 00:23:02 CET 2018" />
        </div>

        <div class = "row">
            <Message from="send" name = "Naomi Doe" message = "yeah" time = "Sun Nov  4 00:23:02 CET 2018" />
            <Message from="rec" name = "Tim Tatman" message = "ok" time = "Sun Nov  4 00:23:02 CET 2018" />
        </div>

        <div class = "row">
            <Message from="send" name = "Ekyus Eod" message = "I am sorry" time = "Sun Nov  4 00:23:02 CET 2018" />
            <Message from="rec" name = "Ratatoulie Nature" message = "Not a legit name" time = "Sun Nov  4 00:23:02 CET 2018" />
        </div>

        </div>
    );
  }
}

export default ListofMessages;
