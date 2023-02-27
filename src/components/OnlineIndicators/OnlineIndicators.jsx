import React from "react";
import OnlineIndicator from "../OnlineIndicator/OnlineIndicator";
import style from "./index.module.css";

function OnlineIndicators({ onlineState }) {
  return (
    <div className={style.indicators}>
      <OnlineIndicator online={onlineState.userIsOnline} />
      <OnlineIndicator online={onlineState.opponentIsOnline} />
    </div>
  );
}

export default OnlineIndicators;
