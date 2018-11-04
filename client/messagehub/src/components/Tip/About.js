import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './About.css';

class About extends Component {
  constructor(){
    super();
  }

  componentWillMount(){

  }
  clickFunction(e){
    console.log("Ed");
  }

  render() {
    return (
      <div className="About">
      Name: <span>John</span><br />
      Texts: <span> 200 </span> <br />
      Images: <span> 5 </span> <br />
      Links: <span> 10 </span> <br />
      </div>
    );
  }
}

export default About;