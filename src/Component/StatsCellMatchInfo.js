import React, { Component } from "react";

class StatsCellMatchInfo extends Component {
  state = {
    matchInfo: {
      type: "",
      datePlayed: "",
      win: "",
      time: ""
    }
  };
  render() {
    console.log(this.props.gameMode);
    return (
      <div className="match-info">
        <div style={{ fontWeight: "bold" }}>
          {this.state.matchInfo.type === ""
            ? "Unknown"
            : this.state.matchInfo.type}
        </div>
        <div style={{ margin: "0" }}>
          {this.state.matchInfo.datePlayed === ""
            ? "Unknown"
            : this.state.matchInfo.datePlayed}
        </div>
        <div className="bar"></div>
        <div style={{ fontWeight: "bold" }}>
          {this.state.matchInfo.win === ""
            ? "Unknown"
            : this.state.matchInfo.win}
        </div>
        <div style={{ display: "block", margin: "0" }}>
          {this.state.matchInfo.time === ""
            ? "Unknown"
            : this.state.matchInfo.time}
        </div>
      </div>
    );
  }
}

export default StatsCellMatchInfo;
