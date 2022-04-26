const shouldDelayReducer = (state = {}, action) => {
  if (action.type === "SHOULD_DELAY") {
    return action.payload;
  }

  return state;
};

export default shouldDelayReducer;
