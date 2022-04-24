import React from "react";
import { useDispatch } from "react-redux";
import style from "./index.module.css";

function InfoButton() {
  const dispatch = useDispatch();
  return (
    <button
      className={style.button}
      onClick={() => {
        dispatch({ type: "INFO_SHOWN" });
      }}
    >
      <svg
        width="13"
        height="14"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_13_4)">
          <path
            d="M4.61081 11.1818H5.10797V7.59089H4.61081C4.33623 7.59089 4.11365 7.36831 4.11365 7.09373V5.90624C4.11365 5.63166 4.33623 5.40908 4.61081 5.40908H7.3949C7.66948 5.40908 7.89206 5.63166 7.89206 5.90624V11.1818H8.38922C8.6638 11.1818 8.88637 11.4044 8.88637 11.679V12.8665C8.88637 13.141 8.6638 13.3636 8.38922 13.3636H4.61081C4.33623 13.3636 4.11365 13.141 4.11365 12.8665V11.679C4.11365 11.4044 4.33623 11.1818 4.61081 11.1818ZM6.50001 0.636353C5.51153 0.636353 4.71024 1.43765 4.71024 2.42613C4.71024 3.4146 5.51153 4.2159 6.50001 4.2159C7.48849 4.2159 8.28978 3.4146 8.28978 2.42613C8.28978 1.43765 7.48846 0.636353 6.50001 0.636353Z"
            fill="#1098F7"
          />
        </g>
        <defs>
          <clipPath id="clip0_13_4">
            <rect
              width="12.7273"
              height="12.7273"
              fill="white"
              transform="translate(0.136353 0.636353)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

export default InfoButton;
