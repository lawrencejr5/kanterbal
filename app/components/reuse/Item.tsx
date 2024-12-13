import React from "react";
import { FaRegBookmark, FaStackExchange } from "react-icons/fa6";
import { FaExchangeAlt } from "react-icons/fa";

import Img from "./Img";
import Button from "./Button";

const Item = () => {
  return (
    <div className="item">
      <div className="bookmark">
        <FaRegBookmark />
      </div>
      <img height={"150px"} width={"100%"} src={"/images/headphones.jpg"} />
      <div className="content">
        <small>Asaba, Nigeria</small>
        <strong>Lawjun VR Headsets Pro 3</strong>
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
          <Button>
            counter&nbsp; <FaExchangeAlt />
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Item;
