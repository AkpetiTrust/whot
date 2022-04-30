const removeUserCard = (card) => {
  return { type: "REMOVE_USER_CARD", payload: card };
};

export default removeUserCard;
