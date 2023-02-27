import React from "react";
import style from "./index.module.css";

function ConnectionLoader() {
  return (
    <div className={style.loader}>
      <p>Connecting to server...</p>
    </div>
  );
}

export default ConnectionLoader;
