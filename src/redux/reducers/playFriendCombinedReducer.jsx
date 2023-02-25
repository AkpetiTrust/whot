import { combineReducers } from "redux";

import deckReducer from "./deckReducer";
import userCardsReducer from "./userCardsReducer";
import opponentCardsReducer from "./opponentCardsReducer";
import usedCardsReducer from "./usedCardsReducer";
import activeCardReducer from "./activeCardReducer";
import whoIsToPlayReducer from "./whoIsToPlayReducer";
import infoShownReducer from "./infoShownReducer";
import infoTextReducer from "./infoTextReducer";
import stateHasBeenInitializedReducer from "./stateHasBeenInitializedReducer";
import playerReducer from "./playerReducer";

const combinedReducer = combineReducers({
  deck: deckReducer,
  userCards: userCardsReducer,
  opponentCards: opponentCardsReducer,
  usedCards: usedCardsReducer,
  activeCard: activeCardReducer,
  whoIsToPlay: whoIsToPlayReducer,
  infoText: infoTextReducer,
  infoShown: infoShownReducer,
  stateHasBeenInitialized: stateHasBeenInitializedReducer,
  player: playerReducer,
});

export default combinedReducer;
