import { useEffect, useState } from "react";
import {
  getCustDetails,
  insertCustDetails,
  type CustDetailsResponse,
} from "../../util/utils";

export const useCustDetails = () => {
  const [custDetailsApiRes, setCustDetailsApiRes] = useState<
    CustDetailsResponse["data"]
  >({} as CustDetailsResponse["data"]);
  const [showModal, setShowModal] = useState(false);
  const callGetCustDetails = async () => {
    try {
      const res = await getCustDetails();
      res.statusCode === 200 ? setCustDetailsApiRes(res.data) : "";
    } catch (err) {
      console.error("Error fetching cust details", err);
    }
  };

  useEffect(() => {
    callGetCustDetails();
  }, []);

  const handleEditBtn = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return {
    handleEditBtn,
    custDetailsApiRes,
    setCustDetailsApiRes,
    showModal,
    setShowModal,
    handleCloseModal,
  };
};
