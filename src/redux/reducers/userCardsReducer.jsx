const userCardsReducer = (state = [], action) => {
  if (action.type === "USER_CARDS") {
    return action.payload;
  }

  return state;
};

export default userCardsReducer;
