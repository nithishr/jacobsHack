import React, { Component } from 'react';

const granularities = {
  "all": ["day", "month", "year"],
  "day": [],
  "month": ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
  "year": [],
}

class TimelineLower extends Component {

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      granularity: {
      type: "month",
      day: 1,
      month: "oct",
      year: 2018
      }
    }
  }

  handleClick(id) {
    var preState = this.state
    const prevGranularity = this.state.granularity["type"]
    const prevGranularityContent = this.state.granularity[prevGranularity]
    var divider = 1;
    if(prevGranularity == "month"){
      divider = 12
    } else if(prevGranularity == "day"){
      divider = 30
    }

    if(id == 0){
      if(prevGranularity == "month"){
        preState.granularity[prevGranularity] = granularities[prevGranularity][((
            granularities[prevGranularity].findIndex(function(element) {
              return element == prevGranularityContent;
            })) -1 + divider) % divider ]
          } else if(prevGranularity == "day"){
            preState.granularity[prevGranularity] = (this.state.granularity[prevGranularity] -1 + divider) % divider
          } else {
            preState.granularity[prevGranularity] -= 1
          }
    } else if(id == 1){
      if(prevGranularity == "month"){
        preState.granularity[prevGranularity] = granularities[prevGranularity][((
            granularities[prevGranularity].findIndex(function(element) {
              return element == prevGranularityContent;
            })) +1 + divider) % divider ]
        } else if(prevGranularity == "day"){
          preState.granularity[prevGranularity] = (this.state.granularity[prevGranularity] + 1) % divider
        } else {
          preState.granularity[prevGranularity] += 1
        }
    } else if(id == 2){
      preState.granularity["type"] = granularities["all"][(granularities["all"].findIndex(function(el) {
        return el == prevGranularity;
      }) -1 + granularities["all"].length) % granularities["all"].length]
    } else if(id == 3){
      preState.granularity["type"] = granularities["all"][(granularities["all"].findIndex(function(el) {
        return el == prevGranularity;
      }) + 1) % granularities["all"].length]
    }

    this.setState({preState})
  }

  composeNextDate(){
    if(this.state.granularity["type"] == "day"){
      return ((this.state.granularity["day"] + 1 + 30) % 30) + " " + this.state.granularity["month"].toUpperCase()  + " " + this.state.granularity["year"]
    } else if(this.state.granularity["type"] == "month"){
      return  this.state.granularity["day"] +
      " " +
      granularities["month"][(granularities["month"].findIndex((el) => el == this.state.granularity["month"]) + 1 + 12) % 12].toUpperCase() +
      " " + this.state.granularity["year"]
    } else if(this.state.granularity["type"] == "year"){
      return " " + this.state.granularity["day"] + " " + this.state.granularity["month"].toUpperCase()  + " " + (this.state.granularity["year"] + 1)
    }
  }




  render() {
    return (
      <div className="TimelineLower">

        <div className="timeline-lower">
          <div className="timeline-begin texto">
          {this.state.granularity["day"] + " " + this.state.granularity["month"].toUpperCase() + " " + this.state.granularity["year"]}
          </div>

          <div class="zoom-utilities">
            <div class="zoom-button texto" onClick={this.handleClick.bind(this, 0)}>
              {this.state.granularity["type"]} <i class="fas fa-caret-left"></i>
            </div>
            <div class="zoom-button zoom-button-mid texto" onClick={this.handleClick.bind(this, 2)}>
              <i class="fas fa-search-plus"></i>
            </div>
            <div class="zoom-button zoom-button-mid texto" onClick={this.handleClick.bind(this, 3)}>
               <i class="fas fa-search-minus"></i>
            </div>
            <div class="zoom-button texto" onClick={this.handleClick.bind(this, 1)}>
              {this.state.granularity["type"]} <i class="fas fa-caret-right"></i>
            </div>
          </div>

          <div className="timeline-end texto">
          {this.composeNextDate()}
          </div>

        </div>

      </div>
    );
  }
}

export default TimelineLower;
