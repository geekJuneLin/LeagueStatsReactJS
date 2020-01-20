import React, { Component } from "react";

class Item extends Component {
  state = {
    imageUrl: this.props.imageUrl
  };
  render() {
    return (
      <div className="item">
        <img src={this.state.imageUrl} />
      </div>
    );
  }
}

export default Item;
