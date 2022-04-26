import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import { useSelector, useDispatch } from "react-redux";
import useMarket from "../../utils/hooks/useMarket";
import { useEffect } from "react";
import goToMarket from "../../utils/hooks/goToMarket";

function OpponentCards() {
  const [opponentCards, whoIsToPlay, activeCard, usedCards, userCards] =
    useSelector((state) => [
      state.opponentCards,
      state.whoIsToPlay,
      state.activeCard,
      state.usedCards,
      state.userCards,
    ]);

  const dispatch = useDispatch();
  const { market } = useMarket();

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
        isShown={true}
        key={card.shape + card.number}
        isPlayed={isPlayed}
      />
    );
  });

  useEffect(() => {
    if (isPlayedSet === false && whoIsToPlay === "opponent") {
      const attackNumbers = [2, 5, 14];

      if (attackNumbers.includes(activeCard.number)) {
        let delay = 1200;

        if (activeCard.number === 14) {
          delay = 500;
        }

        setTimeout(() => {
          goToMarket("opponent", {
            market,
            dispatch,
            usedCards,
            userCards,
            opponentCards,
          });
          dispatch({
            type: "WHO_IS_TO_PLAY",
            payload: "user",
          });
          dispatch({
            type: "INFO_TEXT",
            payload: "It's your turn to make a move now",
          });
        }, delay);

        return;
      }

      goToMarket("opponent", {
        market,
        dispatch,
        usedCards,
        userCards,
        opponentCards,
      });
      dispatch({
        type: "WHO_IS_TO_PLAY",
        payload: "user",
      });
      dispatch({
        type: "INFO_TEXT",
        payload: "It's your turn to make a move now",
      });
    }
  }, [whoIsToPlay, userCards, opponentCards]);

  return (
    <div className="scroll-container">
      <div className="grid">{cardArray}</div>
    </div>
  );
}

export default OpponentCards;
