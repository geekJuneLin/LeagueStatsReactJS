import React from "react";

function StatsCell() {
  return (
    <div className="stats-cell">
      <img
        className="stats-cell-champ"
        src="https://opgg-static.akamaized.net/images/lol/champion/Malphite.png?image=q_auto,w_46&v=1578479159"
      />
      <div className="stats-cell-spells-div ">
        <img
          className="stats-cell-spell"
          src="https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=q_auto,w_22&v=1578479159"
        />
        <img
          className="stats-cell-spell"
          src="https://opgg-static.akamaized.net/images/lol/spell/SummonerDot.png?image=q_auto,w_22&v=1578479159"
        />
      </div>
      <div className="stats-cell-runes-div">
        <img
          className="stats-cell-rune"
          src="https://opgg-static.akamaized.net/images/lol/perk/8437.png?image=q_auto,w_22&v=1578479159"
        />
        <img
          className="stats-cell-rune"
          src="https://opgg-static.akamaized.net/images/lol/perkStyle/8000.png?image=q_auto,w_22&v=1578479159"
        />
      </div>
    </div>
  );
}

export default StatsCell;