"use client";
import React, { useEffect, useRef, useState } from "react";

import Paper from "@/components/Shared/Paper";
import { cn } from "@/utils/utils";

import { useSelect } from "./Context";

function Content({
  children,
  className,
  onChange = () => {},
}: {
  children: React.ReactNode;
  className?: string;
  onChange?: (value: string) => void;
}) {
  const { show } = useSelect();
  const [position, setPosition] = useState({
    top: 0,
    left: "auto",
    right: "auto",
  });
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const dropdownHeight = 160; // Adjust based on your dropdown height
      // const dropdownWidth = 160; // Adjust based on your dropdown width
      const newPosition = {
        top:
          triggerRect.bottom + window.scrollY <
          window.innerHeight - dropdownHeight
            ? triggerRect.bottom // Position below the trigger
            : triggerRect.top + window.scrollY - dropdownHeight, // Position above the trigger if there isn't enough space below
        right:
          triggerRect.left + triggerRect.width >=
          window.innerWidth - triggerRect.width
            ? 0 // Position to the right of the trigger
            : "auto", // Position to the left if there isn't enough space
        left:
          triggerRect.left + triggerRect.width <
          window.innerWidth - triggerRect.width
            ? 0 // Position to the right of the trigger
            : "auto", // Position to the left if there isn't enough space
      };
      // @ts-expect-error TODO
      setPosition(newPosition);
    }
  }, [show]);

  const classes = cn(
    `absolute  flex w-max inset-x-auto min-w-[160px] flex-col justify-center gap-1 p-2 z-10`,
    className,
  );

  return show ? (
    <Paper
      className={classes}
      ref={triggerRef}
      style={{
        left: position.left,
        right: position.right,
      }}
    >
      {React.Children.map(children, (child) => {
        const childElement = child as React.ReactElement<{
          onChange?: (value: string) => void;
        }>;
        return React.cloneElement(childElement, { onChange: onChange });
      })}
      {/* {children} */}
    </Paper>
  ) : null;
}

export default Content;
