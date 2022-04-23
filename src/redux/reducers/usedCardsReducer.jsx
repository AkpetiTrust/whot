const usedCardsReducer = (state = [], action) => {
  if (action.type === "USED_CARDS") {
    return action.payload;
  }

  return state;
};

export default usedCardsReducer;
