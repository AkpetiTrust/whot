const refreshUsedCards = (newUsedCards) => {
  return { type: "REFRESH_USED_CARDS", payload: newUsedCards };
};

export default refreshUsedCards;
