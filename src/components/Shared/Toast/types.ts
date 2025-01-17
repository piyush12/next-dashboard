import { ReactNode } from "react";

export type ITOASTCONTEXT = ITOASTFUCTION & {
  children?: ReactNode;
  toasts: ITOASTS;
};

export type ITOASTTYPE = "error" | "success" | "info" | "warning" | "default";

export type ITOAST = {
  id: string;
  message: string;
  type: ITOASTTYPE;
};

export type ITOASTS = Array<ITOAST>;

export type ITOASTFUCTION = {
  success: (message: string) => void;
  error: (message: string) => void;
  warning: (message: string) => void;
  info: (message: string) => void;
  dismiss: (id: string) => void;
};
