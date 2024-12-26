import React, { ReactNode } from "react";

import Flex from "@/components/Shared/Flex";
import { Colors } from "@/types/global";
import { cn } from "@/utils/utils";

type IProps = {
  children: ReactNode;
  radius?: "none" | "small" | "medium" | "large" | "full";
  color?: Colors;

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

function Badge({
  children,
  radius = "none",
  color = "primary",
  className,
}: IProps) {
  const classes = cn(
    radiusClass[radius],
    colorClass[color],
    "bg-opacity-15",
    "pb-2 pl-4 pr-4 pt-2",
    className,
  );
  return (
    <Flex className={classes} justify="center" align="center" display="inline">
      {children}
    </Flex>
  );
}

export default Badge;
