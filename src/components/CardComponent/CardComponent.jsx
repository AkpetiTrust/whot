import React from "react";
import style from "./index.module.css";
import Number from "../Number/Number";
import Shape from "../Shape/Shape";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flipped } from "react-flip-toolkit";
import useMarket from "../../utils/hooks/useMarket";
import goToMarket from "../../utils/functions/goToMarket";
import useIsGameOver from "../../utils/hooks/useIsGameOver";
import {
  removeUserCard,
  removeOpponentCard,
  setInfoText,
  setWhoIsToPlay,
  updateActiveCard,
} from "../../redux/actions";

function CardComponent({
  shape,
  number,
  isMine,
  isShown,
  isActiveCard,
  isPlayed,
  isMarketCard,
}) {
  const [isShownState, setIsShownState] = useState(isShown);
  const [whoIsToPlay, activeCard, userCards, usedCards, opponentCards] =
    useSelector((state) => [
      state.whoIsToPlay,
      state.activeCard,
      state.userCards,
      state.usedCards,
      state.opponentCards,
    ]);
  const dispatch = useDispatch();
  const { market } = useMarket();
  const isGameOver = useIsGameOver();

  const marketConfig = {
    market,
    dispatch,
    usedCards,
    userCards,
    opponentCards,
    activeCard,
  };

  let delay = 500;

  useEffect(() => {
    if (!isPlayed) return;

    if (isGameOver().answer) return;

    let playDelay = delay;

    setTimeout(() => {
      playCard("opponent");
    }, playDelay);
  }, [activeCard, userCards, opponentCards]);

  const playCard = (player) => {
    if (player === "user") {
      dispatch(removeUserCard({ shape, number }));
      dispatch(updateActiveCard({ shape, number }));
      if (number === 1 || number === 8) {
        dispatch(setInfoText("You played a suspension card so play again"));
        return;
      }

      // Pick 2
      if (number === 2) {
        goToMarket("opponent", marketConfig, 2);
        dispatch(setInfoText("You played a pick 2 so play again"));
        return;
      }

      // Pick 3
      if (number === 5) {
        goToMarket("opponent", marketConfig, 3);
        dispatch(setInfoText("You played a pick 3 so play again"));
        return;
      }

      // General Market
      if (number === 14) {
        goToMarket("opponent", marketConfig, 1);
        dispatch(setInfoText("You played a general market so play again"));
        return;
      }

      dispatch(setWhoIsToPlay("opponent"));
      dispatch(setInfoText("The computer is calculating it's moves"));
    } else if (player === "opponent") {
      setIsShownState(true);
      setTimeout(() => {
        dispatch(removeOpponentCard({ shape, number }));
        dispatch(updateActiveCard({ shape, number }));
        if (number === 1 || number === 8) {
          return;
        }

        // Pick 2
        if (number === 2) {
          goToMarket("user", marketConfig, 2);
          dispatch(setInfoText("You were made to pick 2"));
          return;
        }

        // Pick 3
        if (number === 5) {
          goToMarket("user", marketConfig, 3);
          dispatch(setInfoText("You were made to pick 3"));
          return;
        }

        // General Market
        if (number === 14) {
          goToMarket("user", marketConfig, 1);
          dispatch(setInfoText("General market"));
          return;
        }

        dispatch(setWhoIsToPlay("user"));
        dispatch(setInfoText("It's your turn to make a move now"));
      }, delay);
    }
  };

  const handleClick = () => {
    if (isMarketCard && whoIsToPlay === "user") {
      goToMarket("user", marketConfig, 1);
      dispatch(setWhoIsToPlay("opponent"));
      dispatch(setInfoText("The computer is calculating it's moves"));
      return;
    }

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
