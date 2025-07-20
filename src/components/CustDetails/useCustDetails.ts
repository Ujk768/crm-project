import { use, useEffect, useState } from "react";
import { getCustDetails, type CustDetailsResponse } from "../../util/utils";

export const useCustDetails = () => {
  const [custDetailsApiRes, setCustDetailsApiRes] =
    useState<CustDetailsResponse["data"]>();
  const callGetCustDetails = async () => {
    try {
      const res = await getCustDetails();
      console.log("api res", res);
      res.statusCode === 200 ? setCustDetailsApiRes(res.data) : "";
    } catch (err) {
      console.error("Error fetching cust details", err);
    }
  };

  useEffect(() => {
    callGetCustDetails();
  }, []);

  const handleEditBtn = () => {
    console.log("Edit clicked");
  };

  return {
    handleEditBtn,
    custDetailsApiRes,
  };
};
