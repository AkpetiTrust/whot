const infoTextReducer = (state = "", action) => {
  if (action.type === "INFO_TEXT") {
    return action.payload;
  }

  return state;
};

export default infoTextReducer;
