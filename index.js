const initializeDeck = require("./utils/functions/initializeDeck");
const reverseState = require("./utils/functions/reverseState");

let rooms = [];

const io = require("socket.io")(8080, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  socket.on("join_room", ({ room_id, storedId }) => {
    socket.join(room_id);
    let currentRoom = rooms.find((room) => room.room_id == room_id);
    if (currentRoom) {
      let currentPlayers = currentRoom.players;

      if (currentPlayers.length == 1) {
        // If I'm the only player in the room, get playerOneState
        if (currentPlayers[0].storedId == storedId) {
          io.to(socket.id).emit("dispatch", {
            type: "INITIALIZE_DECK",
            payload: currentRoom.playerOneState,
          });
        } else {
          rooms = rooms.map((room) => {
            if (room.room_id == room_id) {
              return {
                ...room,
                players: [
                  ...room.players,
                  { storedId, socketId: socket.id, player: "two" },
                ],
              };
            }
            return room;
          });
          io.to(socket.id).emit("dispatch", {
            type: "INITIALIZE_DECK",
            payload: reverseState(currentRoom.playerOneState),
          });
        }
      } else {
        // Check if player can actually join room
        let currentPlayer = currentPlayers.find(
          (player) => player.storedId == storedId
        );
        if (currentPlayer) {
          io.to(socket.id).emit("dispatch", {
            type: "INITIALIZE_DECK",
            payload:
              currentPlayer.player == "one"
                ? currentRoom.playerOneState
                : reverseState(currentRoom.playerOneState),
          });
        }
      }
    } else {
      // Add room to store
      const { deck, userCards, usedCards, opponentCards, activeCard } =
        initializeDeck();

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
        player: "one",
      };

      rooms.push({
        room_id,
        players: [
          {
            storedId,
            socketId: socket.id,
            player: "one",
          },
        ],
        playerOneState,
      });

      io.to(socket.id).emit("dispatch", {
        type: "INITIALIZE_DECK",
        payload: playerOneState,
      });
    }
  });

  socket.on("sendUpdatedState", (updatedState, room_id) => {
    const playerOneState =
      updatedState.player === "one" ? updatedState : reverseState(updatedState);
    const playerTwoState = reverseState(playerOneState);
    rooms = rooms.map((room) => {
      if (room.room_id == room_id) {
        return {
          ...room,
          playerOneState,
        };
      }
      return room;
    });

    socket.broadcast.to(room_id).emit("dispatch", {
      type: "UPDATE_STATE",
      payload: {
        playerOneState,
        playerTwoState,
      },
    });
  });

  socket.on("game_over", (room_id) => {
    rooms = rooms.filter((room) => room.room_id != room_id);
  });
});
