const infoShownReducer = (state = true, action) => {
  if (action.type === "INFO_SHOWN") {
    return !state;
  }

  return state;
};

export default infoShownReducer;
