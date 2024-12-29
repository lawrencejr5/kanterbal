import React from "react";
import Link from "next/link";

import { FaLocationDot, FaRegBookmark } from "react-icons/fa6";
import { FaExchangeAlt } from "react-icons/fa";

interface ItemProps {
  data: {
    id: string;
    name: string;
    location: string;
    img: string;
    user: string;
    userImg: string;
  };
}

const Item: React.FC<ItemProps> = ({ data }) => {
  const { name, location, img, user, userImg, id } = data;
  return (
    <Link href={`/item/${id}`} className="item link-component">
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
    </Link>
  );
};

export default Item;
