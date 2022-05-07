import React from "react";
import style from "./index.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      Built by{" "}
      <a href="https://trust-akpeti.com" target={"_blank"}>
        Akpeti Trust
      </a>
    </footer>
  );
}

export default Footer;
