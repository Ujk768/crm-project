import type { CustDetailsResponse } from "../../util/utils";

export type modalProps = {
  handleClose: () => void;
  className: string;
  updateCustDetails: React.Dispatch<
    React.SetStateAction<CustDetailsResponse["data"]>
  >;
  custDetailsApiRes: CustDetailsResponse["data"];
};



