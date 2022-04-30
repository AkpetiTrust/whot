const infoTextReducer = (state = "", action) => {
  if (action.type === "SET_INFO_TEXT") {
    return action.payload;
  }

  return state;
};

export default infoTextReducer;
