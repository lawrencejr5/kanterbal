import React, { FC } from "react";

import Button from "./reuse/Button";

interface CardProps {
  icon: JSX.Element;
  text: string;
}

const WhyCard: FC<CardProps> = ({ icon, text }) => {
  return (
    <div className="why-card">
      <div className="icon">{icon}</div>
      <p>{text}</p>
      <button>Get started</button>
    </div>
  );
};

export default WhyCard;
