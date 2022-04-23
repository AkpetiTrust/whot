import React from "react";
import style from "./index.module.css";

function CardNumber({ number }) {
  return <p className={style.number}>{number}</p>;
}

export default CardNumber;
