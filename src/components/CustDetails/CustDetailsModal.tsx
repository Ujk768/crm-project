import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { custDetailsSchema } from "./custDetailsSchema";
import { z } from "zod";

import type { modalProps } from "./custDetailsType";
import { insertCustDetails, isMobile } from "../../util/utils";

import "./cust-details.scss";

type FormData = z.infer<typeof custDetailsSchema>;

export default function CustDetailsModal({
  handleClose,
  className,
  custDetailsApiRes,
  updateCustDetails,
}: modalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(custDetailsSchema),
    defaultValues: {
      ...custDetailsApiRes,
      skills: custDetailsApiRes.skills?.toString(),
      languageSkills: custDetailsApiRes.skills?.toString(),
    },
  });

  const onSubmit = (data: FormData) => {
    const updated = {
      ...data,
      skills: data.skills.split(","),
      languageSkills: data.languageSkills.split(","),
    };
    updateCustDetails(updated);
    insertCustDetails(updated);
    handleClose();
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
              ["Skills", "skills"],
              ["Available From", "availableFrom"],
              ["Current Salary", "currentSalary"],
              ["Notice Period", "noticePeriod"],
              ["Full Address", "fullAddress"],
              ["Resume", "resume"],
              ["Total Experience", "totalExperience"],
            ].map(([label, field]) => (
              <div key={field} className="flex align-center gp-10 mt-10">
                <div className="heading">{label} :</div>
                <div>
                  <input
                    placeholder={label}
                    {...register(field as keyof FormData)}
                  />
                  {errors[field as keyof FormData] && (
                    <div className="error-text">
                      {errors[field as keyof FormData]?.message}
                    </div>
                  )}
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
              ["Language Skills", "languageSkills"],
            ].map(([label, field]) => (
              <div key={field} className="flex align-center gp-10 mt-10">
                <div className="heading">{label} :</div>
                <div>
                  <input
                    placeholder={label}
                    {...register(field as keyof FormData)}
                  />
                  {errors[field as keyof FormData] && (
                    <div className="error-text">
                      {errors[field as keyof FormData]?.message}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
      <div className={`flex  gp-10 ${isMobile ? "flex-col" : ""}`}>
        <div onClick={handleSubmit(onSubmit)} className="mt-10 fw-600 done-btn">
          Done
        </div>
        <div onClick={handleClose} className="mt-10 fw-600 done-btn">
          Close
        </div>
      </div>
    </div>
  );
}
