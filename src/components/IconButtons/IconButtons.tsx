import React from "react";
import type { IconButtonsTypes } from "./TypeIconButtons";
import "./icon-button.scss";
export default function IconButtons({
  btnType,
  icon,
  fullRounded,
  handleOnClick,
}: IconButtonsTypes) {
  return (
    <div className="icon-btn">
      {fullRounded && btnType === "icon" ? <div className="icon-btn__full flex align-center justify-center" onClick={handleOnClick}>{icon}</div> : ""}
    </div>
  );
}
