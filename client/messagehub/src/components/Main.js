import React, { Component } from 'react';
import Timeline from './Timeline.js';
import Sidebar from './Sidebar.js';


class Main extends Component {
  constructor(){
    super();
  }

  componentWillMount(){

  }

  render() {
    return (
      <div className="Main">
        <div class="wrapper">

          <nav id="sidebar">
            <Sidebar />
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