"use client";
import React, { useRef } from "react";

import Box from "@/components/Shared/Box";

import { useSelect } from "./Context";

function Wrapper<T>({
  children,
  className,
  onChange = () => {},
}: {
  children: React.ReactNode;
  className?: string;
  onChange?: (value: T) => void;
}) {
  const { setShow } = useSelect();
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
        const childElement = child as React.ReactElement<{
          onChange: (value: T) => void;
        }>;
        return React.cloneElement(childElement, {
          onChange: onChange,
        });
      })}
    </Box>
  );
}

export default Wrapper;
