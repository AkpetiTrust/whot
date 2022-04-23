import { combineReducers } from "redux";

import deckReducer from "./deckReducer";
import userCardsReducer from "./userCardsReducer";
import opponentCardsReducer from "./opponentCardsReducer";
import usedCardsReducer from "./usedCardsReducer";
import activeCardReducer from "./activeCardReducer";
import cardToMoveReducer from "./cardToMoveReducer";
import whoIsToPlayReducer from "./whoIsToPlayReducer";

const combinedReducer = combineReducers({
  deck: deckReducer,
  userCards: userCardsReducer,
  opponentCards: opponentCardsReducer,
  usedCards: usedCardsReducer,
  activeCard: activeCardReducer,
  cardToMove: cardToMoveReducer,
  whoIsToPlay: whoIsToPlayReducer,
});

export default combinedReducer;
