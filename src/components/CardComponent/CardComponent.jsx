import React from "react";
import style from "./index.module.css";
import Number from "../Number/Number";
import Shape from "../Shape/Shape";
import { useState } from "react";

function CardComponent({ shape, number, isMine, isShown }) {
  const [isShownState, setIsShownState] = useState(isShown);

  return (
    <div className={`${style.card} ${isShownState && style.shown}`}>
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
  );
}

export default CardComponent;
