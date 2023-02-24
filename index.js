const initializeDeck = require("./utils/functions/initializeDeck");
const reverseState = require("./utils/functions/reverseState");

const { deck, userCards, usedCards, opponentCards, activeCard } =
  initializeDeck();

const io = require("socket.io")(8080, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  socket.on("join_room", ({ room_id }) => {
    socket.join(room_id);

    const playerOneState = {
      deck,
      userCards,
      usedCards,
      opponentCards,
      activeCard,
      whoIsToPlay: "user",
      infoText: "It's your turn to make a move now",
      infoShown: true,
      stateHasBeenInitialized: true,
    };

    const playerTwoState = reverseState(playerOneState);

    const players = io.sockets.adapter.rooms.get(room_id);

    if (players.size === 1) {
      io.to(socket.id).emit("dispatch", {
        type: "INITIALIZE_DECK",
        payload: playerOneState,
      });
    } else {
      io.to(socket.id).emit("dispatch", {
        type: "INITIALIZE_DECK",
        payload: playerTwoState,
      });
    }

    socket.on("updateState", (updatedState) => {
      socket.broadcast.to(room_id).emit("dispatch", {
        type: "UPDATE_STATE",
        payload: reverseState(updatedState),
      });
    });
  });
});
