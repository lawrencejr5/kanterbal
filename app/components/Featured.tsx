import React from "react";
import Item from "./reuse/Item";

import { items } from "../data/items";

const Featured = () => {
  return (
    <div className="featured-item-container">
      {items.map((item, i) => {
        return <Item key={i} data={item} />;
      })}
    </div>
  );
};

export default Featured;
