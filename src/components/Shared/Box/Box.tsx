import React, { forwardRef, Ref } from "react";

import clsx from "clsx";

type BoxProps = {
  as?: "div" | "span" | "footer";
  children: React.ReactNode;
  className?: string;
  display?:
    | "none"
    | "inline"
    | "inline-block"
    | "block"
    | "inline-flex"
    | "flex";
  gap?: string;
};

function Box(
  { as: Tag = "div", children, className, display, gap, ...props }: BoxProps,
  ref: Ref<HTMLDivElement>,
) {
  const BoxClasses = clsx(display, className, gap);
  return (
    <Tag className={BoxClasses} ref={ref} {...props}>
      {children}
    </Tag>
  );
}

Box.displayName = "Box";

export default forwardRef(Box);
