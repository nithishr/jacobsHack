import React, { Component } from 'react';

class Header extends Component {
  constructor(){
    super();
  }

  componentWillMount(){

  }

  render() {
    return (
      <div className="Header">
        <header className="App-header">
        <nav class="navbar-fixed navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#"><i class="far fa-comments"></i> MessengerHub</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
            </ul>
          </div>
        </nav>
        </header>
      </div>
    );
  }
}

export default Header;
