import React from "react";
import IconButtons from "../../IconButtons/IconButtons";
import { isMobile } from "../../../util/utils";

export default function AssignedJobs() {
  return (
    <div className="mt-10 flex gp-10 justify-space-btw">
      <div className="flex mt-10 align-center gp-10">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3665/3665980.png"
          alt="icon"
          width={isMobile ? 20 : 40}
          height={isMobile ? 20 : 40}
        />
        <div className="flex flex-col">
          <div className="fw-600">Senior Product Manager</div>
          <div>Recruit CRM</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gp-5">
          <IconButtons
            btnType="icon"
            fullRounded={false}
            icon={<i className="bx  bx-user-circle"></i>}
          />
          <div>William Sample</div>
        </div>
        <div className="flex mt-5 gp-5">
          <IconButtons
            btnType="icon"
            fullRounded={false}
            icon={<i className="bx  bx-user-circle"></i>}
          />
          <div>Jul 10, 2023</div>
        </div>
      </div>
      <div className="flex align-center">
        <IconButtons btnType="text" fullRounded={false} text="Assigned" />
      </div>
      <div className="flex align-center">
        <IconButtons btnType="text" fullRounded={false} text="View Files" />
      </div>
    </div>
  );
}
