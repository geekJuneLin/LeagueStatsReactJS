import React from "react";
import Item from "./Item";

function Items() {
  return (
    <div className="items">
      <div className="item-list">
        <Item imageUrl="https://opgg-static.akamaized.net/images/lol/item/3068.png?image=q_auto,w_22&v=1578479159" />
        <Item imageUrl="https://opgg-static.akamaized.net/images/lol/item/3075.png?image=q_auto,w_22&v=1578479159" />
        <Item imageUrl="https://opgg-static.akamaized.net/images/lol/item/3111.png?image=q_auto,w_22&v=1578479159" />
        <Item imageUrl="https://opgg-static.akamaized.net/images/lol/item/3091.png?image=q_auto,w_22&v=1578479159" />
        <Item imageUrl="https://opgg-static.akamaized.net/images/lol/item/1037.png?image=q_auto,w_22&v=1578479159" />
        <Item imageUrl="https://opgg-static.akamaized.net/images/lol/item/3052.png?image=q_auto,w_22&v=1578479159" />
        <Item imageUrl="https://opgg-static.akamaized.net/images/lol/item/2052.png?image=q_auto,w_22&v=1578479159" />
        <Item imageUrl="https://opgg-static.akamaized.net/images/lol/item/3340.png?image=q_auto,w_22&v=1578479159" />
      </div>
    </div>
  );
}

export default Items;
