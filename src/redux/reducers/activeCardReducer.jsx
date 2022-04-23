const activeCardReducer = (state = [], action) => {
  if (action.type === "ACTIVE_CARD") {
    return action.payload;
  }

  return state;
};

export default activeCardReducer;
