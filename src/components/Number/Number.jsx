import React from "react";
import Shape from "../Shape/Shape";
import style from "./index.module.css";

function Number({ number, shape, reverse }) {
  return (
    <div className={`${style.number} ${reverse && style.reverse}`}>
      <p>{number}</p>
      <Shape shape={shape} isSmall={true} />
    </div>
  );
}

export default Number;
