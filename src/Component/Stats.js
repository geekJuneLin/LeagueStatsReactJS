import React, { Component } from "react";

class Stats extends Component {
  state = {
    stats: {
      level: "18",
      cs: "60 (3.7)",
      killRatio: "67",
      tier: "Silver 4"
    }
  };
  render() {
    return (
      <div className="Stats">
        <div>{this.state.stats.level}</div>
        <div>{this.state.stats.cs} CS</div>
        <div className="kill-rate">P/Kill {this.state.stats.killRatio}%</div>
        <div>
          <span>Tier Average</span>
          <span style={{ fontWeight: "bold", display: "block" }}>
            {this.state.stats.tier}
          </span>
        </div>
      </div>
    );
  }
}

export default Stats;
