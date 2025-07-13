import React from "react";
import "./header.scss";
import logo from "../../assets/logo.png";
import logoMobile from "../../assets/logo-mobile.jpg";
import { isMobile } from "../../util/utils";
import Profile from "./Profile/Profile";

export default function Header() {
  return (
    <div className="header-container flex align-center justify-space-btw">
      <div className="search">
        <div className="">
          <i className="bx bx-fw bx-search"></i>
        </div>
        <input id="search-bar" placeholder="Search Pipedrive" />
      </div>
      <div className="logo flex align-center">
        {isMobile ? (
          <img className="logo__mob" src={logoMobile} alt="logo-mobile" />
        ) : (
          <img className="logo__desk" src={logo} alt="logo-desk" />
        )}
      </div>
      <div className="flex align-center">
        <Profile />
      </div>
    </div>
  );
}
