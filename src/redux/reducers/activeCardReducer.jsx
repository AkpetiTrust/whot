const activeCardReducer = (state = [], action) => {
  if (action.type === "UPDATE_ACTIVE_CARD") {
    return action.payload;
  }

  return state;
};

export default activeCardReducer;
