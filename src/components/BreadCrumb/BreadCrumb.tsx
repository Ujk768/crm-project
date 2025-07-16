import React from "react";
import "./breadcrumb.scss";
import IconButtons from "../IconButtons/IconButtons";
import { isMobile } from "../../util/utils";
export default function BreadCrumb() {
  return (
    <div
      className={`${
        isMobile
          ? "breadcrumb justify-space-btw w-100"
          : "flex breadcrumb justify-space-btw w-100"
      }`}
    >
      <div className="flex gp-5 align-center">
        <p className="breadcrumb__title fw-600">Candidates</p>
        <i className="bx  bx-caret-right"></i>
        <p className="fw-600">Robert Hardy</p>
        <div className="breadcrumb__id">ID - 231</div>
      </div>
      <div className="flex align-center gp-5">
        <IconButtons
          btnType="text"
          fullRounded={false}
          text="Request Profile Update"
        />
        <IconButtons btnType="text" fullRounded={false} text="Previous" />
        <IconButtons btnType="text" fullRounded={false} text="Next" />
      </div>
    </div>
  );
}
