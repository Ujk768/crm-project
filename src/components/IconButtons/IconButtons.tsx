import React from "react";
import type { IconButtonsTypes } from "./TypeIconButtons";
import "./icon-button.scss";
export default function IconButtons({
  btnType,
  icon,
  text,
  fullRounded,
  handleOnClick,
}: IconButtonsTypes) {
  return (
    <div className="icon-btn">
      {fullRounded && btnType === "icon" ? (
        <div
          className="icon-btn__full flex align-center justify-center"
          onClick={handleOnClick}
        >
          {icon}
        </div>
      ) : (
        ""
      )}
      {!fullRounded && btnType === "text" ? (
        <div
          className="icon-btn__text flex align-center justify-center fw-600"
          onClick={handleOnClick}
        >
          {text}
        </div>
      ) : (
        ""
      )}
      {!fullRounded && btnType === "icon" ? (
        <div
          className="icon-btn__norm flex align-center justify-center"
          onClick={handleOnClick}
        >
          {icon}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
