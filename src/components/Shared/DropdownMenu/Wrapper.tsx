"use client";
import React, { useRef } from "react";

import Box from "@/components/Shared/Box";

import { useDropDownMenu } from "./Context";

function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { setShow } = useDropDownMenu();
  const elementRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as HTMLElement)
      ) {
        setShow(false);
      }
    }
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <Box className={className} ref={elementRef}>
      {React.Children.map(children, (child) => {
        const childElement = child as React.ReactElement;
        return React.cloneElement(childElement);
      })}
    </Box>
  );
}

export default Wrapper;
