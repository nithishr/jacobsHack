import React, { Component } from 'react';
import Timeline from './Timeline.js';
import Sidebar from './Sidebar.js';


class Main extends Component {
  constructor(props){
    super(props);

    this.clickContact = this.clickContact.bind(this);

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
            <Timeline />
          </div>

          <div class="clearfix"></div>

        </div>
      </div>
    );
  }
}

export default Main;
