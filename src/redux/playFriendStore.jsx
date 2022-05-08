import { createStore } from "redux";
import combinedReducer from "./reducers/playFriendCombinedReducer";
import socket from "../socket/socket";

const enhancedReducer = (state, action) => {
  if (action.type === "INITIALIZE_DECK") {
    return action.payload;
  }

  let opponentAction = { ...action };

  if (action.type.includes("USER")) {
    opponentAction.type = opponentAction.type.replace("USER", "OPPONENT");
  } else {
    opponentAction.type = opponentAction.type.replace("OPPONENT", "USER");
  }

  if (action.type === "SET_WHO_IS_TO_PLAY") {
    switch (action.payload) {
      case "user":
        opponentAction.payload = "opponent";
      case "opponent":
        opponentAction.payload = "user";
    }
  }

  if (action.type !== "TOGGLE_INFO_SHOWN" && !action.isFromServer) {
    socket.emit("dispatch", opponentAction);
  }

  return combinedReducer(state, action);
};

const store = createStore(enhancedReducer);

export default store;
