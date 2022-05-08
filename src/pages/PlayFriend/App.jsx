import {
  UserCards,
  OpponentCards,
  CenterArea,
  InfoArea,
  GameOver,
  Preloader,
} from "../../components";
import { Flipper } from "react-flip-toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "../../index.css";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

function App() {
  const { room_id } = useParams();

  const [activeCard, userCards, opponentCards, stateHasBeenInitialized] =
    useSelector((state) => [
      state.activeCard,
      state.userCards,
      state.opponentCards,
      state.stateHasBeenInitialized,
    ]);

  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io("http://localhost:8080");
    socket.emit("join_room", { room_id });
    socket.on("dispatch", (action) => {
      action.isFromServer = true;
      dispatch(action);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  if (!stateHasBeenInitialized) {
    return <></>;
  }

  return (
    <Flipper flipKey={[activeCard, ...userCards, ...opponentCards]}>
      <div className="App">
        <OpponentCards />
        <CenterArea />
        <UserCards />
        <InfoArea />
        <GameOver />
        <Preloader />
      </div>
    </Flipper>
  );
}

export default App;
