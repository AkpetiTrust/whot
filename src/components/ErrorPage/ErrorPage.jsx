import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";

function ErrorPage({ errorText }) {
  return (
    <div className={style.error}>
      <p>{errorText}</p>
      <Link to={"/"} className={style.btn}>
        GO HOME
      </Link>
    </div>
  );
}

export default ErrorPage;
