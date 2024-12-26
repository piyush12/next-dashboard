import React, { ReactNode } from "react";

import Flex from "@/components/Shared/Flex";
import { Colors } from "@/types/global";
import { cn } from "@/utils/utils";

type IProps = {
  children: ReactNode;
  radius?: "none" | "small" | "medium" | "large" | "full";
  color?: Colors;
  size?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
  className?: string;
};

const colorClass = {
  primary: "bg-purple-500 text-purple-500",
  secondary: "bg-gray-500 text-gray-500",
  error: "bg-error-500 text-error-500",
  warning: "bg-warning-500 text-warning-500",
  info: "bg-info-500 text-info-500",
  success: "bg-success-500 text-success-500",
};

const radiusClass = {
  none: "rounded-none",
  small: "rounded",
  medium: "rounded-md",
  large: "rounded-lg",
  full: "rounded-full",
};

const dimensionClass = {
  "1": "w-3 h-3",
  "2": "w-4 h-4",
  "3": "w-5 h-5",
  "4": "w-6 h-6",
  "5": "w-7 h-7",
  "6": "w-8 h-8",
  "7": "w-9 h-9",
  "8": "w-10 h-10",
  "9": "w-11 h-11",
  "10": "w-12 h-12",
  "11": "w-14 h-14",
  "12": "w-16 h-16",
};

function Avatar({
  children,
  radius = "none",
  color = "primary",
  size = "1",
  className,
}: IProps) {
  const classes = cn(
    dimensionClass[size],
    radiusClass[radius],
    colorClass[color],
    "bg-opacity-15",
    className,
  );
  return (
    <Flex className={classes} justify="center" align="center" display="inline">
      {children}
    </Flex>
  );
}

export default Avatar;
