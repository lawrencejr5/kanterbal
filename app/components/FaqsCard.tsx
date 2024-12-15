import React from "react";
import { FaPlus } from "react-icons/fa";

const FaqsCard = () => {
  return (
    <div className="faqs-card">
      <div className="question">
        How can I get started with Kanterbal <FaPlus />
      </div>
      <div className="answer">
        Just click the link on the nav bar to get started. Set up ur location,
        add items u don't need in ur home and check out other items people don't
        need, then check out of you can couter with them. There's also a
        negotiation section to communicate with this person.
      </div>
    </div>
  );
};

export default FaqsCard;
