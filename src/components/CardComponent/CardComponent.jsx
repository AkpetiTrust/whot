import React from "react";
import style from "./index.module.css";
import Number from "../Number/Number";
import Shape from "../Shape/Shape";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flipped, spring } from "react-flip-toolkit";

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
        type: "USED_CARDS",
        payload: [...usedCards, { shape, number }],
      });
      dispatch({
        type: "ACTIVE_CARD",
        payload: { shape, number },
      });
      dispatch({
        type: "WHO_IS_TO_PLAY",
        payload: "opponent",
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
          type: "USED_CARDS",
          payload: [...usedCards, { shape, number }],
        });
        dispatch({
          type: "ACTIVE_CARD",
          payload: { shape, number },
        });
        dispatch({
          type: "WHO_IS_TO_PLAY",
          payload: "user",
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
