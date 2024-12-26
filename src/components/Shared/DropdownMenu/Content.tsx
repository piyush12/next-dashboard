"use client";
import React, { useEffect, useRef, useState } from "react";

import Paper from "@/components/Shared/Paper";
import { cn } from "@/utils/utils";

import { useDropDownMenu } from "./Context";

function Content({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { show } = useDropDownMenu();
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
      //  const dropdownWidth = 160; // Adjust based on your dropdown width
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

      // @ts-expect-error need to be done
      setPosition(newPosition);
    }
  }, [show]);

  const classes = cn(
    `absolute  flex w-max min-w-[160px] flex-col justify-center gap-1 p-2  z-10`,
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
      {children}
    </Paper>
  ) : null;
}

export default Content;
