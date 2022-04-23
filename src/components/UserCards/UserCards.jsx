import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import { useSelector } from "react-redux";
import CardNumber from "../CardNumber/CardNumber";

function UserCards() {
  const [userCards] = useSelector((state) => [state.userCards]);

  return (
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
  );
}

export default UserCards;
