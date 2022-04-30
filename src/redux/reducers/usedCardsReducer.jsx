const usedCardsReducer = (state = [], action) => {
  if (action.type === "REFRESH_USED_CARDS") {
    return action.payload;
  }

  if (action.type === "ADD_OPPONENT_CARD" || action.type === "ADD_USER_CARD") {
    return [...state, action.payload];
  }

  return state;
};

export default usedCardsReducer;
