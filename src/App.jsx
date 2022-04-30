import {
  UserCards,
  OpponentCards,
  CenterArea,
  InfoArea,
  GameOver,
  Preloader,
} from "./components";
import { Flipper } from "react-flip-toolkit";
import { useSelector } from "react-redux";

function App() {
  const [activeCard, userCards, opponentCards] = useSelector((state) => [
    state.activeCard,
    state.userCards,
    state.opponentCards,
  ]);

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
