import React from "react";
import { isMobile } from "../../../util/utils";
import IconButtons from "../../IconButtons/IconButtons";
import"./profile.scss"

export default function Profile() {
  return (
    <>
      {isMobile ? (
        ""
      ) : (

          <div className="profile flex">
            <div className="plus-btn flex align-center justify-center">+</div>
            <hr className="mr-10 ml-10" />
            <div className="flex icons">
            <IconButtons btnType="icon" fullRounded={true} icon={
                <i className='bx  bx-gift'  ></i> 
            }/>
             <IconButtons btnType="icon" fullRounded={true} icon={
                <i className='bx  bx-envelope'  ></i> 
            }/>
             <IconButtons btnType="icon" fullRounded={true} icon={
                <i className='bx  bx-bell'  ></i> 
            }/>
            </div>
          </div>
      )}
    </>
  );
}
