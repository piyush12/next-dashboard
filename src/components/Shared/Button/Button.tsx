import { Colors, Size } from "@/types/global";
import { cn } from "@/utils/utils";
import React, { forwardRef, Ref } from "react";
import styles from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "label" | "outline" | "text";
  children: React.ReactNode;
  fullwidth?: boolean;
  size?: Size;
  colors?: Colors;
  className?: string;
};

function Button(
  {
    variant,
    children,
    fullwidth = false,
    size = "medium",
    colors,
    className,
    ...props
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>,
) {
  const fullwidthClass = fullwidth ? "w-full" : "";
  const buttonClass = cn(
    styles.button,
    styles[variant || ""],
    styles[size],
    styles[colors || ""],
    fullwidthClass,
    className,
  );

  return (
    <button className={buttonClass} ref={ref} {...props}>
      {children}
    </button>
  );
}

Button.displayName = "Button";

export default forwardRef(Button);
