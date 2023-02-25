import { applyMiddleware, createStore } from "redux";
import combinedReducer from "./reducers/playFriendCombinedReducer";
import socket from "../socket/socket";

let pathname = window.location.pathname;
let room_id = pathname.slice(pathname.length - 4, pathname.length);

const enhancedReducer = (state, action) => {
  if (action.type === "INITIALIZE_DECK") {
    return action.payload;
  }

  if (action.type === "UPDATE_STATE") {
    const { playerOneState, playerTwoState } = action.payload;
    return state.player === "one" ? playerOneState : playerTwoState;
  }

  return combinedReducer(state, action);
};

const getUpdatedState = ({ getState }) => {
  return (next) => (action) => {
    const returnValue = next(action);

    const updatedState = getState();
    if (
      action.type !== "UPDATE_STATE" &&
      action.type !== "TOGGLE_INFO_SHOWN" &&
      action.type !== "INITIALIZE_DECK"
    ) {
      socket.emit("sendUpdatedState", updatedState, room_id);
    }

    return returnValue;
  };
};

const store = createStore(enhancedReducer, applyMiddleware(getUpdatedState));

export default store;
