const infoShownReducer = (state = true, action) => {
  if (action.type === "TOGGLE_INFO_SHOWN") {
    return !state;
  }

  return state;
};

export default infoShownReducer;
