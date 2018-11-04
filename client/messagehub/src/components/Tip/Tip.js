import React, { Component } from 'react';
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
      <div id="TipUpper">
        <div class="container">
          <div className="Tip" class = "row">
              <div className="text-content" class="col-sm-4">
                <TextContents />
              </div>
              <div className="img-content" class="col-sm-4">
                  <Thumbnails className = "Thumbnails" />
              </div>

              <div class="clearfix"></div>
          </div>
          </div>
        </div>

    );
  }
}

export default Tip;
