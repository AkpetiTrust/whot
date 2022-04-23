import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import { useSelector } from "react-redux";
import { Flipper } from "react-flip-toolkit";
import CardNumber from "../CardNumber/CardNumber";

function UserCards() {
  const userCards = useSelector((state) => state.userCards);

  return (
    <Flipper flipKey={userCards}>
      <div className="scroll-container">
        <div className="grid">
          {userCards.map((card) => (
            <CardComponent
              shape={card.shape}
              number={card.number}
              isMine={true}
              isShown={true}
              key={card.shape + card.number}
            />
          ))}
        </div>
        <CardNumber number={userCards.length} />
      </div>
    </Flipper>
  );
}

export default UserCards;
