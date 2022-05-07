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
    whoIsToPlay: "user",
    infoText: "It's your turn to make a move now",
    infoShown: true,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
