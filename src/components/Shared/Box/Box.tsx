import React, { forwardRef, Ref } from "react";
import clsx from "clsx";

type BoxProps = {
  as?: "div" | "span";
  children: React.ReactNode;
  className?: string;
  display?: "none" | "inline" | "inline-block" | "block";
};

function Box(
  { as: Tag = "div", children, className, display, ...props }: BoxProps,
  ref: Ref<HTMLDivElement>,
) {
  const BoxClasses = clsx(display, className);
  return (
    <Tag className={BoxClasses} ref={ref} {...props}>
      {children}
    </Tag>
  );
}

Box.displayName = "Box";

export default forwardRef(Box);
