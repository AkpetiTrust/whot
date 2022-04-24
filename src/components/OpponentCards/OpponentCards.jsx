import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import { useSelector, useDispatch } from "react-redux";
import useMarket from "../../utils/hooks/useMarket";
import { useEffect } from "react";

function OpponentCards() {
  const [opponentCards, whoIsToPlay, activeCard] = useSelector((state) => [
    state.opponentCards,
    state.whoIsToPlay,
    state.activeCard,
  ]);

  const dispatch = useDispatch();

  const { goToMarket } = useMarket();

  let cardArray = [];
  let isPlayed = false;
  let isPlayedSet = false;
  // I'm using isPlayedSet to make sure isPlayed is only true for one card
  opponentCards.forEach((card) => {
    if (!isPlayedSet) {
      isPlayed =
        whoIsToPlay === "opponent" &&
        (card.number === activeCard.number || card.shape === activeCard.shape);
    } else {
      isPlayed = false;
    }

    if (isPlayed) {
      isPlayedSet = true;
    }

    cardArray.push(
      <CardComponent
        shape={card.shape}
        number={card.number}
        isMine={false}
        isShown={false}
        key={card.shape + card.number}
        isPlayed={isPlayed}
      />
    );
  });

  useEffect(() => {
    if (isPlayedSet === false && whoIsToPlay === "opponent") {
      setTimeout(() => {
        goToMarket("opponent");
        dispatch({
          type: "WHO_IS_TO_PLAY",
          payload: "user",
        });
        dispatch({
          type: "INFO_TEXT",
          payload: "It's your turn to make a move now",
        });
      }, 500);
    }
  }, [goToMarket]);

  return (
    <div className="scroll-container">
      <div className="grid">{cardArray}</div>
    </div>
  );
}

export default OpponentCards;
