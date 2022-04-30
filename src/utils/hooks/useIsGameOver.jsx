import { useSelector } from "react-redux";

function useIsGameOver() {
  const [userCards, opponentCards] = useSelector((state) => [
    state.userCards,
    state.opponentCards,
  ]);

  const isGameOver = () => {
    let answer = false;
    let winner = null;
    if (userCards.length === 0) {
      winner = "user";
      answer = true;
    }
    if (opponentCards.length === 0) {
      winner = "opponent";
      answer = true;
    }

    return { answer, winner };
  };

  return isGameOver;
}

export default useIsGameOver;
