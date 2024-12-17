"use client";

import React, { FC, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

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
  };
  return (
    <div className={` ${faqOpen ? "faqs-card opened" : "faqs-card"}`}>
      <div className="question">
        {question}{" "}
        <button onClick={openFaq}>{faqOpen ? <FaMinus /> : <FaPlus />}</button>
      </div>
      <div className="answer">{answer}</div>
    </div>
  );
};

export default FaqsCard;
