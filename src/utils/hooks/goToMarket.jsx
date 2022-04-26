import randomCard from "../functions/randomCard";

const goToMarket = (
  player,
  { market, dispatch, usedCards, opponentCards, userCards, activeCard },
  number = 1,
  setOfUsedCards = [],
  numberOfMoves = 0
) => {
  // setOfUsedCards is for updating the cards as more are created inside the loop
  const card = randomCard(
    market.filter((card) => !setOfUsedCards.includes(card))
  );
  dispatch({
    type: "USED_CARDS",
    payload: [...usedCards, ...setOfUsedCards, card],
  });
  if (player === "user") {
    dispatch({
      type: "USER_CARDS",
      payload: [card, ...setOfUsedCards, ...userCards],
    });
  } else if (player === "opponent") {
    dispatch({
      type: "OPPONENT_CARDS",
      payload: [card, ...setOfUsedCards, ...opponentCards],
    });
  }

  setOfUsedCards.unshift(card);

  numberOfMoves++;
  if (numberOfMoves === number) {
    return;
  }

  goToMarket(
    player,
    { market, dispatch, usedCards, opponentCards, userCards },
    number,
    setOfUsedCards,
    numberOfMoves
  );
};

export default goToMarket;
