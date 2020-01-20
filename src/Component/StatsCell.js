import React, { Component } from "react";
import MatchInfo from "./StatsCellMatchInfo";
import KDA from "./KDA";
import Stats from "./Stats";
import Items from "./Items.js";
import ChampInfo from "./ChampInfo";

class StatsCell extends Component {
  state = {};
  render() {
    return (
      <div className="stats-cell">
        <MatchInfo />
        <ChampInfo />
        <KDA />
        <Stats />
        <Items />
      </div>
    );
  }
}

export default StatsCell;
