import React, { Component } from 'react';
import TimelineLower from './TimelineLower';
import InfoTip from './InfoTip';

class Timeline extends Component {
  constructor(props){
    super(props);

    this.changePeak = this.changePeak.bind(this);

    this.state = {
      activePeak: 0,
      milestones: [
      {
        pos: "0",
        id:"0",
        freq:"0.1"
      },
      {
        pos: "20",
        id:"1",
        freq:"0.4"
      },
      {
        pos: "30",
        id:"2",
        freq:"0.8"
      },
      {
        pos: "50",
        id:"3",
        freq:"0.3"
      },
      {
        pos: "80",
        id:"3",
        freq:"0.9"
      },
    ],
    }

  }

  componentWillMount(){
  }

  changePeak(id){
      this.setState({
        activePeak: id
      })
  }

  composeGradient(){
  var percentColors = [
      { pct: 0.0, color: { r: 0xff, g: 0x00, b: 0 } },
      { pct: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
      { pct: 1.0, color: { r: 0x00, g: 0xff, b: 0 } } ];

  var getColorForPercentage = function(pct) {
    pct = 1 - pct
      for (var i = 1; i < percentColors.length - 1; i++) {
          if (pct < percentColors[i].pct) {
              break;
          }
      }
      var lower = percentColors[i - 1];
      var upper = percentColors[i];
      var range = upper.pct - lower.pct;
      var rangePct = (pct - lower.pct) / range;
      var pctLower = 1 - rangePct;
      var pctUpper = rangePct;
      var color = {
          r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
          g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
          b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
      };
      return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
      // or output as hex if preferred
  }

    var gradientString = "linear-gradient(to right, "
    var milestones = this.state.milestones

    for (var i in milestones) {
      gradientString += " "
      gradientString += getColorForPercentage(milestones[i]["freq"])
      gradientString += " "
      gradientString +=  milestones[i]["pos"] + "% ";
      if(i < milestones.length -1){
        gradientString += ", "
      }
    }
    /*, #880E4F, #E91E63 100%, #F06292*/

    gradientString += " )"


    var gradientStyle = {
        backgroundImage: gradientString
    };

    return gradientStyle
  }

  composeMilestones(){
    const milestones = this.state.milestones
    return milestones.filter((milestone) => milestone["freq"] > 0.3).map((milestone, id) =>
        <i key={"ielement"+id} class="timeline--inner-pin is-featured" style={{
        width: milestone["freq"]*20+"px",
        height: milestone["freq"]*20+"px",
        left: milestone["pos"] + "%"}} data-title="Featured Pin" onClick={this.changePeak.bind(this, id)} ></i>
      );
  }

  render() {
    const timelineGradient = this.composeGradient()
    return (
      <div id="Timeline">

      <InfoTip content={this.props.content[this.state.activePeak]} />

      <div class="timeline-inner">
        <section class="container">
          <section class="timeline" style={timelineGradient}>
            <figure class="timeline--inner">
            {this.composeMilestones()}
            </figure>
          </section>
        </section>

        <TimelineLower />

        </div>
      </div>
    );
  }
}

export default Timeline;
