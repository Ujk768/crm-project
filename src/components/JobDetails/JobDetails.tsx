import React from "react";
import "./jobs.scss";
import { useJobDetails } from "./useJobDetails";
import IconButtons from "../IconButtons/IconButtons";
import AssignedJobs from "./AssignedJobs/AssignedJobs";
export default function JobDetails() {
  const { selectedTile, setSelectedTile } = useJobDetails();
  return (
    <div className="job-detail ">
      <div className="flex job-detail__titles  w-100 gp-10 align-center fw-600">
        {[
          "All Details",
          "Assigned Jobs",
          "Related Emails",
          "Candidate Questions",
          "Hotlists",
          "Related Deals",
          "Contact(s) Pitched",
        ].map((item) => (
          <div
            onClick={() => setSelectedTile(item)}
            className={
              item === selectedTile ? "active flex align-center tiles" : "tiles"
            }
          >
            {item}
          </div>
        ))}
      </div>
      {selectedTile === "Assigned Jobs" ? (
        <div className="mt-10 job-section">
          <div className="flex justify-space-btw align-center">
            <div>Assigned Job to William Sample </div>
            <div className="flex gp-5">
              <div className="job-detail__btn">
                <IconButtons
                  btnType="text"
                  fullRounded={false}
                  text="Assign To Job"
                />
              </div>
              <IconButtons
                btnType="text"
                fullRounded={false}
                text="View All Assigned Jobs"
              />
            </div>
          </div>
          {["item1", "item2"].map((item) => (
            <div>
              <AssignedJobs />
            </div>
          ))}
        </div>
      ) : (
        <div className="job-section">No data available</div>
      )}
    </div>
  );
}
