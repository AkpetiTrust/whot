const whoIsToPlayReducer = (state = "user", action) => {
  if (action.type === "SET_WHO_IS_TO_PLAY") {
    return action.payload;
  }

  return state;
};

export default whoIsToPlayReducer;
