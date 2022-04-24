import React from "react";
import InfoButton from "../InfoButton/InfoButton";
import InfoText from "../InfoText/InfoText";
import style from "./index.module.css";

function InfoArea() {
  return (
    <div className={style.info_area}>
      <InfoText />
      <InfoButton />
    </div>
  );
}

export default InfoArea;
