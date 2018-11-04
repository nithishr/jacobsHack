import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from './About.js';

class Thumbnails extends Component {
  constructor(){
    super();
  }

  componentWillMount(){

  }

  render() {
    return (
      <div class="container">
        <div class = "row">
          <div className="col">
              <img width = "200px" src = "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
          </div>
          <div className="col">
              <img width = "200px" src = "https://images.pexels.com/photos/449627/pexels-photo-449627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
          </div>
        </div>
        <div class = "row">
          <div className="col">
              <img width = "200px" src = "https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
          </div>
          <div className="col">
              <img width = "200px" src = "https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Thumbnails;
