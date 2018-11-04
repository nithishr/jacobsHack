import React, { Component } from 'react';
import Timeline from './Timeline.js';
import Sidebar from './Sidebar.js';
import axios from "axios";


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
      activeUser: "Anil",
      content: [],
      content2: content
    }
  }

  componentDidMount() {
    /*.get("http://67395507.ngrok.io/count")*/
    /*.get("https://jsonplaceholder.typicode.com/users")*/
    //.get("http://a5167715.ngrok.io/count")
    /*.get("http://fe7a5316.ngrok.io/count")*/


    axios
    .get("http://a5167715.ngrok.io/count")
      .then(response => {
        // create an array of contacts only with relevant data

        const newState = Object.assign({}, this.state, {
          content: response.data
        });

        console.log(response)
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  componentWillMount(){

  }

  clickContact(id){
    this.setState({
      activeUser: id
    })
  }

  composeContactList(){
    var retArr = []
    var counter = 0
    for(var el in this.state.content){
      retArr.push({name: this.state.content[el].meta.name, id: counter})
      counter++
    }
    return retArr
   //return this.state.content2.map((el, i) => el.meta)
  }

  composePeaks(){
    return this.state.content[this.state.activeUser]
  }


  render() {
    return (
      <div className="Main">
        <div class="wrapper">

          <nav id="sidebar">
            <Sidebar contacts={this.composeContactList()} onClick={this.clickContact.bind(this)} />
          </nav>

          <div id="content">
          <Timeline content={this.composePeaks()} />
          </div>

          <div class="clearfix"></div>

        </div>
      </div>
    );
  }
}

export default Main;
