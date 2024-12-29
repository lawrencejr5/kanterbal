"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

const BackNav: React.FC = () => {
  const router = useRouter();

  return (
    <div className="back-nav">
      <button onClick={() => router.back()}>
        <FaChevronLeft className="icon" />
      </button>
    </div>
  );
};

export default BackNav;
