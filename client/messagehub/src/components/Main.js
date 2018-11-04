import React, { Component } from 'react';
import Timeline from './Timeline.js';
import Sidebar from './Sidebar.js';


class Main extends Component {
  constructor(props){
    super(props);

    this.clickContact = this.clickContact.bind(this);

    const content = [
    {
      meta:  {
        id: "0",
        name: "Marie",
        img: "",
        timestamp: "20:18"
      },
      peaks: [
      {
        messageSum: {
        topics: ["weather", "november event", "drinking"],
        texts: 253,
        participants: ["steph", "carol"],},
        eventSum: {
          date: "18.10.2018",
          location: "Bremen",
          address: "Campus Road 1",
          participants: ["steph", "carol"],
          notes: "-" },
        imgSum: {}
      },
      {
        messageSum: {
        topics: ["weather", "november event", "drinking"],
        texts: 253,
        participants: ["steph", "carol"],},
        eventSum: {
          date: "18.10.2018",
          location: "Munich",
          address: "Campus Road 1",
          participants: ["steph", "carol"],
          notes: "-" },
        imgSum: {}
      },
      {
        messageSum: {
        topics: ["weather", "november event", "drinking"],
        texts: 253,
        participants: ["steph", "carol"],},
        eventSum: {
          date: "18.10.2018",
          location: "Berlin",
          address: "Campus Road 1",
          participants: ["steph", "carol"],
          notes: "-" },
        imgSum: {}
      },
    ]},

    {
      meta:  {
        id: "1",
        name: "Sophie",
        img: "",
        timestamp: "21:18"
      },
      peaks: [
      {
        messageSum: {
        topics: ["weather", "november event", "drinking"],
        texts: 253,
        participants: ["steph", "carol"],},
        eventSum: {
          date: "19.10.2018",
          location: "Bremen",
          address: "Campus Road 1",
          participants: ["steph", "carol"],
          notes: "-" },
        imgSum: {}
      },
      {
        messageSum: {
        topics: ["weather", "november event", "drinking"],
        texts: 253,
        participants: ["steph", "carol"],},
        eventSum: {
          date: "19.10.2018",
          location: "Munich",
          address: "Campus Road 1",
          participants: ["steph", "carol"],
          notes: "-" },
        imgSum: {}
      },
      {
        messageSum: {
        topics: ["weather", "november event", "drinking"],
        texts: 253,
        participants: ["steph", "carol"],},
        eventSum: {
          date: "19.10.2018",
          location: "Berlin",
          address: "Campus Road 1",
          participants: ["steph", "carol"],
          notes: "-" },
        imgSum: {}
      },
    ]},

    {
      meta:  {
        id: "2",
        name: "Clara",
        img: "",
        timestamp: "22:18"
      },
      peaks: [
      {
        messageSum: {
        topics: ["weather", "november event", "drinking"],
        texts: 253,
        participants: ["steph", "carol"],},
        eventSum: {
          date: "20.10.2018",
          location: "Bremen",
          address: "Campus Road 1",
          participants: ["steph", "carol"],
          notes: "-" },
        imgSum: {}
      },
      {
        messageSum: {
        topics: ["weather", "november event", "drinking"],
        texts: 253,
        participants: ["steph", "carol"],},
        eventSum: {
          date: "20.10.2018",
          location: "Munich",
          address: "Campus Road 1",
          participants: ["steph", "carol"],
          notes: "-" },
        imgSum: {}
      },
      {
        messageSum: {
        topics: ["weather", "november event", "drinking"],
        texts: 253,
        participants: ["steph", "carol"],},
        eventSum: {
          date: "20.10.2018",
          location: "Berlin",
          address: "Campus Road 1",
          participants: ["steph", "carol"],
          notes: "-" },
        imgSum: {}
      },
    ]},


  ]

    this.state = {
      activeUser: 0,
      content: content
    }

  }

  componentWillMount(){
  }

  clickContact(id){
    this.setState({
      activeUser: id
    })
  }

  composeContactList(){
   return this.state.content.map((el, i) => el.meta)
  }

  render() {
    return (
      <div className="Main">
        <div class="wrapper">

          <nav id="sidebar">
            <Sidebar contacts={this.composeContactList()} onClick={this.clickContact.bind(this)} />
          </nav>

          <div id="content">
            <Timeline content={this.state.content[this.state.activeUser].peaks} />
          </div>

          <div class="clearfix"></div>

        </div>
      </div>
    );
  }
}

export default Main;
