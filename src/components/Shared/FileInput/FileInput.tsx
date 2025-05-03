"use client";
import React, { useId, useState } from "react";

import { UploadIcon } from "lucide-react";

import { cn } from "@/utils/utils";

import Label from "../Label";
import TextField from "../TextField";

import { FileInputProps, Variant } from "./types";

const variantColorMap: Record<Variant, string> = {
  default: "purple",
  secondary: "gray",
  error: "error",
  warning: "warning",
  info: "info",
  success: "success",
};

const baseClasses = (disabled: boolean) =>
  cn(
    "relative inline-flex justify-center gap-2 rounded-md text-center items-center",
    "text-light-primary dark:text-dark-primary",
    disabled && "cursor-not-allowed opacity-30",
  );

const sizeClasses = (size: string) =>
  ({
    large: "px-[20px] py-[10px] text-buttonLarge",
    medium: "px-[14px] py-[7px] text-buttonMedium",
    small: "px-[14px] py-[6px] text-buttonSmall",
  })[size];

const styleClasses = (
  styleType: string,
  disabled: boolean,
  variant: Variant,
) => {
  const color = variantColorMap[variant];

  return cn({
    // Solid style (default button look)
    [`bg-${color}-500 text-white`]: styleType === "solid",
    [`hover:bg-opacity-90 focus:bg-opacity-90 active:bg-opacity-80`]:
      styleType === "solid" && !disabled,

    // Label style
    [`text-${color}-500 bg-opacity-15`]: styleType === "label",
    [`hover:bg-opacity-10 focus:bg-opacity-15 active:bg-opacity-5`]:
      styleType === "label" && !disabled,

    // Outline style
    [`border border-${color}-500 text-${color}-500 bg-transparent`]:
      styleType === "outline",
    [`hover:border-opacity-90 focus:border-opacity-90 active:border-opacity-80`]:
      styleType === "outline" && !disabled,

    // Text style
    [`bg-transparent text-${color}-500`]: styleType === "text",
    [`hover:text-opacity-90 focus:text-opacity-90 active:text-opacity-80`]:
      styleType === "text" && !disabled,
  });
};

function FileInput({
  variant = "default",
  disabled = false,
  size = "medium",
  styleType = "solid",
  placeholder = "Choose file",
  multiple = false,
  onchange,
  accept,
  name = "",
}: FileInputProps) {
  const fileInputId = useId();

  const [fileName, setFileName] = useState(placeholder);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (!file) return;
    if (file.length > 1) {
      setFileName(`${file.length} files Selected`);
    } else {
      setFileName(file[0].name);
    }
    if (onchange) {
      onchange(file);
    }
  };

  return (
    <Label htmlFor={fileInputId} className="w-max align-middle">
      <TextField
        id={fileInputId}
        type="file"
        className="bg-transparent"
        hidden
        onChange={handleChange}
        multiple={multiple}
        accept={accept}
        name={name}
      />
      <span
        className={cn(
          baseClasses(disabled),
          sizeClasses(size),
          styleClasses(styleType, disabled, variant),
        )}
        aria-disabled={disabled}
      >
        <UploadIcon size="20" /> {fileName}
      </span>
    </Label>
  );
}

export default FileInput;
