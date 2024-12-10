import React from "react";
import Button from "./global/Button";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner">
        <div className="sponsored-text">sponsored</div>
        <div className="main-content">
          <p>Lawjun Vr Headsets Pro 3</p>
          <Button>Counter</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
