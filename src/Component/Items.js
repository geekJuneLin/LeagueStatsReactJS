import React, { Component } from "react";
import Item from "./Item";
import ItemData from "../ItemData";

class Items extends Component {
  state = {
    data: ItemData
  };
  render() {
    const items = this.state.data.map(item => (
      <Item key={item.id} imageUrl={item.imagUrl} />
    ));
    return (
      <div className="items">
        <div className="item-list">{items}</div>
      </div>
    );
  }
}

export default Items;
