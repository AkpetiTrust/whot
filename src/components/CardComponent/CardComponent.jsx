import React from "react";
import style from "./index.module.css";
import Number from "../Number/Number";
import Shape from "../Shape/Shape";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flipped } from "react-flip-toolkit";
import useMarket from "../../utils/hooks/useMarket";
import goToMarket from "../../utils/hooks/goToMarket";

function CardComponent({
  shape,
  number,
  isMine,
  isShown,
  isActiveCard,
  isPlayed,
}) {
  const [isShownState, setIsShownState] = useState(isShown);
  const [delay, setDelay] = useState(500);
  const [
    whoIsToPlay,
    cardToMove,
    activeCard,
    userCards,
    usedCards,
    opponentCards,
  ] = useSelector((state) => [
    state.whoIsToPlay,
    state.cardToMove,
    state.activeCard,
    state.userCards,
    state.usedCards,
    state.opponentCards,
  ]);
  const dispatch = useDispatch();
  const { market } = useMarket();

  useEffect(() => {
    setTimeout(() => {
      if (isPlayed) {
        playCard("opponent");
      }
    }, delay);
  });

  const playCard = (player) => {
    if (player === "user") {
      dispatch({
        type: "CARD_TO_MOVE",
        payload: { id: shape + number, location: "activeCard" },
      });
      dispatch({
        type: "USER_CARDS",
        payload: [...userCards].filter(
          (card) => !(card.number === number && card.shape === shape)
        ),
      });
      dispatch({
        type: "ACTIVE_CARD",
        payload: { shape, number },
      });
      if (number === 1 || number === 8) {
        dispatch({
          type: "INFO_TEXT",
          payload: "You played a suspension card so play again",
        });
        return;
      }

      // Pick 2
      if (number === 2) {
        goToMarket(
          "opponent",
          {
            market,
            dispatch,
            usedCards,
            userCards,
            opponentCards,
          },
          2
        );
        dispatch({
          type: "INFO_TEXT",
          payload: "You played a pick 2 so play again",
        });
        return;
      }

      // Pick 3
      if (number === 5) {
        goToMarket(
          "opponent",
          {
            market,
            dispatch,
            usedCards,
            userCards,
            opponentCards,
          },
          3
        );
        dispatch({
          type: "INFO_TEXT",
          payload: "You played a pick 3 so play again",
        });
        return;
      }

      dispatch({
        type: "WHO_IS_TO_PLAY",
        payload: "opponent",
      });
      dispatch({
        type: "INFO_TEXT",
        payload: "The computer is calculating it's moves",
      });
    } else if (player === "opponent") {
      setIsShownState(true);
      setTimeout(() => {
        dispatch({
          type: "CARD_TO_MOVE",
          payload: { id: shape + number, location: "activeCard" },
        });
        dispatch({
          type: "OPPONENT_CARDS",
          payload: [...opponentCards].filter(
            (card) => !(card.number === number && card.shape === shape)
          ),
        });
        dispatch({
          type: "ACTIVE_CARD",
          payload: { shape, number },
        });
        if (number === 1 || number === 8) {
          return;
        }
        dispatch({
          type: "WHO_IS_TO_PLAY",
          payload: "user",
        });
        dispatch({
          type: "INFO_TEXT",
          payload: "It's your turn to make a move now",
        });
      }, delay);
    }
  };

  const handleClick = () => {
    if (!isMine) return;

    if (
      whoIsToPlay === "user" &&
      (number === activeCard.number || shape === activeCard.shape)
    ) {
      playCard("user");
    }
  };

  return (
    <Flipped flipId={shape + number}>
      <div
        className={`${style.card} ${isShownState && style.shown} ${
          isMine && style.mine
        } ${isActiveCard && "active-card"}`}
        onClick={handleClick}
      >
        <div className={style.inner}>
          <div className={style.front}>
            <Number number={number} shape={shape} />
            <Shape shape={shape} />
            <Number number={number} shape={shape} reverse={true} />
          </div>
          <div className={style.back}>
            <p>WHOT</p>
            <p>WHOT</p>
          </div>
        </div>
      </div>
    </Flipped>
  );
}

export default CardComponent;
