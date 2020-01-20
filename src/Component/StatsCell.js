import React, { Component } from "react";
import MatchInfo from "./StatsCellMatchInfo";
import KDA from "./KDA";
import Stats from "./Stats";
import Items from "./Items.js";
import ChampInfo from "./ChampInfo";

class StatsCell extends Component {
  API_KEY = "RGAPI-df5bfcd8-474d-4822-a99f-0eeed2b1e527";
  PROXY_URL = "https://cors-anywhere.herokuapp.com/";
  state = {
    match: ""
  };

  componentWillMount = async () => {
    if (this.props.gameId) {
      const url =
        "https://oc1.api.riotgames.com/lol/match/v4/matches/" +
        this.props.gameId +
        "?api_key=" +
        this.API_KEY;
      await fetch(url)
        .then(res => {
          if (res.status !== 200) {
            throw new Error("Status code: " + res.status);
          } else {
            return res.json();
          }
        })
        .then(data => {
          console.log(data);
          this.setState({ match: data });
        })
        .catch(err => {
          alert("Fetching match info with error " + err);
        });
    } else {
      console.log("No game id found!");
    }
  };

  render() {
    console.log(this.props.gameId);
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
