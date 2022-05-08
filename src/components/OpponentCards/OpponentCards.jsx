import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import { useSelector } from "react-redux";

function OpponentCards() {
  const [opponentCards] = useSelector((state) => [state.opponentCards]);

  return (
    <div className="scroll-container">
      <div className="grid">
        {opponentCards.map((card) => (
          <CardComponent
            shape={card.shape}
            number={card.number}
            isMine={false}
            isShown={false}
            key={card.shape + card.number}
          />
        ))}
      </div>
    </div>
  );
}

export default OpponentCards;
