import React from "react";

import { ITOASTCONTEXT, ITOASTS } from "./types";

const ToastContext = React.createContext<ITOASTCONTEXT | null>(null);

const ToastContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = React.useState<ITOASTS>([]);

  const success = (message: string) => {
    setToasts([
      ...toasts,
      {
        id: crypto.randomUUID(),
        type: "success",
        message: message,
      },
    ]);
  };
  const error = (message: string) => {
    setToasts([
      ...toasts,
      {
        id: crypto.randomUUID(),
        type: "error",
        message: message,
      },
    ]);
  };
  const warning = (message: string) => {
    setToasts([
      ...toasts,
      {
        id: crypto.randomUUID(),
        type: "warning",
        message: message,
      },
    ]);
  };
  const info = (message: string) => {
    setToasts([
      ...toasts,
      {
        id: crypto.randomUUID(),
        type: "info",
        message: message,
      },
    ]);
  };

  const dismiss = (id: string) => {
    setToasts((prevToast) => {
      return prevToast.filter((toast) => toast.id !== id);
    });
  };

  return (
    <ToastContext.Provider
      value={{
        toasts,
        success,
        error,
        warning,
        info,
        dismiss,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

const useToastContext = () => {
  const context = React.useContext(ToastContext);

  if (!context) {
    throw new Error("Toast must wrapped inside toast context provider");
  }
  return context;
};

export { ToastContext, ToastContextProvider, useToastContext };
