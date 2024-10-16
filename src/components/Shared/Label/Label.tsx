import React, { ComponentProps } from "react";
import styles from "./Label.module.css";
import clsx from "clsx";

type LabelProps = ComponentProps<"label"> & {
  htmlFor: string;
  children: React.ReactNode;
};

function Label({ htmlFor, children, ...props }: LabelProps) {
  const labelClass = clsx(styles.label);
  return (
    <label htmlFor={htmlFor} className={labelClass} {...props}>
      {children}
    </label>
  );
}

Label.displayName = "Label";

export default Label;
