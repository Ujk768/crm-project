import React from "react";
import SideBar from "../components/SideBar.tsx/SideBar";
import Header from "../components/Header/Header";
// import "./dashboard.scss";
export default function Dashboard() {
  return (
    <div className="dashbaord flex">
      <SideBar />
      <Header/> 
    </div>
  );
}
