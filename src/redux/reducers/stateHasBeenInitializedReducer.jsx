const stateHasBeenInitializedReducer = (state = false, action) => {
  if (action.type === "INITIALIZE_DECK") {
    return true;
  }

  return state;
};

export default stateHasBeenInitializedReducer;
