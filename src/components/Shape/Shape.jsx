import React from "react";
import style from "./index.module.css";

function Shape({ shape, isSmall }) {
  const className = `${style.shape} ${style[shape]} ${isSmall && style.small}`;

  if (shape === "star") {
    return (
      <svg
        className={className}
        width="154"
        height="145"
        viewBox="0 0 154 145"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M77 0L94.9611 55.2786H153.085L106.062 89.4427L124.023 144.721L77 110.557L29.9772 144.721L47.9383 89.4427L0.915482 55.2786H59.0389L77 0Z"
          fill="#511B20"
        />
      </svg>
    );
  }

  return <div className={className}></div>;
}

export default Shape;
