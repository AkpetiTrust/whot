import { UserCards, OpponentCards, CenterArea } from "./components";
import { Flipper } from "react-flip-toolkit";
import { useSelector } from "react-redux";

function App() {
  const cardToMove = useSelector((state) => state.cardToMove);

  return (
    <Flipper flipKey={cardToMove}>
      <div className="App">
        <OpponentCards />
        <CenterArea />
        <UserCards />
      </div>
    </Flipper>
  );
}

export default App;
