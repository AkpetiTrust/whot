const reverseState = (playerOneState) => {
  let playerTwoState = { ...playerOneState };
  const { userCards, opponentCards, whoIsToPlay } = playerTwoState;
  playerTwoState = {
    ...playerTwoState,
    userCards: opponentCards,
    opponentCards: userCards,
    whoIsToPlay: whoIsToPlay === "user" ? "opponent" : "user",
    infoText:
      whoIsToPlay === "user"
        ? "It's your opponent's turn to make a move now"
        : "It's your turn to play",
  };
  return playerTwoState;
};

module.exports = reverseState;
