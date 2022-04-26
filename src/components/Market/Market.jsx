import React from "react";
import CardComponent from "../CardComponent/CardComponent";

function Market() {
  return <CardComponent isMine={true} isShown={false} isMarketCard={true} />;
}

export default Market;
