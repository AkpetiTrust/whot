import { createStore } from "redux";
import combinedReducer from "./reducers/playFriendCombinedReducer";

const enhancedReducer = (state, action) => {
  if (action.type === "INITIALIZE_DECK") {
    return action.payload;
  }

  return combinedReducer(state, action);
};

const store = createStore(
  enhancedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
