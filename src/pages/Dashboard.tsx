import React from "react";
import SideBar from "../components/SideBar.tsx/SideBar";
import Header from "../components/Header/Header";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import "./dashboard.scss";
import CustDetails from "../components/CustDetails/CustDetails";
import JobDetails from "../components/JobDetails/JobDetails";
export default function Dashboard() {
  return (
    <div className="dashboard flex">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="main">
        <Header />
        <div className="container">
          <div className="main__first">
            <BreadCrumb />
            <CustDetails />
            <JobDetails />
          </div>
          <div className="main__sec">second sec</div>
        </div>
      </div>
    </div>
  );
}
