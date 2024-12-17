import React from "react";
import Item from "./reuse/Item";

import { items } from "../data/items";

const Featured = () => {
  return (
    <section className="featured-container">
      <h1>Featured today</h1>
      <div className="featured-item-container">
        {items.map((item) => {
          return <Item data={item} />;
        })}
      </div>
    </section>
  );
};

export default Featured;
