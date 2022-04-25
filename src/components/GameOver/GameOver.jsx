import React from "react";
import style from "./index.module.css";
import useIsGameOver from "../../utils/hooks/useIsGameOver";
import confetti from "canvas-confetti";
import confettiAnimation from "../../utils/functions/confettiAnimation";

function GameOver() {
  const isGameOver = useIsGameOver();

  const title = isGameOver().winner === "user" ? "YOU WIN" : "YOU LOST😔";
  const subtitle =
    isGameOver().winner === "user"
      ? "Congrats! You won this round."
      : "Sorry, just try again.";

  if (isGameOver().winner === "user") {
    confettiAnimation(confetti);
  }

  return (
    <div
      className={`${style.game_over} ${!isGameOver().answer && style.hidden}`}
    >
      <div className={style.inner}>
        <p className={style.title}>{title}</p>
        <p>{subtitle}</p>
        <button
          onClick={() => {
            window.location.reload();
          }}
          className={style.btn}
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
}

export default GameOver;
