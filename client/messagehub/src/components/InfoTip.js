import React, { Component } from 'react';
import Thumbnails from './Tip/Thumbnails.js';
import ListofMessages from './Tip/Messages/ListofMessages';
import './InfoTip.css';

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

class InfoTip extends Component {
  constructor(props){
    super(props);

    this.state = {
      content: {
        messageSum: {
        topics: ["weather", "november event", "drinking"],
        texts: 253,
        participants: ["steph", "carol"],
        },
        eventSum: {
          date: "18.10.2018",
          location: "Bremen",
          address: "Campus Road 1",
          participants: ["steph", "carol"],
          notes: "-"
        }
      }
    }

  }

  componentWillUpdate(nextProps, nextState){
  if (this.state.rawMessages == undefined) {
    const date =  new Date("2018", "5", "23") //TODO change
    const newProps = nextProps.content.rawMessages.map(function(el, i) {
    return {
      ...el,
      timestamp: new Date(timeConverter(el.timestamp))
    }}).filter((el) =>
    (
      (el.timestamp.getDate() - 1) == date.getDate()
    || (el.timestamp.getDate() +1) == date.getDate()
    )
    && (el.timestamp.getMonth() - 1) == date.getMonth()
  )

    this.state = {
      ...this.state,
      rawMessages: newProps,
    }
    console.log(newProps)
    console.log(this.state)
  }

  }


 composeTopics(){
   return this.state.content.messageSum.topics.map((el, i) => <span key={"topicbadge"+i} class="topicLabels" class="badge badge-success ml-1 mr-1 pd-5">{el}</span>);
 }

 composeParticipants(participants){
   return participants.map(function(el, i){
     return  <a href="#" class="participantsLabels" key={"participantbadge"+i}>{el}</a>
   });
 }

 composeEvent(){
   if(this.state.content.eventSum.date == undefined || this.state.content.eventSum.date == ""){
     return (
       <div class="eventInfo">
       No Event
       </div>
     );
   } else {
     return (
       <div class="eventInfo">
         <i class="far fa-calendar"></i>
         &nbsp; {this.state.content.eventSum.date} <br />
         Location: {this.state.content.eventSum.location}<br />
         Address: <a href="#"> {this.state.content.eventSum.address} </a><br />
         Participants: {this.composeParticipants(this.state.content.eventSum.participants)}<br />
         Notes: {this.state.content.eventSum.notes}<br />
       </div>
     );
   }
 }

  render() {
    return (
      <div id="InfoTip">

        <div class="text-column">
          <i class="far fa-comments"></i> Freq Topics: {this.composeTopics()} <br />
          #Texts: {this.state.content.messageSum.texts} <br />
          <div class="msg-button">
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#messages"><i class="fas fa-envelope"></i></button>
          </div>

          {/* Modal */}
          <div class="modal fade" id="messages" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title col-md-11" id="exampleModalLongTitle">Messages</h5>
                  <button type="button" class="close col-md-1" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class = "row">
                    <div class = "col-md-10 ml-auto">
                        <ListofMessages />
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>


          Participants: {this.composeParticipants(this.state.content.messageSum.participants)}<br />
          <hr class="white-spacer" />
          {this.composeEvent()}
        </div>

        <div class="img-column">
          <Thumbnails />
        </div>

        <div class="clearfix"></div>

      </div>
    );
  }
}

export default InfoTip;
