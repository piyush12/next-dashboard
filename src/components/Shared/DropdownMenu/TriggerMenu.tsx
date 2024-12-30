"use client";
import React from "react";

import { useDropDownMenu } from "./Context";

function TriggerMenu({ children }: { children: React.ReactNode }) {
  const { show, setShow } = useDropDownMenu();

  const handleClick = () => {
    setShow(!show);
  };

  return React.Children.map(children, (child) => {
    const childElement = child as React.ReactElement<{
      onClick?: React.MouseEventHandler;
    }>;
    return React.cloneElement(childElement, { onClick: handleClick });
  });
}

export default TriggerMenu;
