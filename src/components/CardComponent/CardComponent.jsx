import React from "react";
import style from "./index.module.css";
import Number from "../Number/Number";
import Shape from "../Shape/Shape";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flipped, spring } from "react-flip-toolkit";

function CardComponent({ shape, number, isMine, isShown, isActiveCard }) {
  const [isShownState, setIsShownState] = useState(isShown);
  const [whoIsToPlay, cardToMove, activeCard, userCards] = useSelector(
    (state) => [
      state.whoIsToPlay,
      state.cardToMove,
      state.activeCard,
      state.userCards,
    ]
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!isMine) return;

    if (
      whoIsToPlay === "user" &&
      (number === activeCard.number || shape === activeCard.shape)
    ) {
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
      dispatch({
        type: "WHO_IS_TO_PLAY",
        payload: "opponent",
      });
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
