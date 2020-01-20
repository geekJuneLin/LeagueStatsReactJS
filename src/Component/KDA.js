import React, { Component } from "react";

class KDA extends Component {
  state = {
    kda: {
      kill: "15",
      death: "11",
      assists: "13",
      ratio: "5.00:1",
      multiKill: "Double Kill"
    }
  };
  render() {
    return (
      <div className="KDA">
        <div className="kda">
          <span style={{ color: "#555e5e" }}>{this.state.kda.kill}</span> /
          <span style={{ color: "#c6443e" }}> {this.state.kda.death} </span>/{" "}
          <span style={{ color: "#555e5e" }}>{this.state.kda.assists}</span>
        </div>
        <div className="KDARatio">
          <span style={{ color: "#555e5e" }}>{this.state.kda.ratio}</span> KDA
        </div>
        <div className="MultiKill">
          <span style={{ color: "#f2f2f2" }}>{this.state.kda.multiKill}</span>
        </div>
      </div>
    );
  }
}

export default KDA;
