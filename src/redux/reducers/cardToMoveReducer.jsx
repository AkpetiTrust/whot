const cardToMoveReducer = (state = {}, action) => {
  if (action.type === "CARD_TO_MOVE") {
    return action.payload;
  }

  return state;
};

export default cardToMoveReducer;
