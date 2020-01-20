import React, { Component } from "react";

class ChampInfo extends Component {
  state = {
    champInfo: {
      championId:
        "https://opgg-static.akamaized.net/images/lol/champion/Malphite.png?image=q_auto,w_50&v=1578479159",
      spellOne:
        "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=q_auto,w_22&v=1578479159",
      spellTwo:
        "https://opgg-static.akamaized.net/images/lol/spell/SummonerDot.png?image=q_auto,w_22&v=1578479159",
      runeOne:
        "https://opgg-static.akamaized.net/images/lol/perk/8437.png?image=q_auto,w_22&v=1578479159",
      runeTwo:
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8000.png?image=q_auto,w_22&v=1578479159"
    }
  };
  render() {
    return (
      <div className="champ-info">
        <img
          className="stats-cell-champ"
          src={this.state.champInfo.championId}
        />
        <div style={{ display: "inline" }}>
          <div className="stats-cell-spells-div ">
            <img
              className="stats-cell-spell"
              src={this.state.champInfo.spellOne}
            />
            <img
              className="stats-cell-spell"
              src={this.state.champInfo.spellTwo}
            />
          </div>
          <div className="stats-cell-runes-div">
            <img
              className="stats-cell-rune"
              src={this.state.champInfo.runeOne}
            />
            <img
              className="stats-cell-rune"
              src={this.state.champInfo.runeTwo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ChampInfo;
