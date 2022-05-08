import { createStore } from "redux";
import combinedReducer from "./reducers/playFriendCombinedReducer";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

const enhancedReducer = (state, action) => {
  if (action.type === "INITIALIZE_DECK") {
    return action.payload;
  }

  let room_id =
    window.location.href.split("/")[window.location.href.split("/").length - 1];
  socket.emit("join_room", { room_id });

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

const store = createStore(
  enhancedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
