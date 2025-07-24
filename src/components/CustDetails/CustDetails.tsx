import React, { Suspense, lazy } from "react";
import "./cust-details.scss";
import IconButtons from "../IconButtons/IconButtons";
import { isMobile, type CustDetailsResponse } from "../../util/utils";
import { useCustDetails } from "./useCustDetails";
import { createPortal } from "react-dom";

const CustDetailsModal = lazy(() => import("./CustDetailsModal"));
export default function CustDetails() {
  const {
    handleEditBtn,
    custDetailsApiRes,
    showModal,
    handleCloseModal,
    setCustDetailsApiRes,
  } = useCustDetails();

  return (
    <div className="cust-details fs-12">
      <div
        className={`${
          isMobile ? "flex flex-col" : "flex align-center justify-space-btw"
        }`}
      >
        <div className="flex align-center">
          <div className="cust-details__profile">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
              alt="profile-logo"
            />
          </div>
          <div className="ml-10">
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
      <div className="cust-details__modal"></div>
      <Suspense fallback={<div>Loading...</div>}>
        {showModal &&
          createPortal(
            <CustDetailsModal
              className="content"
              custDetailsApiRes={
                custDetailsApiRes as CustDetailsResponse["data"]
              }
              updateCustDetails={setCustDetailsApiRes}
              handleClose={() => handleCloseModal()}
            />,
            document.querySelector(".cust-details__modal ") ?? document.body
          )}
      </Suspense>
      <div
        className={
          isMobile
            ? "cust-details__info w-100 flex flex-row gp-10 fs-10"
            : "cust-details__info w-100 flex flex-row gp-10 fs-12"
        }
      >
        <div className="first-sec flex gp-10 flex-col">
          <div className="flex gp-10 align-center">
            <div className="fw-600 first-sec__title">Current Organization</div>
            <div>{custDetailsApiRes?.currentOrganization}</div>
          </div>
          <div className="flex gp-10 align-center">
            <div className="fw-600 first-sec__title">Skills</div>
            <div>{custDetailsApiRes?.skills?.flat().join(",")}</div>
          </div>
          <div className="flex gp-10 align-center">
            <div className="fw-600 first-sec__title">Available From</div>
            <div>{custDetailsApiRes?.availableFrom}</div>
          </div>
          <div className="flex gp-10 align-center">
            <div className="fw-600 first-sec__title">Current Salary</div>
            <div>{custDetailsApiRes?.currentSalary}</div>
          </div>
          <div className="flex gp-10 align-center">
            <div className="fw-600 first-sec__title">Notice Period</div>
            <div>{custDetailsApiRes?.noticePeriod}</div>
          </div>
          <div className="flex gp-10 align-center">
            <div className="fw-600 first-sec__title">Full Address</div>
            <div>{custDetailsApiRes?.fullAddress}</div>
          </div>
          <div className="flex gp-10 align-center">
            <div className="fw-600 first-sec__title">Resume</div>
            <div>{custDetailsApiRes?.resume}</div>
          </div>
          <div className="flex gp-10 align-center">
            <div className="fw-600 first-sec__title">Total Experience</div>
            <div>{custDetailsApiRes?.totalExperience}</div>
          </div>
        </div>
        <div className="first-sec flex gp-10 flex-col">
          <div className="flex gp-10 align-center">
            <div className="fw-600 first-sec__title">Summary</div>
            <div>{custDetailsApiRes?.summary}</div>
          </div>
          <div className="flex gp-10 align-center">
            <div className="fw-600 first-sec__title">
              Current Employment Status
            </div>
            <div>{custDetailsApiRes?.currentEmploymentStatus}</div>
          </div>
          <div className="flex gp-10 align-center">
            <div className="fw-600 first-sec__title">Date of Birth</div>
            <div>{custDetailsApiRes?.dateOfBirth}</div>
          </div>
          <div className="flex gp-10 align-center">
            <div className="fw-600 first-sec__title">Relevent Experience</div>
            <div>{custDetailsApiRes?.relevantExperience}</div>
          </div>
          <div className="flex gp-10 align-center">
            <div className="fw-600 first-sec__title">Salary Expectation</div>
            <div>{custDetailsApiRes?.salaryExpectation}</div>
          </div>
          <div className="flex gp-10 align-center">
            <div className="fw-600 first-sec__title">Status</div>
            <div>{custDetailsApiRes?.status}</div>
          </div>
          <div className="flex gp-10 align-center">
            <div className="fw-600 first-sec__title">Salary Type</div>
            <div>{custDetailsApiRes?.salaryType}</div>
          </div>
          <div className="flex gp-10 align-center">
            <div className="fw-600 first-sec__title">Language Skills</div>
            <div>{custDetailsApiRes?.languageSkills?.flat().join(",")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
