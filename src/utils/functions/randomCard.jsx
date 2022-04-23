function randomCard(deck) {
  let i = Math.floor(Math.random() * deck.length);
  return deck[i];
}

export default randomCard;
