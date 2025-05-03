import { HTMLAttributes } from "react";

export type Variant =
  | "default"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";
export type StyleType = "solid" | "label" | "outline" | "text";

export type Size = "large" | "medium" | "small";

export interface FileInputProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
  styleType?: StyleType;
  size?: Size;
  disabled?: boolean;
  placeholder: string;
  multiple: boolean;
  onchange?: (file: FileList) => void;
  accept: string;
  name: string;
}
