const Card = require("../classes/Card");
const randomCard = require("./randomCard");

const initializeDeck = () => {
  // SET MY DECK
  let deck = [];
  // CREATING CIRCLES
  for (let i = 1; i < 15; i++) {
    if (i === 6 || i === 9) {
      // Pass
    } else {
      deck.push(new Card("circle", i));
    }
  }
  // CREATING TRIANGLES
  for (let i = 1; i < 15; i++) {
    if (i === 6 || i === 9) {
      // Pass
    } else {
      deck.push(new Card("triangle", i));
    }
  }

  // CREATING CROSSES
  for (let i = 1; i < 15; i++) {
    if (i === 4 || i === 6 || i === 8 || i === 9 || i === 12) {
      // Pass
    } else {
      deck.push(new Card("cross", i));
    }
  }

  // CREATING SQUARES
  for (let i = 1; i < 15; i++) {
    if (i === 4 || i === 6 || i === 8 || i === 9 || i === 12) {
      // Pass
    } else {
      deck.push(new Card("square", i));
    }
  }

  // CREATING STARS
  for (let i = 1; i < 9; i++) {
    if (i === 6) {
      // Pass
    } else {
      deck.push(new Card("star", i));
    }
  }

  // GENERATE OPPONENT AND USER CARDS

  let opponentCards = [];
  let userCards = [];
  let usedCards = [];

  while (opponentCards.length < 5) {
    let card = randomCard(deck);
    if (usedCards.includes(card)) {
      continue;
    } else {
      usedCards.push(card);
      opponentCards.push(card);
    }
  }

  while (userCards.length < 5) {
    let card = randomCard(deck);
    if (usedCards.includes(card)) {
      continue;
    } else {
      usedCards.push(card);
      userCards.push(card);
    }
  }

  // GENERATE STARTING CARD
  let activeCard;
  do {
    activeCard = randomCard(deck);
  } while (usedCards.includes(activeCard));
  usedCards.push(activeCard);

  return { deck, userCards, usedCards, opponentCards, activeCard };
};

module.exports = initializeDeck;
