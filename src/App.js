import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./Component/SearchBar.js";
import StatsCell from "./Component/StatsCell";

class App extends Component {
  state = {
    isLoading: true
  };

  fetchData = async name => {
    console.log("Name: " + name);
    this.setState({ isLoading: true });
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
      name +
      "?api_key=RGAPI-079d3cbe-4006-4023-9741-0837132e0c75";
    await fetch(proxyUrl + url)
      .then(res => {
        if (res.status === 404) {
          throw new Error("The summoner's name not found!");
        } else {
          return res.json();
        }
      })
      .then(data => {
        console.log(data);
        this.setState({ isLoading: false });
      })
      .catch(err => {
        alert("Getting error with: " + err);
      });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSearch={this.fetchData.bind(this)} />
        {this.state.isLoading ? (
          <div>Please enter the summoner's name for searching!</div>
        ) : (
          <div className="stats-view">
            <StatsCell />
            <StatsCell />
            <StatsCell />
            <StatsCell />
          </div>
        )}
      </div>
    );
  }
}

export default App;
