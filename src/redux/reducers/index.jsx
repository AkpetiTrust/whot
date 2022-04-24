import { combineReducers } from "redux";

import deckReducer from "./deckReducer";
import userCardsReducer from "./userCardsReducer";
import opponentCardsReducer from "./opponentCardsReducer";
import usedCardsReducer from "./usedCardsReducer";
import activeCardReducer from "./activeCardReducer";
import cardToMoveReducer from "./cardToMoveReducer";
import whoIsToPlayReducer from "./whoIsToPlayReducer";
import infoShownReducer from "./infoShownReducer";
import infoTextReducer from "./infoTextReducer";

const combinedReducer = combineReducers({
  deck: deckReducer,
  userCards: userCardsReducer,
  opponentCards: opponentCardsReducer,
  usedCards: usedCardsReducer,
  activeCard: activeCardReducer,
  cardToMove: cardToMoveReducer,
  whoIsToPlay: whoIsToPlayReducer,
  infoText: infoTextReducer,
  infoShown: infoShownReducer,
});

export default combinedReducer;
