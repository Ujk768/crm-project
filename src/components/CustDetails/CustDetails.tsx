import React from "react";
import "./cust-details.scss";
import IconButtons from "../IconButtons/IconButtons";
import { isMobile } from "../../util/utils";
import { useCustDetails } from "./useCustDetails";
export default function CustDetails() {
  const { handleEditBtn, custDetailsApiRes } = useCustDetails();
  return (
    <div className="cust-details fs-12">
      <div
        className={`${
          isMobile ? "flex flex-col" : "flex align-center justify-space-btw"
        }`}
      >
        <div className="flex align-center">
          <div className="cust-details__profile">
            <img src="" alt="profile-logo" />
          </div>
          <div>
            <p className="fw-600">William Sample</p>
            <div className="flex gp-5">
              <p>Senior Product Manager</p>
              <p>United States</p>
              <p>Dallas</p>
            </div>
          </div>
        </div>
        <div className="flex gp-5 align-center">
          <div className="cust-details__btn flex justify-center align-center">
            <IconButtons
              btnType="text"
              fullRounded={false}
              text="Contact Linked"
            />
          </div>
          <div className="cust-details__btn flex justify-center align-center">
            <IconButtons
              btnType="icon"
              fullRounded={false}
              icon={<i className="bx  bx-star"></i>}
            />
          </div>
          <div className="cust-details__btn flex justify-center align-center">
            <IconButtons
              btnType="icon"
              fullRounded={false}
              icon={<i className="bx bx-star"></i>}
            />
          </div>
          <div className="cust-details__btn flex justify-center align-center">
            <IconButtons
              btnType="icon"
              fullRounded={false}
              handleOnClick={handleEditBtn}
              icon={<i className="bx  bx-edit"></i>}
            />
          </div>
        </div>
      </div>
      <div
        className={
          isMobile
            ? "cust-details__strip flex flex-col mt-10 gp-10"
            : "cust-details__strip flex justify-space-btw  align-center"
        }
      >
        <div className="flex align-center gp-5">
          <div className="flex align-center">
            <IconButtons
              btnType="icon"
              fullRounded={false}
              icon={<i className="bx bx-envelope bx-fw"></i>}
            />
            <p className="text fw-600">{custDetailsApiRes?.email}</p>
          </div>
          <div
            className={
              isMobile
                ? "flex align-center ml-10 gp-10"
                : "flex align-center gp-10"
            }
          >
            <IconButtons
              btnType="icon"
              fullRounded={false}
              icon={<i className="bx bx-phone bx-fw"></i>}
            />
            <p className="text fw-600">{custDetailsApiRes?.mobileNumber}</p>
          </div>
        </div>
        <div className="flex gp-10">
          <div className="flex align-center gp-5">
            <IconButtons
              btnType="icon"
              fullRounded={false}
              icon={<i className="bx bx-user-circle bx-fw"></i>}
            />
            <p className="fw-600">Philis Yang</p>
          </div>
          <div
            className={
              isMobile
                ? "flex align-center ml-10 gp-5"
                : "flex align-center gp-5"
            }
          >
            <IconButtons
              btnType="icon"
              fullRounded={false}
              icon={<i className="bx bx-timer"></i>}
            />
            <p className="fw-600">Jul 14, 2023, 4:04 pm</p>
          </div>
        </div>
      </div>
      <div className="cust-details__info w-100 flex flex-row fs-12 gp-10">
        <div className="first-sec flex gp-10">
          <div className="flex flex-col fw-600 gp-10 title">
            <div>Current Organization</div>
            <div>Skills</div>
            <div>Available From</div>
            <div>Current Salary</div>
            <div>Notice Period</div>
            <div>Full Address</div>
            <div>Resume</div>
            <div>Total Experience</div>
          </div>
          <div className="flex flex-col gp-10">
            <div>{custDetailsApiRes?.currentOrganization}</div>
            <div>{custDetailsApiRes?.skills.flat().join(",")}</div>
            <div>{custDetailsApiRes?.availableFrom}</div>
            <div>{custDetailsApiRes?.currentSalary}</div>
            <div>{custDetailsApiRes?.noticePeriod}</div>
            <div>{custDetailsApiRes?.fullAddress}</div>
            <div>{custDetailsApiRes?.resume}</div>
            <div>{custDetailsApiRes?.totalExperience}</div>
          </div>
        </div>
        <div className="first-sec flex gp-10">
          <div className="flex flex-col fw-600 gp-10 title">
            <div>Summary</div>
            <div>Current Employment Status</div>
            <div>Date of Birth</div>
            <div>Relevent Experience</div>
            <div>Salary Expectation</div>
            <div>Status</div>
            <div>Salary Type</div>
            <div>Language Skills</div>
          </div>
          <div className="flex flex-col gp-10">
            <div>{custDetailsApiRes?.summary}</div>
            <div>{custDetailsApiRes?.currentEmploymentStatus}</div>
            <div>{custDetailsApiRes?.dateOfBirth}</div>
            <div>{custDetailsApiRes?.relevantExperience}</div>
            <div>{custDetailsApiRes?.salaryExpectation}</div>
            <div>{custDetailsApiRes?.status}</div>
            <div>{custDetailsApiRes?.salaryType}</div>
            <div>{custDetailsApiRes?.languageSkills.flat().join(",")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
