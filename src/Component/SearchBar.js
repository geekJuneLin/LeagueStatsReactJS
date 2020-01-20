import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    name: ""
  };

  handleNameInputChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSearch = () => {
    if (this.state.name.length > 1) {
      this.props.onSearch(this.state.name);
      this.setState({ name: "" });
    } else {
      alert("Please enter the name of the summoner first!");
    }
  };

  render() {
    return (
      <div style={{ backgroundColor: "#5383e8" }}>
        <h1 style={{ margin: 0, paddingTop: 12 }}>LeagueStats</h1>
        <form className="search-form">
          <input
            id="name"
            type="text"
            className="search-bar"
            placeholder="Summoner name"
            value={this.state.name}
            onChange={this.handleNameInputChange}
          />
          <button
            type="button"
            className="search-btn"
            onClick={this.handleSearch}
          >
            Search
          </button>
          <button type="button" className="server">
            OCE
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
