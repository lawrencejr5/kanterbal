import React, { FC } from "react";

import { FaPlus } from "react-icons/fa";

interface FaqsCardProps {
  question: string;
  answer: string;
}

const FaqsCard: FC<FaqsCardProps> = ({ question, answer }) => {
  return (
    <div className="faqs-card">
      <div className="question">
        {question} <FaPlus />
      </div>
      <div className="answer">{answer}</div>
    </div>
  );
};

export default FaqsCard;
