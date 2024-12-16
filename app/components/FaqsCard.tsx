"use client";

import React, { FC, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import Button from "./reuse/Button";

interface FaqsCardProps {
  question: string;
  answer: string;
}

const FaqsCard: FC<FaqsCardProps> = ({ question, answer }) => {
  const [faqOpen, setFaqOpen] = useState<boolean>(false);

  const openFaq = () => {
    setFaqOpen((prev) => {
      return !prev;
    });
    console.log(faqOpen);
  };
  return (
    <div className={` ${faqOpen ? "faqs-card opened" : "faqs-card"}`}>
      <div className="question">
        {question}{" "}
        <Button clickFunc={openFaq}>
          {faqOpen ? <FaMinus /> : <FaPlus />}
        </Button>
      </div>
      <div className="answer">{answer}</div>
    </div>
  );
};

export default FaqsCard;
