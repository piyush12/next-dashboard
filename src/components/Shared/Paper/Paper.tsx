import React, { ComponentProps, forwardRef, Ref } from "react";

import { cn } from "@/utils/utils";

import styles from "./Paper.module.css";

type PaperProps = ComponentProps<"div"> & {
  radius?: "md" | "lg" | "full";
  padding?: string;
  children: React.ReactNode;
  className?: string;
};

const borderRadius = {
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

function Paper(
  { radius = "md", padding, children, className, ...props }: PaperProps,
  ref: Ref<HTMLDivElement>,
) {
  const paperClass = cn(styles.paper, borderRadius[radius], padding, className);

  return (
    <div className={paperClass} ref={ref} {...props}>
      {children}
    </div>
  );
}

Paper.displayName = "Paper";

export default forwardRef(Paper);
