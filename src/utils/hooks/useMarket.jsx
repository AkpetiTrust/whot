import { useSelector, useDispatch } from "react-redux";

function useMarket() {
  const [deck, usedCards, userCards, opponentCards, activeCard] = useSelector(
    (state) => [
      state.deck,
      state.usedCards,
      state.userCards,
      state.opponentCards,
      state.activeCard,
    ]
  );

  const dispatch = useDispatch();

  const market = deck.filter((card) => !usedCards.includes(card));
  if (market.length <= 10) {
    // Refresh market
    dispatch({
      type: "USED_CARDS",
      payload: [...userCards, ...opponentCards, activeCard],
    });
  }

  return { market };
}

export default useMarket;
