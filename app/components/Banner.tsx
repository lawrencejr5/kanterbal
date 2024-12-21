"use client";
import React, { useEffect, useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

import { featured } from "../data/items";

const Banner = () => {
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const featuredInterval = setInterval(() => {
      setCurrIndex((prev) => {
        if (prev > featured.length - 2) return 0;
        return prev + 1;
      });
    }, 10000);

    return () => clearInterval(featuredInterval);
  }, [currIndex]);

  return (
    <section className="banner-container">
      <div
        className="banner"
        style={{
          backgroundImage: `linear-gradient(
        to left,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(/images/items/${featured[currIndex].img})`,
        }}
      >
        <div className="sponsored-text">sponsored</div>
        <div className="main-content">
          <p>{featured[currIndex].name}</p>
          <button>
            Counter&nbsp;
            <FaExchangeAlt />
          </button>
        </div>
        <div className="dots-container">
          {featured.map((item, i) => {
            return (
              <div
                key={i}
                className={`dot ${
                  item.name === featured[currIndex].name ? "action" : ""
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Banner;
