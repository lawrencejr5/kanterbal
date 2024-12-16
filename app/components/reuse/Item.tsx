import React from "react";
import { FaLocationDot, FaRegBookmark } from "react-icons/fa6";
import { FaExchangeAlt, FaLocationArrow, FaMap } from "react-icons/fa";

import Button from "./Button";

const Item = () => {
  return (
    <div className="item">
      <div className="bookmark">
        <FaRegBookmark />
      </div>
      <img height={"150px"} width={"100%"} src={"/images/headphones.jpg"} />
      <div className="content">
        <small>
          <FaLocationDot />
          Asaba, Nigeria
        </small>
        <strong>Lawjun VR Headsets Pro 3 XL</strong>
        <section>
          <div className="user">
            <img
              src={"/images/profile.jpg"}
              width={"15px"}
              height={"15px"}
              alt="nyash"
            />
            <small>lawrencejr</small>
          </div>
          <button>
            counter&nbsp; <FaExchangeAlt />
          </button>
        </section>
      </div>
    </div>
  );
};

export default Item;
