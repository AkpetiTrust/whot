import React from "react";
import style from "./index.module.css";
import CardComponent from "../CardComponent/CardComponent";

function Preloader() {
  return (
    <div className={style.preloader}>
      <div className={style.animation_area}>
        <CardComponent isMine={false} isShown={false} />
      </div>
      <p>Setting up deck...</p>
    </div>
  );
}

export default Preloader;
