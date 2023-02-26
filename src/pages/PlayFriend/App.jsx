import {
  UserCards,
  OpponentCards,
  CenterArea,
  InfoArea,
  GameOver,
  Preloader,
  ErrorPage,
} from "../../components";
import { Flipper } from "react-flip-toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "../../index.css";
import { useParams } from "react-router-dom";
import socket from "../../socket/socket";
import { generateRandomCode } from "../../utils/functions/generateRandomCode";
import useIsGameOver from "../../utils/hooks/useIsGameOver";

function App() {
  const { room_id } = useParams();
  const isGameOver = useIsGameOver();
  const [errorText, setErrorText] = useState("");

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

  const handleError = (errorText) => {
    setErrorText(errorText);
  };

  useEffect(() => {
    let storedId = localStorage.getItem("storedId");
    if (!storedId) {
      storedId = generateRandomCode(10);
      localStorage.setItem("storedId", storedId);
    }

    socket.emit("join_room", { room_id, storedId });
    socket.on("dispatch", handleDispatch);
    socket.on("error", handleError);

    return () => {
      socket.off("dispatch", handleDispatch);
      socket.off("error", handleError);
    };
  }, []);

  useEffect(() => {
    if (isGameOver().answer && stateHasBeenInitialized) {
      socket.emit("game_over", room_id);
    }
  }, [isGameOver]);

  if (errorText) return <ErrorPage errorText={errorText} />;

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
