"use client";
import React from "react";

import clsx from "clsx";

import { Colors } from "@/types/global";

import Label from "../Label";

import styles from "./Checkbox.module.css";
import Icon from "./Icon";

type ICheckbox = {
  id: string;
  children?: React.ReactNode;
  labelClass?: string;
  checkboxClass?: string;
  disabled?: boolean;
  defaultChecked?: boolean;
  color?: Colors;
  onChange?: (value: boolean) => void;
};

function Checkbox({
  id,
  children,
  labelClass,
  checkboxClass,
  color,
  disabled = false,
  defaultChecked = false,
  onChange = () => {},
  ...props
}: ICheckbox) {
  const checkboxId = `${React.useId()}-${id}`;
  const [checked, setChecked] = React.useState<boolean>(defaultChecked);

  const checkboxLabelClass = clsx(
    styles.checkbox,
    styles[color || ""],
    styles[disabled ? "disabled" : ""],
    labelClass,
  );
  const checkboxButtonClass = clsx(checkboxClass);

  return (
    <Label htmlFor={checkboxId} className={checkboxLabelClass}>
      <button
        className={checkboxButtonClass}
        role="checkbox"
        aria-checked={checked}
        id={checkboxId}
        onClick={(e) => {
          e.preventDefault();
          setChecked((prev) => !prev);
          onChange(checked);
        }}
        disabled={disabled}
        {...props}
      >
        <Icon checked={checked} color={color || "primary"} />
      </button>

      {children}
    </Label>
  );
}

Checkbox.displayName = "Checkbox";

export default Checkbox;
