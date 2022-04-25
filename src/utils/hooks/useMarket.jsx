import { useSelector, useDispatch } from "react-redux";

function useMarket() {
  const [deck, usedCards] = useSelector((state) => [
    state.deck,
    state.usedCards,
  ]);

  const market = deck.filter((card) => !usedCards.includes(card));

  return { market };
}

export default useMarket;
