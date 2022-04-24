import React from "react";
import { useSelector, useDispatch } from "react-redux";
import randomCard from "../functions/randomCard";

function useMarket() {
  const [deck, usedCards, userCards, opponentCards] = useSelector((state) => [
    state.deck,
    state.usedCards,
    state.userCards,
    state.opponentCards,
  ]);

  const dispatch = useDispatch();

  const market = deck.filter(
    (card) =>
      !usedCards.some(
        (item) => item.name === card.name && item.number === card.number
      )
  );

  const goToMarket = (player, number = 1) => {
    const card = randomCard(market);
    dispatch({ type: "USED_CARDS", payload: [...usedCards, card] });
    if (player === "user") {
      dispatch({
        type: "USER_CARDS",
        payload: [card, ...userCards],
      });
    } else if (player === "opponent") {
      dispatch({
        type: "OPPONENT_CARDS",
        payload: [card, ...opponentCards],
      });
    }
  };

  return { goToMarket };
}

export default useMarket;
