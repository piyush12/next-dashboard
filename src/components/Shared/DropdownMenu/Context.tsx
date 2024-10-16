"use client";
import React from "react";

type IContext = {
  show: boolean;
  setShow: (value: boolean) => void;
};

const DropdownMenuContext = React.createContext<IContext | boolean>(false);

const DropdownMenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [show, setShow] = React.useState(false);

  return (
    <DropdownMenuContext.Provider value={{ show, setShow }}>
      {children}
    </DropdownMenuContext.Provider>
  );
};

export const useDropDownMenu = () => {
  const context = React.useContext(DropdownMenuContext) as IContext;

  if (!context) {
    throw new Error("Must be wrap inside DropdownMenuContextProvider");
  }
  return context;
};

function MenuProvider({ children }: { children: React.ReactNode }) {
  return <DropdownMenuContextProvider>{children}</DropdownMenuContextProvider>;
}

export default MenuProvider;
