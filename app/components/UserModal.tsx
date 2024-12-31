import React from "react";

import { FaRegStar, FaStar } from "react-icons/fa";

interface ItemProps {
  data:
    | {
        id: string;
        name: string;
        location: string;
        img: string;
        user: string;
        userImg: string;
      }
    | undefined;
}

const UserModal: React.FC<ItemProps> = ({ data }) => {
  return (
    <div className="user-modal">
      <div className="user">
        <img className="img" src={`/images/users/${data?.userImg}`} alt="" />
        &nbsp;
        <span className="span"> {data?.user}</span>
      </div>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </div>
    </div>
  );
};

export default UserModal;
