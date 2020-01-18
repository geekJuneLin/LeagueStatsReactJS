import React from "react";

function Item(props) {
  return (
    <div className="item">
      <img src={props.imageUrl} />
    </div>
  );
}

export default Item;
