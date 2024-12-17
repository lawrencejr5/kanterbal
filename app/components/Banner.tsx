import React from "react";
import { FaExchangeAlt } from "react-icons/fa";

import Button from "./reuse/Button";

const Banner = () => {
  return (
    <section className="banner-container">
      <div className="banner">
        <div className="sponsored-text">sponsored</div>
        <div className="main-content">
          <p>Stuggart Mercedes 1993</p>
          <button>
            Counter&nbsp;
            <FaExchangeAlt />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
