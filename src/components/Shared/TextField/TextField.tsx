import { cn } from "@/utils/utils";
import React, { InputHTMLAttributes } from "react";
import styles from "./TextField.module.css";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
  className?: string;
  type: string;
  color?: "success" | "error";
  variant?: "filled" | "outline";
  fullWidth?: boolean;
  children?: React.ReactNode;
};

function TextField({
  placeholder,
  className,
  type = "text",
  color,
  variant = "outline",
  fullWidth,
  children,
  ...props
}: TextFieldProps) {
  const fullWidthClass = fullWidth ? "fullWidth" : "";
  const textFieldClass = cn(
    "rounded-md px-[14px] py-[7px] text-inputText text-light-primary outline-none",
    styles.textField,
    styles[color || ""],
    styles[variant],
    styles[fullWidthClass],
    className,
  );
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={textFieldClass}
        {...props}
      />
      {children}
    </>
  );
}

TextField.displayName = "TextField";

export default TextField;
