"use client";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import UserModal from "@/app/components/UserModal";

const UserLocation: React.FC<{ item: any }> = ({ item }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const showModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div className="user-location">
      <button className="user" onClick={showModal}>
        <img src={`/images/users/${item?.userImg}`} alt="" />
        &nbsp;
        <span>{item?.user}</span>
      </button>
      {modalOpen && <UserModal data={item} />}
      <button className="location">
        <FaLocationDot className="icon" />
        &nbsp;
        <span>{item?.location}</span>
      </button>
    </div>
  );
};

export default UserLocation;
