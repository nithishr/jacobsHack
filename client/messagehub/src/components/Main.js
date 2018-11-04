import React, { Component } from 'react';
import Timeline from './Timeline.js';
import Sidebar from './Sidebar.js';


class Main extends Component {
  constructor(props){
    super(props);

    this.clickContact = this.clickContact.bind(this);
    const content =  {
      messageSum: {
        topics: ["weather", "november event", "drinking"],
        texts: 253,
        participants: ["steph", "carol"],
      },
      eventSum: {
        date: "19.10.2018",
        location: "Bremen",
        address: "Campus Road 1",
        participants: ["steph", "carol"],
        notes: "-"
      },
      imgSum: {
      }
    }
    this.state = {
      content: content
    }

  }

  componentWillMount(){
  }

  clickContact(){
    console.log("Contact")
  }

  render() {
    return (
      <div className="Main">
        <div class="wrapper">

          <nav id="sidebar">
            <Sidebar onClick={this.clickContact.bind(this)} />
          </nav>

          <div id="content">
            <Timeline content={this.state.content} />
          </div>

          <div class="clearfix"></div>

        </div>
      </div>
    );
  }
}

export default Main;
