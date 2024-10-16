"use client";
import React from "react";
import Flex from "@/components/Shared/Flex";
import { useSelect } from "./Context";

function Item({
  className,
  onChange = () => {},
  value,
  children,
}: {
  className: string;
  onChange?: (value: string) => void;
  value: string;
  children: React.ReactNode;
}) {
  const { setShow } = useSelect();
  return (
    <Flex
      role="menuitem"
      className={className}
      onClick={() => {
        setShow(false);
        onChange(value);
      }}
    >
      {children}
    </Flex>
  );
}

export default Item;
