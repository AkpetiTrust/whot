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
import socket from "../../socket/socket";
import { generateRandomCode } from "../../utils/functions/generateRandomCode";

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

  const handleDispatch = (action) => {
    action.isFromServer = true;
    dispatch(action);
  };

  useEffect(() => {
    let storedId = localStorage.getItem("storedId");
    if (!storedId) {
      storedId = generateRandomCode(10);
      localStorage.setItem("storedId", storedId);
    }

    socket.emit("join_room", { room_id, storedId });
    socket.on("dispatch", handleDispatch);

    return () => {
      socket.off("dispatch", handleDispatch);
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
