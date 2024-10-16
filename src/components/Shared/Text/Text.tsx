import React from "react";
import clsx from "clsx";
import styles from "./Text.module.css";
import { Colors, TextVariant } from "@/types/global";

type AllowedTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";

type TextProps<T extends React.ElementType> = {
  variant?: TextVariant;
  children: React.ReactNode;
  as: AllowedTags;
  color?: Colors;
  className?: string;
} & React.ComponentProps<T>;

function Text<T extends React.ElementType = "span">({
  as: Tag = "span",
  children,
  color,
  variant = "body1",
  className,
  ...props
}: TextProps<T>) {
  const TextClass = clsx(
    styles.text,
    styles[color || ""],
    styles[variant],
    className,
  );

  return (
    <Tag className={TextClass} {...props}>
      {children}
    </Tag>
  );
}

Text.displayName = "Text";

export default Text;
