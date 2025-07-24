import React from "react";
import "./breadcrumb.scss";
import IconButtons from "../IconButtons/IconButtons";
import { isMobile } from "../../util/utils";
export default function BreadCrumb() {
  return (
    <div
      className={`${
        isMobile
          ? "breadcrumb justify-space-btw w-100 fs-10 gp-10"
          : "flex breadcrumb justify-space-btw w-100 fs-12"
      }`}
    >
      <div className="flex gp-5 align-center">
        <p className="breadcrumb__title fw-600">Candidates</p>
        <i className="bx  bx-caret-right"></i>
        <p className="fw-600">Robert Hardy</p>
        <div className="breadcrumb__id flex align-center">ID - 231</div>
      </div>
      <div
        className={
          isMobile ? "flex align-center mt-10 gp-10" : "flex align-center gp-10"
        }
      >
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
