import type { ReactNode } from "react";

export type IconButtonsTypes = {
  btnType: "text" | "icon";
  icon?: ReactNode;
  text?: string;
  fullRounded: boolean;
  handleOnClick?: () => void;
};
