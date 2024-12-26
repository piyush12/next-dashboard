import React, { forwardRef, Ref } from "react";

import { Colors, Size } from "@/types/global";
import { cn } from "@/utils/utils";

import styles from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "label" | "outline" | "text";
  children: React.ReactNode;
  fullwidth?: boolean;
  size?: Size;
  color?: Colors;
  className?: string;
};

function Button(
  {
    variant,
    children,
    fullwidth = false,
    size = "medium",
    color,
    className,
    ...props
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>,
) {
  const buttonClass = cn(
    styles.button,
    styles[variant || ""],
    styles[size],
    styles[color || ""],
    "cursor-pointer",
    className,
    {
      "w-full": fullwidth,
    },
  );

  return (
    <button className={buttonClass} ref={ref} {...props}>
      {children}
    </button>
  );
}

Button.displayName = "Button";

export default forwardRef(Button);
