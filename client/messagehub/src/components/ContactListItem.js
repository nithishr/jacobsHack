import React, { Component } from 'react';


class ContactListItem extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
  }

  render() {
    return (
      <div className="ContactListItem" onClick={() => this.props.onClick(this.props.contact.id)}>

      <div class="row sideBar">
        <div class="row sideBar-body">
          <div class="col-sm-3 col-xs-3 sideBar-avatar">
            <div class="avatar-icon">
              <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260.jpg" />
            </div>
          </div>
          <div class="col-sm-9 col-xs-9 sideBar-main">
            <div class="row">
              <div class="col-sm-8 col-xs-8 sideBar-name">
                <span class="name-meta">
                {this.props.contact.name}
                </span>
              </div>
              <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                <span class="time-meta pull-right">
                {this.props.contact.timestamp}
              </span>
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
    );
  }
}

export default ContactListItem;
