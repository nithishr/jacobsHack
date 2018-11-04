import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from './About.js';

class TextContents extends Component {
  constructor(){
    super();
  }

  componentWillMount(){

  }
  render() {
    return (
        <div class = "container">
            <About className="about" class = "mt-20" /><hr />
            <About className="about" />
        </div>    
        
    );
  }
}

export default TextContents;