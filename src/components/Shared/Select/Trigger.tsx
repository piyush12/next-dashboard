"use client";
import React from "react";

import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

import Button from "@/components/Shared/Button";

import { useSelect } from "./Context";

function TriggerMenu({
  children,
  className,
  chevron,
}: {
  className?: string;
  children: React.ReactNode;
  chevron: boolean;
}) {
  const { show, setShow } = useSelect();

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Button className={className} onClick={handleClick}>
      {children}{" "}
      {chevron &&
        (show ? <IconChevronUp stroke={1} /> : <IconChevronDown stroke={1} />)}
    </Button>
  );
}

export default TriggerMenu;
