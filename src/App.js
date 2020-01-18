import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./Component/SearchBar.js";
import StatsCell from "./Component/StatsCell";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="stats-view">
        <StatsCell />
        <StatsCell />
        <StatsCell />
        <StatsCell />
      </div>
    </div>
  );
}

export default App;
