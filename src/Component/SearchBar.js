import React from "react";

function SearchBar() {
  return (
    <div style={{ backgroundColor: "#5383e8" }}>
      <h1 style={{ margin: 0, paddingTop: 12 }}>LeagueStats</h1>
      <form className="search-form">
        <input type="text" className="search-bar" placeholder="Summoner name" />
        <button type="button" className="search-btn" onClick={handleClick}>
          Search
        </button>
        <button type="button" className="server">
          OCE
        </button>
      </form>
    </div>
  );
}

function handleClick() {
  console.log("Search btn clicked!");
}

export default SearchBar;
