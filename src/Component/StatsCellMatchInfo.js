import React, { Component } from "react";

class StatsCellMatchInfo extends Component {
  state = {
    // matchInfo: {
    //   type: "",
    //   datePlayed: "",
    //   win: "",
    //   time: ""
    // }
  };
  render() {
    console.log(this.props.gameMode);
    return (
      <div className="match-info">
        <div style={{ fontWeight: "bold" }}>{this.props.gameMode}</div>
        <div style={{ margin: "0" }}>{this.props.date}</div>
        <div className="bar"></div>
        <div style={{ fontWeight: "bold" }}>{this.props.win}</div>
        <div style={{ display: "block", margin: "0" }}>
          {this.props.duration}
        </div>
      </div>
    );
  }
}

export default StatsCellMatchInfo;
