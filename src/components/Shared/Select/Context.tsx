"use client";
import React from "react";

type IContext = {
  show: boolean;
  setShow: (value: boolean) => void;
};

const SelectContext = React.createContext<IContext | boolean>(false);

const SelectContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = React.useState(false);

  return (
    <SelectContext.Provider value={{ show, setShow }}>
      {children}
    </SelectContext.Provider>
  );
};

export const useSelect = () => {
  const context = React.useContext(SelectContext) as IContext;

  if (!context) {
    throw new Error("Must be wrap inside SelectContextProvider");
  }
  return context;
};

function MenuProvider({ children }: { children: React.ReactNode }) {
  return <SelectContextProvider>{children}</SelectContextProvider>;
}

export default MenuProvider;
