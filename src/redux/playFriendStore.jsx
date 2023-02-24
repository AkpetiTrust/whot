import { applyMiddleware, createStore } from "redux";
import combinedReducer from "./reducers/playFriendCombinedReducer";
import socket from "../socket/socket";

const enhancedReducer = (state, action) => {
  if (action.type === "INITIALIZE_DECK" || action.type === "UPDATE_STATE") {
    return action.payload;
  }

  return combinedReducer(state, action);
};

const getUpdatedState = ({ getState }) => {
  return (next) => (action) => {
    const returnValue = next(action);

    const updatedState = getState();
    if (action.type !== "UPDATE_STATE" && action.type !== "TOGGLE_INFO_SHOWN") {
      socket.emit("updateState", updatedState);
    }

    console.log(returnValue);

    return returnValue;
  };
};

const store = createStore(enhancedReducer, applyMiddleware(getUpdatedState));

export default store;
