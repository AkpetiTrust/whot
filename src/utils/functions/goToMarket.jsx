import randomCard from "./randomCard";
import { addUserCard, addOpponentCard } from "../../redux/actions";

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
  if (player === "user") {
    dispatch(addUserCard(card));
  } else if (player === "opponent") {
    dispatch(addOpponentCard(card));
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
