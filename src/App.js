import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./Component/SearchBar.js";
import StatsCell from "./Component/StatsCell";

class App extends Component {
  API_KEY = "RGAPI-df5bfcd8-474d-4822-a99f-0eeed2b1e527";
  PROXY_URL = "https://cors-anywhere.herokuapp.com/";

  state = {
    isLoading: true,
    accountId: "",
    matches: []
  };

  // fetch the summoner's account id
  fetchSummonerAccountId = async name => {
    console.log("Name: " + name);
    this.setState({ isLoading: true });
    const url =
      "https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
      name +
      "?api_key=" +
      this.API_KEY;
    await fetch(this.PROXY_URL + url)
      .then(res => {
        if (res.status !== 200) {
          throw new Error("The status code: " + res.status);
        } else {
          return res.json();
        }
      })
      .then(data => {
        console.log(data.accountId);
        this.setState({ isLoading: false });
        this.setState({ accountId: data.accountId });
        this.fetchMatchList();
      })
      .catch(err => {
        alert("Getting error with: " + err);
      });
  };

  // fetch all the match list using the account id
  fetchMatchList = async () => {
    if (this.state.accountId !== "") {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const url =
        "https://oc1.api.riotgames.com/lol/match/v4/matchlists/by-account/" +
        this.state.accountId +
        "?api_key=" +
        this.API_KEY;
      await fetch(this.PROXY_URL + url)
        .then(res => {
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "X-Requested-With");
          if (res.status !== 200) {
            throw new Error("The status code is not 200!");
          } else {
            return res.json();
          }
        })
        .then(data => {
          this.setState({ matches: data.matches });
          console.log(this.state.matches);
        })
        .catch(err => {
          console.log("fetching data getting errors: " + err);
        });
    } else {
      console.log("No accountID has been fetched!");
    }
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSearch={this.fetchSummonerAccountId.bind(this)} />
        {this.state.isLoading ? (
          <div>Please enter the summoner's name for searching!</div>
        ) : (
          <div className="stats-view">
            {this.state.matches.length === 0 ? (
              <div>No matches found!</div>
            ) : (
              this.state.matches.map(match => {
                return <StatsCell key={match.gameId} gameId={match.gameId} />;
              })
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
