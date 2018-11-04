import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextContents from './TextContents';
import Thumbnails from './Thumbnails';

class Tip extends Component {
  constructor(){
    super();
  }

  componentWillMount(){

  }

  render() {
    return (
      <div class = "container">
        <div className="Tip" class = "row">
            <div className = "text-content" class ="col">
              <TextContents />
            </div>

            <div class="col">
                <Thumbnails className = "Thumbnails" />
            </div>
        </div>    
      </div>
        
    );
  }
}

export default Tip;