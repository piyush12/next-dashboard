import React from "react";
import { Colors } from "@/types/global";
import clsx from "clsx";
import styles from "./Link.module.css";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  color?: Colors;
  children: React.ReactNode;
  href: string;
  className?: string;
  underline?: "hover" | "always" | "none";
  as?: React.ElementType;
};

function Link({
  children,
  href = "#",
  underline = "none",
  className,
  color = "primary",
  as: Component,
  ...props
}: LinkProps) {
  const linkClass = clsx(
    styles.link,
    styles[underline],
    styles[color],
    className,
  );

  const LinkTag = Component ? Component : "a";

  return (
    <LinkTag href={href} className={linkClass} {...props}>
      {children}
    </LinkTag>
  );
}

Link.displayName = "Link";
export default Link;
