import React, { Suspense, lazy } from "react";
import SideBar from "../components/SideBar.tsx/SideBar";
import Header from "../components/Header/Header";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import "./dashboard.scss";
// import CustDetails from "../components/CustDetails/CustDetails";
import JobDetails from "../components/JobDetails/JobDetails";
import Notes from "../components/Notes/Notes";
import { isMobile } from "../util/utils";

const CustDetails = lazy(() => import("../components/CustDetails/CustDetails"));
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
            <Suspense fallback={<div className="cust-details-loader"></div>}>
              <CustDetails />
            </Suspense>
            <JobDetails />
          </div>
          <div className={isMobile ? "main__sec" : "main__sec ml-20"}>
            <Notes />
          </div>
        </div>
      </div>
    </div>
  );
}
