import React from "react";
import { useSelector } from "react-redux";
import CardComponent from "../CardComponent/CardComponent";
import style from "./index.module.css";

function CenterArea() {
  const [deck, usedCards, activeCard] = useSelector((state) => [
    state.deck,
    state.usedCards,
    state.activeCard,
  ]);
  return (
    <div className={style.center_area}>
      <CardComponent
        shape={activeCard.shape}
        number={activeCard.number}
        isShown={true}
        isMine={false}
        isActiveCard={true}
      />
    </div>
  );
}

export default CenterArea;
