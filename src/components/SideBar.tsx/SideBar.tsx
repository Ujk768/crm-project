import React from "react";
import { isMobile } from "../../util/utils";
import "./sidebar.scss";
import IconButtons from "../IconButtons/IconButtons";
export default function SideBar() {
  return (
    <div className="sidebar-container">
      <div className="justify-center align-center sidebar-container__desk">
        <div className="btn">
          <IconButtons
            btnType="icon"
            fullRounded={false}
            icon={<i className="bx bx-menu bx-fw"></i>}
          />
        </div>
        <div className="btn">
          <IconButtons
            btnType="icon"
            fullRounded={false}
            icon={<i className="bx bx-user-circle bx-fw"></i>}
          />
        </div>
        <div className="btn">
          <IconButtons
            btnType="icon"
            fullRounded={false}
            icon={<i className="bx bx-buildings bx-fw"></i>}
          />
        </div>
        <div className="btn">
          <IconButtons
            btnType="icon"
            fullRounded={false}
            icon={<i className="bx bx-message bx-fw"></i>}
          />
        </div>
        <div className="btn">
          <IconButtons
            btnType="icon"
            fullRounded={false}
            icon={<i className="bx bx-calendar bx-fw"></i>}
          />
        </div>
        <div className="btn">
          <IconButtons
            btnType="icon"
            fullRounded={false}
            icon={<i className="bx bx-shopping-bag bx-fw"></i>}
          />
        </div>
        <div className="btn">
          <IconButtons
            btnType="icon"
            fullRounded={false}
            icon={<i className="bx bx-envelope bx-fw"></i>}
          />
        </div>
        <hr />
        <div className="btn">
          <IconButtons
            btnType="icon"
            fullRounded={false}
            icon={<i className="bx bx-dollar-circle bx-fw"></i>}
          />
        </div>
        <div className="btn">
          <IconButtons
            btnType="icon"
            fullRounded={false}
            icon={<i className="bx bx-wallet bx-fw"></i>}
          />
        </div>
        <div className="btn">
          <IconButtons
            btnType="icon"
            fullRounded={false}
            icon={<i className="bx bx-pie-chart bx-fw"></i>}
          />
        </div>
        <div className="btn">
          <IconButtons
            btnType="icon"
            fullRounded={false}
            icon={<i className="bx bx-cog bx-fw"></i>}
          />
        </div>
      </div>
    </div>
  );
}
