import React, { Component } from 'react';
import Thumbnails from './Tip/Thumbnails.js';
import ListofMessages from './Tip/Messages/ListofMessages';
import './InfoTip.css';


class InfoTip extends Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
  }


 composeTopics(){
   return this.props.content.messageSum.topics.map((el, i) => <span key={"topicbadge"+i} class="topicLabels" class="badge badge-success ml-1 mr-1 pd-5">{el}</span>);
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
