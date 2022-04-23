const opponentCardsReducer = (state = [], action) => {
  if (action.type === "OPPONENT_CARDS") {
    return action.payload;
  }

  return state;
};

export default opponentCardsReducer;
