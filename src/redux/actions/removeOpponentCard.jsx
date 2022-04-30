const removeOpponentCard = (card) => {
  return { type: "REMOVE_OPPONENT_CARD", payload: card };
};

export default removeOpponentCard;
