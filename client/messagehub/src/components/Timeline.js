import React, { Component } from 'react';

class Timeline extends Component {
  constructor(){
    super();

    this.state = {
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
      ]
    };
  }

  componentWillMount(){

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

    console.log(gradientString)


    return gradientStyle
  }

  composeMilestones(){
    const milestones = this.state.milestones
    return milestones.map((milestone) =>
    <i class="timeline--inner-pin is-featured" style={{left: milestone["pos"] + "%"}} data-title="Featured Pin"></i>
  );
  }

  render() {
    const timelineGradient = this.composeGradient()
    return (
      <div id="Timeline">

      <section class="container">
        <section class="timeline" style={timelineGradient}>
          <figure class="timeline--inner">
          {this.composeMilestones()}
          </figure>
        </section>
      </section>

        <div className="timeline-begin texto">
        JAN 2017</div>
        <div className="timeline-end texto">
        DEC 2017</div>
      </div>
    );
  }
}

export default Timeline;
