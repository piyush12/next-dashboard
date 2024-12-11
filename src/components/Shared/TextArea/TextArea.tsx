import React, { InputHTMLAttributes } from "react";
import styles from "./TextArea.module.css";
import { cn } from "@/utils/utils";

type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  placeholder: string;
  className?: string;
  color?: "success" | "error";
  variant?: "filled" | "outline";
};
function TextArea({
  className,
  color,
  variant = "outline",
  placeholder,
  ...props
}: TextAreaProps) {
  const textAreaClass = cn(
    "rounded-md px-[14px] py-[7px] text-inputText text-light-primary outline-none",
    styles.textField,
    styles[color || ""],
    styles[variant],
    className,
  );

  return (
    <textarea
      className={textAreaClass}
      placeholder={placeholder}
      {...props}
    ></textarea>
  );
}

TextArea.displayName = "TextArea";

export default TextArea;
