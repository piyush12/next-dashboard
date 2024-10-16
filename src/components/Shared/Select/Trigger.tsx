"use client";
import React from "react";
import { useSelect } from "./Context";
import Button from "@/components/Shared/Button";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

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
