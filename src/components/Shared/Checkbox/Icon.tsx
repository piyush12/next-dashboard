import React from "react";

import {
  CheckboxCheckedIcon,
  CheckboxIcon,
} from "@/components/Icons/CheckboxIcon";
import { ColorMapping, Colors } from "@/types/global";

const COLORFill: ColorMapping = {
  primary: "fill-purple-500",
  secondary: "fill-gray-500",
  error: "fill-error-500",
  warning: "fill-warning-500",
  info: "fill-info-500",
  success: "fill-success-500",
};

const COLORStroke: ColorMapping = {
  primary: "stroke-purple-500",
  secondary: "stroke-gray-500",
  error: "stroke-error-500",
  warning: "stroke-warning-500",
  info: "stroke-info-500",
  success: "stroke-success-500",
};

type IconProps = {
  checked: boolean;
  color: Colors;
};

function Icon({ checked, color }: IconProps) {
  if (checked)
    return <CheckboxCheckedIcon className={COLORFill[color || "primary"]} />;
  return <CheckboxIcon className={COLORStroke[color || "primary"]} />;
}

export default Icon;
