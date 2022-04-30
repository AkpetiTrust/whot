const opponentCardsReducer = (state = [], action) => {
  if (action.type === "ADD_OPPONENT_CARD") {
    return [action.payload, ...state];
  }

  if (action.type === "REMOVE_OPPONENT_CARD") {
    let cardToRemove = action.payload;
    return [...state].filter(
      (card) =>
        !(
          card.shape === cardToRemove.shape &&
          card.number === cardToRemove.number
        )
    );
  }

  return state;
};

export default opponentCardsReducer;
