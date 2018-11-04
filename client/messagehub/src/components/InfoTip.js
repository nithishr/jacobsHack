import React, { Component } from 'react';
import Timeline from './Timeline.js';
import Sidebar from './Sidebar.js';
import Thumbnails from './Tip/Thumbnails.js'


class InfoTip extends Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
  }


 composeTopics(){
   return this.props.content.messageSum.topics.map((el, i) => <span key={"topicbadge"+i} class="topicLabels" class="badge badge-primary">{el}</span>);
 }

 composeParticipants(participants){
   return participants.map(function(el, i){
     return  <a href="#" class="participantsLabels" key={"participantbadge"+i}>{el}</a>
   });
 }

 composeEvent(){
   if(this.props.content.eventSum.date == undefined || this.props.content.eventSum.date == ""){
     return (
       <div class="eventInfo">
       No Event
       </div>
     );
   } else {
     return (
       <div class="eventInfo">
         <i class="far fa-calendar"></i>
         &nbsp; {this.props.content.eventSum.date} <br />
         Location: {this.props.content.eventSum.location}<br />
         Address: <a href="#"> {this.props.content.eventSum.address} </a><br />
         Participants: {this.composeParticipants(this.props.content.eventSum.participants)}<br />
         Notes: {this.props.content.eventSum.notes}<br />
       </div>
     );
   }
 }

  render() {
    return (
      <div id="InfoTip">

        <div class="text-column">
          <i class="far fa-comments"></i> Freq Topics: {this.composeTopics()} <br />
          #Texts: {this.props.content.messageSum.texts} <br />
          <div class="msg-button">
            <button type="button" class="btn btn-primary"><i class="fas fa-external-link-alt"></i></button>
          </div>
          Participants: {this.composeParticipants(this.props.content.messageSum.participants)}<br />
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
