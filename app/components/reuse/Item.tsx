import React from "react";
import { FaLocationDot, FaRegBookmark } from "react-icons/fa6";
import { FaExchangeAlt, FaLocationArrow, FaMap } from "react-icons/fa";

interface ItemProps {
  data: {
    name: string;
    location: string;
    img: string;
    user: string;
    userImg: string;
  };
}

const Item: React.FC<ItemProps> = ({ data }) => {
  const { name, location, img, user, userImg } = data;
  return (
    <div className="item">
      <div className="bookmark">
        <FaRegBookmark />
      </div>
      <img height={"150px"} width={"100%"} src={`/images/items/${img}`} />
      <div className="content">
        <small>
          <FaLocationDot />
          {location}
        </small>
        <strong>{name}</strong>
        <section>
          <div className="user">
            <img
              src={`/images/users/${userImg}`}
              width={"15px"}
              height={"15px"}
              alt="nyash"
            />
            <small>{user}</small>
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
