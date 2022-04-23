import { createStore } from "redux";
import combinedReducer from "./reducers";
import initializeDeck from "../utils/functions/initializeDeck";

const { deck, userCards, usedCards, opponentCards, activeCard } =
  initializeDeck();
const store = createStore(
  combinedReducer,
  {
    deck,
    userCards,
    usedCards,
    opponentCards,
    activeCard,
    cardToMove: null,
    whoIsToPlay: "user",
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
