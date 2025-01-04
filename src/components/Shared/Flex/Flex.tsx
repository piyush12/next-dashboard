import React from "react";

import { cn } from "@/utils/utils";

type Idrection = "row" | "column" | "row-reverse" | "column-reverse";
type IJustify = "start" | "center" | "end" | "between";
type IAlign = "start" | "center" | "end" | "baseline" | "stretch";

type IJustifyMapping = {
  [key in IJustify]: string;
};
type IAlignMapping = {
  [key in IAlign]: string;
};

type FlexProps<T extends React.ElementType = "div"> = {
  justify?: IJustify;
  align?: IAlign;
  display?: "none" | "inline" | "flex";
  direction?: Idrection;
  as?: "div" | "span" | "header" | "footer";
  gap?: string;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const flexDirectionClass = (direction: Idrection) => {
  switch (direction) {
    case "column":
      return "flex-col";
    case "row":
      return "flex-row";
    case "row-reverse":
      return "flex-row-reverse";
    case "column-reverse":
      return "flex-col-reverse";
    default:
      throw Error("not supported");
  }
};

const justifyProps: IJustifyMapping = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
};

const alignProps: IAlignMapping = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  baseline: "items-baseline",
  stretch: "items-stretch",
};

const gapProps: { [key: string]: string } = {
  "1": "gap-1",
  "2": "gap-2",
  "3": "gap-3",
  "4": "gap-4",
  "5": "gap-5",
  "6": "gap-6",
  "7": "gap-7",
  "8": "gap-8",
  "9": "gap-9",
};

const displayClass = {
  flex: "flex",
  inline: "inline-flex",
  none: "hidden",
};

function Flex<T extends React.ElementType>({
  justify,
  align,
  display = "flex",
  direction,
  as: Tag = "div",
  className,
  gap = "2",
  children,
  ...props
}: FlexProps<T>) {
  const justifyContent = justify ? justifyProps[justify] : "";
  const alignItems = align ? alignProps[align] : "";
  const gapClass = gapProps[gap];

  const flexDirection = direction ? flexDirectionClass(direction) : "";

  const FlexClass = cn(
    justifyContent,
    alignItems,
    gapClass,
    displayClass[display],
    flexDirection,
    className,
  );

  return (
    <Tag className={FlexClass} {...props}>
      {children}
    </Tag>
  );
}

Flex.displayName = "Flex";

export default Flex;
