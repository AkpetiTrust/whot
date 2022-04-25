import {
  UserCards,
  OpponentCards,
  CenterArea,
  InfoArea,
  GameOver,
} from "./components";
import { Flipper } from "react-flip-toolkit";
import { useSelector } from "react-redux";

function App() {
  const [cardToMove, usedCards] = useSelector((state) => [
    state.cardToMove,
    state.usedCards,
  ]);

  return (
    <Flipper flipKey={[cardToMove, ...usedCards]}>
      <div className="App">
        <OpponentCards />
        <CenterArea />
        <UserCards />
        <InfoArea />
        <GameOver />
      </div>
    </Flipper>
  );
}

export default App;
