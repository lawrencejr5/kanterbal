import React, { FC } from "react";
import Button from "./reuse/Button";

interface CardProps {
  icon: JSX.Element | null;
  text: string | null;
}

const WhyCard: FC<CardProps> = ({ icon, text }) => {
  return (
    <div className="why-card">
      <div className="icon">{icon}</div>
      <p>{text}</p>
      <Button>Get started</Button>
    </div>
  );
};

export default WhyCard;
