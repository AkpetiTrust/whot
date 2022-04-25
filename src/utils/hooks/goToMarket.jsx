import randomCard from "../functions/randomCard";

const goToMarket = (
  player,
  { market, dispatch, usedCards, opponentCards, userCards },
  number = 1
) => {
  let numberOfMoves = 0;
  let interval = setInterval(() => {
    const card = randomCard(market);
    dispatch({ type: "USED_CARDS", payload: [...usedCards, card] });
    if (player === "user") {
      dispatch({
        type: "USER_CARDS",
        payload: [card, ...userCards],
      });
    } else if (player === "opponent") {
      console.log(card);
      dispatch({
        type: "OPPONENT_CARDS",
        payload: [card, ...opponentCards],
      });
    }

    numberOfMoves++;
    if (numberOfMoves === number) {
      clearInterval(interval);
    }
  }, 500);
};

export default goToMarket;
