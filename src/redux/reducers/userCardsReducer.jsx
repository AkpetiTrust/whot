const userCardsReducer = (state = [], action) => {
  if (action.type === "ADD_USER_CARD") {
    return [action.payload, ...state];
  }

  if (action.type === "REMOVE_USER_CARD") {
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

export default userCardsReducer;
