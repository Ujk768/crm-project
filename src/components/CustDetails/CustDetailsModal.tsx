import React, { useState } from "react";
import type { modalProps } from "./custDetailsType";
import "./cust-details.scss";
import {
  insertCustDetails,
  isMobile,
  type CustDetailsResponse,
} from "../../util/utils";
import { useCustDetails } from "./useCustDetails";

export default function CustDetailsModal({
  handleClose,
  className,
  custDetailsApiRes,
  updateCustDetails,
}: modalProps) {
  const [updatedDetails, setUpdatedDetails] = useState<
    CustDetailsResponse["data"]
  >({ ...custDetailsApiRes } as CustDetailsResponse["data"]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof CustDetailsResponse["data"]
  ) => {
    const value = e.target.value;
    setUpdatedDetails((prev) => ({
      ...prev,
      [key]:
        key === "skills" || key === "languageSkills"
          ? value.split(",").map((s) => s.trim())
          : value,
    }));
  };
  const handleOnSubmit = () => {
    handleClose();
    insertCustDetails({ ...updatedDetails });
    updateCustDetails({ ...updatedDetails });
  };

  return (
    <div
      className={`${className} flex flex-col align-center justify-center cust-details__modal`}
    >
      <div className={isMobile ? "flex flex-col w-100" : "flex w-100"}>
        <form className={isMobile ? "flex flex-col w-100" : "flex w-100"}>
          <div className="first-sec">
            {[
              ["Mobile Number", "mobileNumber"],
              ["Email", "email"],
              ["Current Organization", "currentOrganization"],
              ["Skills", "skills", true],
              ["Available From", "availableFrom"],
              ["Current Salary", "currentSalary"],
              ["Notice Period", "noticePeriod"],
              ["Full Address", "fullAddress"],
              ["Resume", "resume"],
              ["Total Experience", "totalExperience"],
            ].map(([label, field, isArray]) => (
              <div
                key={field as string}
                className="flex align-center gp-10 mt-10"
              >
                <div className="heading">{label} :</div>
                <div>
                  <input
                    placeholder={label as string}
                    onChange={(e) =>
                      handleChange(
                        e,
                        field as keyof CustDetailsResponse["data"]
                      )
                    }
                    value={
                      isArray
                        ? (
                            updatedDetails?.[
                              field as keyof CustDetailsResponse["data"]
                            ] as string[]
                          )
                            ?.flat()
                            .join(",")
                        : updatedDetails?.[
                            field as keyof CustDetailsResponse["data"]
                          ]
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={isMobile ? "second-sec" : "second-sec ml-10"}>
            {[
              ["Summary", "summary"],
              ["Current Employment Status", "currentEmploymentStatus"],
              ["Relevent Experience", "relevantExperience"],
              ["Salary Expectation", "salaryExpectation"],
              ["Status", "status"],
              ["Salary Type", "salaryType"],
              ["Language Skills", "languageSkills", true],
            ].map(([label, field, isArray]) => (
              <div
                key={field as string}
                className="flex align-center gp-10 mt-10"
              >
                <div className="heading">{label} :</div>
                <div>
                  <input
                    placeholder={label as string}
                    onChange={(e) =>
                      handleChange(
                        e,
                        field as keyof CustDetailsResponse["data"]
                      )
                    }
                    value={
                      isArray
                        ? (
                            updatedDetails?.[
                              field as keyof CustDetailsResponse["data"]
                            ] as string[]
                          )
                            ?.flat()
                            .join(",")
                        : updatedDetails?.[
                            field as keyof CustDetailsResponse["data"]
                          ]
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
      <div onClick={handleOnSubmit} className="mt-10 fw-600 done-btn">
        Done
      </div>
    </div>
  );
}
