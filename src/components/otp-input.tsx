import React from "react";

import { cn } from "@/utils/utils";

import styles from "./Shared/TextField/TextField.module.css";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";

type InputProps = {
  pattern: string;
  length: number;
  name: string;
  color?: "success" | "error";
  variant?: "filled" | "outline";
};

function AppOtpInput({
  pattern,
  length = 4,
  name,
  color,
  variant = "outline",
}: InputProps) {
  const textFieldClass = cn(
    "rounded-md px-[14px] py-[7px] text-inputText text-light-primary outline-none",
    styles.textField,
    styles[color || ""],
    styles[variant],
  );

  const otpSlot = Array.from({ length: length }, (_, i) => i);
  return (
    <InputOTP maxLength={length} pattern={pattern} name={name}>
      <InputOTPGroup>
        {otpSlot.map((slot) => {
          return (
            <InputOTPSlot index={slot} key={slot} className={textFieldClass} />
          );
        })}
      </InputOTPGroup>
    </InputOTP>
  );
}

export default AppOtpInput;
