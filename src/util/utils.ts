export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  ? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  : window.outerWidth !== 0 && window.outerWidth <= 1024;

export const isAndriod = /Android/i.test(navigator.userAgent);
export const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

export type CustDetailsResponse = {
  data: {
    mobileNumber: string;
    email: string;
    currentOrganization: string;
    skills: string[];
    availableFrom: string;
    currentSalary: string;
    noticePeriod: string;
    fullAddress: string;
    resume: string;
    totalExperience: string;
    summary: string;
    currentEmploymentStatus: string;
    dateOfBirth: string;
    relevantExperience: string;
    salaryExpectation: string;
    status: string;
    salaryType: string;
    languageSkills: string[];
  };
  statusCode: number;
  message: string;
};

export const getCustDetails = (): Promise<CustDetailsResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          mobileNumber: "+91 9021232326",
          email: "williamsample@gmail.com",
          currentOrganization: "World Bank Group",
          skills: ["HTML", "CSS", "JavaScript"],
          availableFrom: "Jul 14, 2023",
          currentSalary: "$6000",
          noticePeriod: "90 Days",
          fullAddress: "9400 Ashton Rd, Philadelphia",
          resume: "Resume",
          totalExperience: "5 Years",
          summary: "Current Organization",
          currentEmploymentStatus: "Employed",
          dateOfBirth: "Jan 10, 1990",
          relevantExperience: "4.5 Years",
          salaryExpectation: "$7000",
          status: "Active",
          salaryType: "Monthly",
          languageSkills: ["English", "Spanish"],
        },
        statusCode: 200,
        message: "Customer details fetched successfully",
      });
    }, 1000);
  });
};

export const insertCustDetails = (data: CustDetailsResponse["data"]) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("added into db....", data);
    }, 1000);
  });
};
