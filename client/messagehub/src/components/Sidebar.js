import React, { Component } from 'react';
import ContactListItem from './ContactListItem.js'

class Sidebar extends Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){

  }

  composeContactList(){
    return this.props.contacts.map((el, i) => <ContactListItem key={"contactlistitem"+i} contact={el} onClick={this.props.onClick} />)
  }

  render() {
    return (
      <div className="Sidebar">


            <div class="side">
              <div class="side-one">
                <div class="row heading">
                  <div class="col-sm-3 col-xs-3 heading-avatar">
                    <div class="heading-avatar-icon">
                      <img src="jeffbezosprofile.jpg"></img>
                    </div>
                  </div>
                  <div class="heading-dot  pull-right">
                    Jeff Bezos
                  </div>
                </div>

                <div class="row searchBox">
                  <div class="col-sm-12 searchBox-inner">
                    <div class="form-group has-feedback">
                      <input id="searchText" type="text" class="form-control" name="searchText" placeholder="Search"></input>
                      <span class="glyphicon glyphicon-search form-control-feedback"></span>
                    </div>
                  </div>
                </div>

                <div class="sidebar-contacts">
                  {this.composeContactList()}
                </div>


            </div>
              </div>
      </div>
    );
  }
}

export default Sidebar;
