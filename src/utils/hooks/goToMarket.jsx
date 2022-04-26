import randomCard from "../functions/randomCard";

const goToMarket = (
  player,
  { market, dispatch, usedCards, opponentCards, userCards },
  number = 1
) => {
  let numberOfMoves = 0;
  // setOfUsedCards is for updating the cards as more are created inside the loop
  let setOfUsedCards = [];
  let interval = setInterval(() => {
    const card = randomCard(
      market.filter((card) => !setOfUsedCards.includes(card))
    );
    console.log(card);
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
      clearInterval(interval);
    }
  }, 500);
};

export default goToMarket;
